<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PublicationTopic extends Model
{
    use HasUlids;
    public function publication(): HasMany
    {
        return $this->hasMany(Publication::class);
    }
    public function topic(): HasMany
    {
        return $this->hasMany(GeneralTopic::class);
    }
}
