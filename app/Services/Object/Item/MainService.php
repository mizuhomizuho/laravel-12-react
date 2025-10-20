<?php

namespace App\Services\Object\Item;

use App\Models\Object\Item\MainModel as ItemModel;
use App\Services\Object\Type\MainService as TypeService;

final class MainService extends BaseService
{
    public function __construct(
        protected TypeService $typeService = new TypeService(),
    )
    {
    }

    public function getMainTypes(): array
    {
        return $this->typeService->getMainItems();
    }

    public function store(array $data): ItemModel|string
    {
        return '';
//        try {
//            DB::beginTransaction();
//            $tags = $data['tags'];
//            $category = $data['category'];
//            unset($data['tags'], $data['category']);
//            $data['category_id'] = $this->getCategoryId($category);
//            $tagIds = $this->getTagIds($tags);
//            $post = ItemModel::create($data);
//            $post->tags()->attach($tagIds);
//            DB::commit();
//        } catch (\Exception $exception) {
//            DB::rollBack();
//            return $exception->getMessage();
//        }
//        return $post;
    }
}
