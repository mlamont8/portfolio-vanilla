$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 650) {
            $('nav').addClass('shrink');
            $('#logo img').attr('src', './images/logo-nav-alt.png');
        } else {
            $('nav').removeClass('shrink');
            $('#logo img').attr('src', './images/mlamontLogo.png');
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