<?php

namespace App\Services\Object\Type;

use App\Models\Object\Type;

class Service
{
    private const TYPE_CATERING = 'catering';
    private const TYPE_RESTAURANT = 'restaurant';
    private const TYPE_PHOTOGRAPHER = 'photographer';
    private const TYPE_PHOTOGRAPHERS_ALBUM = 'photographers_album';
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
        ],[
            'title' => 'Альбом фотографа',
            'code' => static::TYPE_PHOTOGRAPHERS_ALBUM,
        ], [
            'title' => 'Коттеджи',
            'code' => static::TYPE_COTTAGES,
        ],];
    }

    public function getMainItems(): array
    {
        $mainTypes  = [
            static::TYPE_CATERING,
            static::TYPE_RESTAURANT,
            static::TYPE_PHOTOGRAPHER,
            static::TYPE_COTTAGES,
        ];
        $return = [];
        foreach (Type::whereIn('code', $mainTypes)->get() as $mainType) {
            $return[] = [
                'id' => $mainType->id,
                'title' => $mainType->title,
                'code' => $mainType->code,
            ];
        }
        return $return;
    }
}
