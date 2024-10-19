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
            $table->string('title');
            $table->text('abstract');
            $table->string('slug')->unique();
            $table->binary('publication_file')->nullable();
            $table->binary('content_markdown_file')->nullable();
            $table->timestamps();
        });

        Schema::create('publication_topics', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->foreignUlid('general_topic_id')->constrained('general_topics')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('publication_id')->constrained('publications')->onUpdate('cascade')->onDelete('cascade');
        });

        Schema::create('publication_authors', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->foreignUlid('publication_id')->constrained('publications')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUlid('member_id')->constrained('members')->onUpdate('cascade')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publication');
        Schema::dropIfExists('publication_topics');
    }
};
