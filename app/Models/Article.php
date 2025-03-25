<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'title',
        'slug',
        'markdown_file',
        'image_url',
        'published_at',
        'excerpt',
        'reading_time',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'reading_time' => 'integer',
    ];

    protected $appends = [
        'is_published',
        'formatted_date',
        'has_image',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            if (empty($article->slug)) {
                $article->slug = Str::slug($article->title);
            }

            if (!empty($article->markdown_file)) {
                $article->reading_time = self::calculateReadingTime($article->markdown_file);
                $article->excerpt = self::generateExcerpt($article->markdown_file);
            }
        });

        static::updating(function ($article) {
            if ($article->isDirty('title') && empty($article->slug)) {
                $article->slug = Str::slug($article->title);
            }

            if ($article->isDirty('markdown_file') && !empty($article->markdown_file)) {
                $article->reading_time = self::calculateReadingTime($article->markdown_file);
                $article->excerpt = self::generateExcerpt($article->markdown_file);
            }
        });
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'article_tag', 'article_id', 'tag_id')
            ->withTimestamps();
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'article_user', 'article_id', 'user_id')
            ->withTimestamps();
    }

    public function isPublished(): bool
    {
        return $this->published_at !== null && $this->published_at <= now();
    }

    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at')->where('published_at', '<=', now());
    }

    private static function calculateReadingTime(string $content): int
    {
        $wordCount = str_word_count(strip_tags($content));
        $minutes = ceil($wordCount / 200);
        return max(1, $minutes);
    }

    private static function generateExcerpt(string $content, int $length = 160): string
    {
        $text = preg_replace('/[#*`_\[\]\(\)]+/', '', $content);
        $text = strip_tags($text);

        if (strlen($text) <= $length) {
            return $text;
        }

        return substr($text, 0, $length) . '...';
    }

    public function getRelatedArticles(Article $article, int $limit = 3): Collection
    {
        $tagIds = $article->tags->pluck('id')->toArray();

        if (empty($tagIds)) {
            return Collection::make([]);
        }

        return Article::with('tags')
            ->published()
            ->where('id', '!=', $article->id)
            ->whereHas('tags', function ($query) use ($tagIds) {
                $query->whereIn('tags.id', $tagIds);
            })
            ->latest('published_at')
            ->limit($limit)
            ->get();
    }
}
