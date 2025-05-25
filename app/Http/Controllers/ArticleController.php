<?php

namespace App\Http\Controllers;

use App\Http\Request\Article\ArticleStoreRequest;
use App\Http\Request\Article\ArticleUpdateRequest;
use App\Models\Article;
use App\Models\Tag;
use App\Services\ArticleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ArticleController extends Controller
{
    protected ArticleService $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index(Request $request): InertiaResponse
    {
//        Gate::authorize('viewAny', Article::class);

        $filters = $request->only([
            'search',
            'status',
            'tag',
            'author',
            'from_date',
            'to_date',
            'sort_by',
            'sort_direction',
        ]);

        $perPage = (int) $request->input('per_page', 10);
        $heroArticles = $this->articleService->getHeroArticles();
        $articles = $this->articleService->getAllArticles($perPage, $filters);

        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('articles/index', [
            'heroArticles' => $heroArticles,
            'articles' => $articles,
            'filters' => $filters,
            'tags' => $tags,
            'statuses' => Article::AVAILABLE_STATUSES,
        ]);
    }

    public function create(): InertiaResponse
    {
//        Gate::authorize('create', Article::class);

        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('articles/create', [
            'tags' => $tags,
            'statuses' => Article::AVAILABLE_STATUSES,
        ]);
    }

    public function store(ArticleStoreRequest $request): RedirectResponse
    {
        Gate::authorize('create', Article::class);

        $validated = $request->validated();

        try {
            $article = $this->articleService->createArticle($validated);

            return redirect()->route('articles.edit', $article)->with('flash', [
                'type' => 'success',
                'message' => 'Article created successfully!',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with('flash', [
                'type' => 'error',
                'message' => 'An error occurred while creating the article. '.$e->getMessage(), // Optionally show specific error or a generic one
            ]);
        }
    }

    public function show(Article $article): InertiaResponse
    {
//        Gate::authorize('view', Article::class);

        $article->load('tags', 'authors.member');
        $article->incrementViewCount();

        $markdownContent = $this->articleService->getMarkdownContent($article);

        return Inertia::render('articles/show', [
            'article' => $article,
            'markdownContent' => $markdownContent,
        ]);
    }

    public function edit(Article $article): InertiaResponse
    {
//        Gate::authorize('update', Article::class);

        $tags = Tag::orderBy('name')->get(['id', 'name']);
        $article->load('tags');
        $markdownContent = $this->articleService->getMarkdownContent($article);

        return Inertia::render('articles/edit', [
            'article' => $article,
            'markdownContent' => $markdownContent,
            'tags' => $tags,
            'statuses' => Article::AVAILABLE_STATUSES,
        ]);
    }

    public function update(ArticleUpdateRequest $request, Article $article): RedirectResponse
    {
//        Gate::authorize('update', Article::class);

        $validated = $request->validated();

        try {
            $this->articleService->updateArticle($article, $validated);

            return redirect()->route('articles.index')->with('flash', [
                'type' => 'success',
                'message' => 'Article updated successfully!',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with('flash', [
                'type' => 'error',
                'message' => 'An error occurred while updating the article. '.$e->getMessage(), // Optionally show specific error
            ]);
        }
    }

    public function destroy(Article $article): RedirectResponse
    {
//        Gate::authorize('delete', Article::class);

        try {
            $this->articleService->deleteArticle($article);

            return redirect()->route('articles.index')->with('flash', [
                'type' => 'success',
                'message' => 'Article deleted successfully.',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('flash', [
                'type' => 'error',
                'message' => 'An error occurred while deleting the article. '.$e->getMessage(), // Optionally show specific error
            ]);
        }
    }
}
