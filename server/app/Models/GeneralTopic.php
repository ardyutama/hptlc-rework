<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class GeneralTopic extends Model
{
    use HasUlids;

    protected $fillable = ['name'];
    public function publicationTopic(): BelongsToMany
    {
        return $this->belongsToMany(PublicationTopic::class );
    }
}
