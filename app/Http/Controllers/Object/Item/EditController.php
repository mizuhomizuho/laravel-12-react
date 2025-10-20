<?php

namespace App\Http\Controllers\Object\Item;

use App\Models\Object\Item\MainModel;
use Inertia\Inertia;

final class EditController extends BaseController
{
    public function __invoke(MainModel $item)
    {
        return Inertia::render('object/item/edit', [
            'item' => [
                'id' => $item->id,
                'title' => $item->title,
                'object_type_id' => $item->object_type_id,
            ],
            'types' => $this->typeService->getMainItems(),
        ]);
    }
}
