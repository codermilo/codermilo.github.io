// Function to remove alert messages from page
$(document).on('click', '.alert-close', function () {
    $(this).parent().remove();
});


// Code for JS Form Validation

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Phone regex
const phoneRegex = /^(?:(?:\+44\s?|0)(?:1|2|3|7)(?:\d\s?){8,9})$/;

// Function to validate input fields
const validator = (formData) => {

    // Initialise an array to store potential errors
    const errors = [];

    // Extract form fields
    const { name, email, phone, message } = formData;


    // Check formData for errors
    if (name.trim() == '' || name.trim().length > 255) {
        errors.push('Please enter a valid name');
    }

    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email');
    }

    if (!phoneRegex.test(phone)) {
        errors.push('Please enter a valid uk phone number');
    }

    if (message.trim() == '' || message.trim().length > 255 || message.trim().length < 5) {
        errors.push('Please enter a valid message');
    }


    if (errors.length > 0) {
        // Return errors array
        return errors;
    }
    // Return a falsey value for boolean check
    return false;
};

$(document).on('submit', '#contact-form', function (e) {

    // Clear previous error messages
    $('.message-area').html('');

    const form = document.querySelector('#contact-form');
    const formData = Object.fromEntries(new FormData(form).entries());

    const errors = validator(formData);

    // If errors comes back as not false (i.e. not empty), then prevent default and append error toasts to page
    if (errors.length > 0) {
        e.preventDefault();
        console.log('false: submit button clicked and found errors');

        // Append new error messages after looping through errors array
        errors.forEach(errorMessage => {
            const el = `<div class="error">${errorMessage}<button type="button" class="alert-close" aria-label="Close">&#x00D7;</button></div>`
            $('.message-area').append(el);
        })
    }
})