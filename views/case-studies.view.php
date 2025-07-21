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
                <pre>
                    <code class="language-scss">
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
                    </code>
                </pre>

                <h2>JS - Page entry transition using GSAP</h2>
                <pre>
                    <code class="language-js">
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
                    </code>
                </pre>

                <h2>JS - Set Main Image on Image Gallery App</h2>
                <pre>
                        <code class="language-js">
                            // Function to populate or change main image. Pass param to use image from array
async function setMainImage(change) {

    // Disable buttons immediately while image changes and show loader
    setButtonsEnabled(false);
    $loader.addClass('visible');

    let url;
    // If you pass a param (i.e. to view a previously generated image)
    if (change) {
        // If param is forward then generate a new image and attach it to array as well
        if (change == "next") {
            index++;
            // If index is longer than imgArray then generate a new image
            if (index >= imgArray.length) {
                url = await generateUrl();
                imgArray.push(url);
            } else {
                // Get the URL of imgArray[index]
                url = await generateUrl(index);
            }

        } else if (change == "previous") {
            // If index is lower than 0 then generate new id and unshift it onto imgArray
            if (index <= 0) {
                // Don't change index if it's at 0
                url = await generateUrl();
                imgArray.unshift(url);
            } else {
                index--;
                url = await generateUrl(index);
            }
        }
    } else {
        // Generate random image when no param passed (Usually on window load)
        if (index !== 0) {
            index++;
        }
        url = await generateUrl();
        imgArray.push(url);
    }
    // Preload via Image() and only swap & re‑enable on load
    // Create new image element but don't attach it to the dom
    const img = new Image();
    // On img load set the mainImg background to the new URL
    img.onload = () => {
        $mainImg.css('background-image', `url(${url})`);
        setButtonsEnabled(true);
        $loader.removeClass('visible');
    };
    img.onerror = () => {
        // Error catch
        console.error('Failed to load', url);
        setButtonsEnabled(true);
        $loader.removeClass('visible');
    };
    // Async fetch URL and when download completes call onload
    img.src = url;
}
                        </code>
                </pre>

                <h2>PHP - Render An Employee Information Card</h2>
                <pre>
                        <code class="language-php">
                           
@props(['employee'])

&lt;li class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition p-4 flex flex-col justify-between"&gt;
    &lt;div class="flex items-center space-x-4 mb-4"&gt;
        @if ($employee-&gt;profileImg)
        &lt;img src="{{ asset('storage/' . $employee-&gt;profileImg) }}" alt="{{ $employee-&gt;first_name }} {{ $employee-&gt;last_name }}" class="w-16 h-16 object-cover rounded-full shadow"&gt;
        @else
        &lt;img src="{{ asset('images/default-employee-profile.jpg') }}" alt="Default Profile" class="w-16 h-16 object-cover rounded-full shadow"&gt;
        @endif

        &lt;div class="flex flex-col"&gt;
            &lt;h3 class="text-lg font-semibold text-gray-800 dark:text-white"&gt;
                &lt;a href="/employee/{{ $employee-&gt;id }}" class="hover:text-indigo-600 dark:hover:text-indigo-400"&gt;
                    {{ $employee-&gt;first_name }} {{ $employee-&gt;last_name }}
                &lt;/a&gt;
            &lt;/h3&gt;
            &lt;p class="text-sm text-gray-500 dark:text-gray-300"&gt;{{ $employee-&gt;email }}&lt;/p&gt;
            &lt;p class="text-sm text-gray-500 dark:text-gray-300"&gt;{{ $employee-&gt;phone }}&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400"&gt;
        &lt;a href="/company/{{ $employee-&gt;company-&gt;id }}" class="text-indigo-500 hover:underline"&gt;{{ $employee-&gt;company-&gt;name }}&lt;/a&gt;
        &lt;span&gt;Updated {{ $employee-&gt;updated_at-&gt;diffForHumans() }}&lt;/span&gt;
    &lt;/div&gt;
&lt;/li&gt;


                        </code>
                </pre>
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