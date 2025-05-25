<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $article1Id = Article::where('slug', 'getting-started-laravel-eloquent')->first()->id;
        $article2Id = Article::where('slug', 'building-rest-apis-laravel')->first()->id;
        $article3Id = Article::where('slug', 'draft-article-example')->first()->id;
        $article4Id = Article::where('slug', 'archived-content-example')->withTrashed()->first()->id;
        $article5Id = Article::where('slug', 'another-published-article')->first()->id; // Corrected article5 slug

        $adminId = User::where('email', 'admin@example.com')->first()->id;
        $user1Id = User::where('email', 'user1@example.com')->first()->id;
        $user2Id = User::where('email', 'user2@example.com')->first()->id;
        $author1Id = User::where('email', 'author1@example.com')->first()->id;

        // Pivot data - composite primary key
        $pivotData = [
            ['article_id' => $article1Id, 'user_id' => $author1Id], // Article 1 by Author1
            ['article_id' => $article2Id, 'user_id' => $user1Id], // Article 2 by User1
            ['article_id' => $article3Id, 'user_id' => $author1Id], // Draft article by Author1
            ['article_id' => $article4Id, 'user_id' => $user1Id], // Archived article by User1
            ['article_id' => $article5Id, 'user_id' => $author1Id], // Article 5 by Author1
            ['article_id' => $article5Id, 'user_id' => $user2Id], // Article 5 also by User2
        ];

        DB::table('article_user')->insert($pivotData);
    }
}
