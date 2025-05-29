<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

// $articles = $db->query('select * from newsarticles')->get();


view("index.view.php", [
    // 'articles' => $articles,
]);
