<?php

namespace App\Models\Object\Type;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

final class MainModel extends BaseModel
{
    public function getMainItems(): Collection
    {
        return Cache::remember(__CLASS__ . '::' . __FUNCTION__, 3600 * 24 * 8, function () {
            $types = [
                self::TYPE_CATERING,
                self::TYPE_RESTAURANT,
                self::TYPE_PHOTOGRAPHER,
                self::TYPE_COTTAGES,
            ];
            return self::whereIn('code', $types)->get();
        });
    }
}
