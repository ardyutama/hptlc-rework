<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'is_active' => true,
        ]);
        // Add an Editor user for the review workflow
        User::create([
            'email' => 'editor@example.com',
            'password' => Hash::make('password'),
            'role' => 'editor',
            'is_active' => true,
        ]);
        User::create([
            'email' => 'jane.researcher@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'is_active' => true,
        ]);
        User::create([
            'email' => 'john.scholar@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'is_active' => true,
        ]);
        User::create([
            'email' => 'inactive.user@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'is_active' => false,
        ]);
    }
}
