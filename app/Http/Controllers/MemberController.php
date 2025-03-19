<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class MemberController extends Controller
{
    /**
     * Get all members.
     *
     * @return JsonResponse
     */
    public function getAllMembers(): JsonResponse
    {
        try {
            $members = Member::all();
            return response()->json($members);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getMemberInformation($memberId): JsonResponse
    {
        try {
            $member = Member::with(['user' => function ($query)
            {
                $query->select('id', 'email');
            }])->findOrFail($memberId);

            if (!$member) {
                return response()->json(['message' => 'Member Not Found'], 404);
            }

            return response()->json($member, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'error' => $e->getMessage()], 500);
        }
    }

        public function edit(): Response
        {
            $user = Auth::user();
            $member = $user->member;

            return Inertia::render('profile/index', [
                'user' => $user,
                'member' => $member,
            ]);
        }

    public function update(Request $request): JsonResponse | RedirectResponse
    {
        try {
            $user = Auth::user();

            if (!$user || !$user->member) {
                return response()->json([
                    'success' => false,
                    'message' => 'Member not found'
                ], 404);
            }

            $member = $user->member;

            $validated = $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'university_name' => 'nullable|string|max:255',
                'phone_number' => 'nullable|string|max:20',
                'study_program_name' => 'nullable|string|max:255',
                'gender' => 'nullable|string|in:male,female,other',
                'birth_date' => 'nullable|date|before:today',
            ]);

            $filteredData = array_filter($validated, function ($value) {
                return $value !== null;
            });

            // Only update fields that have changed to minimize database operations
            $changedData = array_filter($filteredData, function ($value, $key) use ($member) {
                return $member->{$key} !== $value;
            }, ARRAY_FILTER_USE_BOTH);

            if (!empty($changedData)) {
                // Use database transaction for atomicity
                DB::beginTransaction();
                try {
                    $member->update($changedData);
                    DB::commit();
                } catch (\Exception $e) {
                    DB::rollBack();
                    return $request->wantsJson()
                        ? response()->json([
                            'success' => false,
                            'message' => 'Failed to update profile information'
                        ], 500)
                        : back()->with('error', 'Failed to update profile information');
                }
            }

            return $request->wantsJson()
                ? response()->json([
                    'success' => true,
                    'message' => 'Profile information updated successfully',
                    'data' => $member->fresh()
                ])
                : back()->with('success', 'Profile information updated successfully.');
        } catch (ValidationException $e) {
            return $request->wantsJson()
                ? response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $e->errors()
                ], 422)
                : back()->withErrors($e->errors())->withInput();
        } catch (\Exception $e) {
            return $request->wantsJson()
                ? response()->json([
                    'success' => false,
                    'message' => 'An error occurred'
                ], 500)
                : back()->with('error', 'An error occurred');
        }
    }
}
