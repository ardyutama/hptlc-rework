<?php
namespace App\Http\Request\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'university_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'study_program_name' => 'required|string|max:255',
            'gender' => 'required|string|in:male,female,other',
            'birth_date' => 'required|date|before:today',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required|string',
        ];
    }
}
