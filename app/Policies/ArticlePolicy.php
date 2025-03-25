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
    public function view(?User $user, Article $article): bool
    {
        // Published articles can be viewed by anyone
        if ($article->isPublished()) {
            return true;
        }

        // Drafts can only be viewed by authorized users
        return $user && ($this->isAuthor($user, $article) || $user->hasRole('admin'));
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        // Users with proper permissions can create articles
        return $user->hasPermissionTo('create articles') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Article $article): bool
    {
        // Authors and admins can update articles
        return $this->isAuthor($user, $article) || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Article $article): bool
    {
        // Authors and admins can delete articles
        return $this->isAuthor($user, $article) || $user->hasRole('admin');
    }

    /**
     * Determine if the user is an author of the article.
     */
    private function isAuthor(User $user, Article $article): bool
    {
        return $article->users()->where('user_id', $user->id)->exists();
    }
}
