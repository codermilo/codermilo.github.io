

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
/*--- Page transition using GSAP ---*/
/*--- Form validation using vanilla JS ---*/
/*--- Theme picker (saving to local storage) ---*/
/*--- Cursor functionality using GSAP ---*/