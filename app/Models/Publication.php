<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Publication extends Model implements HasMedia
{
    use HasUlids, InteractsWithMedia;

    protected $fillable = [
        'title',
        'abstract',
        'publication_file',
        'published_at',
        'slug',
        'status',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    protected $appends = [
        'publication_file_url',
    ];

    public function getPublicationFileUrlAttribute(): ?string
    {
        return $this->getFirstMediaUrl('publications');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'publication_user');
    }

    public function authors(): BelongsToMany
    {
        return $this->users();
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'publication_tag', 'publication_id', 'tag_id');
    }
}
