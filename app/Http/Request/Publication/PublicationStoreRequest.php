<?php

namespace App\Http\Request\Publication;

use Illuminate\Foundation\Http\FormRequest;

class PublicationStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|unique:publications|max:255',
            'abstract' => 'required|string',
            'publication_file' => 'required|file|mimes:pdf',
            'published_at' => 'nullable|date',
            'tag_ids' => 'array|exists:tags,id',
            'author_ids' => 'array|exists:users,id',
        ];
    }
}
