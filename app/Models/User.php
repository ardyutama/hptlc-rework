<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasUlids, HasFactory, Notifiable;
    protected $fillable = ['email', 'password'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function member(): HasOne
    {
        return $this->hasOne(Member::class, 'user_id', 'id');
    }

    public function publication(): BelongsToMany
    {
        return $this->belongsToMany(Publication::class, 'publication_user');
    }
}
