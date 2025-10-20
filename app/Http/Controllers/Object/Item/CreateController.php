<?php

namespace App\Http\Controllers\Object\Item;

use Inertia\Inertia;

final class CreateController extends BaseController
{
    public function __invoke()
    {
        return Inertia::render('object/item/create', [
            'types' => $this->itemService->getMainTypes(),
        ]);
    }
}
