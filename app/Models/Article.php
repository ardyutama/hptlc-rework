<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Article extends Model implements HasMedia
{
    use HasFactory, HasUlids, SoftDeletes, InteractsWithMedia;

    public const STATUS_DRAFT = 'draft';

    public const STATUS_PUBLISHED = 'published';

    public const STATUS_ARCHIVED = 'archived';

    public const AVAILABLE_STATUSES = [
        self::STATUS_DRAFT,
        self::STATUS_PUBLISHED,
        self::STATUS_ARCHIVED,
    ];

    protected $fillable = [
        'title',
        'slug',
        'markdown_path',
        'featured_image',
        'excerpt',
        'reading_time',
        'status',
        'published_at',
        'view_count',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    protected $appends = [
        'thumbnail_image_url',
        'featured_image_url',
    ];

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

    public function authors(): BelongsToMany
    {
        return $this->users();
    }

    public function incrementViewCount(): void
    {
        $this->increment('view_count');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('featured_images')
            ->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(400)
            ->height(300)
            ->optimize()
            ->format('webp')
            ->quality(75);

        $this->addMediaConversion('medium')
            ->width(800)
            ->height(600)
            ->optimize()
            ->format('webp')
            ->quality(80);
    }

    public function getThumbnailImageUrlAttribute(): ?string
    {
        return $this->getFirstMediaUrl('featured_images', 'thumb') ?: null;
    }

    /**
     * Get the URL for the medium conversion of the featured image.
     */
    public function getFeaturedImageUrlAttribute(): ?string
    {
        return $this->getFirstMediaUrl('featured_images', 'medium') ?: null;
    }

}
