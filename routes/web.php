<?php

use App\Http\Controllers\PublicationController;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;



Route::middleware('guest')->group(function () {

    Route::get('/', function () {
        return Inertia::render('welcome/index');
    })->name('welcome');

    Route::resource('publications', PublicationController::class);

    Route::get('/articles', function () {
        return Inertia::render('articles/index');
    });

    Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);

    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);

    Route::post('/token', [AuthController::class, 'token'])->name('token');
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('/user', [AuthController::class, 'user'])->name('current-user');
});



//Route::middleware('auth:sanctum')->group(function () {
//    Route::prefix('members')->group(function () {
//        Route::get('/', [MemberController::class, 'getAllMembers']);
//        Route::get('/{memberId}', [MemberController::class, 'getMemberInformation']);
//        Route::put('/{memberId}', [MemberController::class, 'updateMemberInformation']);
//    });
//
//    Route::get('/user', function (Request $request) {
//        return $request->user();
//    });
//
//    Route::prefix('tags')->group(function () {
//        Route::post('/', [TagController::class, 'store']);
//        Route::delete('/{tagId}', [TagController::class, 'destroy']);
//    });
//
//    Route::prefix('publications')->group(function () {
//        Route::get('/search', [PublicationController::class, 'index']);
//        Route::get('/{id}', [PublicationController::class, 'show']);
//        Route::post('/', [PublicationController::class, 'store']);
//        Route::post('{id}', [PublicationController::class, 'update']);
//        Route::delete('/{id}', [PublicationController::class, 'destroy']);
//    });
//});
//
//Route::prefix('auth')->group(function () {
//    Route::post('register', [AuthController::class, 'register']);
//    Route::post('login', [AuthController::class, 'login']);
//    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
//});
//
//Route::get('/welcome', function () {
//    return Inertia::render('welcome/index', [
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
//
//Route::get('/articles', function () {
//    return Inertia::render('articles/index');
//});
//
//Route::get('/publications', function () {
//    return Inertia::render('publications/index');
//});

Route::get('/api/{any}', function () {
    return response()->json(['message' => 'Not Found'], 404);
})->where('any', '.*');

Route::fallback(function () {
    return Inertia::render('Error/404');
});

