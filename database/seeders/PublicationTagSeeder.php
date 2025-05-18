<?php

namespace Database\Seeders;

use App\Models\Publication;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PublicationTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pub1Id = Publication::where('slug', 'the-future-of-ai-research')->first()->id;
        $pub2Id = Publication::where('slug', 'climate-change-impacts-cities')->first()->id;
        $pub4Id = Publication::where('slug', 'renewable-energy')->first()->id; // Corrected pub4 slug

        $tagTechId = Tag::where('slug', 'technology')->first()->id;
        $tagScienceId = Tag::where('slug', 'science')->first()->id;
        $tagResearchId = Tag::where('slug', 'research')->first()->id;


        // Pivot data
        $pivotData = [
            ['publication_id' => $pub1Id, 'tag_id' => $tagTechId],
            ['publication_id' => $pub1Id, 'tag_id' => $tagResearchId],
            ['publication_id' => $pub2Id, 'tag_id' => $tagScienceId],
            ['publication_id' => $pub4Id, 'tag_id' => $tagTechId],
        ];

        DB::table('publication_tag')->insert($pivotData);
    }
}
