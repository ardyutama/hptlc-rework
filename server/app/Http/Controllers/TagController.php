<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $tag = Tag::create([
            'name' => $request->name,
        ]);

        return response()->json(['message' => 'Tag created successfully', 'data' => $tag], 201);
    }


    public function destroy(string $id): JsonResponse
    {
        $tag = Tag::findOrFail($id);

        $tag->delete();

        return response()->json(['message' => 'Tag deleted successfully'], 201);
    }
}
