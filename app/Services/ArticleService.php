<?php

namespace App\Services;

use App\Models\Article;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleService
{
    /**
     * Get all articles with filtering options.
     *
     * @param int $perPage
     * @param array $filters
     * @return LengthAwarePaginator
     */
    public function getAllArticles(int $perPage = 10, array $filters = []): LengthAwarePaginator
    {
        $query = Article::with(['tags', 'authors']);

        // Apply status filter
        if (!empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        // Apply search filter
        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        // Apply tag filter
        if (!empty($filters['tag'])) {
            $query->whereHas('tags', function ($q) use ($filters) {
                $q->where('tags.id', $filters['tag']);
            });
        }

        // Apply author filter
        if (!empty($filters['author'])) {
            $query->whereHas('authors', function ($q) use ($filters) {
                $q->where('users.id', $filters['author']);
            });
        }

        // Apply date range filter
        if (!empty($filters['from_date'])) {
            $query->where('created_at', '>=', $filters['from_date']);
        }
        if (!empty($filters['to_date'])) {
            $query->where('created_at', '<=', $filters['to_date']);
        }

        // Apply sorting
        $sortField = $filters['sort_by'] ?? 'created_at';
        $sortDirection = $filters['sort_direction'] ?? 'desc';
        $query->orderBy($sortField, $sortDirection);

        return $query->paginate($perPage);
    }

    /**
     * Create a new article.
     *
     * @param array $data
     * @param User $user
     * @return Article
     */
    public function createArticle(array $data, User $user): Article
    {
        return DB::transaction(function () use ($data, $user) {
            // Generate slug from title
            $slug = $this->generateUniqueSlug($data['title']);

            // Save markdown file
            $markdownPath = null;
            if (isset($data['markdown_content'])) {
                $markdownPath = $this->saveMarkdownContent($data['markdown_content'], $slug);
            }

            // Process featured image if provided
            $featuredImage = null;
            if (isset($data['featured_image']) && $data['featured_image'] instanceof UploadedFile) {
                $featuredImage = $this->saveFeaturedImage($data['featured_image'], $slug);
            }

            // Calculate reading time if markdown content provided
            $readingTime = isset($data['markdown_content'])
                ? $this->calculateReadingTime($data['markdown_content'])
                : 1;

            // Create article
            $article = Article::create([
                'title' => $data['title'],
                'slug' => $slug,
                'markdown_path' => $markdownPath,
                'featured_image' => $featuredImage,
                'excerpt' => $data['excerpt'] ?? Str::limit(strip_tags(
                        $data['markdown_content'] ?? ''
                    ), 150),
                'reading_time' => $readingTime,
                'status' => $data['status'] ?? 'draft',
                'published_at' => ($data['status'] ?? '') === 'published' ? now() : null,
            ]);

            // Associate author
            $article->authors()->attach($user->id);

            // Associate tags
            if (isset($data['tags']) && is_array($data['tags'])) {
                $this->syncArticleTags($article, $data['tags']);
            }

            return $article;
        });
    }

    /**
     * Update an existing article.
     *
     * @param Article $article
     * @param array $data
     * @return Article
     */
    public function updateArticle(Article $article, array $data): Article
    {
        return DB::transaction(function () use ($article, $data) {
            $updates = [
                'title' => $data['title'],
                'excerpt' => $data['excerpt'] ?? $article->excerpt,
            ];

            // Generate new slug if title has changed
            if ($article->title !== $data['title']) {
                $updates['slug'] = $this->generateUniqueSlug($data['title'], $article->id);
            }

            // Update markdown content if changed
            if (isset($data['markdown_content']) &&
                (!$article->markdown_path ||
                    $this->getMarkdownContent($article) !== $data['markdown_content'])) {
                $updates['markdown_path'] = $this->saveMarkdownContent(
                    $data['markdown_content'],
                    $updates['slug'] ?? $article->slug
                );

                // Calculate new reading time
                $updates['reading_time'] = $this->calculateReadingTime($data['markdown_content']);

                // Delete old markdown file if exists
                if ($article->markdown_path && Storage::disk('public')->exists($article->markdown_path)) {
                    Storage::disk('public')->delete($article->markdown_path);
                }
            }

            // Handle featured image
            if (!empty($data['remove_featured_image']) && $article->featured_image) {
                // Remove existing featured image
                if (Storage::disk('public')->exists($article->featured_image)) {
                    Storage::disk('public')->delete($article->featured_image);
                }
                $updates['featured_image'] = null;
            } elseif (isset($data['featured_image']) && $data['featured_image'] instanceof UploadedFile) {
                // Upload new featured image
                $updates['featured_image'] = $this->saveFeaturedImage(
                    $data['featured_image'],
                    $updates['slug'] ?? $article->slug
                );

                // Delete old featured image if exists
                if ($article->featured_image && Storage::disk('public')->exists($article->featured_image)) {
                    Storage::disk('public')->delete($article->featured_image);
                }
            }

            // Handle status change
            if (isset($data['status']) && $data['status'] !== $article->status) {
                $updates['status'] = $data['status'];

                // Update published_at date if publishing
                if ($data['status'] === 'published' && !$article->published_at) {
                    $updates['published_at'] = now();
                }
            }

            // Update article
            $article->update($updates);

            // Sync tags if provided
            if (isset($data['tags']) && is_array($data['tags'])) {
                $this->syncArticleTags($article, $data['tags']);
            }

            return $article;
        });
    }

    /**
     * Delete an article and its associated files.
     *
     * @param Article $article
     * @return bool
     */
    public function deleteArticle(Article $article): bool
    {
        return DB::transaction(function () use ($article) {
            // Delete markdown file if exists
            if ($article->markdown_path && Storage::disk('public')->exists($article->markdown_path)) {
                Storage::disk('public')->delete($article->markdown_path);
            }

            // Delete featured image if exists
            if ($article->featured_image && Storage::disk('public')->exists($article->featured_image)) {
                Storage::disk('public')->delete($article->featured_image);
            }

            // Delete article and return result
            return (bool) $article->delete();
        });
    }

    /**
     * Change article status.
     *
     * @param Article $article
     * @param string $status
     * @return Article
     */
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

    /**
     * Generate a unique slug from a title.
     *
     * @param string $title
     * @param string|null $excludeId
     * @return string
     */
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

    /**
     * Save markdown content to a file.
     *
     * @param string $content
     * @param string $slug
     * @return string
     */
    protected function saveMarkdownContent(string $content, string $slug): string
    {
        // Validate content is markdown - simple check for non-HTML content
        if (strip_tags($content) !== $content) {
            throw new \InvalidArgumentException('Only markdown content is allowed.');
        }

        $filename = $slug . '-' . time() . '.md';
        $path = 'articles/markdown/' . $filename;

        if (!Storage::disk('public')->put($path, $content)) {
            throw new \RuntimeException('Failed to save markdown content.');
        }

        return $path;
    }

    /**
     * Save featured image.
     *
     * @param UploadedFile $file
     * @param string $slug
     * @return string
     */
    protected function saveFeaturedImage(UploadedFile $file, string $slug): string
    {
        $filename = $slug . '-' . time() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('articles/images', $filename, 'public');

        if (!$path) {
            throw new \RuntimeException('Failed to save featured image.');
        }

        return $path;
    }

    /**
     * Calculate reading time based on content.
     *
     * @param string $content
     * @return int
     */
    protected function calculateReadingTime(string $content): int
    {
        $wordCount = str_word_count(strip_tags($content));
        $minutesToRead = ceil($wordCount / 200); // Average reading speed: 200 words per minute
        return max(1, $minutesToRead);
    }

    /**
     * Sync article tags.
     *
     * @param Article $article
     * @param array $tagIds
     * @return void
     */
    protected function syncArticleTags(Article $article, array $tagIds): void
    {
        $article->tags()->sync($tagIds);
    }

    /**
     * Get markdown content of an article.
     *
     * @param Article $article
     * @return string|null
     */
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
