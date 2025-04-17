<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Article $article): bool
    {
        // Published articles can be viewed by anyone
        if ($article->status === 'published') {
            return true;
        }

        // Draft and archived articles can only be viewed by authors or admins
        return $this->isAuthorOrAdmin($user, $article);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Article $article): bool
    {
        return $this->isAuthorOrAdmin($user, $article);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Article $article): bool
    {
        return $this->isAuthorOrAdmin($user, $article);
    }

    /**
     * Determine whether the user can change the status of the model.
     */
    public function changeStatus(User $user, Article $article): bool
    {
        return $this->isAuthorOrAdmin($user, $article);
    }

    /**
     * Determine whether the user is an author of the article or an admin.
     */
    private function isAuthorOrAdmin(User $user, Article $article): bool
    {
        return $user->isAdmin() || $article->users->contains($user->id);
    }
}
