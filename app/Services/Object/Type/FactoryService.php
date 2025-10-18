<?php

namespace App\Services\Object\Type;

use App\Models\Object\Type\BaseModel;

final class FactoryService extends BaseService
{
    public function getSeedItems(): array
    {
        return [[
            'title' => 'Кейтеринг',
            'code' => BaseModel::TYPE_CATERING,
        ], [
            'title' => 'Ресторан',
            'code' => BaseModel::TYPE_RESTAURANT,
        ], [
            'title' => 'Фотограф',
            'code' => BaseModel::TYPE_PHOTOGRAPHER,
        ], [
            'title' => 'Альбом фотографа',
            'code' => BaseModel::TYPE_PHOTOGRAPHERS_ALBUM,
        ], [
            'title' => 'Коттеджи',
            'code' => BaseModel::TYPE_COTTAGES,
        ],];
    }
}
