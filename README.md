# Specification: HPTLC Indonesia Researcher Portal

This document outlines the official specification, architecture, and development guidelines for the HPTLC Indonesia web application. Its purpose is to serve as the single source of truth for all stakeholders, developers, and future contributors.

## 1. Project Purpose & Vision

* **Purpose:** To serve as the central digital platform for the Indonesian HPTLC (High-Performance Thin-Layer Chromatography) community. The website will showcase Indonesian researchers and their work, facilitate knowledge sharing, and inform the public about the organization's activities.
* **Vision:** To elevate the visibility of Indonesian scientific contributions in the field of HPTLC, foster a collaborative research environment, and become the definitive, accessible resource for HPTLC knowledge in Indonesia.
* **Core Principles:**
    * **Performance & Accessibility:** The site must be lightweight, fast-loading on low-speed networks, and accessible to people with disabilities.
    * **Scalability:** The architecture must support future growth in users, content, and features without major overhauls.
    * **Ease of Use:** The user interface (UI) and user experience (UX) should be intuitive for both content consumers and researcher contributors.
    * **Discoverability:** Content must be structured for excellent Search Engine Optimization (SEO) to maximize reach.

## 2. Target Audience

1.  **Researchers & Members:** Active members of the HPTLC organization who need a platform to publish their work, gain visibility, and connect with peers. They are the primary content creators.
2.  **Public & Students:** Visitors (e.g., university students, aspiring scientists, journalists) who want to learn about HPTLC, find Indonesian research, and discover experts in the field.
3.  **Organization Administrators:** Internal users responsible for managing members, verifying content quality, and updating organizational information.

## 3. Core Modules & Functional Requirements

The application is composed of several key modules, as defined by the database schema.

* **User & Member Management**
    * **Schema:** `users`, `members` tables
    * Users can register and log in to the system.
    * Each `user` account has a `role` of either 'admin' or 'user'.
    * A registered `user` is linked to a `member` profile, which contains detailed information like name, university, and contact details.
    * Admins have permissions to manage users and site content.

* **Publications Module**
    * **Schema:** `publications`, `publication_user`, `publication_tag` tables
    * Authenticated researchers (`users`) can submit publications.
    * Each publication requires a `title` and `abstract`.
    * A binary `publication_file` (e.g., PDF) must be uploaded for each publication.
    * Publications can be associated with multiple authors (`publication_user`) and `tags` (`publication_tag`).
    * Admins can review and approve publications, setting a `published_at` date.

* **Articles Module**
    * **Schema:** `articles`, `article_user`, `article_tag` tables
    * This module is for less formal content like blog posts, news, and tutorials.
    * Articles have a `status` of 'draft', 'published', or 'archived'.
    * Content is stored as a path to a Markdown file (`markdown_path`).
    * Includes metadata like `reading_time` and `view_count` to be managed by the application.

* **Media & Gallery Module**
    * **Schema:** `media` table
    * A centralized system for managing all media assets (images, documents).
    * Media is polymorphic (`ulidMorphs('model')`), meaning it can be attached to various models like Articles, Publications, or Member profiles.
    * Handles file uploads, storage on disk, and potential image conversions/optimizations (`generated_conversions`).

## 4. Future Feature: AI-Assisted Writing Co-pilot

This feature will be a key differentiator, providing value to researcher members.

* **Goal:** To provide researchers with an AI tool that reviews their draft publications and articles to improve grammar, clarity, and style **without** altering the scientific context or meaning.
* **User Story:** "As a researcher, before submitting my article, I want to run it through an AI reviewer to catch grammatical errors and suggest more professional phrasing, so I can present my work with higher confidence."
* **AI Mandate & Constraints:**
    * **MUST:** Suggest improvements for grammar, spelling, punctuation, and sentence structure.
    * **MUST:** Preserve the original scientific context, terminology, and data.
    * **MUST NOT:** Introduce new scientific claims, alter data, or change core interpretations.
    * **SHOULD:** Provide suggestions as non-destructive overlays or trackable changes that the user can accept or reject individually.
    * **Input:** The text content from the article's `markdown_path` or publication's `abstract`.
    * **Output:** A JSON object containing an array of suggestions, each with the original text, suggested change, and an explanation for the change.

## 5. Technical Stack & Architecture

This project uses a modern, monolithic architecture with a clear separation of concerns.

* **Backend:** Laravel. The application logic, routing, and data management are handled by a robust PHP framework. The database schema is managed via Laravel Migrations.
* **Frontend:** React with Inertia.js. This provides the power and interactivity of a React single-page application (SPA) without the complexity of building and managing a separate API.
* **Styling:** Tailwind CSS with the `@tailwindcss/vite` plugin, using a utility-first approach for rapid, consistent, and responsive design.
* **UI Components:** A combination of Radix UI primitives (for accessibility) and other libraries like `lucide-react` (icons) and `sonner` (notifications) to build a high-quality, accessible component library.
* **Tooling:**
    * **Vite:** For fast frontend asset bundling and an optimized development experience.
    * **TypeScript:** For type safety in the frontend codebase.
    * **@biomejs/biome:** For code formatting and linting to maintain code quality.

## 6. Non-Functional Requirements & Guidelines

* **Performance:**
    * All images uploaded via the `media` manager must be optimized (e.g., converted to WebP, compressed).
    * Leverage Laravel's caching (`cache` table) for frequently accessed data like published articles, tags, and settings.
    * Utilize Vite's code-splitting and tree-shaking to keep JavaScript bundles small.
* **SEO:**
    * The `slug` column in `articles`, `publications`, and `tags` must be used to generate clean, human-readable URLs.
    * Inertia.js provides server-side rendering (SSR) capabilities which should be utilized to ensure pages are fully rendered for search engine crawlers.
    * Dynamically generate `<title>` and `<meta description>` tags for each article and publication page.
* **UI/UX & Responsiveness:**
    * All pages must be fully responsive and tested on screen sizes from 360px (mobile) to 1920px (desktop) and above.
    * Adhere to WCAG 2.1 AA accessibility standards. The use of Radix UI components provides a strong foundation for this.
    * Animations should be purposeful and smooth, using libraries like `tailwindcss-animate`.
