<?php

namespace App\Services;

use App\Http\Request\Publication\PublicationStoreRequest;
use App\Http\Request\Publication\PublicationUpdateRequest;
use App\Models\Publication;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PublicationService {
    public function getFilteredPublications(array $filters): LengthAwarePaginator
    {
        $query = Publication::query();
        $orderBy = $filters['order_by'] ?? 'desc';

        if (!empty($filters['title'])) {
            $query->where('title', 'like', '%' . $filters['title'] . '%');
        }

        if (!empty($filters['abstract'])) {
            $query->where('abstract', 'like', '%' . $filters['abstract'] . '%');
        }

        if (!empty($filters['from_date'])) {
            $query->where('published_at', '>=', $filters['from_date']);
        }

        if (!empty($filters['to_date'])) {
            $query->where('published_at', '<=', $filters['to_date']);
        }

        if (!empty($filters['author_ids'])) {
            $query->whereHas('users', function ($userQuery) use ($filters) {
                $userQuery->whereIn('users.id', $filters['author_ids']);
            });
        }

        if (!empty($filters['tag_ids'])) {
            $query->whereHas('tags', function ($tagQuery) use ($filters) {
                $tagQuery->whereIn('tags.id', $filters['tag_ids']);
            });
        }

        $query->orderBy('created_at', $orderBy);

        if (!empty($filters['sort_by'])) {
            $query->orderBy($filters['sort_by'], $orderBy);
        }

        $perPage = $filters['per_page'] ?? 10;

        return $query->with([
            'tags' => function ($query) {
                $query->select('id', 'name');
            },
            'users'=> function ($query) {
                $query->select('id', 'email', 'name');
            }
        ])->paginate($perPage);
    }

    public function createPublication(PublicationStoreRequest $request): Publication
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            $titleSlug = Str::slug($validated['title']);

            $publication = Publication::create([
                'title' => $validated['title'],
                'abstract' => $validated['abstract'],
                'slug' => $titleSlug,
                'published_at' => $validated['published_at'] ?? now(),
            ]);

            if ($request->hasFile('publication_file')) {
                $year = $publication->created_at->year;
                $month = $publication->created_at->month;
                $day = $publication->created_at->day;
                $path = "publications/{$year}/{$month}/{$day}/{$publication->id}";
                $filePath = $request->file('publication_file')->storeAs($path, $titleSlug . '.pdf');

                $publication->publication_file = $filePath;
                $publication->save();
            }

            if (!empty($validated['tag_ids'])) {
                $publication->tags()->attach($validated['tag_ids']);
            }

            if (!empty($validated['author_ids'])) {
                $publication->users()->attach($validated['author_ids']);
            }

            DB::commit();
            return $publication->fresh(['tags', 'users']);
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Publication creation error: ' . $exception->getMessage());
            throw $exception;
        }
    }

    public function updatePublication(Publication $publication, PublicationUpdateRequest $request): Publication
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();

            if (!empty($validated['title'])) {
                $validated['slug'] = Str::slug($validated['title']);
            }

            if ($request->hasFile('publication_file')) {
                if ($publication->publication_file) {
                    Storage::delete($publication->publication_file);
                }

                $directoryPath = $publication->publication_file
                    ? dirname($publication->publication_file)
                    : "publications/" . date('Y/m/d') . "/{$publication->id}";

                $slug = $validated['slug'] ?? $publication->slug;
                $validated['publication_file'] = $request->file('publication_file')->storeAs($directoryPath, $slug . '.pdf');
            }

            $publication->update(array_filter($validated, function ($value) {
                return $value !== null;
            }));

            if (isset($validated['tag_ids'])) {
                $publication->tags()->sync($validated['tag_ids']);
            }

            if (isset($validated['author_ids'])) {
                $publication->users()->sync($validated['author_ids']);
            }

            DB::commit();
            return $publication->fresh(['tags', 'users']);
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Publication update error: ' . $exception->getMessage());
            throw $exception;
        }
    }

    public function deletePublication(Publication $publication): bool
    {
        if ($publication->publication_file) {
            $directoryPath = dirname($publication->publication_file);
            Storage::deleteDirectory($directoryPath);
        }

        return $publication->delete();
    }

    public function getTagsForForm(): Collection
    {
        return Tag::select('id', 'name')->orderBy('name')->get();
    }

    public function getAuthorsForForm(): Collection
    {
        return User::select('id', 'name', 'email')->orderBy('name')->get();
    }
}
