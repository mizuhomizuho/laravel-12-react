<?php

namespace Database\Seeders;

use App\Models\Access\Group as AccessGroupModel;
use App\Models\Object\Type as ObjectTypeModel;
use App\Models\User;
use App\Services\Object\Type\Service as ObjectTypeService;
use App\Services\Access\Group\Service as AccessGroupService;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    public function __construct(
        protected ObjectTypeService  $objectTypeService,
        protected AccessGroupService $accessGroupService,
    )
    {
    }

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        echo 'Seed the md database...';

        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => '123',
                'email_verified_at' => now(),
            ]
        );

//        dd($this->objectTypeService->getSeedItems());

        ObjectTypeModel::factory()->count(count($this->objectTypeService->getSeedItems()))->create();
        AccessGroupModel::factory()->count(count($this->accessGroupService->getSeedItems()))->create();
    }
}
