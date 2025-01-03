<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    use HasUlids;

    protected $fillable = ['name'];
    public function publication(): BelongsToMany
    {
        return $this->belongsToMany(Publication::class, 'publication_tag', 'tag_id', 'publication_id');
    }
}
