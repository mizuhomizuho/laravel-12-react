<?php

namespace App\Models\Object\Item;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

abstract class BaseModel extends Model
{
    use SoftDeletes;

    protected $table = 'object_items';

    protected $guarded = [];
}
