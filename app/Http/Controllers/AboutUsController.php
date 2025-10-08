<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutUsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('about/index');
    }
}
