<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'university_name' => 'required|string',
            'phone_number' => 'required|string',
            'study_program_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string',
        ]);

        // Create the user
        $user = User::create([
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // Create the member associated with the user
        $user->member()->create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'university_name' => $request->university_name,
            'phone_number' => $request->phone_number,
            'study_program_name' => $request->study_program_name,
            'user_id' => $user->id,
        ]);

        Auth::login($user);

        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($credentials)) {
            // Regenerate session to prevent session fixation attacks
            $request->session()->regenerate();
            return response()->json(['message' => 'User logged in successfully'], 200);
        }


        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
