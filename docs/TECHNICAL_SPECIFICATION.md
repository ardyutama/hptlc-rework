# Technical Specification Document (TSD)

**Project:** HPTLC Indonesia Researcher Portal
**Version:** 1.5 (Asset Handling & Final Scope Cleanup)
**Date:** September 1, 2025

This document provides the technical blueprint for developers building the HPTLC Indonesia web application. This version formalizes the storage location for static assets and removes legacy references to out-of-scope features.

---

### 1. System Architecture & Technical Stack

* **Architecture:** The application will be built as a modern monolith using the Laravel backend framework with a server-side rendered React frontend powered by Inertia.js.
* **Backend:** Laravel.
* **Frontend:** React, Inertia.js, Vite.
* **Styling:** Tailwind CSS.
* **UI Components:** Radix UI, Lucide React.
* **Database:** (Assumed MySQL/PostgreSQL, compatible with Laravel).
* **Development Tools:** TypeScript, Biome.js.

### 2. Database Schema & Data Model Implementation

* **User/Member Model:** A `User` record holds login credentials. An associated `Member` model, linked one-to-one, holds the detailed researcher profile.
* **Publication File Management:** All publication files (e.g., PDFs) will be managed using the Spatie Laravel Media Library package. Files will be attached to the `Publication` model via the polymorphic `media` table.
* **Co-Author Implementation:** The `publication_user` pivot table will be used to manage the many-to-many relationship between a publication and its authors.

### 3. Application Architecture & Design Patterns

This section outlines the architectural patterns that must be followed to ensure the application is decoupled, testable, and maintainable.

* **Principle: Form Requests for Validation & Authorization**
    * All incoming requests that handle data submission (e.g., POST, PUT, PATCH) must be validated and authorized using a dedicated **Form Request class**. These classes will be located in the `app/Http/Requests` directory.
* **Principle: Service Layer with Contracts**
    * All core business logic must be encapsulated within **Service Classes** located in the `app/Services` directory.
    * All Service Classes **must implement a corresponding Contract (Interface)** located in the `app/Contracts` directory.
    * The binding between a contract and its concrete implementation must be registered within a Service Provider (e.g., `AppServiceProvider.php`).

### 4. Frontend (Client-Side) Architecture

The client-side application code, located in the `resources/js` directory, must adhere to the following structure and principles to ensure modularity, performance, and maintainability.

#### Static Asset Handling

* To ensure optimal performance and separation from the JavaScript build process, all static UI assets **must** be stored in the Laravel `public` directory.
* The required path for images is `public/assets/img/`.

#### Directory Purpose and Guidelines:

The `resources/js` directory contains the source code for the React application and is organized as follows:

* **`components/`**: This directory houses all reusable React components, organized into subdirectories such as `common/`, `domain/`, `layout-helpers/`, and `ui/`.
* **`hooks/`**: For custom React hooks that encapsulate reusable stateful logic.
* **`layouts/`**: Contains the main page layout components that wrap the content of the `pages/` directory.
* **`lib/`**: A library folder for general utility functions, helper classes, or external library configurations.
* **`pages/`**: The core directory for Inertia.js. Each component file in this folder corresponds to a specific page of the application, such as `login/`, `profile/`, `publications/`, `register/`, and `welcome/`.
* **`types/`**: Contains all TypeScript type definitions, interfaces, and type declarations (`.d.ts` files) for the project.
* **`main.tsx`**: The main entry point for the React application that initializes Inertia.js.

### 5. AI Feature Technical Specification

* **Input:** The AI service will accept a JSON object containing the text content to be reviewed.
* **Output:** The service must return a JSON object containing an array of suggestions.

### 6. API & Data Format Standards

* **Success Response (Single Item):** `{"data": {...}}`.
* **Success Response (Collection):** `{"data": [...], "meta": {"current_page": 1, ...}}`.
* **Error Response:** `{"error": {"message": "...", "code": "..."}}`.

### 7. Non-Functional Requirements (Technical Targets)

* **Performance:** Achieve a Google Lighthouse Performance score of 90+. Largest Contentful Paint (LCP) must be under 2.5 seconds on a standard 4G connection.
* **Accessibility:** Achieve WCAG 2.1 Level AA compliance.
* **Security:** Follow OWASP Top 10 security practices.
* **Uptime:** Target a 99.9% service uptime.

### 8. Environment & Deployment Strategy

* **Branching:** The GitFlow branching model (`main`, `#{issue number}-{name}`) will be used.
* **CI/CD:** A CI/CD pipeline will be established. Pushing to `develop` will trigger automated tests and deployment to the staging server. Merging to `main` will trigger deployment to production.
