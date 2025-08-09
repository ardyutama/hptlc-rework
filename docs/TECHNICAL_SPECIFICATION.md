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

### 5. Project File Structure
Excellent question. For a project of this nature, it is highly recommended to keep the Business Requirements and Technical Specifications in separate files.

Here’s why separating them is a software development best practice:

Audience Separation: The two documents serve different audiences.

Business Requirements (BRD): This is for project managers, stakeholders, and the business team. It's written in plain language and focuses on what the application should do and why.

Technical Specification (TSD): This is for developers, architects, and the QA team. It's highly technical and focuses on how the application will be built.
Keeping them separate ensures that each audience can find the information they need without getting lost in details irrelevant to their role.

Maintainability: As the project evolves, the technical details in the TSD will change more frequently than the core business goals in the BRD. Separating them makes each document easier to update and manage over time.

Clarity of Purpose: Having distinct files like BUSINESS_REQUIREMENTS.md and TECHNICAL_SPECIFICATION.md makes the purpose of each document immediately clear.

A good practice is to create a /docs folder in the root of your project to hold them.

Here are both documents converted to Markdown format, ready for you to save as separate files.

File: docs/BUSINESS_REQUIREMENTS.md
Markdown

# Business Requirements Document (BRD)

**Project:** HPTLC Indonesia Researcher Portal
**Version:** 1.0
**Date:** August 10, 2025

This document outlines the business goals, functional scope, and user requirements for the HPTLC Indonesia web application.

---

### 1. Project Vision & Business Goals

* **Vision:** To establish the HPTLC Indonesia web application as the premier digital hub for the nation's chromatography research community, enhancing visibility, fostering collaboration, and serving as the definitive public resource for HPTLC knowledge in Indonesia.
* **Business Goals:**
    * Increase active member engagement and content submission.
    * Elevate the national and international profile of Indonesian HPTLC researchers.
    * Become a primary resource for students and industry professionals seeking information on HPTLC.
    * Improve operational efficiency in managing organizational content and member information.

### 2. Target Audience

* **Researchers & Members:** Active organizational members who need a platform to publish work, gain visibility, and collaborate.
* **Public & Students:** Visitors who want to learn about HPTLC, find Indonesian research, and identify experts.
* **Organization Administrators & Editors:** Internal users responsible for managing content, members, and ensuring quality standards.

### 3. Scope & Functional Requirements

The application will include the following modules and features, described through user stories:

**Module: User & Member Management**

* As a visitor, I want to register for an account to eventually contribute content.
* As an Admin, I want to review registered users and create official "Member" profiles for them to grant researcher privileges.
* As a Member, I want to manage my detailed profile, including my university, contact information, and biography.

**Module: Publications**

* As a Member, I want to submit my formal research publications, including an abstract and a full PDF file, for review.
* As a Member submitting a publication, I want to add other registered members as co-authors so all contributors are properly credited.
* As an Editor/Admin, I want to review, approve, and publish submitted publications to make them publicly available.

**Module: Articles**

* As a Member, I want to write and submit less formal content, such as blog posts, news, or tutorials, in a draft state.
* As an Editor/Admin, I want to review and publish articles to share timely information with the community.

**Module: AI-Assisted Writing Co-pilot (Future Feature)**

* As a Member, I want the AI to review my draft article or publication to improve grammar, clarity, and style without changing the scientific meaning, so I can present my work with higher confidence.

**Module: General Features**

* As a visitor, I want to browse and search for articles and publications by topic, tag, or author.
* As a visitor, I want to view a gallery of the organization's activities.
* As a visitor, I want to read about the organization's history and mission on an "About Us" page.

### 4. Content Workflow & Governance

To ensure content quality and consistency, the following workflow will be implemented:

1.  **Submission:** A Member submits an Article or Publication, which enters the system with an `in_review` status.
2.  **Notification:** System administrators and editors are notified of the new submission.
3.  **Review:** An Editor or Admin reviews the submission against defined content standards (e.g., citation format, word count).
4.  **Feedback/Approval:**
    * If approved, the content is published.
    * If revisions are needed, the submission is returned to the author with comments, and its status is changed to `needs_revision`.
5.  **Resubmission:** The author can edit and resubmit their work.

### 5. User Roles & Permissions

The application will have three primary roles with distinct permissions:

| Permission | User/Researcher | Editor | Admin |
| :--- | :---: | :---: | :---: |
| Submit Article/Publication | ✅ | ✅ | ✅ |
| Edit Own Submissions (draft) | ✅ | ✅ | ✅ |
| Edit Any Submission | ❌ | ✅ | ✅ |
| Publish/Archive Content | ❌ | ✅ | ✅ |
| Manage Tags & Categories | ❌ | ✅ | ✅ |
| Manage User Profiles & Roles | ❌ | ❌ | ✅ |
| View Admin Dashboard | ❌ | ✅ | ✅ |

File: docs/TECHNICAL_SPECIFICATION.md
Markdown

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

