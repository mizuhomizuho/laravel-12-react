<?php

namespace App\Services\Object\Type;

use App\Models\Object\Type\MainModel as TypeModel;

abstract class BaseService
{
    public function __construct(
        protected TypeModel $typeModel = new TypeModel(),
    )
    {
    }
}
