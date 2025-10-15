<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('object_item_properties', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('object_item_id')->index();
            $table->unsignedBigInteger('object_property_id')->index();
            $table->foreign('object_item_id', 'object_item_object_property_object_item_fk')
                ->on('object_items')->references('id');
            $table->foreign('object_property_id', 'object_item_object_property_object_property_fk')
                ->on('object_properties')->references('id');

            $table->jsonb('value');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('object_item_properties');
    }
};
