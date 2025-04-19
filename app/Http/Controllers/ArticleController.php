<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Tag;
use App\Services\ArticleService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ArticleController extends Controller
{
    /**
     * The article service instance.
     *
     * @var ArticleService
     */
    protected ArticleService $articleService;

    /**
     * Create a new controller instance.
     *
     * @param ArticleService $articleService
     */
    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    /**
     * Display a listing of the articles.
     *
     * @param Request $request
     * @return InertiaResponse
     * @throws AuthorizationException
     */
    public function index(Request $request): InertiaResponse
    {
        if (! Gate::allows('viewAny', Article::class)) {
            abort(Response::HTTP_FORBIDDEN);
        }

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

        $perPage = $request->input('per_page', 10);
        $articles = $this->articleService->getAllArticles($perPage, $filters);

        // Get all tags for filter dropdown
        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('articles/index', [
            'articles' => $articles,
            'filters' => $filters,
            'tags' => $tags,
            'statuses' => ['draft', 'published', 'archived'],
        ]);
    }

    /**
     * Show the form for creating a new article.
     *
     * @return InertiaResponse
     * @throws AuthorizationException
     */
    public function create(): InertiaResponse
    {
        if (! Gate::allows('create', Article::class)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        // Get all tags for selection
        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('articles/create', [
            'tags' => $tags,
            'statuses' => ['draft', 'published', 'archived'],
        ]);
    }

    /**
     * Store a newly created article in storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        if (! Gate::allows('create', Article::class)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'markdown_content' => ['required', 'string'],
            'featured_image' => ['nullable', 'image', 'max:2048'], // 2MB max
            'tags' => ['nullable', 'array'],
            'tags.*' => ['exists:tags,id'],
            'status' => ['required', 'in:draft,published,archived'],
        ]);

        try {
            $user = Auth::user();
            $article = $this->articleService->createArticle($validated, $user);
            return redirect()->route('articles.edit', $article)
                ->with('success', 'Article created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->withInput()
                ->with('error', 'Failed to create article: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified article.
     *
     * @param Article $article
     * @return InertiaResponse
     * @throws AuthorizationException
     */
    public function show(Article $article): InertiaResponse
    {
        if (! Gate::allows('view', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        // Get markdown content
        $markdownContent = $this->articleService->getMarkdownContent($article);

        return Inertia::render('articles/show', [
            'article' => $article->load('tags', 'authors'),
            'markdownContent' => $markdownContent,
        ]);
    }

    /**
     * Show the form for editing the specified article.
     *
     * @param Article $article
     * @return InertiaResponse
     * @throws AuthorizationException
     */
    public function edit(Article $article): InertiaResponse
    {
        if (! Gate::allows('update', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        // Get all tags for selection
        $tags = Tag::orderBy('name')->get(['id', 'name']);

        // Get markdown content
        $markdownContent = $this->articleService->getMarkdownContent($article);

        return Inertia::render('articles/edit', [
            'article' => $article->load('tags'),
            'markdownContent' => $markdownContent,
            'tags' => $tags,
            'statuses' => ['draft', 'published', 'archived'],
        ]);
    }

    /**
     * Update the specified article in storage.
     *
     * @param Request $request
     * @param Article $article
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function update(Request $request, Article $article): RedirectResponse
    {
        if (! Gate::allows('update', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'markdown_content' => ['required', 'string'],
            'featured_image' => ['nullable', 'image', 'max:2048'], // 2MB max
            'tags' => ['nullable', 'array'],
            'tags.*' => ['exists:tags,id'],
            'status' => ['required', 'in:draft,published,archived'],
            'remove_featured_image' => ['nullable', 'boolean'],
        ]);

        try {
            $this->articleService->updateArticle($article, $validated);
            return redirect()->route('articles.edit', $article)
                ->with('success', 'Article updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->withInput()
                ->with('error', 'Failed to update article: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified article from storage.
     *
     * @param Article $article
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function destroy(Article $article): RedirectResponse
    {
        if (! Gate::allows('delete', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        try {
            $this->articleService->deleteArticle($article);
            return redirect()->route('articles.index')
                ->with('success', 'Article deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Failed to delete article: ' . $e->getMessage());
        }
    }

    /**
     * Publish the specified article.
     *
     * @param Article $article
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function publish(Article $article): RedirectResponse
    {
        if (! Gate::allows('update', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        try {
            $this->articleService->changeArticleStatus($article, 'published');
            return redirect()->back()
                ->with('success', 'Article published successfully.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Failed to publish article: ' . $e->getMessage());
        }
    }

    /**
     * Archive the specified article.
     *
     * @param Article $article
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function archive(Article $article): RedirectResponse
    {
        if (! Gate::allows('update', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        try {
            $this->articleService->changeArticleStatus($article, 'archived');
            return redirect()->back()
                ->with('success', 'Article archived successfully.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Failed to archive article: ' . $e->getMessage());
        }
    }

    /**
     * Move article to draft.
     *
     * @param Article $article
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function draft(Article $article): RedirectResponse
    {
        if (! Gate::allows('update', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        try {
            $this->articleService->changeArticleStatus($article, 'draft');
            return redirect()->back()
                ->with('success', 'Article moved to draft successfully.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Failed to move article to draft: ' . $e->getMessage());
        }
    }
}
