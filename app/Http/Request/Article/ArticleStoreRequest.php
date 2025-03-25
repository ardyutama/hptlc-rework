<?php

namespace App\Http\Request\Article;

use Illuminate\Foundation\Http\FormRequest;

class ArticleStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:articles,slug',
            'markdown_file' => 'required|file|mimes:md,txt|max:10240', // 10MB max
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120', // 5MB max
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
            'publish' => 'nullable|boolean',
        ];
    }
}
