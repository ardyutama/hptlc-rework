<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticleTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $article1Id = Article::where('slug', 'getting-started-laravel-eloquent')->first()->id;
        $article2Id = Article::where('slug', 'building-rest-apis-laravel')->first()->id;
        $article3Id = Article::where('slug', 'draft-article-example')->first()->id;
        $article5Id = Article::where('slug', 'another-published-article')->first()->id; // Corrected article5 slug

        $tagTechId = Tag::where('slug', 'technology')->first()->id;
        $tagResearchId = Tag::where('slug', 'research')->first()->id;
        $tagOpenSourceId = Tag::where('slug', 'open-source')->first()->id;
        $tagProgrammingId = Tag::where('slug', 'programming')->first()->id;

        // Pivot data - explicit ID and timestamps needed per schema
        $now = Carbon::now();
        $pivotData = [
            [
                'id' => (string) Str::ulid(), // Generate ULID for the pivot record
                'article_id' => $article1Id,
                'tag_id' => $tagTechId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => (string) Str::ulid(),
                'article_id' => $article1Id,
                'tag_id' => $tagProgrammingId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => (string) Str::ulid(),
                'article_id' => $article2Id,
                'tag_id' => $tagTechId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => (string) Str::ulid(),
                'article_id' => $article2Id,
                'tag_id' => $tagResearchId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => (string) Str::ulid(),
                'article_id' => $article3Id,
                'tag_id' => $tagTechId, // Draft article also tagged
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => (string) Str::ulid(),
                'article_id' => $article5Id,
                'tag_id' => $tagProgrammingId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'id' => (string) Str::ulid(),
                'article_id' => $article5Id,
                'tag_id' => $tagResearchId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        DB::table('article_tag')->insert($pivotData);
    }
}
