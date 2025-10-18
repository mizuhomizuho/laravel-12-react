<?php

namespace App\Services\Object\Type;

use App\Models\Object\Type\MainModel;

abstract class BaseService
{
    protected MainModel $mainModel;

    public function __construct()
    {
        $this->mainModel = new MainModel();
    }
}
