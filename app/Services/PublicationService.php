<?php

namespace App\Services;

use App\Http\Request\Publication\PublicationStoreRequest;
use App\Http\Request\Publication\PublicationUpdateRequest;
use App\Models\Publication;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class PublicationService
{
    public function getHeroPublication(int $limit = 4): Collection
    {
        return Publication::query()
            ->with(['tags', 'authors.member'])
            ->whereNotNull('published_at')
            ->where('published_at', '<=', Carbon::now())
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get();
    }

    public function getAllPublication(int $perPage, array $filters): LengthAwarePaginator
    {
        $query = Publication::query()
            ->with(['tags', 'authors.member'])
            ->whereNotNull('published_at')
            ->where('published_at', '<=', Carbon::now());

        if (! empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        if (! empty($filters['tag'])) {
            $tagIds = is_array($filters['tag']) ? $filters['tag'] : [$filters['tag']];
            $query->whereHas('tags', function ($q) use ($tagIds) {
                $q->whereIn('tags.id', $tagIds);
            });
        }

        if (! empty($filters['author'])) {
            $authorIds = is_array($filters['author']) ? $filters['author'] : [$filters['author']];
            $query->whereHas('authors', function ($q) use ($authorIds) {
                $q->whereIn('users.id', $authorIds);
            });
        }

        if (! empty($filters['from_date'])) {
            $query->where('published_at', '>=', Carbon::parse($filters['from_date'])->startOfDay());
        }
        if (! empty($filters['to_date'])) {
            $query->where('published_at', '<=', Carbon::parse($filters['to_date'])->endOfDay());
        }

        $sortField = $filters['sort_by'] ?? 'published_at';
        $sortDirection = $filters['sort_direction'] ?? 'desc';

        $query->orderBy($sortField, $sortDirection);

        return $query->paginate($perPage)->withQueryString();
    }

    public function createPublication(PublicationStoreRequest $request): Publication
    {
        DB::beginTransaction();
        try {
            $slug = Str::slug($request->input('title'));

            $publication = Publication::create([
                'title' => $request->input('title'),
                'abstract' => $request->input('abstract'),
                'slug' => $slug,
                'status' => 'in_review',
                'published_at' => $request->input('published_at') ?? now(),
            ]);

            if (auth()->check()) {
                $publication->authors()->attach(auth()->id());
            }

            $allTagIds = $request->input('existing_tag_ids', []);

            $newTagNames = $request->input('new_tag_names', []);

            if (! empty($newTagNames)) {
                foreach ($newTagNames as $tagName) {
                    $newTag = Tag::firstOrCreate(
                        ['slug' => Str::slug($tagName)],
                        ['name' => $tagName]
                    );
                    $allTagIds[] = $newTag->id;
                }
            }

            if (! empty($allTagIds)) {
                $publication->tags()->sync(array_unique($allTagIds));
            }

            if ($request->hasFile('publication_file') && $request->file('publication_file')->isValid()) {
                $publication->addMediaFromRequest('publication_file')
                    ->toMediaCollection('publications');
            }

            DB::commit();

            return $publication;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Publication creation error: '.$e->getMessage());
            throw $e;
        }
    }

    public function updatePublication(Publication $publication, PublicationUpdateRequest $request): Publication
    {
        DB::beginTransaction();
        try {
            if (! empty($validated['title'])) {
                $validated['slug'] = Str::slug($validated['title']);
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
            Log::error('Publication update error: '.$exception->getMessage());
            throw $exception;
        }
    }

    public function deletePublication(Publication $publication): bool
    {
        DB::beginTransaction();

        try {
            $publication->tags()->detach();
            $publication->authors()->detach();

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error deleting publication: '.$e->getMessage());
            throw new \Exception($e->getMessage());
        }
    }
}
