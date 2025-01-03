<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PublicationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'tag_ids' => 'array|exists:tags,id',
                'author_ids' => 'array|exists:users,id',
                'title' => 'string|nullable|unique:publications,title',
                'abstract' => 'string|nullable',
                'from_date' => 'date|nullable',
                'to_date' => 'date|nullable',
                'per_page' => 'integer|min:10|max:100|nullable',
                'sort_by' => 'string|nullable',
                'order_by' => 'string|nullable',
            ]);

            $query = Publication::query();

            $validated['order_by'] = 'desc';

            if (!empty($validated['title'])) {
                $query->where('title', 'like', '%' . $validated['title'] . '%');
            }

            if (!empty($validated['abstract'])) {
                $query->where('abstract', 'like', '%' . $validated['abstract'] . '%');
            }

            if (!empty($validated['from_date'])) {
                $query->where('published_at', '>=', $validated['from_date']);
            }

            if (!empty($validated['to_date'])) {
                $query->where('published_at', '<=', $validated['to_date']);
            }

            if (!empty($validated['author_ids'])) {
                $query->whereHas('users', function ($userQuery) use ($validated) {
                    $userQuery->whereIn('users.id', $validated['author_ids']);
                });
            }

            if (!empty($validated['tag_ids'])) {
                $query->whereHas('tags', function ($tagQuery) use ($validated) {
                    $tagQuery->whereIn('tags.id', $validated['tag_ids']);
                });
            }

            $query->orderBy('created_at', $validated['order_by']);

            if (!empty($validated['sort_by'])) {
                $query->orderBy($validated['sort_by'], $validated['order_by']);
            }

            if (empty($validated['per_page'])) {
                $validated['per_page'] = 10;
            }

            $publications = $query->with([
                'tags' => function ($query) {
                    $query->select('id','name');
                },
                'users'=> function ($query) {
                    $query->select('id','email');
                }
            ])->paginate($validated['per_page']);

            return response()->json([
                'data' => $publications,
            ]);

        } catch (\Exception $exception) {
            Log::error('Publication search error: ' . $exception->getMessage());
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|unique:publications|max:255',
            'abstract' => 'required|string',
            'publication_file' => 'nullable|file|mimes:pdf',
            'published_at' => 'nullable|date',
            'tag_ids' => 'array|exists:tags,id',
            'author_ids' => 'array|exists:users,id',
        ]);

        DB::beginTransaction();

        try {
            $title_slug = Str::slug($validated['title']);

            $publication = Publication::create([
                'title' => $validated['title'],
                'abstract' => $validated['abstract'],
                'slug' => $title_slug,
                'published_at' => $validated['published_at'],
            ]);

            if($request->hasFile('publication_file')) {
                $year = $publication->created_at->year;
                $month = $publication->created_at->month;
                $day = $publication->created_at->day;
                $path = "publications/{$year}/{$month}/{$day}/{$publication->id}";
                $filePath = $request->file('publication_file')->storeAs($path, $title_slug . '.pdf');
            }

            $publication->publication_file = $filePath ?? null;

            $publication->save();

            if (!empty($validated['tag_ids'])) {
                $publication->tags()->attach($validated['tag_ids']);
            }

            if (!empty($validated['author_ids'])) {
                $publication->users()->attach($validated['author_ids']);
            }

            DB::commit();
            return response()->json(['message' => 'Publication created successfully.', 'data' => $publication], 201);
        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    public function show(string $id)
    {
        $publication = Publication::with(['tags', 'users'])->findOrFail($id);
        return response()->json($publication);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|unique:publications,title',
            'abstract' => 'sometimes|required|string',
            'publication_file' => 'sometimes|nullable|file|mimes:pdf',
            'tag_ids' => 'sometimes|array',
            'tag_ids.*' => 'sometimes|exists:tags,id',
            'author_ids' => 'sometimes|array',
            'author_ids.*' => 'sometimes|exists:users,id',
        ]);

        DB::beginTransaction();

        try {
            $publication = Publication::findOrFail($id);

            if(!empty($validated['title'])) {
                $validated['slug'] = Str::slug($validated['title']);
            }

            if ($request->hasFile('publication_file')) {
                $directoryPath = dirname($publication->publication_file);
                $slug = $validated['slug'];

                if ($publication->publication_file) {
                    Storage::delete($publication->publication_file);
                }
                $validated['publication_file'] = $request->file('publication_file')->storeAs($directoryPath, $slug . '.pdf');
            }

            $publication->update(array_filter($validated));

            if (!empty($validated['tag_ids'])) {
                $publication->tags()->sync($validated['tag_ids']);
            }

            if (!empty($validated['author_ids'])) {
                $publication->users()->sync($validated['author_ids']);
            }

            DB::commit();

            return response()->json(['message' => 'Publication updated successfully.', 'data' => $publication]);
        } catch (\Exception $exception) {
            Log::error('Publication update error: ' . $exception->getMessage());

            DB::rollBack();
            return response()->json(['message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Remove a publication.
     */
    public function destroy(string $id)
    {
        $publication = Publication::findOrFail($id);

        if ($publication->publication_file) {
            $directoryPath = dirname($publication->publication_file);
            Storage::deleteDirectory($directoryPath);
        }

        $publication->delete();
        return response()->json(['message' => 'Publication deleted successfully.']);
    }
}
