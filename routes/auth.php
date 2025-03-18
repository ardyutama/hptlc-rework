<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisterController::class, 'showRegisterForm']);
    Route::post('register', [RegisterController::class, 'register'])->name('register');

    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});
