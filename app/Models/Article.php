<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory, HasUlids, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'markdown_path',
        'featured_image',
        'excerpt',
        'reading_time',
        'status',
        'published_at',
    ];

    protected $casts = [
        'reading_time' => 'integer',
        'view_count' => 'integer',
        'published_at' => 'datetime',
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
}
