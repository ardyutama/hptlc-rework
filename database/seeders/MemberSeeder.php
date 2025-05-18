<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1Id = User::where('email', 'user1@example.com')->first()->id;
        $user2Id = User::where('email', 'user2@example.com')->first()->id;
        $author1Id = User::where('email', 'author1@example.com')->first()->id;


        $membersData = [
            [
                'id' => '01hza0zd44qcybvi5p6b7c8d9e',
                'user_id' => $user1Id,
                'first_name' => 'John',
                'last_name' => 'Doe',
                'university_name' => 'State University',
                'phone_number' => '+1-123-456-7890',
                'study_program_name' => 'Computer Science',
                'gender' => 'male',
                'birth_date' => Carbon::parse('2000-05-10'),
                'joined_date' => Carbon::parse('2023-04-15'),
            ],
            [
                'id' => '01hza0ze55rdzdvj6q7c8d9e0f',
                'user_id' => $author1Id,
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'university_name' => null, // Test nullable
                'phone_number' => null, // Test nullable
                'study_program_name' => null, // Test nullable
                'gender' => 'female',
                'birth_date' => Carbon::parse('2001-11-20'),
                'joined_date' => Carbon::parse('2023-05-01'),
            ],
            [
                'id' => '01hza0zf66seyewk7r8d9e0f1g',
                'user_id' => $user2Id,
                'first_name' => 'Peter',
                'last_name' => 'Jones',
                'university_name' => 'City College',
                'phone_number' => '+1-987-654-3210',
                'study_program_name' => 'Physics',
                'gender' => 'male',
                'birth_date' => null, // Test nullable
                'joined_date' => Carbon::parse('2023-06-10'),
            ],
        ];

        $now = Carbon::now();
        foreach ($membersData as $memberData) {
            Member::create(array_merge($memberData, [
                'created_at' => $now,
                'updated_at' => $now,
            ]));
        }
    }
}
