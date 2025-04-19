<?php

use App\Http\Controllers\ArticleController;
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

    Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
    Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
    Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
    Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');
    Route::get('/articles/{article}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
    Route::put('/articles/{article}', [ArticleController::class, 'update'])->name('articles.update');
    Route::delete('/articles/{article}', [ArticleController::class, 'destroy'])->name('articles.destroy');

    // Additional article status management routes
    Route::patch('/articles/{article}/publish', [ArticleController::class, 'publish'])->name('articles.publish');
    Route::patch('/articles/{article}/archive', [ArticleController::class, 'archive'])->name('articles.archive');
    Route::patch('/articles/{article}/draft', [ArticleController::class, 'draft'])->name('articles.draft');
});

Route::get('/api/{any}', function () {
    return response()->json(['message' => 'Not Found'], 404);
})->where('any', '.*');

Route::fallback(function () {
    return Inertia::render('Error/404');
});

require __DIR__.'/auth.php';
