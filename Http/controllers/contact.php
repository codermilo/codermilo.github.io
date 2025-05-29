<?php

use Core\Session;

view("contact.view.php", [
    'errors' => Session::get('errors'),
    'success' => Session::get(key: 'success') ?? null
]);

// dd(Session::get('errors'));
