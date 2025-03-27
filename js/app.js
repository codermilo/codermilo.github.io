

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
            section: document.querySelector('.content__item--home'),
            get chars() {
                return this.section.querySelectorAll('.anim__text .word > .char, .whitespace');
            }
        }, sidebar: {
            section: document.querySelector('.sidebar'),
            get links() {
                return this.section.querySelectorAll('.anim__text .word > .char, .whitespace, .social-links a');
            }
        }, nav: {
            section: document.querySelector('header'),
            get links() {
                return this.section.querySelectorAll('.anim__text .word > .char, .whitespace, h1, .theme-toggle__container div');
            }
        }, backdrop: {
            section: document.querySelector('.backdrop'),
            get chars() {
                return this.section.querySelectorAll('span');
            }
        }
    }
};

// On page load set up timeline and animate
window.addEventListener('DOMContentLoaded', () => {
    gsap.set(DOM.content.home.chars, {
        y: '-100%',
        opacity: 0
    });
    gsap.set(DOM.content.sidebar.links, {
        y: '-100%',
        opacity: 0
    });
    gsap.set(DOM.content.nav.links, {
        y: '-100%',
        opacity: 0
    });
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

    const timelineSettings = {
        staggerValue: 0.009,
        // staggerValue: 0.011,
        // staggerValue: 0.014,
        charsDuration: 2
    };

    let tl = gsap.timeline({ paused: true })
        .to(DOM.content.backdrop.chars, {
            ease: 'elastic.out(1,0.9)',
            y: '0%',
            x: 0,
            duration: 1.25
        })
        .staggerTo(DOM.content.nav.links, timelineSettings.charsDuration, {
            ease: 'Expo.easeOut',
            y: '0%',
            opacity: 1
        }, timelineSettings.staggerValue)
        .staggerTo(DOM.content.sidebar.links, timelineSettings.charsDuration, {
            ease: 'Expo.easeOut',
            y: '0%',
            opacity: 1
        }, timelineSettings.staggerValue)
        .staggerTo(DOM.content.home.chars, timelineSettings.charsDuration, {
            ease: 'Expo.easeOut',
            y: '0%',
            opacity: 1
        }, timelineSettings.staggerValue);

    tl.play();
    //Reverse the timeline after 2 seconds
    // setTimeout(() => {
    //     tl.reverse();
    // }, 15000);
});

/*--- Page transition using GSAP ---*/
/*--- Form validation using vanilla JS ---*/
/*--- Theme picker (saving to local storage) ---*/
/*--- Cursor functionality using GSAP ---*/