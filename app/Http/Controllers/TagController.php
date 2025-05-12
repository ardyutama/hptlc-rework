<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class TagController extends Controller
{
    public function index(): Response
    {
        $tags = Tag::orderBy('name')->get();

        return Inertia::render('Tags/Index', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:tags,name'],
        ]);

        $normalizedName = Str::lower(trim($validated['name']));
        $slug = Str::slug($normalizedName);

        $tag = Tag::firstOrCreate(
            ['slug' => $slug],
            ['name' => $validated['name']]
        );

        $message = $tag->wasRecentlyCreated ? 'Tag created successfully.' : 'Tag already exists.';
        $type = $tag->wasRecentlyCreated ? 'success' : 'info';

        return redirect()->back()->with('flash', [
            'type' => $type,
            'message' => $message,
            'data' => $tag,
        ]);
    }

    public function destroy(string $id): RedirectResponse
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();

        return redirect()->back()->with('flash', [
            'type' => 'success',
            'message' => 'Tag deleted successfully.',
        ]);
    }
}
