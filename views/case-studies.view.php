<!DOCTYPE html>
<html lang="en">

<head>
    <title>MILO | Coding Examples</title>
    <?php require 'partials/head.php'
    ?>
</head>

<body>
    <?php require 'partials/header.php'
    ?>

    <!--Fixed Position Backdrop -->
    <?php require 'partials/backdrop.php'
    ?>


    <div class="page-wrapper">
        <!-- Sidenav -->
        <?php require 'partials/sidebar.php'
        ?>

        <main>
            <section id="hero" class="scs code-examples">
                <h1>
                    <span class="stroke anim__text" data-splitting>Code </span><span class="wide-el anim__text"
                        data-splitting>Samples</span>
                </h1>
                <h2 class="anim__text" data-splitting>Sass - Color function</h2>
                <pre><code class="language-scss">
// Service functions
@each $theme, $color in $ui-colors {
    .service--#{$theme} {

        .service__inner {
            .icon-container {
                background-color: $color;
                border-color: $color;
            }
        }

        &:hover {
            .service__inner {
                background-color: $color;
                color: $color-white;

                .icon-container {
                    span {
                        color: $color !important;
                    }
                }

                [class^="btn--"],
                button {
                    color: $color ;
                }
            }
        }
    }
}
                    </code></pre>

                <h2>JS - Page entry transition using GSAP</h2>
                <pre><code class="language-js">
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
                    </code></pre>

                <h1>
                    <span class="wide-el anim__text" data-splitting>More </span><span class="stroke anim__text"
                        data-splitting> Coming Soon</span>
                </h1>
            </section>
        </main>
    </div>
    <div class="noise"></div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
    <script src="/js/jquery-3.7.1.min.js"></script>
    <script src="/js/app.js"></script>
</body>

</html>