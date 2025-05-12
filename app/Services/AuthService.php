<?php

namespace App\Services;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AuthService
{
    /**
     * Register a new user with associated member details
     */
    public function registerUser(array $data): User
    {
        DB::beginTransaction();
        try {
            // Create user
            $user = User::create([
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);

            // Create member associated with the user
            $user->member()->create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'joined_date' => now()->toDate(),
                'user_id' => $user->id,
            ]);

            DB::commit();

            return $user->load('member');
        } catch (Exception $e) {
            DB::rollback();
            Log::error('User registration error: '.$e->getMessage());
            throw $e;
        }
    }
}
