<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Member extends Model
{
    use HasUlids;

    protected $fillable = [
        'first_name',
        'last_name',
        'university_name',
        'phone_number',
        'study_program_name',
        'gender',
        'birth_date',
        'joined_date',
        'user_id',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
