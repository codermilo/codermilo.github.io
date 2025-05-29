<?php

use Core\Session;

view("examples.view.php", [
    'errors' => Session::get('errors'),
    'success' => Session::get(key: 'success') ?? null
]);