<?php

$router->get('/', 'index.php');
$router->get('/about', 'about.php');
$router->get('/case-studies', 'case-studies.php');
$router->get('/scs', 'scs.php');
$router->post('/enquiries', 'enquiries/store.php');
