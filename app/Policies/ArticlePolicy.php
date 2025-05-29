<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;

class ArticlePolicy
{
    /**
     * Determine whether the user can view any models.
     * Accessible by anyone (guests included) or logged-in users.
     */
    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, Article $article): bool
    {
        if ($article->status === 'published') {
            return true;
        }

        if (! $user) {
            return false;
        }

        if ($user->role === 'admin') {
            return true;
        }

        return $article->authors->contains($user);
    }

    public function create(User $user): bool
    {
        return $user !== null;
    }

    public function update(User $user, Article $article): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        return $article->authors->contains($user);
    }

    public function delete(User $user, Article $article): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        return $article->authors->contains($user);
    }

    public function restore(User $user, Article $article): bool
    {
        return $user->role === 'admin';
    }

    public function forceDelete(User $user, Article $article): bool
    {
        return $user->role === 'admin';
    }
}
