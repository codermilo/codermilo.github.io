

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

/*--- Form validation using vanilla JS ---*/
/*--- Theme picker (saving to local storage) ---*/
/*--- Cursor functionality using GSAP ---*/
