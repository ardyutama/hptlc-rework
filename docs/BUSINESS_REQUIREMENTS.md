# Business Requirements Document (BRD)

**Project:** HPTLC Indonesia Researcher Portal
**Version:** 1.1 (Focused Scope)
**Date:** August 10, 2025

This document outlines the business goals, functional scope, and user requirements for the HPTLC Indonesia web application, with a primary focus on creating a dedicated portal for academic publications.

---

### 1. Project Vision & Business Goals

* **Vision:** To establish the HPTLC Indonesia web application as the premier digital hub for the nation's chromatography research community, enhancing visibility, fostering collaboration, and serving as the definitive public resource for HPTLC knowledge in Indonesia.
* **Business Goals:**
    * Increase active member engagement and submission of formal research publications.
    * Elevate the national and international profile of Indonesian HPTLC researchers.
    * Become a primary resource for students and industry professionals seeking Indonesian HPTLC research.
    * Improve operational efficiency in managing organizational content and member information.

### 2. Target Audience

* **Researchers & Members:** Active organizational members who need a platform to publish work, gain visibility, and collaborate.
* **Public & Students:** Visitors who want to learn about HPTLC, find Indonesian research, and identify experts.
* **Organization Administrators & Editors:** Internal users responsible for managing content, members, and ensuring quality standards.

### 3. Scope & Functional Requirements

The application will launch with the following modules and features, centered on managing researcher profiles and their formal publications.

**Module: User & Member Management**

* As a visitor, I want to register for an account to eventually contribute content.
* As an Admin, I want to review registered users and create official "Member" profiles for them to grant researcher privileges.
* As a Member, I want to manage my detailed profile, including my university, contact information, and biography.

**Module: Publications**

* As a Member, I want to submit my formal research publications, including an abstract and a full PDF file, for review.
* As a Member submitting a publication, I want to add other registered members as co-authors so all contributors are properly credited.
* As an Editor/Admin, I want to review submitted publications, provide feedback if revisions are needed, and approve them to be published.

**Module: AI-Assisted Writing Co-pilot (Future Feature)**

* As a Member, I want the AI to review my draft publication's abstract or text to improve grammar, clarity, and style without changing the scientific meaning, so I can present my work with higher confidence.

**Module: General Features**

* As a visitor, I want to browse and search for publications by topic, tag, or author.
* As a visitor, I want to read about the organization's history and mission on an "About Us" page.

### 4. Content Workflow & Governance

To ensure content quality and consistency, the following workflow will be implemented for all publications, managed by a `status` field and a dedicated `editor_feedback` field.

1.  **Submission:** A Member submits a Publication. The system saves it with a status of `in_review`.
2.  **Notification:** System administrators and editors are notified of the new submission.
3.  **Review:** An Editor or Admin reviews the submission against defined content standards (e.g., citation format, scientific relevance).
4.  **Feedback/Approval:**
    * **Approval:** If the submission meets all standards, the status is changed to `published`, and the publication becomes publicly visible.
    * **Revisions Needed:** If the submission requires changes, the Editor/Admin adds comments to the `editor_feedback` field, and its status is changed to `needs_revision`. The author is then notified.
5.  **Resubmission:** The author can edit their work based on the feedback and resubmit it, which returns the status to `in_review` for another cycle.
6.  **Archiving:** An Editor or Admin can change a publication's status to `archived` to unpublish it from the public portal while retaining it in the system for administrative purposes.

### 5. User Roles & Permissions

The application will have three primary roles with distinct permissions:

| Permission | User/Researcher | Editor | Admin |
| :--- | :---: | :---: | :---: |
| Submit Publication | ✅ | ✅ | ✅ |
| Edit Own Submissions (draft) | ✅ | ✅ | ✅ |
| Edit Any Submission | ❌ | ✅ | ✅ |
| Publish/Archive Content | ❌ | ✅ | ✅ |
| Manage Tags & Categories | ❌ | ✅ | ✅ |
| Manage User Profiles & Roles | ❌ | ❌ | ✅ |
| View Admin Dashboard | ❌ | ✅ | ✅ |

