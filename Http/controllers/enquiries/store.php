<?php

use Core\Database;
use Core\App;
use Core\Session;
use Http\Forms\ContactForm;

$db = App::resolve(Database::class);

$errors = [];

// dd($_POST);

// Get fields from post
$fname = $_POST['f-name'];
$lname = $_POST['l-name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$form = new ContactForm();

if ($form->validate($fname, $lname, $email, $subject, $message)) {

    $db->query('INSERT INTO enquiry(fname, lname, email, subject, message) VALUES(:fname, :lname, :email, :subject, :message)', [
        'fname' => $fname,
        'lname' => $lname,
        'email' => $email,
        'subject' => $subject,
        'message' => $message
    ]);

    Session::flash('success', ['message' => 'Your message has been sent!']);
}


Session::flash('errors', $form->errors());

Session::flash('old', [
    'fname' => $fname,
    'lname' => $lname,
    'email' => $email,
    'subject' => $subject,
    'message' => $message
]);


return redirect('/#contact');
