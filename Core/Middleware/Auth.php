<?php

namespace Core\Middleware;

class Auth
{
    public function handle()
    {
        // If no session user
        if (! $_SESSION['user'] ?? false) {
            redirect('/');
        }
    }
}
