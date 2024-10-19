<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Publication extends Model
{
    use HasUlids;

    protected $fillable = ['title', 'abstract', 'publication_file', 'content_markdown_file'];
    public function publicationAuthor(): BelongsToMany
    {
        return $this->belongsToMany(PublicationAuthor::class);
    }

    public function publicationTopic(): BelongsToMany
    {
        return $this->belongsToMany(PublicationAuthor::class);
    }
}
