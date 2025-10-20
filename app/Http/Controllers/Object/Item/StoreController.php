<?php

namespace App\Http\Controllers\Object\Item;

use App\Http\Requests\Object\Item\StoreRequest;
use App\Http\Resources\Object\Item\ItemResource;
use App\Models\Object\Item\MainModel as ItemModel;

final class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request)
    {
        return 'xxxxxxxxxx';

        $result = $this->itemService->store($request->validated());

        if ($result instanceof ItemModel) {
//            return new ItemResource($result);
            return to_route(
                'object.item.edit',
                ['item' => new ItemResource($result)]
            );
        }

        return $result;


//        if ($request->hasFile('image')) {
//
////            dd(
////                $request->file('image'),
////            );
//
//            foreach ($request->file('image') as $image) {
//
//                dd(
////                    $image,
//                    $image->getFileInfo(),
//                    $image->getMimeType(),
//                    $image->getSize(),
//                );
//
//                $hash = md5($image->getClientOriginalName());
//                $image->store('images', 'public');
//                $subPath = substr($hash, 0, 2)
//                    . '/' . substr($hash, 2, 2)
//                    . '/' . substr($hash, 4, 2);
//                $originalPath = $request->file('image')->store(
//                    "object/item/$subPath",
//                    'public'
//                );
//            }
//
//            \App\Models\Object\Item\Image\MainModel
//
////            dd($request->file('image'));
////            $request->file('image')
////                ->store('images', 'public');
//        }
////        return to_route(
////            'object.item.edit',
////            ['item' => ItemModel::create($request->validated())->id]
////        );
    }
}
