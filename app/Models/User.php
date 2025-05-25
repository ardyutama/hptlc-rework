<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, HasUlids, Notifiable;

    protected $fillable = ['email', 'password', 'role'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function member(): HasOne
    {
        return $this->hasOne(Member::class, 'user_id', 'id');
    }

    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class, 'article_user')
            ->withTimestamps();
    }

    /**
     * Check if the user is an admin.
     */
    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }
}
