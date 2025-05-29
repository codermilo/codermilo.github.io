<?php

use Core\Session;

view("case-studies.view.php", [
    'errors' => Session::get('errors'),
    'success' => Session::get(key: 'success') ?? null
]);