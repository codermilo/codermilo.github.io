

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

/*--- Banner text animation using GSAP and Splitting.js ---*/
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


// Exit function 
function pageLeaveAnimation() {
    return gsap.timeline()
        .to(".backdrop span", {
            ease: 'elastic.out(1,0.9)',
            duration: 1.75,
            x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
            y: (index) => (index < 2 ? '-100%' : '100%')
        })
        .staggerTo(
            ".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div",
            timelineSettings.charsDuration,
            {
                ease: 'Expo.easeIn',
                y: '-100%',
                opacity: 0
            },
            0.004,
            "-=1.5"
        );
}

// Homepage transitions for entering and leaving -- To unblur the backdrop

// When exiting home, animate the backdrop from clear (no blur) to blurry.
function homeExitAnimation() {
    return gsap.timeline()
        .to(".backdrop", {
            filter: "blur(10px)",
            duration: 0.75,
            ease: "power2.out"
        })
        .to(".backdrop span", {
            ease: 'elastic.out(1,0.9)',
            duration: 1.75,
            x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
            y: (index) => (index < 2 ? '-100%' : '100%')
        })
        .staggerTo(
            ".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div",
            timelineSettings.charsDuration,
            {
                ease: 'Expo.easeIn',
                y: '-100%',
                opacity: 0
            },
            0.004,
            "-=1.5"
        );
}

// When entering home, animate the backdrop from blurry to clear.
function homeEnterAnimation() {
    // First, animate the backdrop from blurry to clear.
    // Adjust the blur values and duration as needed.
    const tlBlur = gsap.timeline();
    tlBlur.fromTo(
        ".backdrop",
        { filter: "blur(10px)" },
        { filter: "blur(0px)", duration: 0.75, ease: "power2.out" }
    );

    // Set up text elements so they’re initially off-screen.
    gsap.set(
        ".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div",
        { y: "-100%", opacity: 0 }
    );

    // Individually position backdrop chars (if needed for your Splitting.js setup)
    gsap.set(DOM.content.backdrop.chars[0], { y: "-100%", x: "-100%" });
    gsap.set(DOM.content.backdrop.chars[1], { y: "-100%", x: "100%" });
    gsap.set(DOM.content.backdrop.chars[2], { y: "100%", x: "-100%" });
    gsap.set(DOM.content.backdrop.chars[3], { y: "100%", x: "100%" });

    // Create the timeline for the text animation.
    let tlText = gsap.timeline();
    tlText
        .to(".backdrop span", {
            ease: "elastic.out(1,0.9)",
            y: "0%",
            x: 0,
            duration: 2.25
        })
        .staggerTo(
            ".anim__text .word > .char, .whitespace, .social-links a, .logo__container h1, .theme-toggle__container div",
            timelineSettings.charsDuration,
            {
                ease: "Expo.easeOut",
                y: "0%",
                opacity: 1
            },
            timelineSettings.staggerValue,
            "-=1.75" // Starts this tween 1.75 seconds before the previous one ends
        );

    // Combine the blur and text timelines in a master timeline.
    const masterTl = gsap.timeline();
    // Play the blur animation first...
    masterTl.add(tlBlur);
    // ...then start the text animation, overlapping by 0.5 seconds if desired.
    masterTl.add(tlText, "-=0.5");

    masterTl.play();
}





/*--- Page transition using Barba JS ---*/

barba.init({
    transitions: [
        // Transition when leaving the home page (home -> any)
        {
            name: 'home-exit',
            from: { namespace: ['home'] },
            async leave(data) {
                const done = this.async();
                // Run the home exit animation (clear -> blur)
                const tl = homeExitAnimation();
                tl.eventCallback("onComplete", done);
            },
            async enter(data) {
                // For entering non-home pages, run your default page enter animation
                Splitting();
                homeEnterAnimation();
            },
        },
        // Transition when entering the home page (any -> home)
        {
            name: 'home-enter',
            to: { namespace: ['home'] },
            async leave(data) {
                // Run default leave animation for non-home pages
                const done = this.async();
                const tl = pageLeaveAnimation();
                tl.eventCallback("onComplete", done);
            },
            async enter(data) {
                // Run the home enter animation (blur -> clear)
                const tl = homeEnterAnimation();
                // You can chain additional animations here if needed (e.g., text in)
            },
        },
        // Default transition for pages not involving home
        {
            name: 'default-transition',
            async leave(data) {
                const done = this.async();
                const tl = pageLeaveAnimation();
                tl.eventCallback("onComplete", done);
            },
            async enter(data) {
                Splitting();
                pageEnterAnimation();
            },
        },
    ]
});




/*--- Theme picker (saving to local storage) ---*/
/*--- Cursor functionality using GSAP ---*/


