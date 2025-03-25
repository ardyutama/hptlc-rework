<?php

namespace App\Http\Controllers;

use App\Http\Request\Article\ArticleStoreRequest;
use App\Models\Article;
use App\Models\Tag;
use App\Services\ArticleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    protected $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;

        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index(Request $request)
    {
        try {
            $filters = $request->only(['search', 'tag', 'status']);

            $articles = Article::with('tags')
                ->when(isset($filters['search']), function ($query) use ($filters) {
                    $query->search($filters['search']);
                })
                ->when(isset($filters['tag']), function ($query) use ($filters) {
                    $query->withTag($filters['tag']);
                })
                ->when(isset($filters['status']), function ($query) use ($filters) {
                    if ($filters['status'] === 'published') {
                        $query->published();
                    } elseif ($filters['status'] === 'draft') {
                        $query->draft();
                    }
                })
                ->latest('published_at')
                ->paginate(10)
                ->withQueryString();

            // Get available tags for filter
            $tags = Tag::orderBy('name')->get(['id', 'name', 'slug']);

            return Inertia::render('Articles/Index', [
                'articles' => $articles,
                'tags' => $tags,
                'filters' => $filters,
            ]);
        } catch (\Exception $e) {
            Log::error('Article index error', [
                'error' => $e->getMessage(),
                'filters' => $request->only(['search', 'tag', 'status']),
            ]);

            return Inertia::render('Articles/Index', [
                'articles' => [],
                'tags' => [],
                'filters' => $filters ?? [],
                'error' => 'Failed to load articles. Please try again later.'
            ]);
        }
    }

    public function create(): Response|RedirectResponse
    {
        try {
            $this->authorize('create', Article::class);

            $tags = Tag::orderBy('name')->get(['id', 'name']);

            return Inertia::render('Articles/Create', [
                'tags' => $tags,
            ]);
        } catch (\Exception $e) {
            Log::error('Error loading article create page', ['error' => $e->getMessage()]);

            return redirect()->route('articles.index')
                ->with('error', 'Failed to load article creation page. Please try again later.');
        }
    }

    public function store(ArticleStoreRequest $request): RedirectResponse
    {
        try {
            $this->authorize('create', Article::class);

            DB::beginTransaction();

            $validated = $request->validated();

            $article = $this->articleService->createArticle(
                $validated,
                $request->file('markdown_file'),
                $request->hasFile('image') ? $request->file('image') : null
            );

            DB::commit();

            return redirect()->route('articles.edit', $article)
                ->with('success', 'Article created successfully!');

        } catch (ValidationException $e) {
            DB::rollBack();
            return redirect()->back()->withErrors($e->errors())->withInput();

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error creating article', [
                'error' => $e->getMessage(),
                'request' => $request->except(['image', 'markdown_file'])
            ]);

            return redirect()->back()
                ->with('error', 'Failed to create article: ' . $e->getMessage())
                ->withInput();
        }
    }

    public function show(Article $article): Response|RedirectResponse
    {
        try {
            // Check if article exists and is published or user has permission
            if (!$article->isPublished() && (!auth()->check() || !auth()->user()->can('view', $article))) {
                return abort(404);
            }

            $article->load('tags');
            $markdownContent = $this->articleService->getFileContent($article->markdown_file);
            $relatedArticles = $article->getRelatedArticles($article);

            return Inertia::render('Articles/Show', [
                'article' => $article,
                'markdownContent' => $markdownContent,
                'relatedArticles' => $relatedArticles,
            ]);
        } catch (\Exception $e) {
            Log::error('Error viewing article', [
                'error' => $e->getMessage(),
                'article_id' => $article->id
            ]);

            return redirect()->route('articles.index')
                ->with('error', 'Failed to load article. Please try again later.');
        }
    }

    public function edit(Article $article): Response|RedirectResponse
    {
        try {
            $this->authorize('update', $article);

            $article->load('tags');
            $tags = Tag::orderBy('name')->get(['id', 'name']);
            $markdownContent = $this->articleService->getFileContent($article->markdown_file);

            return Inertia::render('Articles/Edit', [
                'article' => $article,
                'markdownContent' => $markdownContent,
                'tags' => $tags,
                'selectedTags' => $article->tags->pluck('id'),
            ]);
        } catch (\Exception $e) {
            Log::error('Error editing article', [
                'error' => $e->getMessage(),
                'article_id' => $article->id
            ]);

            return redirect()->route('articles.index')
                ->with('error', 'Failed to load article for editing. Please try again later.');
        }
    }

    public function update(Request $request, Article $article): RedirectResponse
    {
        try {
            $this->authorize('update', $article);

            DB::beginTransaction();

            $validated = $request->validated($article);

            $this->articleService->updateArticle(
                $article,
                $validated,
                $request->hasFile('markdown_file') ? $request->file('markdown_file') : null,
                $request->hasFile('image') ? $request->file('image') : null
            );

            DB::commit();

            return redirect()->route('articles.edit', $article)
                ->with('success', 'Article updated successfully!');

        } catch (ValidationException $e) {
            DB::rollBack();
            return redirect()->back()->withErrors($e->errors())->withInput();

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error updating article', [
                'error' => $e->getMessage(),
                'article_id' => $article->id,
                'request' => $request->except(['image', 'markdown_file'])
            ]);

            return redirect()->back()
                ->with('error', 'Failed to update article: ' . $e->getMessage())
                ->withInput();
        }
    }

    public function destroy(Article $article): RedirectResponse
    {
        try {
            $this->authorize('delete', $article);

            DB::beginTransaction();

            $this->articleService->deleteArticle($article);

            DB::commit();

            return redirect()->route('articles.index')
                ->with('success', 'Article deleted successfully!');

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error deleting article', [
                'error' => $e->getMessage(),
                'article_id' => $article->id
            ]);

            return redirect()->route('articles.index')
                ->with('error', 'Failed to delete article. Please try again later.');
        }
    }
}
