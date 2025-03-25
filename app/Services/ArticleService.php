<?php

namespace App\Services;

use App\Models\Article;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleService
{
    public function storeFile(UploadedFile $file, string $basePath): string
    {
        $userId = auth()->id();
        $yearMonth = now()->format('Y/m');
        $fileHash = Str::random(16);
        $extension = $file->getClientOriginalExtension();
        $filename = "{$fileHash}.{$extension}";
        $path = "{$basePath}/users/{$userId}/{$yearMonth}";

        return $file->storeAs($path, $filename, 'public');
    }

    public function deleteFile(?string $path): bool
    {
        if (empty($path)) {
            return false;
        }

        if (Str::startsWith($path, '/storage/')) {
            $path = Str::replaceFirst('/storage/', '', $path);
        }

        if (Storage::disk('public')->exists($path)) {
            return Storage::disk('public')->delete($path);
        }

        return false;
    }

    public function getFileContent(?string $path): string
    {
        if (empty($path) || !Storage::disk('public')->exists($path)) {
            return '';
        }

        return Storage::disk('public')->get($path);
    }

    public function createArticle(array $data, UploadedFile $markdownFile, ?UploadedFile $imageFile = null): Article
    {
        $markdownPath = $this->storeFile($markdownFile, 'articles/content');

        $imagePath = null;
        if ($imageFile) {
            $imagePath = $this->storeFile($imageFile, 'articles/images');
            $imagePath = Storage::url($imagePath);
        }

        $article = Article::create([
            'title' => $data['title'],
            'slug' => $data['slug'] ?? Str::slug($data['title']),
            'markdown_file' => $markdownPath,
            'image_url' => $imagePath,
            'published_at' => $data['publish'] ? now() : null,
        ]);

        if (!empty($data['tags'])) {
            $article->tags()->attach($data['tags']);
        }

        $article->users()->attach(auth()->id());

        return $article;
    }

    public function updateArticle(Article $article, array $data, ?UploadedFile $markdownFile = null, ?UploadedFile $imageFile = null): Article
    {
        $markdownPath = $article->markdown_file;

        if ($markdownFile) {
            $this->deleteFile($article->markdown_file);

            $markdownPath = $this->storeFile($markdownFile, 'articles/content');
        }

        $imagePath = $article->image_url;

        if ($data['remove_image'] ?? false) {
            $this->deleteFile($article->image_url);
            $imagePath = null;
        } elseif ($imageFile) {
            $this->deleteFile($article->image_url);

            $imagePath = $this->storeFile($imageFile, 'articles/images');
            $imagePath = Storage::url($imagePath);
        }

        $publishedAt = $article->published_at;
        if (($data['publish'] ?? false) && !$article->isPublished()) {
            $publishedAt = now();
        } elseif (($data['unpublish'] ?? false) && $article->isPublished()) {
            $publishedAt = null;
        }

        $article->update([
            'title' => $data['title'],
            'slug' => $data['slug'] ?? Str::slug($data['title']),
            'markdown_file' => $markdownPath,
            'image_url' => $imagePath,
            'published_at' => $publishedAt,
        ]);

        if (isset($data['tags'])) {
            $article->tags()->sync($data['tags']);
        }

        return $article;
    }

    public function deleteArticle(Article $article): bool
    {
        $this->deleteFile($article->markdown_file);

        $this->deleteFile($article->image_url);

        $article->tags()->detach();
        $article->users()->detach();

        return $article->delete();
    }
}
