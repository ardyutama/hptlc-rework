<?php

namespace Database\Seeders;

use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tagsData = [
            ['id' => '01hza0z8b9lxtwpq0k1w2x3y4z', 'name' => 'Technology', 'slug' => 'technology'],
            ['id' => '01hza0z9c0myuwrp1l2x3y4z5a', 'name' => 'Science', 'slug' => 'science'],
            ['id' => '01hza0za11nzvysq2m3y4z5a6b', 'name' => 'Research', 'slug' => 'research'],
            ['id' => '01hza0zb22oawztg3n4z5a6b7c', 'name' => 'Open Source', 'slug' => 'open-source'],
            ['id' => '01hza0zc33pbxauh4o5a6b7c8d', 'name' => 'Programming', 'slug' => 'programming'],
        ];

        $now = Carbon::now();
        foreach ($tagsData as $tagData) {
            Tag::create(array_merge($tagData, [
                'created_at' => $now,
                'updated_at' => $now,
            ]));
        }
    }
}
