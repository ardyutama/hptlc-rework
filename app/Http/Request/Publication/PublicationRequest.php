<?php

namespace App\Http\Request\Publication;

use Illuminate\Foundation\Http\FormRequest;

class PublicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'tag_ids' => 'array|exists:tags,id',
            'author_ids' => 'array|exists:users,id',
            'title' => 'string|nullable',
            'abstract' => 'string|nullable',
            'from_date' => 'date|nullable',
            'to_date' => 'date|nullable',
            'per_page' => 'integer|min:10|max:100|nullable',
            'sort_by' => 'string|nullable',
            'order_by' => 'string|in:asc,desc|nullable',
        ];
    }
}
