$(document).ready(function () {
    
// news tab
var newTab = $(".news_tab a");
newTab.click(function (e) {
    e.preventDefault();
    newTab.removeClass("on");
    $(this).addClass("on")
    $(".news_list").stop().css('opacity', 0).animate({
        opacity: 1
    }, 1000);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1, //초기값 설정 모바일값!

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Optional parameters        
    loop: true,

    // If we need pagination
    pagination: {
        el: '.pagination-num',
        type: 'fraction',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    // scrollbar: {
    // 	el: '.swiper-scrollbar',
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },

    },
});

// play
$('#main-slider .play').on('click', function () {
    swiper.autoplay.start();
    $(this).addClass('hidden');
    $('.stop').removeClass('hidden');
});

// stop
$('#main-slider .stop').on('click', function () {
    swiper.autoplay.stop();
    $(this).addClass('hidden');
    $('.play').removeClass('hidden');
});






});