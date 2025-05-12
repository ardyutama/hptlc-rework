<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Tag;
use App\Services\ArticleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;
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

        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('articles/index', [
            'articles' => $articles,
            'filters' => $filters,
            'tags' => $tags,
            'statuses' => ['draft', 'published', 'archived'],
        ]);
    }

    public function create(): InertiaResponse
    {
        if (! Gate::allows('create', Article::class)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('articles/create', [
            'tags' => $tags,
            'statuses' => ['draft', 'published', 'archived'],
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        if (! Gate::allows('create', Article::class)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'markdown_content' => ['required', 'string'],
            'featured_image' => ['nullable', 'image', 'max:2048'],
            'status' => ['required', Rule::in(['draft', 'published', 'archived'])],
            'existing_tag_ids' => ['nullable', 'array'],
            'existing_tag_ids.*' => ['exists:tags,id'],
            'new_tag_names' => ['nullable', 'array'],
            'new_tag_names.*' => ['required', 'string', 'max:50', Rule::unique('tags', 'name')],
        ]);

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
        if (! Gate::allows('view', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $markdownContent = $this->articleService->getMarkdownContent($article);
        $article->incrementViewCount();

        return Inertia::render('articles/show', [
            'article' => $article->load('tags', 'authors'),
            'markdownContent' => $markdownContent,
        ]);
    }

    public function edit(Article $article): InertiaResponse
    {
        if (! Gate::allows('update', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

        $tags = Tag::orderBy('name')->get(['id', 'name']);

        $markdownContent = $this->articleService->getMarkdownContent($article);

        return Inertia::render('articles/edit', [
            'article' => $article->load('tags'),
            'markdownContent' => $markdownContent,
            'tags' => $tags,
            'statuses' => ['draft', 'published', 'archived'],
        ]);
    }

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
        if (! Gate::allows('delete', $article)) {
            abort(Response::HTTP_FORBIDDEN);
        }

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
