<?php

namespace App\Http\Controllers;

use App\Http\Request\Auth\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    protected AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
        $this->middleware('guest')->except('logout');
    }

    public function showRegisterForm(): Response
    {
        return Inertia::render('register/index');
    }

    /**
     * Handle user registration
     */
    public function register(RegisterRequest $request): JsonResponse|RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required|string',
        ]);

        $data = array_merge($request->validated(), [
            'university_name' => '',
            'phone_number' => '',
            'study_program_name' => '',
            'gender' => 'other', // Default value
            'birth_date' => now()->subYears(18)->toDateString()
        ]);

        $user = $this->authService->registerUser($data);

        Auth::login($user);

        Log::info('Redirecting after registration');

        return redirect()->route('welcome');
    }
}
