<?php

namespace Database\Seeders;

use App\Models\Publication;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PublicationUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pub1Id = Publication::where('slug', 'the-future-of-ai-research')->first()->id;
        $pub2Id = Publication::where('slug', 'climate-change-impacts-cities')->first()->id;
        $pub3Id = Publication::where('slug', 'blockchain-explained')->first()->id;

        $user1Id = User::where('email', 'user1@example.com')->first()->id;
        $user2Id = User::where('email', 'user2@example.com')->first()->id;
        $adminId = User::where('email', 'admin@example.com')->first()->id;
        $author1Id = User::where('email', 'author1@example.com')->first()->id;

        // Pivot data
        $pivotData = [
            ['publication_id' => $pub1Id, 'user_id' => $adminId], // Admin as author
            ['publication_id' => $pub1Id, 'user_id' => $user1Id], // User1 as contributor
            ['publication_id' => $pub2Id, 'user_id' => $user1Id],
            ['publication_id' => $pub3Id, 'user_id' => $user2Id], // Unpublished pub by User2
            ['publication_id' => $pub3Id, 'user_id' => $author1Id], // Unpublished pub by Author1
        ];

        DB::table('publication_user')->insert($pivotData);
    }
}
