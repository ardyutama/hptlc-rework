<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PublicationAuthor extends Model
{
    use HasUlids;

    public function member(): HasMany
    {
        return $this->hasMany(Member::class, 'member_id');
    }

    public function publication(): HasMany
    {
        return $this->hasMany(Publication::class, 'publication_id');
    }
}
