//scrolled header
$(window).scroll(function() {
    if ($(window).scrollTop() > 53) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});
//1st slider
$(document).ready(function() {

    $('#vertical').lightSlider({
        item: 1,
        verticalHeight: 800,
        auto: true,
        slideMargin: 0,
        pause: 4000,
        speed: 2000,
        loop: true,
        controls: false,
        /*         responsive: [{
                    breakpoint: 820,
                    settings: {
                        vertical: false,
                        enableTouch: true,
                    }
                }, ] */
    });
});
//2nd slider
$(document).ready(function() {
    let autoplaySlider = $('#autoplay').lightSlider({
        enableTouch: true,
        auto: true,
        loop: true,
        pause: 4000,
        speed: 2000,
        controls: false,
        slideMargin: 30,
        responsive: [{
                breakpoint: 1215,
                settings: {
                    item: 2.5,
                }
            },
            {
                breakpoint: 1055,
                settings: {
                    item: 2,
                    slideMargin: 15,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    item: 1.6,
                }
            },
            {
                breakpoint: 663,
                settings: {
                    item: 1,

                }
            },
        ]
    });

    //arrows
    $(document).ready(function() {
        $('.arr1').on('click', function() {
            autoplaySlider.goToPrevSlide();
        });
        $('.arr2').on('click', function() {
            autoplaySlider.goToNextSlide();
        });
    });
});


//gallery
$('#aniimated-thumbnials').lightGallery({
    selector: '.img',
    thumbnail: true
});
//map
function initMap() {
    document.getElementById('map_img').remove();
    document.getElementById('map_link').remove();
    let map = L.map('map').setView([40.714662068404415, -74.00633391567929], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.714662068404415, -74.00633391567929]).addTo(map)
        .bindPopup('New York City, United States - 1776 feet')
        .openPopup();
    L.marker([22.324082975181533, 114.16888776904187]).addTo(map)
        .bindPopup('Hong Kong - 1588 Feet');
}
//плавный скролл
$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500);
});
$("#menu_btn1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
$("#menu_btn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
$("#menu_btn3").click(function() {
    $('html, body').animate({
        scrollTop: $("#news").offset().top
    }, 1000);
});
$("#menu_btn4").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

//lazyload
let lazyLoadInstance = new LazyLoad();
//активное меню
$('.tab').click(function() {
    if (!$(this).hasClass("active")) {
        $('.test.active').removeClass("active");
        $(this).addClass("active");
    }
});
//при скроле

jQuery(function($) {

    const section = $('.sec');
    const nav = $('.nav');
    $(window).on('scroll', function() {
        const position = $(this).scrollTop();

        section.each(function() {
            const top = $(this).offset().top - 5,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active');
                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function() {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 487);

        return false;
    });

});

//гамбургер
$(document).ready(function() {

    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("is-active");
        $("#mobile_menu, #menu_shadow").toggleClass("opened");
    });

    $("#menu_shadow").click(function() {
        $(".hamburger").removeClass("is-active");
        $("#mobile_menu, #menu_shadow").removeClass("opened");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });
});