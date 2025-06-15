<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Publication;
use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $limit = 4;

        $latestArticles = Article::query()
            ->with('tags', 'authors')
            ->where('status', 'published')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', Carbon::now())
            ->orderBy('published_at', 'desc')
            ->orderBy('view_count', 'desc')
            ->limit($limit)
            ->get();

        $latestPublications = Publication::query()
            ->with('tags', 'authors')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', Carbon::now())
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get();

        return Inertia::render('welcome/index', [
            'latestArticles' => $latestArticles,
            'latestPublications' => $latestPublications,
        ]);
    }
}
