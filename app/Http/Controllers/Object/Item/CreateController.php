<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CreateController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('object/item/create');
    }
}
