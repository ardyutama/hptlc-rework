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
            $table->string('markdown_path')->nullable();
            $table->string('featured_image')->nullable();
            $table->text('excerpt')->nullable();
            $table->integer('reading_time')->default(1);
            $table->integer('view_count')->default(0);
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index(['status', 'published_at']);
        });

        Schema::create('article_tag', function (Blueprint $table) {
            $table->foreignUlid('article_id')->constrained()->onDelete('cascade');
            $table->foreignUlid('tag_id')->constrained()->onDelete('cascade');
            $table->timestamps();

            $table->unique(['article_id', 'tag_id']);

            $table->index('article_id');
            $table->index('tag_id');
        });

        Schema::create('article_user', function (Blueprint $table) {
            $table->foreignUlid('article_id')->constrained('articles')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();

            $table->primary(['article_id', 'user_id']);

            $table->index('article_id');
            $table->index('user_id');
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
