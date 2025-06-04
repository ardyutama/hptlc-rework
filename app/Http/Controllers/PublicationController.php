<?php

namespace App\Http\Controllers;

use App\Http\Request\Publication\PublicationStoreRequest;
use App\Http\Request\Publication\PublicationUpdateRequest;
use App\Models\Publication;
use App\Models\Tag;
use App\Services\PublicationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class PublicationController extends Controller
{
    protected PublicationService $publicationService;

    public function __construct(PublicationService $publicationService)
    {
        $this->publicationService = $publicationService;
    }

    public function index(Request $request): InertiaResponse
    {
        $filters = $request->only([
            'search',
            'tag',
            'author',
            'from_date',
            'to_date',
            'sort_by',
            'sort_direction',
        ]);

        $perPage = (int) $request->input('per_page', 10);
        $publications = $this->publicationService->getAllPublication($perPage, $filters);

        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('publications/index', [
            'publications' => $publications,
            'filters' => $filters,
            'tags' => $tags,
        ]);
    }

    public function create(): InertiaResponse
    {
        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('publications/create', [
            'tags' => $tags,
        ]);
    }

    public function store(PublicationStoreRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        try {
            $publication = $this->publicationService->createPublication($validated);

            return redirect()->route('publications.index', $publication)->with('flash', [
                'type' => 'success',
                'message' => 'Publication created successfully!',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with('flash', [
                'type' => 'error',
                'message' => 'An error occurred while creating the publication. '.$e->getMessage(), // Optionally show specific error or a generic one
            ]);
        }
    }

    public function show(Publication $publication): InertiaResponse
    {
        $publication->load('tags', 'authors.member');

        return Inertia::render('publications/show', [
            'publication' => $publication,
        ]);
    }

    public function edit(Publication $publication): InertiaResponse
    {
        $publication->load('tags', 'authors.member');
        $tags = Tag::orderBy('name')->get(['id', 'name']);

        return Inertia::render('publications/edit', [
            'publication' => $publication,
            'tags' => $tags,
        ]);
    }

    public function update(PublicationUpdateRequest $request, Publication $publication): RedirectResponse|JsonResponse
    {
        $validated = $request->validated();

        try {
            $updated = $this->publicationService->updatePublication($publication, $validated);

            return redirect()->route('publications.index', $updated)
                ->with('flash', [
                    'type' => 'success',
                    'message' => 'Publication updated successfully!',
                ]);
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with('flash', [
                'type' => 'error',
                'message' => 'An error occurred while updating the Publication. '.$e->getMessage(),
            ]);
        }
    }

    public function destroy(Publication $publication): RedirectResponse
    {
        try {
            $this->publicationService->deletePublication($publication);

            return redirect()->route('publications.index')->with('flash', [
                'type' => 'success',
                'message' => 'Publication deleted successfully.',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('flash', [
                'type' => 'error',
                'message' => 'An error occurred while deleting the publication. '.$e->getMessage(), // Optionally show specific error
            ]);
        }
    }
}
