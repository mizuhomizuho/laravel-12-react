<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Requests\Object\Item\StoreRequest;
use App\Models\Object\Item;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request)
    {
        return to_route(
            'object.item.edit',
            ['item' => Item::create($request->validated())->id]
        );
    }
}
