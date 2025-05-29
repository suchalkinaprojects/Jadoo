$(document).ready(function() {

    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    });

    $('.button-burger').on('click', function(){
        this.classList.toggle('active');
        $('.nav').toggle('open');
    });


    $(window).resize(function() {
        width = $(window).width();
        if (width <= 1024) {
            $('.nav a').on('click',() => {
                $('.nav').css('display', 'none');
                $('.button-burger').removeClass('active');
            });
        }
    });




    $(window).on('resize', function(e){
        var initLib = $('.destinations__cards').data('init-slider');

        if(window.innerWidth <= 1024 && window.innerWidth >=768){
            // if(initLib != 1){
                $('.destinations__cards').slick({
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // autoplay: true,
                    // autoplaySpeed: 2000,

                }).data({'init-slider': 1});
            // }
        }
        else if(window.innerWidth > 1024) {
            if(initLib == 1){
                $('.destinations__cards').slick('unslick').data({'init-slider': 0});
            }
        }
    }).trigger('resize');


    $(window).on('resize', function(e){
        var initLibMobile = $('.destinations__cards').data('init-slider-mobile');

        if(window.innerWidth < 768){
            // if(initLibMobile != 1){
                $('.destinations__cards').slick({
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // autoplay: true,
                    // autoplaySpeed: 2000,
                }).data({'init-slider-mobile': 1});
            // }
        }
        else if(window.innerWidth > 768) {
            if(initLibMobile == 1){
                $('.destinations__cards').slick('unslick').data({'init-slider-mobile': 0});
            }
        }
    }).trigger('resize');



    $('.footer-list-title').on('click', function(){
        this.classList.toggle('active');
        $(this).siblings('.footer-list').toggle('open');
        $(this).children('.footer-list-title span').toggleClass('arrow-toggle');


    });



});



