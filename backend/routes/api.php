<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ActionController;

Route::get('/users/{id}', [ActionController::class, 'getUsers']);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/getmsgs', [ActionController::class, 'getMessages']);
    Route::post('/sendmsgs', [ActionController::class, 'sendMessage']);
    Route::post('/save-code', [ActionController::class, 'saveCode']);
    Route::post('/getCodes', [ActionController::class, 'getCodes']);
    
});
