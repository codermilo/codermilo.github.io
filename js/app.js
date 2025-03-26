

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

let DOM = {
    content: {
        home: {
            section: document.querySelector('.content__item--home'),
            get chars() {
                return this.section.querySelectorAll('.anim__text .word > .char, .whitespace');
            },
            isVisible: true
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    gsap.set(DOM.content.home.chars, {
        y: '-100%',
        opacity: 0
    });

    const timelineSettings = {
        staggerValue: 0.014,
        charsDuration: 0.5
    };

    let tl = gsap.timeline({ paused: true })
        .staggerTo(DOM.content.home.chars, timelineSettings.charsDuration, {
            ease: 'Power3.easeIn',
            y: '0%',
            opacity: 1
        }, timelineSettings.staggerValue);

    tl.play();

    // Reverse the timeline after 2 seconds
    // setTimeout(() => {
    //     tl.reverse();
    // }, 2000);
});

/*--- Page transition using GSAP ---*/
/*--- Form validation using vanilla JS ---*/
/*--- Theme picker (saving to local storage) ---*/
/*--- Cursor functionality using GSAP ---*/