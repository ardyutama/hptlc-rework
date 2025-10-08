<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::whereIn('email', [
            'admin@example.com',
            'editor@example.com',
            'jane.researcher@example.com',
            'john.scholar@example.com',
        ])->get();

        foreach ($users as $user) {
            $name = explode('.', explode('@', $user->email)[0]);
            Member::create([
                'user_id' => $user->id,
                'first_name' => ucfirst($name[0]),
                'last_name' => ucfirst($name[1] ?? '') ,
                'university_name' => 'University of Indonesia',
                'study_program_name' => 'Chemistry',
                'gender' => ($name[0] === 'jane') ? 'female' : 'male',
                'joined_date' => Carbon::now()->subMonths(rand(1, 12)),
                'biography' => 'A dedicated researcher focusing on advancements in chromatography and analytical sciences.',
            ]);
        }
    }
}
