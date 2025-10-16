<?php

use App\Http\Controllers\Object\ItemController;
use Illuminate\Support\Facades\Route;

Route::group([
    'namespace' => 'App\Http\Controllers\Object\Item',
    'prefix' => 'object/item',
    'middleware' => ['auth', 'verified'],
], function () {
    Route::get('create', 'CreateController')->name('object.item.create');
    Route::post('', 'StoreController')->name('object.item.store');
    Route::get('{item}/edit', 'EditController')->name('object.item.edit');
});
