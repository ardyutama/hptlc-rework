<?php

namespace App\Http\Controllers;

use App\Http\Request\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
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
                'user' => auth()->user(),
            ]);
        }

        return redirect()->intended('/');
    }

    public function logout(Request $request): JsonResponse|RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function user(Request $request): JsonResponse
    {
        $user = $request->user();
        $user->load('member');

        return response()->json([
            'user' => $user,
        ]);
    }
}
