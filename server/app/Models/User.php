<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
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
}
