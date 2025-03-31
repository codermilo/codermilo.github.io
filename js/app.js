

/*--- Slide out functionality ---*/
// !!! To fix:
// - the menu jumping to 100vw at larger screen sizes during transition 

const $menu = $('.sidebar');
const $hamburger = $('.hamRotate');

/* If window resizes and it's total width is below 
768px then close menu and set toggle to close */
$(window).resize(function () {
    if ($(window).width() >= 768) {
        $menu.removeClass('open');
        $hamburger.removeClass('active');
    }
});

/*
Listen out for click and if clicked and hamburger has 
active class then add open class to menu otherwise remove open class
*/
$('header').on('click', '.hamRotate', () => {
    const isTrue = $hamburger.hasClass("active");
    if (isTrue && $(window).width() < 768) {
        $menu.addClass('open');
    } else {
        $menu.removeClass('open');
    }
})

/*--- Banner text animation using GSAP and Splitting.js ---*/
// Splitting Banner text into chars
Splitting();

// Grabbing content that should be animated
let DOM = {
    content: {
        home: {
            section: document.querySelector('body'),
            get chars() {
                return this.section.querySelectorAll('.anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div');
            }
        }, backdrop: {
            section: document.querySelector('.backdrop'),
            get chars() {
                return this.section.querySelectorAll('span');
            }
        }
    }
};

// Settings that every element will get
const timelineSettings = {
    staggerValue: 0.004,
    charsDuration: 1.25
};

// On function call set up timeline and animate
function pageEnterAnimation() {
    // Set every element to animated to -100% Y so it is out of view before the animation starts
    gsap.set(".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div", {
        y: '-100%',
        opacity: 0
    });

    // Individually animating the backdrop chars as they have different starting points
    gsap.set(DOM.content.backdrop.chars[0], {
        y: '-100%',
        x: '-100%'
    });
    gsap.set(DOM.content.backdrop.chars[1], {
        y: '-100%',
        x: '100%'
    });
    gsap.set(DOM.content.backdrop.chars[2], {
        y: '100%',
        x: '-100%'
    });
    gsap.set(DOM.content.backdrop.chars[3], {
        y: '100%',
        x: '100%'
    });

    // Create the timeline for the animations
    let tl = gsap.timeline({ paused: true })
        .to(".backdrop span", {
            ease: 'elastic.out(1,0.9)',
            y: '0%',
            x: 0,
            duration: 2.25
        })

        .staggerTo(".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div", timelineSettings.charsDuration, {
            ease: 'Expo.easeOut',
            y: '0%',
            opacity: 1
        }, timelineSettings.staggerValue);

    // Play the animation
    tl.play();

};

// Exit function 
function pageLeaveAnimation() {
    return gsap.timeline()
        .to(".backdrop span", {
            ease: 'elastic.out(1,0.9)',
            y: '-100%',
            x: 0,
            duration: 2.25
        })
        .staggerTo(".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div", timelineSettings.charsDuration, {
            ease: 'Expo.easeIn',
            y: '-100%',
            opacity: 0
        }, 0.004);
}

/*--- Page transition using Barba JS ---*/
function pageTransition() {
    var tl = gsap.timeline();

    tl.to(".transition", {
        duration: 1,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut",
    });

    tl.to(".transition", {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
        delay: 0.2,
    });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.to("h1", {
        top: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.75,
    });
}

function delay(n) {
    n = n || 0;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        },
    ],
});

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
/*--- Theme picker (saving to local storage) ---*/
/*--- Cursor functionality using GSAP ---*/


