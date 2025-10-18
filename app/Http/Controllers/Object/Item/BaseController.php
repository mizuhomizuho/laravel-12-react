<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Controllers\Controller;
use App\Services\Object\Type\MainService;

abstract class BaseController extends Controller
{
    public function __construct(
        protected MainService $typeMainService,
    )
    {
    }
}
