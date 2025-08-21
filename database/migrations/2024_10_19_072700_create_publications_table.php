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
        Schema::create('publications', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('title')->unique();
            $table->text('abstract');
            $table->string('slug')->unique();
            $table->string('status')->default('in_review');
            $table->dateTime('published_at')->nullable();
            $table->timestamps();
        });

        Schema::create('publication_tag', function (Blueprint $table) {
            $table->foreignUlid('publication_id')->constrained('publications')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('tag_id')->constrained('tags')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();

            $table->primary(['publication_id', 'tag_id']);

            $table->index('publication_id');
            $table->index('tag_id');
        });

        Schema::create('publication_user', function (Blueprint $table) {
            $table->foreignUlid('publication_id')->constrained('publications')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();

            $table->primary(['publication_id', 'user_id']);

            $table->index('publication_id');
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publication');
        Schema::dropIfExists('publication_tag');
        Schema::dropIfExists('publication_user');
    }
};
