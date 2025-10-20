<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('object_item_images', function (Blueprint $table) {

            $table->softDeletes();

            $table->id();

            $table->unsignedBigInteger('object_item_id')->index();
            $table->foreign('object_item_id')->on('object_items')->references('id');

            $table->string('name');
            $table->unsignedInteger('size');
            $table->string('mime_type', 10);
            $table->string('path');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('object_item_images');
    }
};
