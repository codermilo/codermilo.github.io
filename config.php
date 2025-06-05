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

    'mailer' => [
        'host' => $_ENV['MAIL_HOST'],
        'SMTP_auth' => $_ENV['MAIL_SMTP_AUTH'],
        'username' => $_ENV['MAIL_USERNAME'],
        'password' => $_ENV['MAIL_PASSWORD'],
        'port' => $_ENV['MAIL_PORT'],
    ]
];
