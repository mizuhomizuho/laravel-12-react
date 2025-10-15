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
        Schema::create('object_items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamps();

            $table->softDeletes();

            $table->unsignedBigInteger('object_type_id')->index();
//            $table->index('object_type_id', 'object_item_object_type_idx');
            $table->foreign('object_type_id', 'object_item_object_type_fk')
                ->on('object_types')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('object_items');
    }
};
