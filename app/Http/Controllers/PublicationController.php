<?php

namespace App\Http\Controllers;


use App\Http\Request\Publication\PublicationRequest;
use App\Http\Request\Publication\PublicationStoreRequest;
use App\Http\Request\Publication\PublicationUpdateRequest;
use App\Models\Publication;
use App\Services\PublicationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

class PublicationController extends Controller
{
    protected PublicationService $publicationService;

    public function __construct(PublicationService $publicationService)
    {
        $this->publicationService = $publicationService;
    }

    public function index(PublicationRequest $request): Response|JsonResponse
    {
        $validated = $request->validated();
        $publications = $this->publicationService->getFilteredPublications($validated);

        if ($request->wantsJson()) {
            return response()->json([
                'data' => $publications,
            ]);
        }

        return Inertia::render('publications/index', [
            'publications' => $publications,
            'filters' => $request->only([
                'title', 'abstract', 'from_date', 'to_date',
                'author_ids', 'tag_ids', 'per_page', 'sort_by', 'order_by'
            ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Publications/Create', [
            'tags' => $this->publicationService->getTagsForForm(),
            'authors' => $this->publicationService->getAuthorsForForm(),
        ]);
    }

    public function store(PublicationStoreRequest $request): RedirectResponse|JsonResponse
    {
        try {
            $publication = $this->publicationService->createPublication($request);

            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Publication created successfully.',
                    'data' => $publication
                ], HttpResponse::HTTP_CREATED);
            }

            return redirect()->route('publications.index')
                ->with('success', 'Publication created successfully.');
        } catch (\Exception $exception) {
            if ($request->wantsJson()) {
                return response()->json(['message' => $exception->getMessage()], HttpResponse::HTTP_INTERNAL_SERVER_ERROR);
            }

            return redirect()->back()
                ->with('error', 'Failed to create publication: ' . $exception->getMessage())
                ->withInput();
        }
    }

    public function show(Publication $publication): Response|JsonResponse
    {
        $publication->load(['tags', 'users']);

        if (request()->wantsJson()) {
            return response()->json($publication);
        }

        return Inertia::render('Publications/Show', [
            'publication' => $publication
        ]);
    }

    public function edit(Publication $publication): Response
    {
        return Inertia::render('Publications/Edit', [
            'publication' => $publication->load(['tags', 'users']),
            'tags' => $this->publicationService->getTagsForForm(),
            'authors' => $this->publicationService->getAuthorsForForm(),
        ]);
    }

    public function update(PublicationUpdateRequest $request, Publication $publication): RedirectResponse|JsonResponse
    {
        try {
            $updated = $this->publicationService->updatePublication($publication, $request);

            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Publication updated successfully.',
                    'data' => $updated
                ]);
            }

            return redirect()->route('publications.index')
                ->with('success', 'Publication updated successfully.');
        } catch (\Exception $exception) {
            if ($request->wantsJson()) {
                return response()->json(['message' => $exception->getMessage()], HttpResponse::HTTP_INTERNAL_SERVER_ERROR);
            }

            return redirect()->back()
                ->with('error', 'Failed to update publication: ' . $exception->getMessage())
                ->withInput();
        }
    }

    public function destroy(Publication $publication): RedirectResponse|JsonResponse
    {
        try {
            $this->publicationService->deletePublication($publication);

            if (request()->wantsJson()) {
                return response()->json(['message' => 'Publication deleted successfully.']);
            }

            return redirect()->route('publications.index')
                ->with('success', 'Publication deleted successfully.');
        } catch (\Exception $exception) {
            if (request()->wantsJson()) {
                return response()->json(['message' => $exception->getMessage()], HttpResponse::HTTP_INTERNAL_SERVER_ERROR);
            }

            return redirect()->back()
                ->with('error', 'Failed to delete publication: ' . $exception->getMessage());
        }
    }
}
