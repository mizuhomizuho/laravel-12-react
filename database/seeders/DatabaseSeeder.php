<?php

namespace Database\Seeders;

use App\Models\Access\Group as AccessGroupModel;
use App\Models\Object\Type as ObjectTypeModel;
use App\Models\User;
use App\Services\Access\Group\Service as AccessGroupService;
use App\Services\Object\Type\Service as ObjectTypeService;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
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

        ObjectTypeModel::factory()->count(count((new ObjectTypeService())->getSeedItems()))->create();
        AccessGroupModel::factory()->count(count((new AccessGroupService())->getSeedItems()))->create();
    }
}
