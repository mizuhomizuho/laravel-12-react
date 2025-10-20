<?php

namespace App\Services\Object\Type;

final class MainService extends BaseService
{
    public function getMainItems(): array
    {
        $return = [];
        foreach ($this->typeModel->getMainItems() as $type) {
            $return[] = [
                'id' => $type->id,
                'title' => $type->title,
                'code' => $type->code,
            ];
        }
        return $return;
    }
}
