<?php

namespace Database\Factories\Access;

use App\Services\Access\Group\Service as AccessGroupService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Access\Group>
 */
class GroupFactory extends Factory
{
    private AccessGroupService $accessGroupService;

    private int $definitionIteration = 0;

    public function __construct()
    {
        $this->accessGroupService = new AccessGroupService();
        parent::__construct(...func_get_args());
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = $this->accessGroupService->getSeedItems();
        $item = $types[$this->definitionIteration];
        $this->definitionIteration++;
        return $item;
    }
}
