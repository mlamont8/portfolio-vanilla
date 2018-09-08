$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    })
    // Start mobile menu as closed
    $("#main-nav").hide();

    //  Menu toggle for mobile
    $('#navbar-toggle').on('click', function () {
        $('#main-nav').toggle();
    });

    // Smooth scroll on menu selection
    $('#main-nav a').on('click', function () {
        $('a').smoothScroll();
        $('#main-nav').toggle();
    });
});