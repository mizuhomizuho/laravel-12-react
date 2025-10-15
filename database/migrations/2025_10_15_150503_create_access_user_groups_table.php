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
        Schema::create('access_user_groups', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('access_group_id')->index();
            $table->foreign('user_id', 'user_access_group_user_fk')
                ->on('users')->references('id');
            $table->foreign('access_group_id', 'user_access_group_access_group_fk')
                ->on('access_groups')->references('id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('access_user_groups');
    }
};
