<?php

namespace App\Http\Request\Publication;

use Illuminate\Foundation\Http\FormRequest;

class PublicationUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'sometimes|required|string|unique:publications,title,'.$this->publication->id,
            'abstract' => 'sometimes|required|string',
            'publication_file' => 'sometimes|nullable|file|mimes:pdf',
            'published_at' => 'nullable|date',
            'tag_ids' => 'sometimes|array',
            'tag_ids.*' => 'sometimes|exists:tags,id',
            'author_ids' => 'sometimes|array',
            'author_ids.*' => 'sometimes|exists:users,id',
        ];
    }
}
