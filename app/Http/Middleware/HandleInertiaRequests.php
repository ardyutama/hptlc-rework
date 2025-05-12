<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth.user' => function () {
                if (auth()->check()) {
                    $user = auth()->user();

                    return [
                        'id' => $user->id,
                        'email' => $user->email,
                        'first_name' => $user->member->first_name ?? null,
                        'last_name' => $user->member->last_name ?? null,
                        'university_name' => $user->member->university_name ?? null,
                    ];
                }

                return null;
            },
            'flash' => fn () => $request->session()->get('flash'),
        ]);
    }
}
