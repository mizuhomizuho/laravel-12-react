<?php

namespace App\Services\Access\Group;

class Service
{
    private const GROUP_ADMIN = 'admin';

    public function getSeedItems(): array
    {
        return [[
            'title' => 'Администратор',
            'code' => static::GROUP_ADMIN,
        ],];
    }
}
