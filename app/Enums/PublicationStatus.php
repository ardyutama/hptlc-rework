<?php

namespace App\Enums;

enum PublicationStatus: string
{
    case IN_REVIEW = 'in_review';
    case NEEDS_REVISION = 'needs_revision';
    case PUBLISHED = 'published';
    case ARCHIVED = 'archived';
}
