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
        Schema::create('articles', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('markdown_file')->nullable();
            $table->string('image_url')->nullable();
            $table->text('excerpt')->nullable();
            $table->integer('reading_time')->default(1);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        Schema::create('article_tag', function (Blueprint $table) {
            $table->foreignUlid('article_id')->constrained('articles')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('tag_id')->constrained('tags')->onUpdate('cascade')->onDelete('cascade');
            $table->primary(['article_id', 'tag_id']);
        });

        Schema::create('article_user', function (Blueprint $table) {
            $table->foreignUlid('article_id')->constrained('articles')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');

            $table->primary(['article_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
        Schema::dropIfExists('article_tag');
        Schema::dropIfExists('article_user');
    }
};
