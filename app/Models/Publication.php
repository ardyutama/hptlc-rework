<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Publication extends Model
{
    use HasUlids;

    protected $fillable = [
        'title',
        'abstract',
        'publication_file',
        'published_at',
        'slug',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'publication_user');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'publication_tag', 'publication_id', 'tag_id');
    }
}
