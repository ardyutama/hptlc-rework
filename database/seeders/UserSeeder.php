<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usersData = [
            [
                'id' => '01hza0z3w4gqjpmk5f6r7n8s9t',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'), // Hashed password
                'role' => 'admin',
                'is_active' => true,
                'remember_token' => null,
                'created_at' => Carbon::parse('2023-01-15 10:00:00'),
                'updated_at' => Carbon::parse('2023-01-15 10:00:00'),
            ],
            [
                'id' => '01hza0z4x5hrkqnl6g7s8t9u0v',
                'email' => 'user1@example.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'is_active' => true,
                'remember_token' => null,
                'created_at' => Carbon::parse('2023-02-20 11:30:00'),
                'updated_at' => Carbon::parse('2023-02-20 11:30:00'),
            ],
            [
                'id' => '01hza0z5y6isltom7h8t9u0v1w',
                'email' => 'inactive.user@example.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'is_active' => false, // Test inactive user
                'remember_token' => null,
                'created_at' => Carbon::parse('2023-03-10 14:00:00'),
                'updated_at' => Carbon::parse('2023-03-10 14:00:00'),
            ],
            [
                'id' => '01hza0z6z7jrmupn8i9u0v1w2x',
                'email' => 'user2@example.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'is_active' => true,
                'remember_token' => null,
                'created_at' => Carbon::parse('2023-04-05 09:15:00'),
                'updated_at' => Carbon::parse('2023-04-05 09:15:00'),
            ],
            [
                'id' => '01hza0z7a8kwrvqo9j0v1w2x3y',
                'email' => 'author1@example.com',
                'password' => Hash::make('password'),
                'role' => 'user',
                'is_active' => true,
                'remember_token' => null,
                'created_at' => Carbon::parse('2023-05-01 08:00:00'),
                'updated_at' => Carbon::parse('2023-05-01 08:00:00'),
            ],
        ];

        foreach ($usersData as $userData) {
            User::create($userData);
        }
    }
}
