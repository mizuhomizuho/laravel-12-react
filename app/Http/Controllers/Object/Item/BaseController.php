<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Controllers\Controller;
use App\Services\Object\Item\MainService as ItemService;

abstract class BaseController extends Controller
{
    public function __construct(
        protected ItemService $itemService,
    )
    {
    }
}
