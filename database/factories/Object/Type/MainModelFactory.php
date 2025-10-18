<?php

namespace Database\Factories\Object\Type;

use App\Services\Object\Type\FactoryService as ObjectTypeFactoryService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Object\Type\MainModel>
 */
class MainModelFactory extends Factory
{
    private ObjectTypeFactoryService $objectTypeFactoryService;

    private int $definitionIteration = 0;

    public function __construct()
    {
        $this->objectTypeFactoryService = new ObjectTypeFactoryService();
        parent::__construct(...func_get_args());
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = $this->objectTypeFactoryService->getSeedItems();
        $item = $types[$this->definitionIteration];
        $this->definitionIteration++;
        return $item;
    }
}
