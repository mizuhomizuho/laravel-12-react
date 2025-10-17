<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Controllers\Controller;
use App\Services\Object\Type\Service;

class BaseController extends Controller
{
    public function __construct(
        protected Service $typeService,
    )
    {
    }
}
