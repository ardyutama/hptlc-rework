<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

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
            'gender' => 'required|string',
            'birth_date' => 'required|date',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string',
        ]);

        DB::beginTransaction();

        try {
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
                'gender' => $request->gender,
                'birth_date' => $request->birth_date,
                'joined_date' => now()->toDate(),
                'user_id' => $user->id,
            ]);

            DB::commit();
            Auth::login($user);

            return response()->json(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 500);
        }
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
        $request->session()->invalidate();

        $request->session()->regenerate();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
