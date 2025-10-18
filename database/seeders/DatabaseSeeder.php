<?php

namespace Database\Seeders;

use App\Models\Access\Group\MainModel as AccessGroupModel;
use App\Models\Object\Type\MainModel as ObjectTypeModel;
use App\Models\User;
use App\Services\Access\Group\FactoryService as AccessGroupFactoryService;
use App\Services\Object\Type\FactoryService as ObjectTypeFactoryService;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    public function __construct(
        protected ObjectTypeFactoryService  $objectTypeFactoryService,
        protected AccessGroupFactoryService $accessGroupFactoryService,
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

        ObjectTypeModel::factory()->count(count($this->objectTypeFactoryService->getSeedItems()))->create();
        AccessGroupModel::factory()->count(count($this->accessGroupFactoryService->getSeedItems()))->create();
    }
}
