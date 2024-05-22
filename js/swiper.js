$(document).ready(() => {
    const swiper1 = new Swiper('.swiper1', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 24,
        setWrapperSize: true,
        autoHeight: false,
        navigation: {
            nextEl: '#bankruptcy-text-reviews__swiper-button-arrow-tail-next, #bankruptcy-text-reviews__swiper-circle-next, .swiper1 .swiper-button-next',
            prevEl: '#bankruptcy-text-reviews__swiper-button-arrow-tail-prev, #bankruptcy-text-reviews__swiper-circle-prev, .swiper1 .swiper-button-prev',
        },
        breakpoints: {
            210: {
                slidesPerView: 1,
                spaceBetween: 200,
            },
            310: {
                slidesPerView: 1,
                spaceBetween: 200,
            },
            660: {
                slidesPerView: 1,
                spaceBetween: 200,
            },
            843: {
                slidesPerView: 2,
                spaceBetween: 200,
            },
            1001: {
                slidesPerView: 2,
                spaceBetween: 200,
            },
            1177: {
                slidesPerView: 3,
                spaceBetween: 55,
            },
            1240: {
                slidesPerView: 3,
                spaceBetween: 105,
            },
            1360:{
                slidesPerView: 3,
                spaceBetween: 165,
            },
            1450:{
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1525:{
                slidesPerView: 4,
                spaceBetween: 55,
            },
            1650: {
                slidesPerView: 4,
                spaceBetween: 95,
            }, 
            1750: {
                slidesPerView: 5,
            }
        }
    });
    const swiper2 = new Swiper('.swiper2', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 104,
        setWrapperSize: true,
        autoHeight: false,
        navigation: {
            nextEl: '.swiper2 .swiper-button-next, #bankruptcy-video-reviews__swiper-circle-next, #bankruptcy-video-reviews__swiper-button-arrow-tail-next',
            prevEl: '.swiper2 .swiper-button-prev, #bankruptcy-video-reviews__swiper-circle-prev, #bankruptcy-video-reviews__swiper-button-arrow-tail-prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 1,
            },
            971: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            1140: {
                slidesPerView: 2,
            },
        }
    });
    const swiper3 = new Swiper('.swiper3', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 24,
        setWrapperSize: true,
        autoHeight: false,
        navigation: {
            nextEl: '#debt-relief-examples__swiper-button-arrow-tail-next, #debt-relief-examples__swiper-circle-next, .swiper3 .swiper-button-next',
            prevEl: '#debt-relief-examples__swiper-button-arrow-tail-prev, #debt-relief-examples__swiper-circle-prev, .swiper3 .swiper-button-prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 1,
            },
            970: {
                slidesPerView: 1,
                spaceBetween: 32,
            },
            1141: {
                slidesPerView: 2,
            },
        }
    });
    const swiper4 = new Swiper('.swiper4', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 121,
        setWrapperSize: true,
        autoHeight: false,
        navigation: {
            nextEl: '#our-team__swiper-circle-next, #our-team__swiper-button-arrow-tail-next, .swiper4 .swiper-button-next',
            prevEl: '#our-team__swiper-button-arrow-tail-prev, #our-team__swiper-circle-prev, .swiper4 .swiper-button-prev',
        },
        breakpoints: {
            250: {
                slidesPerView: 1,   
            },
            448: {
                slidesPerView: 2,
                
            },
            684: {
                slidesPerView: 3,
                spaceBetween: 50,  
            },
            800: {
                slidesPerView: 3,       
            },
            970: {
                slidesPerView: 3,
                spaceBetween: 121,
            },
            1140: {
                slidesPerView: 4,
            },
        }
    });
});