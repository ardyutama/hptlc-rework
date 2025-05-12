<?php

namespace App\Http\Request\Article;

use App\Models\Article;
use Illuminate\Foundation\Http\FormRequest;

class ArticleUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(Article $article): array
    {
        return [
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:articles,slug,'.$article->id,
            'markdown_file' => 'nullable|file|mimes:md,txt|max:10240', // 10MB max
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120', // 5MB max
            'remove_image' => 'nullable|boolean',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'publish' => 'nullable|boolean',
            'unpublish' => 'nullable|boolean',
        ];
    }
}
