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
        $data = $request->validated();

        $user = $this->authService->registerUser($data);

        Auth::login($user);

        Log::info('Redirecting after registration');

        return to_route('welcome');
    }
}
