<?php

$router->get('/', 'index.php');
$router->get('/about', 'about.php');
$router->get('/examples', 'examples.php');
$router->get('/scs', 'scs.php');
$router->post('/enquiries', 'enquiries/store.php');
