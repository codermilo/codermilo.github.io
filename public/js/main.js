

// Function to reveal side menu

function clickEvent(event) {
    let $target = $(event.target);
    const $mainContent = $('#main-content');
    const $hamburger = $('.hamburger-btn');
    const $sideMenu = $('#side-menu')

    // Conditional to check if #main-content has active, if so then check if click was registered outside of #side-menu

    if ($target.is($hamburger) && !$hamburger.hasClass('active')) {
        $hamburger.addClass('active');
        $mainContent.addClass('active');
        $stickyHeaderContainer.addClass('side-menu-open');
    } else
        if (!$sideMenu.has($target).length && $mainContent.hasClass('active') && $hamburger.hasClass('active')) {
            $mainContent.removeClass('active');
            $hamburger.removeClass('active');
            $stickyHeaderContainer.removeClass('side-menu-open');
        }

}

$('body').on('click', clickEvent);


// Function to track user scroll and reveal sticky header
let lastKnownScrollPosition = 0;
const $headerContainer = $('#header');
const $stickyHeaderContainer = $('#sticky-header');
const $stickyHeader = $('#sticky-header header');
// Set the sticky header's height based on the outerHeight of the element so the transition works properly
let headerHeight = $headerContainer.outerHeight();
$stickyHeaderContainer.css('height', headerHeight);

// Declare a debounce timeout
let debounceTimeout;


document.addEventListener("scroll", () => {
    // Clear any previously set timeout to debounce the scroll event
    clearTimeout(debounceTimeout);

    // Set timeout to run function after 50ms 
    debounceTimeout = setTimeout(() => {
        // If scrollY is below main nav
        if ($(this).scrollTop() > $headerContainer.outerHeight()) {
            $stickyHeaderContainer.css({ 'visibility': 'visible', 'display': 'hidden' });

            // If user scrolls down, the sticky nav stays above the top of the screen
            if ($(this).scrollTop() > lastKnownScrollPosition) {
                $stickyHeader.removeClass('show-nav');
                $stickyHeader.addClass('hide-nav');
                $stickyHeaderContainer.css('pointerEvents', 'none');
            } else {
                $stickyHeader.removeClass('hide-nav');
                $stickyHeader.addClass('show-nav');
                $stickyHeaderContainer.css('pointerEvents', 'inherit');
            }
        } else {
            // Else if scrollY is above main nav

            // If user scrolls down, the sticky nav leaves again
            if ($(this).scrollTop() > lastKnownScrollPosition) {
                $stickyHeader.removeClass('show-nav');
                $stickyHeader.addClass('hide-nav');
                $stickyHeaderContainer.css('pointerEvents', 'none');
            }

            // If user has scrolled to the top, hide the sticky header
            if ($(this).scrollTop() == 0) {
                $stickyHeader.removeClass('show-nav hide-nav');
                $stickyHeaderContainer.css({ 'pointerEvents': 'none', 'visibility': 'hidden' });
            }
        }
        lastKnownScrollPosition = $(this).scrollTop();
    }, 50);
})

// Small function to recalculate the value of the nav height on window resize
$(window).resize(() => {
    headerHeight = $headerContainer.outerHeight();
});

// Function to create pop up for cookies and then save your choices so you don't get that message again 

const modal = document.querySelector('.cookie-container');
const acceptBtn = document.querySelector('.accept-btn');
const settingsBtn = document.querySelector('.settings-btn');

// Click function to set values of cookieAnswer and cookieConsent in local storage
modal.addEventListener("click", (event) => {
    if (event.target == acceptBtn || event.target == settingsBtn) {
        if (event.target == acceptBtn) {
            window.localStorage.setItem('cookieAnswer', true);
            window.localStorage.setItem('cookieConsent', true);
        } else if (event.target == settingsBtn) {
            window.localStorage.setItem('cookieAnswer', true);
            window.localStorage.setItem('cookieConsent', false);
        }
        modal.classList.remove('visible');
    }
})


// Check if local storage cookies is answered, if not then show modal
if (!window.localStorage.cookieAnswer || JSON.parse(window.localStorage.cookieAnswer) != true) {
    modal.classList.add('visible');
}

// Event listener for manage consent button click
const manageWidget = document.querySelector('.consent-tag');
manageWidget.addEventListener("click", () => {
    modal.classList.add('visible');
})

