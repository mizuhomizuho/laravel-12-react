<?php

namespace App\Services\Object\Type;

final class FactoryService extends BaseService
{
    public function getSeedItems(): array
    {
        return [[
            'title' => 'Кейтеринг',
            'code' => $this->typeModel::TYPE_CATERING,
        ], [
            'title' => 'Ресторан',
            'code' => $this->typeModel::TYPE_RESTAURANT,
        ], [
            'title' => 'Фотограф',
            'code' => $this->typeModel::TYPE_PHOTOGRAPHER,
        ], [
            'title' => 'Альбом фотографа',
            'code' => $this->typeModel::TYPE_PHOTOGRAPHERS_ALBUM,
        ], [
            'title' => 'Коттеджи',
            'code' => $this->typeModel::TYPE_COTTAGES,
        ],];
    }
}
