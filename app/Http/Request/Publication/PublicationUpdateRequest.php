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
            'title' => [
                'sometimes',
                'required',
                'string',
                'max:255',
            ],
            'abstract' => ['sometimes', 'required', 'string'],
            'publication_file' => ['nullable', 'file', 'mimes:pdf', 'max:10240'],
            'existing_tag_ids' => ['nullable', 'array'],
            'existing_tag_ids.*' => ['string', 'exists:tags,id'],
            'new_tag_names' => ['nullable', 'array'],
            'new_tag_names.*' => ['string', 'max:50'],
            'author_ids' => ['sometimes', 'array'],
            'author_ids.*' => ['string', 'exists:users,id'],
        ];
    }
}
