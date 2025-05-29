<?php

require_once __DIR__ . '/vendor/autoload.php';

// Load .env file from the project root
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/');
$dotenv->load();

return [
    'database' => [
        'host' => $_ENV['DB_HOST'],
        'port' => $_ENV['DB_PORT'],
        'dbname' => $_ENV['DB_DATABASE'],
        'charset' => 'utf8mb4',
        'username' => $_ENV['DB_USERNAME'],
        'password' => $_ENV['DB_PASSWORD']
    ],

    'services' => [
        'prerender' => [
            'token' => '',
            'secret' => ''
        ]
    ]
];
