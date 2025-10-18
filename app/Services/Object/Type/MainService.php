<?php

namespace App\Services\Object\Type;

final class MainService extends BaseService
{
    public function getItems(): array
    {
        $return = [];
        foreach ($this->mainModel->getMainItems() as $type) {
            $return[] = [
                'id' => $type->id,
                'title' => $type->title,
                'code' => $type->code,
            ];
        }
        return $return;
    }
}
