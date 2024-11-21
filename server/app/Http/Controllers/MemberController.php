<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
            return response()->json(['message' => 'Server Error', 'error' => $e->getMessage()], 500);
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

    public function updateMemberInformation(Request $request, $memberId): JsonResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'university_name' => 'required|string|max:255',
            'study_program_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
        ]);

        try {
            $member = Member::find($memberId);

            if (!$member) {
                return response()->json(['message' => 'Member Not Found'], 404);
            }

            $member->update($request->only([
                'first_name',
                'last_name',
                'university_name',
                'study_program_name',
                'phone_number',
            ]));

            return response()->json(['message' => 'Update Successful', 'member' => $member]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Server Error', 'error' => $e->getMessage()], 500);
        }
    }
}
