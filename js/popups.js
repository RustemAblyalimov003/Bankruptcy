$(document).ready(() =>{

    $('.release-from-debt__btn').click((event) => {
        $("#popup__wrapper").fadeIn(297, () => {
            $('.call-popup')
                .css({"display": "flex"})
                .animate({opacity: 1 }, 198);
        });

    });

    $("#call-popup__cross, #popup__wrapper").click((event) => {
        $('.call-popup').animate({opacity: 0 }, 198, () =>{
            $('.call-popup').css({"display": "none"})
            $("#popup__wrapper").fadeOut(297);
        });
    });

    $('.header__scroll-bar-free-consultation, .work-in__info-btn, .footer__free-consultation_up, .header__free-consultation_up').click((event) => {
        $("#popup__wrapper").fadeIn(297, () => {
            $('.consultation-popup')
                .css({"display": "flex"})
                .animate({opacity: 1 }, 198);
        });

    });

    $("#consultation-popup__img_remove, #popup__wrapper").click((event) => {
        $('.consultation-popup').animate({opacity: 0 }, 198, () =>{
            $('.consultation-popup').css({"display": "none"})
            $("#popup__wrapper").fadeOut(297);
        });
    });

})
