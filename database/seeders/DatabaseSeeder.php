<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(TagSeeder::class);
        $this->call(PublicationSeeder::class);
        $this->call(ArticleSeeder::class);

        // Seeders with dependencies
        $this->call(MemberSeeder::class);
        $this->call(PublicationTagSeeder::class);
        $this->call(PublicationUserSeeder::class);
        $this->call(ArticleTagSeeder::class);
        $this->call(ArticleUserSeeder::class);
    }
}
