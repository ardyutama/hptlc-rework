<?php

namespace Database\Seeders;

use App\Models\Publication;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PublicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $publicationsData = [
            [
                'id' => '01hza0zg77tfzfxl8s9e0f1g2h',
                'title' => 'The Future of AI Research',
                'abstract' => 'An overview of current trends and future directions in Artificial Intelligence research.',
                'slug' => 'the-future-of-ai-research',
                'publication_file' => base64_encode('dummy binary data for file 1'), // Placeholder binary
                'published_at' => Carbon::parse('2024-01-10 10:00:00'),
            ],
            [
                'id' => '01hza0zh88ug0gxm9t0f1g2h3i',
                'title' => 'Climate Change Impacts on Cities',
                'abstract' => 'Analyzing the effects of global warming on urban infrastructure and populations.',
                'slug' => 'climate-change-impacts-cities',
                'publication_file' => null, // No file
                'published_at' => Carbon::parse('2024-02-01 11:00:00'),
            ],
            [
                'id' => '01hza0zi99vh1hyn0u1g2h3i4j',
                'title' => 'Blockchain Technology Explained',
                'abstract' => 'A comprehensive guide to understanding blockchain principles and applications.',
                'slug' => 'blockchain-explained',
                'publication_file' => base64_encode('dummy binary data for file 2'), // Placeholder binary
                'published_at' => null, // Unpublished
            ],
            [
                'id' => '01hza0zj00wi2izo1v2h3i4j5k',
                'title' => 'Renewable Energy Sources',
                'abstract' => 'Exploring sustainable energy options and their viability.',
                'slug' => 'renewable-energy',
                'publication_file' => null, // No file
                'published_at' => Carbon::parse('2024-04-15 13:00:00'),
            ],
        ];

        $now = Carbon::now();
        foreach ($publicationsData as $pubData) {
            Publication::create(array_merge($pubData, [
                'created_at' => $now,
                'updated_at' => $now,
            ]));
        }
    }
}
