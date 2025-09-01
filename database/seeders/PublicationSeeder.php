<?php

namespace Database\Seeders;

use App\Enums\PublicationStatus;
use App\Models\Publication;
use App\Models\Tag;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PublicationSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all()->keyBy('email');
        $tags = Tag::all()->keyBy('slug');

        $publications = [
            [
                'title' => 'Advancements in High-Performance Thin-Layer Chromatography',
                'abstract' => 'This paper reviews the latest techniques and applications in HPTLC, highlighting significant improvements in resolution and sensitivity.',
                'status' => PublicationStatus::PUBLISHED,
                'published_at' => Carbon::now()->subDays(10),
                'authors' => ['admin@example.com', 'jane.researcher@example.com'],
                'tags' => ['research', 'science'],
            ],
            [
                'title' => 'Quantitative Analysis of Herbal Medicines using HPTLC',
                'abstract' => 'A methodological approach to the quantitative determination of active compounds in traditional herbal medicines.',
                'status' => PublicationStatus::PUBLISHED,
                'published_at' => Carbon::now()->subDays(25),
                'authors' => ['jane.researcher@example.com'],
                'tags' => ['technology', 'research'],
            ],
            [
                'title' => 'A New Method for Toxin Detection in Food Samples',
                'abstract' => 'Proposing a novel and rapid HPTLC-based method for detecting common food-borne toxins.',
                'status' => PublicationStatus::IN_REVIEW,
                'published_at' => null,
                'authors' => ['john.scholar@example.com'],
                'tags' => ['science'],
            ],
            [
                'title' => 'Exploring Chromatographic Fingerprinting',
                'abstract' => 'This draft explores the concept of chromatographic fingerprinting for the authentication of botanical materials.',
                'status' => PublicationStatus::NEEDS_REVISION,
                'published_at' => null,
                'editor_feedback' => 'The abstract is promising, but please expand on the methodology section and add more recent citations.',
                'authors' => ['john.scholar@example.com', 'editor@example.com'],
                'tags' => ['research'],
            ],
            [
                'title' => 'Historical Perspectives on Chromatography',
                'abstract' => 'An overview of the development of chromatography from its inception to the modern day. This content is now archived.',
                'status' => PublicationStatus::ARCHIVED,
                'published_at' => Carbon::now()->subYear(),
                'deleted_at' => Carbon::now(),
                'authors' => ['admin@example.com'],
                'tags' => ['science'],
            ],
        ];

        foreach ($publications as $pubData) {
            $publication = Publication::create([
                'title' => $pubData['title'],
                'slug' => Str::slug($pubData['title']),
                'abstract' => $pubData['abstract'],
                'status' => $pubData['status'],
                'published_at' => $pubData['published_at'],
                'editor_feedback' => $pubData['editor_feedback'] ?? null,
                'deleted_at' => $pubData['deleted_at'] ?? null,
            ]);

            $authorIds = collect($pubData['authors'])->map(fn($email) => $users[$email]->id);
            $publication->authors()->attach($authorIds);

            $tagIds = collect($pubData['tags'])->map(fn($slug) => $tags[$slug]->id);
            $publication->tags()->attach($tagIds);
        }
    }
}
