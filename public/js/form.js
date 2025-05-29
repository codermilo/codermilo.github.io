/*--- Form validation using vanilla JS ---*/
const form = document.querySelector("form");

// Add event listener to my form for inputs
// Define the regex once
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

form.addEventListener("input", (event) => {
    const { name, value, id } = event.target;
    const input = event.target;

    switch (name) {
        case "f-name":
        case "l-name":
        case "subject":
        case "message":
            if (value.trim() !== "") {
                input.classList.add("valid");
                input.classList.remove("invalid");
            } else {
                // input.classList.add("invalid");
                input.classList.remove("valid");
            }
            break;
        case "email":
            if (value === "") {
                input.classList.remove("valid", "invalid", "incomplete");
            } else if (emailRegex.test(value)) {
                input.classList.remove("invalid", "incomplete");
                input.classList.add("valid");
            } else {
                input.classList.remove("valid", "invalid");
                input.classList.add("incomplete");
            }
            break;
        default:
            console.log("nothing selected");
    }
});


// Add event listener to my form for submit action
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // List all inputs to check
    const fName = document.querySelector("#first-name");
    const lName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");
    const errorMessage = document.querySelector(".error-message");

    // Set a state for if the formdata is valid
    let isValid = true;

    if (fName.value.trim() !== "") {
        fName.classList.add("valid");
    } else {
        fName.classList.remove("valid", "incomplete");
        fName.classList.add("invalid");
        isValid = false;
    }

    if (lName.value.trim() !== "") {
        lName.classList.add("valid");
    } else {
        lName.classList.remove("valid", "incomplete");
        lName.classList.add("invalid");
        isValid = false;
    }

    if (subject.value.trim() !== "") {
        subject.classList.add("valid");
    } else {
        subject.classList.remove("valid", "incomplete");
        subject.classList.add("invalid");
        isValid = false;
    }

    if (message.value.trim() !== "") {
        message.classList.add("valid");
    } else {
        message.classList.remove("valid", "incomplete");
        message.classList.add("invalid");
        isValid = false;
    }

    // Check if email is valid
    if (emailRegex.test(email.value)) {
        email.classList.remove("invalid", "incomplete");
        email.classList.add("valid");
    } else {
        email.classList.remove("valid", "incomplete");
        email.classList.add("invalid");
        isValid = false;
    }

    // Prevent event action if formdata is invalid
    if (!isValid) {
        console.log("Contact form is not valid");
        errorMessage.classList.add("show");
        setTimeout(() => {
            errorMessage.classList.remove("show");
        }, 1500);
    } else {
        alert("Contact form submitted!");
    }

})