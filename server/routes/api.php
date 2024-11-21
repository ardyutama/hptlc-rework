<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MemberController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('members')->group(function () {
    Route::get('/', [MemberController::class, 'getAllMembers']);
    Route::get('/{memberId}', [MemberController::class, 'getMemberInformation']);
    Route::put('/{memberId}', [MemberController::class, 'updateMemberInformation']);
});


