<?php

namespace App\Http\Controllers;

use App\Http\Request\Auth\LoginRequest;
use App\Http\Request\Auth\RegisterRequest;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
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
        $user = $this->authService->registerUser($request->validated());

        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user
            ], 201);
        }

        Auth::login($user);
        return redirect()->route('/');
    }

    public function showLoginForm(): Response
    {
        return Inertia::render('login/index');
    }

    public function login(LoginRequest $request): JsonResponse|RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'User logged in successfully',
                'user' => auth()->user()
            ]);
        }

        return redirect()->intended(route('dashboard'));
    }

    public function logout(Request $request): JsonResponse|RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        if ($request->wantsJson()) {
            return response()->json(['message' => 'Logged out successfully']);
        }

        return redirect()->route('welcome');
    }

    public function user(Request $request): JsonResponse
    {
        $user = $request->user();
        $user->load('member');

        return response()->json([
            'user' => $user,
        ]);
    }

    public function token(LoginRequest $request): JsonResponse
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'message' => 'Token generated successfully',
            'token' => $token,
            'user' => $user->load('member')
        ]);
    }
}
