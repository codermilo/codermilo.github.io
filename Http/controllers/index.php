<?php

use Core\Session;


view("index.view.php", [
    'errors' => Session::get('errors'),
    'success' => Session::get(key: 'success') ?? null
]);
