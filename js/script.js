$(document).ready(function(){

    $(window).on('load', function() {
        $('.spinner').fadeOut(500);
    });

    //Smooth transition
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'swing');
            event.preventDefault();
        });
    });

    //scroll spy
    $('body').scrollspy({
        target: '.navbar-default'
    })

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

        
        $('.jav').click(function () {
            $('#jav-modal').modal('show');
        });
        $('.web').click(function () {
            $('#web-modal').modal('show');
        });
        $('.ml').click(function () {
            $('#ml-modal').modal('show');
        });
        $('.bigdata').click(function () {
            $('#bigdata-modal').modal('show');
        });

});
