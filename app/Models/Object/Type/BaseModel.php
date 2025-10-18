<?php

namespace App\Models\Object\Type;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

abstract class BaseModel extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'object_types';

    public const string TYPE_CATERING = 'catering';
    public const string TYPE_RESTAURANT = 'restaurant';
    public const string TYPE_PHOTOGRAPHER = 'photographer';
    public const string TYPE_PHOTOGRAPHERS_ALBUM = 'photographers_album';
    public const string TYPE_COTTAGES = 'cottages';
}
