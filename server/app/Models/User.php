<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasUlids, HasApiTokens, HasFactory, Notifiable;
    protected $fillable = ['email', 'password'];

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'user_id', 'id');
    }

    public function publication(): BelongsToMany
    {
        return $this->belongsToMany(Publication::class, 'publication_user');
    }
}
