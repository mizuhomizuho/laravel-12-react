<?php

namespace Database\Factories\Access;

use App\Services\Access\Group\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Access\Group>
 */
class GroupFactory extends Factory
{
    private int $definitionIteration = 0;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = (new Service())->getSeedItems();
        $item = $types[$this->definitionIteration];
        $this->definitionIteration++;
        return $item;
    }
}
