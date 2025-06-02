<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
        'slug',
    ];

    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class, 'article_tag', 'tag_id', 'article_id')
            ->withTimestamps();
    }

    public function publications(): BelongsToMany
    {
        return $this->belongsToMany(Publication::class, 'publication_tag', 'tag_id', 'publication_id');
    }
}
