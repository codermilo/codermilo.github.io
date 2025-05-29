<?php

namespace Http\Forms;

use Core\Validator;

class ContactForm
{
    protected $errors = [];
    public function validate($email, $phone, $message, $name)
    {
        // validate the form inputs
        if (! Validator::string($name, 1, 255)) {
            $this->errors['name'] = 'A valid name is required.';
        }

        if (! Validator::string($message, 5, 1000)) {
            $this->errors['message'] = 'The message must be at least 5 characters.';
        }

        if (! Validator::phone($phone)) {
            $this->errors['phone'] = 'The telephone format is incorrect.';
        }

        if (! Validator::email($email)) {
            $this->errors['email'] = 'Please enter a valid email address.';
        }

        return empty($this->errors);
    }

    public function errors()
    {
        return $this->errors;
    }

    public function error($field, $message)
    {
        $this->errors[$field] = $message;
    }
}
