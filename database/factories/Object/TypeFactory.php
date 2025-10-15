<?php

namespace Database\Factories\Object;

use App\Services\Object\Type\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Object\Type>
 */
class TypeFactory extends Factory
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
