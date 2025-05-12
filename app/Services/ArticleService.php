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
    protected const STORAGE_DISK = 'public'; // Use 'public' if files need to be web accessible

    protected const MARKDOWN_PATH = 'articles/markdown';

    protected const FEATURED_IMAGE_PATH = 'articles/featured_image';

    protected const WORDS_PER_MINUTE = 200; // Constant for reading time calculation

    public function getAllArticles(int $perPage = 10, array $filters = []): LengthAwarePaginator
    {
        $query = Article::with(['tags', 'authors']);

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        if (! empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        if (! empty($filters['tag'])) {
            $query->whereHas('tags', function ($q) use ($filters) {
                $q->where('tags.id', $filters['tag']);
            });
        }

        if (! empty($filters['author'])) {
            $query->whereHas('authors', function ($q) use ($filters) {
                $q->where('users.id', $filters['author']);
            });
        }

        if (! empty($filters['from_date'])) {
            $query->where('created_at', '>=', $filters['from_date']);
        }
        if (! empty($filters['to_date'])) {
            $query->where('created_at', '<=', $filters['to_date']);
        }

        $sortField = $filters['sort_by'] ?? 'created_at';
        $sortDirection = $filters['sort_direction'] ?? 'desc';
        $allowedSortFields = ['created_at', 'published_at', 'title', 'view_count', 'reading_time']; // Add other allowed fields
        if (! in_array($sortField, $allowedSortFields)) {
            $sortField = 'created_at';
        }

        $query->orderBy($sortField, $sortDirection);

        return $query->paginate($perPage);
    }

    public function createArticle(array $data): Article
    {
        DB::beginTransaction();

        $markdownPath = null;
        $featuredImagePath = null;

        try {
            $slug = $this->generateUniqueSlug($data['title']);

            if (! empty($data['markdown_content'])) {
                $markdownPath = $this->saveMarkdownContent($data['markdown_content'], $slug);
            }

            if (isset($data['featured_image']) && $data['featured_image'] instanceof UploadedFile) {
                $featuredImagePath = $this->saveFeaturedImage($data['featured_image'], $slug);
            }

            $readingTime = ! empty($data['markdown_content'])
                ? $this->calculateReadingTime($data['markdown_content'])
                : 1;

            $excerpt = $data['excerpt'] ?? Str::limit(strip_tags($data['markdown_content'] ?? ''), 150);

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

            if (auth()->check()) {
                $article->authors()->attach(auth()->id());
            }

            $existingTagIds = $data['existing_tag_ids'] ?? [];
            $newTagNames = $data['new_tag_names'] ?? [];
            $this->syncArticleTags($article, $existingTagIds, $newTagNames);

            DB::commit();

            return $article;
        } catch (\Exception $e) {
            DB::rollBack();

            if ($markdownPath) {
                $this->deleteMarkdownFile($markdownPath);
            }

            if ($featuredImagePath) {
                $this->deleteFeaturedImage($featuredImagePath);
            }

            Log::error('Error creating article: '.$e->getMessage());
            throw $e;
        }
    }

    public function updateArticle(Article $article, array $data): Article
    {
        DB::beginTransaction();

        $oldMarkdownPath = $article->markdown_path;
        $oldFeaturedImagePath = $article->featured_image;
        $newFeaturedImagePath = null;
        $newMarkdownPath = null;

        try {
            if (isset($data['title']) && $data['title'] !== $article->title) {
                $data['slug'] = $this->generateUniqueSlug($data['title'], $article->id);
            } else {
                unset($data['slug']);
            }

            $newMarkdownPath = $this->saveMarkdownContent($article->slug, $data['markdown_content']);
            $data['markdown_path'] = $newMarkdownPath;

            if (isset($data['remove_featured_image']) && $data['remove_featured_image']) {
                if ($oldFeaturedImagePath) {
                    $this->deleteFeaturedImage($oldFeaturedImagePath);
                }
                $data['featured_image'] = null;
                $oldFeaturedImagePath = null;
            } elseif (isset($data['featured_image']) && $data['featured_image'] instanceof UploadedFile) {
                $newFeaturedImagePath = $this->saveFeaturedImage($data['featured_image'], $data['slug'] ?? $article->slug);
                $data['featured_image'] = $newFeaturedImagePath;
            } else {
                unset($data['featured_image']);
            }

            if (isset($data['markdown_content'])) {
                $data['reading_time'] = $this->calculateReadingTime($data['markdown_content']);
            }

            if (isset($data['markdown_content']) || isset($data['excerpt'])) {
                $data['excerpt'] = $data['excerpt'] ?? Str::limit(strip_tags($data['markdown_content'] ?? $article->markdownContent), 150);
            }

            $article->fill(Arr::except($data, ['markdown_content', 'remove_featured_image']));

            if ($article->isDirty('status') && $article->status === Article::STATUS_PUBLISHED && is_null($article->published_at)) {
                $article->published_at = now();
            } elseif ($article->isDirty('status') && $article->status !== Article::STATUS_PUBLISHED) {
                $article->published_at = null;
            }

            $article->save();

            $existingTagIds = $data['existing_tag_ids'] ?? [];
            $newTagNames = $data['new_tag_names'] ?? [];
            $this->syncArticleTags($article, $existingTagIds, $newTagNames);

            DB::commit();

            if ($oldMarkdownPath && $oldMarkdownPath !== $newMarkdownPath) {
                $this->deleteMarkdownFile($oldMarkdownPath);
            }

            if ($oldFeaturedImagePath && $newFeaturedImagePath) {
                $this->deleteFeaturedImage($oldFeaturedImagePath);
            }

            return $article;
        } catch (\Exception $e) {
            DB::rollBack();

            if (isset($newMarkdownPath) && $newMarkdownPath !== $oldMarkdownPath) {
                $this->deleteMarkdownFile($newMarkdownPath);
            }
            if (isset($newFeaturedImagePath)) {
                $this->deleteFeaturedImage($newFeaturedImagePath);
            }

            Log::error('Error updating article: '.$e->getMessage());
            throw new \Exception($e->getMessage());
        }
    }

    public function deleteArticle(Article $article): void
    {
        DB::beginTransaction();

        $markdownPath = $article->markdown_path;
        $featuredImagePath = $article->featured_image;

        try {
            $article->tags()->detach();
            $article->authors()->detach();

            DB::commit();

            if ($markdownPath) {
                $this->deleteMarkdownFile($markdownPath);
            }
            if ($featuredImagePath) {
                $this->deleteFeaturedImage($featuredImagePath);
            }

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error deleting article: '.$e->getMessage());
            throw new \Exception($e->getMessage());
        }
    }

    public function changeArticleStatus(Article $article, string $status): Article
    {
        if (! in_array($status, Article::AVAILABLE_STATUSES)) {
            throw new \Exception("Invalid status: $status");
        }

        $updates = ['status' => $status];

        if ($status === 'published' && ! $article->published_at) {
            $updates['published_at'] = now();
        } elseif ($status !== Article::STATUS_PUBLISHED) {
            $updates['published_at'] = null;
        }

        $article->update($updates);

        return $article;
    }

    public function getMarkdownContent(Article $article): ?string
    {
        if (! $article->markdown_path) {
            return null;
        }

        if (Storage::disk(self::STORAGE_DISK)->exists($article->markdown_path)) {
            return Storage::disk(self::STORAGE_DISK)->get($article->markdown_path);
        }

        return null;
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
            $slug = $originalSlug.'-'.$count++;
            $query = Article::where('slug', $slug);

            if ($excludeId) {
                $query->where('id', '!=', $excludeId);
            }
        }

        return $slug;
    }

    protected function saveMarkdownContent(string $content, string $slug): string
    {
        $filename = $slug.'-'.time().'.md';
        $path = self::MARKDOWN_PATH.'/'.$filename;

        if (Storage::disk(self::STORAGE_DISK)->put($path, $content)) {
            return $path;
        }

        throw new \Exception('Failed to store markdown file.');
    }

    protected function deleteMarkdownFile(?string $path): void
    {
        if ($path && Storage::disk(self::STORAGE_DISK)->exists($path)) {
            Storage::disk(self::STORAGE_DISK)->delete($path);
        }
    }

    protected function saveFeaturedImage(UploadedFile $file, string $slug): string
    {
        $path = $file->store(self::FEATURED_IMAGE_PATH, self::STORAGE_DISK);

        if (! $path) {
            throw new \Exception('Failed to save featured image.');
        }

        return $path;
    }

    protected function deleteFeaturedImage(?string $path): void
    {
        if ($path && Storage::disk(self::STORAGE_DISK)->exists($path)) {
            Storage::disk(self::STORAGE_DISK)->delete($path);
        }
    }

    protected function calculateReadingTime(string $content): int
    {
        $cleanedContent = strip_tags($content);

        $wordCount = str_word_count($cleanedContent);
        $minutesToRead = ceil($wordCount / self::WORDS_PER_MINUTE);

        return max(1, $minutesToRead);
    }

    protected function syncArticleTags(Article $article, array $existingTagIds, array $newTagNames): void
    {
        $allTagIdsToAttach = $existingTagIds;

        foreach ($newTagNames as $tagName) {
            $tagName = trim($tagName);
            if (! empty($tagName)) {
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
}
