<?php

namespace Core\Middleware;

class Guest
{
    public function handle()
    {
        // If session user
        if ($_SESSION['user'] ?? false) {
            redirect('/');
        }
    }
}
