$(document).ready(function () {

    $(window).on('load', function () {
        $('.spinner').fadeOut(500);
    });

    // Fallback in case the load event fires before the handler attaches.
    setTimeout(function () {
        $('.spinner').fadeOut(500);
    }, 1200);

    // Smooth transition with fixed-navbar offset.
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        var target = $($anchor.attr('href'));
        if (!target.length) {
            return;
        }

        $('html, body').stop().animate({
            scrollTop: target.offset().top - 70
        }, 800, 'swing');
        event.preventDefault();
    });

    // Scroll spy.
    $('body').scrollspy({
        target: '.navbar-default',
        offset: 90
    });

    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    function openModal(selector) {
        $(selector).modal('show');
    }

    $('.jav').on('click', function () { openModal('#jav-modal'); });
    $('.web').on('click', function () { openModal('#web-modal'); });
    $('.ml').on('click', function () { openModal('#ml-modal'); });
    $('.bigdata').on('click', function () { openModal('#bigdata-modal'); });

    $('.picture-container').on('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            $(this).trigger('click');
        }
    });
});
