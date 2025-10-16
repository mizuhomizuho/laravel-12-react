<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Controllers\Controller;
use App\Models\Object\Item;
use Inertia\Inertia;

class EditController extends Controller
{
    public function __invoke(Item $item)
    {
        return Inertia::render('object/item/edit', [
            'item' => [
                'id' => $item->id,
                'title' => $item->title,
                'object_type_id' => $item->object_type_id,
            ]
        ]);
    }
}
