<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\PublicationController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

Route::middleware('auth:sanctum')->prefix('api/v1')->group(function () {
    Route::prefix('members')->group(function () {
        Route::get('/', [MemberController::class, 'getAllMembers']);
        Route::get('/{memberId}', [MemberController::class, 'getMemberInformation']);
        Route::put('/{memberId}', [MemberController::class, 'updateMemberInformation']);
    });

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::prefix('tags')->group(function () {
        Route::post('/', [TagController::class, 'store']);
        Route::delete('/{tagId}', [TagController::class, 'destroy']);
    });

    Route::prefix('publications')->group(function () {
        Route::get('/search', [PublicationController::class, 'index']);
        Route::get('/{id}', [PublicationController::class, 'show']);
        Route::post('/', [PublicationController::class, 'store']);
        Route::post('{id}', [PublicationController::class, 'update']);
        Route::delete('/{id}', [PublicationController::class, 'destroy']);
    });
});

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

Route::get('/', function () {
    return Inertia::render('welcome/welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


