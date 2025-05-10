<?php

namespace App\Services;

use App\Models\Article;
use App\Models\Tag;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleService
{
    protected string $disk = 'local';
    protected string $markdownPath = 'articles/markdown';
    protected string $featuredImagePath = 'articles/featured_image';

    public function getAllArticles(int $perPage = 10, array $filters = []): LengthAwarePaginator
    {
        $query = Article::with(['tags', 'authors']);

        if (!empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        if (!empty($filters['tag'])) {
            $query->whereHas('tags', function ($q) use ($filters) {
                $q->where('tags.id', $filters['tag']);
            });
        }

        if (!empty($filters['author'])) {
            $query->whereHas('authors', function ($q) use ($filters) {
                $q->where('users.id', $filters['author']);
            });
        }

        if (!empty($filters['from_date'])) {
            $query->where('created_at', '>=', $filters['from_date']);
        }
        if (!empty($filters['to_date'])) {
            $query->where('created_at', '<=', $filters['to_date']);
        }

        $sortField = $filters['sort_by'] ?? 'created_at';
        $sortDirection = $filters['sort_direction'] ?? 'desc';
        $query->orderBy($sortField, $sortDirection);

        return $query->paginate($perPage);
    }

    public function createArticle(array $data): Article
    {
        DB::beginTransaction();

        try {
            $slug = $this->generateUniqueSlug($data['title']);

            $markdownPath = null;
            if (isset($data['markdown_content'])) {
                $markdownPath = $this->saveMarkdownContent($data['markdown_content'], $slug);
            }

            $featuredImagePath = null;
            if (isset($data['featured_image']) && $data['featured_image'] instanceof UploadedFile) {
                $featuredImagePath = $this->saveFeaturedImage($data['featured_image'], $slug);
            }

            $readingTime = isset($data['markdown_content'])
                ? $this->calculateReadingTime($data['markdown_content'])
                : 1;

            $excerpt = Str::limit(strip_tags($data['markdown_content'] ?? ''), 150);

            $article = Article::create([
                'title' => $data['title'],
                'slug' => $slug,
                'markdown_path' => $markdownPath,
                'featured_image' => $featuredImagePath,
                'excerpt' => $excerpt,
                'reading_time' => $readingTime,
                'status' => $data['status'] ?? 'draft',
                'published_at' => ($data['status'] ?? '') === 'published' ? now() : null,
            ]);

            $article->authors()->attach(auth()->id());

            $existingTagIds = $data['existing_tag_ids'] ?? [];
            $newTagNames = $data['new_tag_names'] ?? [];

            $this->syncArticleTags($article, $existingTagIds, $newTagNames);

            DB::commit();

            return $article;
        } catch (\Exception $e) {
            DB::rollBack();

            if (isset($markdownPath)) {
                $this->deleteMarkdownFile($markdownPath);
            }

            if (isset($featuredImagePath)) {
                $this->deleteFeaturedImage($featuredImagePath);
            }

            Log::error('Error creating article: ' . $e->getMessage());
            throw $e;
        }
    }

    public function updateArticle(Article $article, array $data): Article
    {
        DB::beginTransaction();

        try {
            if (isset($data['title']) && $data['title'] !== $article->title) {
                $data['slug'] = $this->generateUniqueSlug($data['title'], $article->id);
            } else {
                unset($data['slug']);
            }

            if ($article->markdown_path) {
                $this->deleteMarkdownFile($article->markdown_path);
            }

            $markdownPath = $this->saveMarkdownContent($article->slug, $data['markdown_content']);
            $data['markdown_path'] = $markdownPath;

            if($data['remove_featured_image']) {
                $this->deleteFeaturedImage($data['featured_image']);
                $data['featured_image'] = null;

                if ($data['featured_image'] instanceof UploadedFile !== $article['featured_image']) {
                    $data['featured_image'] = $this->saveFeaturedImage($data['featured_image'], $data['slug']);
                }
            }

            $article->fill(Arr::except($data, ['markdown_content']));

            if ($article->isDirty('status') && $article->status === 'published' && is_null($article->published_at)) {
                $article->published_at = now();
            }

            $article->save();

            $existingTagIds = $data['existing_tag_ids'] ?? [];
            $newTagNames = $data['new_tag_names'] ?? [];
            $this->syncArticleTags($article, $existingTagIds, $newTagNames);

            DB::commit();

            return $article;
        } catch (\Exception $e) {
            DB::rollBack();

            if (isset($markdownPath)) {
                $this->deleteMarkdownFile($markdownPath);
            }

            if (isset($featuredImagePath)) {
                $this->deleteFeaturedImage($featuredImagePath);
            }

            Log::error('Error updating article: ' . $e->getMessage());
            throw $e;
        }
    }

    public function deleteArticle(Article $article): void
    {
        DB::beginTransaction();

        try {
            $article->tags()->detach();

            $article->authors()->detach();

            if ($article->markdown_path) {
                $this->deleteMarkdownFile($article->markdown_path);
            }

            if ($article->featured_image) {
                $this->deleteFeaturedImage($article->featured_image);
            }

            $article->delete();

            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error deleting article: ' . $e->getMessage());
            throw $e;
        }
    }

    public function changeArticleStatus(Article $article, string $status): Article
    {
        if (!in_array($status, ['draft', 'published', 'archived'])) {
            throw new \InvalidArgumentException("Invalid status: {$status}");
        }

        $updates = ['status' => $status];

        // Set published_at date if publishing for the first time
        if ($status === 'published' && !$article->published_at) {
            $updates['published_at'] = now();
        }

        $article->update($updates);
        return $article;
    }

    protected function generateUniqueSlug(string $title, ?string $excludeId = null): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;
        $query = Article::where('slug', $slug);

        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }

        while ($query->exists()) {
            $slug = $originalSlug . '-' . $count++;
            $query = Article::where('slug', $slug);

            if ($excludeId) {
                $query->where('id', '!=', $excludeId);
            }
        }

        return $slug;
    }

    protected function saveMarkdownContent(string $content, string $slug): string
    {
        if (strip_tags($content) !== $content) {
            throw new \InvalidArgumentException('Only markdown content is allowed.');
        }

        $filename = $slug . '-' . time() . '.md';
        $path = $this->markdownPath . '/' . $filename;

        if (Storage::disk($this->disk)->put($path, $content)) {
            return $path;
        }

        throw new \Exception('Failed to store markdown file.');
    }

    protected function deleteMarkdownFile(?string $path): void
    {
        if ($path && Storage::disk($this->disk)->exists($path)) {
            Storage::disk($this->disk)->delete($path);
        }
    }

    protected function saveFeaturedImage(UploadedFile $file, string $slug): string
    {
        $filename = $slug . '-' . time() . '.' . $file->getClientOriginalExtension();
        $path = $this->featuredImagePath . '/' . $filename;

        if (Storage::disk($this->disk)->put($path, $file)) {
            return $path;
        }

        if (!$path) {
            throw new \RuntimeException('Failed to save featured image.');
        }

        return $path;
    }

    protected function deleteFeaturedImage(?string $path): void
    {
        if ($path && Storage::disk($this->disk)->exists($path)) {
            Storage::disk($this->disk)->delete($path);
        }
    }

    protected function calculateReadingTime(string $content): int
    {
        $wordCount = str_word_count(strip_tags($content));
        $minutesToRead = ceil($wordCount / 200); // Average reading speed: 200 words per minute
        return max(1, $minutesToRead);
    }

    protected function syncArticleTags(Article $article, array $existingTagIds, array $newTagNames): void
    {
        $allTagIdsToAttach = $existingTagIds;

        foreach ($newTagNames as $tagName) {
            $tagName = trim($tagName);
            if (!empty($tagName)) {
                $normalizedName = Str::lower($tagName);
                $slug = Str::slug($normalizedName);

                $tag = Tag::firstOrCreate(
                    ['slug' => $slug],
                    ['name' => $tagName]
                );
                $allTagIdsToAttach[] = $tag->id;
            }
        }
        $article->tags()->sync(array_unique($allTagIdsToAttach));
    }

    public function getMarkdownContent(Article $article): ?string
    {
        if (!$article->markdown_path) {
            return null;
        }

        if (Storage::disk('public')->exists($article->markdown_path)) {
            return Storage::disk('public')->get($article->markdown_path);
        }

        return null;
    }
}
