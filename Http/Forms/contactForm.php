<?php

namespace Http\Forms;

use Core\Validator;

class ContactForm
{
    protected $errors = [];
    public function validate($fname, $lname, $email, $subject, $message )
    {
        // validate the form inputs
        if (! Validator::string($fname, 1, 50)) {
            $this->errors['message'] = 'There was an error submitting your enquiry, please try again';
        }
        
        if (! Validator::string($lname, 1, 50)) {
            $this->errors['message'] = 'There was an error submitting your enquiry, please try again';
        }

        if (! Validator::string($subject, 5, 255)) {
            $this->errors['message'] = 'There was an error submitting your enquiry, please try again';
        }

        if (! Validator::string($message, 5, 1000)) {
            $this->errors['message'] = 'There was an error submitting your enquiry, please try again';
        }

        if (! Validator::email($email)) {
            $this->errors['message'] = 'There was an error submitting your enquiry, please try again';
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
