<?php

namespace App\Services\Access\Group;

final class FactoryService extends BaseService
{
    public function getSeedItems(): array
    {
        return [[
            'title' => 'Администратор',
            'code' => static::GROUP_ADMIN,
        ],];
    }
}
