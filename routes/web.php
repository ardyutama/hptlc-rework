<?php

use App\Http\Controllers\PublicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MemberController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('welcome/index');
})->name('welcome');

Route::resource('publications', PublicationController::class);

Route::get('articles', function () {
    return Inertia::render('articles/index');
})->name('articles');

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('/profile', [MemberController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [MemberController::class, 'update'])->name('profile.update');
});

Route::get('/api/{any}', function () {
    return response()->json(['message' => 'Not Found'], 404);
})->where('any', '.*');

Route::fallback(function () {
    return Inertia::render('Error/404');
});

require __DIR__.'/auth.php';
