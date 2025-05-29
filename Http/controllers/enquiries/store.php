<?php

use Core\Database;
use Core\Validator;
use Core\App;
use Core\Session;
use Http\Forms\ContactForm;

$db = App::resolve(Database::class);

$errors = [];

// dd($_POST);

// Get fields from post
$name = $_POST['name'];
$companyName = $_POST['companyName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$form = new ContactForm();

if ($form->validate($email, $phone, $message, $name)) {

    $db->query('INSERT INTO enquiries(name, companyName, email, phone, message) VALUES(:name, :companyName, :email, :phone, :message)', [
        'name' => $name,
        'companyName' => $companyName,
        'email' => $email,
        'phone' => $phone,
        'message' => $message
    ]);

    Session::flash('success', ['message' => 'Your message has been sent!']);
}


Session::flash('errors', $form->errors());

Session::flash('old', [
    'name' => $name,
    'companyName' => $companyName,
    'email' => $email,
    'phone' => $phone,
    'message' => $message
]);

return redirect('/contact');
