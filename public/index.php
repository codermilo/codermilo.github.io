<?php

use Core\Session;

define('BASE_PATH', realpath(__DIR__ . '/../') . DIRECTORY_SEPARATOR);

require BASE_PATH . 'Core/functions.php';

spl_autoload_register(function ($class) {
    // Core\Database
    $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);

    require base_path("{$class}.php");
});

session_start();

require BASE_PATH . 'bootstrap.php';

$router = new \Core\Router();

$routes = require base_path('routes.php');
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

$router->route($uri, $method);

Session::unflash();
