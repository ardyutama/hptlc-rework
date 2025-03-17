<?php

use App\Http\Controllers\PublicationController;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::get('/', function () {
    return Inertia::render('welcome/index');
})->name('welcome');

Route::middleware('guest')->group(function () {
    Route::resource('publications', PublicationController::class);

    Route::get('/articles', function () {
        return Inertia::render('articles/index');
    });

    Route::get('register', [RegisterController::class, 'showRegisterForm'])->name('register.form');
    Route::post('register', [RegisterController::class, 'register'])->name('register');

    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);

});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::get('/api/{any}', function () {
    return response()->json(['message' => 'Not Found'], 404);
})->where('any', '.*');

Route::fallback(function () {
    return Inertia::render('Error/404');
});

