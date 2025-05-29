<?php

use Core\Session;

view("scs.view.php", [
    'errors' => Session::get('errors'),
    'success' => Session::get(key: 'success') ?? null
]);
