

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
        $hamburger.addClass('active');
    } else {
        $menu.removeClass('open');
        $hamburger.removeClass('active');
    }
})

// Calling splitting JS to split text for animation
Splitting();

/*--- Banner text animation using GSAP and Splitting.js ---*/
// Grabbing backdrop elements that should be animated
let DOM = {
    content: {
        backdrop: {
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
    charsDuration: .5
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
        .staggerTo(
            ".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div",
            timelineSettings.charsDuration, {
            ease: 'Expo.easeOut',
            y: '0%',
            opacity: 1
        },
            timelineSettings.staggerValue,
            "-=1.75"
        );
    // Play the animation
    tl.play();
}

// Call the page enter animation on page load
pageEnterAnimation();


/*--- Theme picker (saving to local storage) ---*/
// Grab theme toggle button and state from local storage
const $themeChecker = $('#theme');

// Check local theme value and set $theme to checked if true
$(document).ready(function () {
    // Retrieve the stored theme
    const storedTheme = window.localStorage.getItem('data-theme');
    console.log("Stored theme:", storedTheme);

    // Set the theme on the <html> element (or anywhere you need)
    if (storedTheme) {
        $('html').attr('data-theme', storedTheme);
    }

    // If you have a theme toggle checkbox, update its state based on the stored theme
    if (storedTheme === 'dark') {
        $('#theme').prop('checked', true);
    } else {
        $('#theme').prop('checked', false);
    }
});


// Add event listener for user click on theme button
$($themeChecker).on('click', () => {
    console.log("$themeChecker[0].checked", $themeChecker[0].checked);
    console.log("$themeChecker[0]", $themeChecker[0]);
    if ($themeChecker[0].checked) {
        // If checkbox value is true (dark theme enabled), then set data-theme to dark
        window.localStorage.setItem('data-theme', 'dark');
    } else {
        window.localStorage.setItem('data-theme', 'light');
    }
    console.log("localTheme", window.localStorage.getItem('data-theme'));
})

/*--- Cursor functionality using GSAP ---*/


