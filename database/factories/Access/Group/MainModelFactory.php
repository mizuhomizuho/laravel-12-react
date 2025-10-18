<?php

namespace Database\Factories\Access\Group;

use App\Services\Access\Group\FactoryService as AccessGroupFactoryService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Access\Group\MainModel>
 */
class MainModelFactory extends Factory
{
    private AccessGroupFactoryService $accessGroupFactoryService;

    private int $definitionIteration = 0;

    public function __construct()
    {
        $this->accessGroupFactoryService = new AccessGroupFactoryService();
        parent::__construct(...func_get_args());
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = $this->accessGroupFactoryService->getSeedItems();
        $item = $types[$this->definitionIteration];
        $this->definitionIteration++;
        return $item;
    }
}
