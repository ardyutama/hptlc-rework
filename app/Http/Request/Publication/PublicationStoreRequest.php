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
            'publication_file' => 'required|file|mimes:pdf|max:10240',
            'existing_tag_ids' => 'nullable|array',
            'existing_tag_ids.*' => 'exists:tags,id',
            'new_tag_names' => 'nullable|array',
            'new_tag_names.*' => 'string|max:50',
        ];
    }
}
