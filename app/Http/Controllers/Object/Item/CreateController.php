<?php

namespace App\Http\Controllers\Object\Item;

use Inertia\Inertia;

class CreateController extends BaseController
{
    public function __invoke()
    {
        return Inertia::render('object/item/create', [
            'types' => $this->typeService->getMainItems(),
        ]);
    }
}
