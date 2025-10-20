<?php

namespace App\Models\Object\Item\Image;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

abstract class BaseModel extends Model
{
    use SoftDeletes;

    protected $table = 'object_item_images';

    protected $guarded = [];
}
