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
