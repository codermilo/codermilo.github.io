<?php

use Core\Session;

view("about.view.php", [
    'errors' => Session::get('errors'),
    'success' => Session::get(key: 'success') ?? null
]);

// dd(Session::get('errors'));
