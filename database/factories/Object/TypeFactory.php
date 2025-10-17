<?php

namespace Database\Factories\Object;

use App\Services\Object\Type\Service as ObjectTypeService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Object\Type>
 */
class TypeFactory extends Factory
{
    private ObjectTypeService $objectTypeService;

    private int $definitionIteration = 0;

    public function __construct()
    {
        $this->objectTypeService = new ObjectTypeService();
        parent::__construct(...func_get_args());
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = $this->objectTypeService->getSeedItems();
        $item = $types[$this->definitionIteration];
        $this->definitionIteration++;
        return $item;
    }
}
