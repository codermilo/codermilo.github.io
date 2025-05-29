// Call Owl Carousel plugin
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoHeight: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true,
        dotsEach: true,
        nav: true
    });

    $('.partners').owlCarousel({
        loop: true,
        autoHeight: true,
        autoWidth: true,
        items: 8,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: !0,
        dots: false,
        dotsEach: false,
        nav: false
    })

    $('.clients').owlCarousel({
        loop: true,
        autoHeight: true,
        autoWidth: true,
        items: 5,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: !0,
        dots: false,
        dotsEach: false,
        nav: false
    })
});