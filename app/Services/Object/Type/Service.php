<?php

namespace App\Services\Object\Type;

class Service
{
    private const TYPE_CATERING = 'catering';
    private const TYPE_RESTAURANT = 'restaurant';
    private const TYPE_PHOTOGRAPHER = 'photographer';
    private const TYPE_COTTAGES = 'cottages';

    public function getSeedItems(): array
    {
        return [[
            'title' => 'Кейтеринг',
            'code' => static::TYPE_CATERING,
        ], [
            'title' => 'Ресторан',
            'code' => static::TYPE_RESTAURANT,
        ], [
            'title' => 'Фотограф',
            'code' => static::TYPE_PHOTOGRAPHER,
        ], [
            'title' => 'Коттеджи',
            'code' => static::TYPE_COTTAGES,
        ],];
    }
}
