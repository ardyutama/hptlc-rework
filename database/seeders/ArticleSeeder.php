<?php

namespace Database\Seeders;

use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articlesData = [
            [
                'id' => '01hza0zk11xj3jzp2w3i4j5k6l',
                'title' => 'Getting Started with Laravel Eloquent',
                'slug' => 'getting-started-laravel-eloquent',
                'markdown_path' => 'markdowns/eloquent.md', // Example path
                'excerpt' => 'An introduction to Laravel\'s powerful ORM.',
                'reading_time' => 7,
                'view_count' => 150,
                'status' => 'published',
                'published_at' => Carbon::parse('2024-05-01 10:00:00'),
                'deleted_at' => null,
            ],
            [
                'id' => '01hza0zl22yk4kzt3x4j5k6l7m',
                'title' => 'Building REST APIs in Laravel',
                'slug' => 'building-rest-apis-laravel',
                'markdown_path' => 'markdowns/apis.md', // Example path
                'excerpt' => 'Learn how to create powerful APIs using Laravel.',
                'reading_time' => 10,
                'view_count' => 200,
                'status' => 'published',
                'published_at' => Carbon::parse('2024-05-10 11:00:00'),
                'deleted_at' => null,
            ],
            [
                'id' => '01hza0zm33zl5lyu4y5k6l7m8n',
                'title' => 'Draft Article Example',
                'slug' => 'draft-article-example',
                'markdown_path' => null, // No markdown yet
                'excerpt' => 'This article is currently a work in progress.',
                'reading_time' => 3,
                'view_count' => 5,
                'status' => 'draft', // Draft status
                'published_at' => null,
                'deleted_at' => null,
            ],
            [
                'id' => '01hza0zn44am6mzv5z6l7m8n9o',
                'title' => 'Archived Content Example',
                'slug' => 'archived-content-example',
                'markdown_path' => 'markdowns/archived.md', // Example path
                'excerpt' => 'This content is no longer actively maintained or promoted.',
                'reading_time' => 5,
                'view_count' => 80,
                'status' => 'archived', // Archived status
                'published_at' => Carbon::parse('2023-12-01 09:00:00'),
                'deleted_at' => Carbon::parse('2024-03-15 10:00:00'), // Soft deleted
            ],
            [
                'id' => '01hza0zo55bn7naw607m8n9o0p',
                'title' => 'Another Published Article',
                'slug' => 'another-published-article',
                'markdown_path' => 'markdowns/another.md', // Example path
                'excerpt' => 'More great content for you to read.',
                'reading_time' => 6,
                'view_count' => 120,
                'status' => 'published',
                'published_at' => Carbon::parse('2024-05-15 14:00:00'),
                'deleted_at' => null,
            ],
        ];

        $now = Carbon::now();
        foreach ($articlesData as $articleData) {
            Article::create(array_merge($articleData, [
                'created_at' => $articleData['created_at'] ?? $now, // Use provided date or now
                'updated_at' => $now,
            ]));
        }
    }
}
