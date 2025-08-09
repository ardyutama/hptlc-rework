# Technical Specification Document (TSD)

**Project:** HPTLC Indonesia Researcher Portal
**Version:** 1.0
**Date:** August 10, 2025

This document provides the technical blueprint for developers building the HPTLC Indonesia web application.

---

### 1. System Architecture & Technical Stack

* **Architecture:** The application will be built as a modern monolith using the Laravel backend framework with a server-side rendered React frontend powered by Inertia.js.
* **Backend:** Laravel
* **Frontend:** React, Inertia.js, Vite
* **Styling:** Tailwind CSS
* **UI Components:** Radix UI, Lucide React
* **Database:** (Assumed MySQL/PostgreSQL, compatible with Laravel)
* **Development Tools:** TypeScript, Biome.js

### 2. Database Schema & Data Model Implementation

* **User/Member Model:** A `User` record holds login credentials. An associated `Member` model, linked one-to-one, holds the detailed researcher profile.
* **Article Content Storage:** Article content will be managed via Markdown. The application's editor will save `.md` files to the `storage/app/articles/` directory. The `articles.markdown_path` column will store the relative path to the generated file.
* **Publication File Management:** **The `binary('publication_file')` column in the `publications` migration will be removed.** All publication files (PDFs) must be managed using the existing polymorphic `media` table, which links a file to its parent `Publication` model.
* **Co-Author Implementation:** The `publication_user` and `article_user` pivot tables will be used to manage the many-to-many relationship between a piece of content and its authors. The system must support functionality to add/remove/reorder authors.

### 3. AI Feature Technical Specification

* **Input:** The AI service will accept a JSON object containing the text content to be reviewed. `{"content": "..."}`
* **Output:** The service must return a JSON object containing an array of suggestions. `{"suggestions": [{"original_text": "...", "suggested_change": "...", "explanation": "..."}]}`

### 4. API & Data Format Standards

* **Success Response (Single Item):** `{"data": {...}}`
* **Success Response (Collection):** `{"data": [...], "meta": {"current_page": 1, ...}}`
* **Error Response:** `{"error": {"message": "A user-friendly error message.", "code": "ERROR_CODE"}}`

### 5. Non-Functional Requirements (Technical Targets)

* **Performance:** Achieve a Google Lighthouse Performance score of 90+. Largest Contentful Paint (LCP) must be under 2.5 seconds on a standard 4G connection.
* **Accessibility:** Achieve WCAG 2.1 Level AA compliance. This will be validated using automated tools and manual audits.
* **Security:** Follow OWASP Top 10 security practices. All user input must be sanitized, and all queries must use the Eloquent ORM to prevent SQL injection.
* **Uptime:** Target a 99.9% service uptime.

### 6. Environment & Deployment Strategy

* **Branching:** The GitFlow branching model (`main`, `#{issue number}-{name}`) will be used.
* **CI/CD:** A CI/CD pipeline will be established. Pushing to `develop` will trigger automated tests and deployment to the staging server. Merging to `main` will trigger deployment to production.

