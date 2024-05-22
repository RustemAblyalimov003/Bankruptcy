$(document).ready(() => {
    $(window).scroll(() => {    
      const scroll = $(window).scrollTop();
      const mediawidth = $(window).width(); 
      if (scroll >= 200 && mediawidth > 970) {
        $("#header").addClass("scrolled");
        $("#header__logo-img_low").attr("src","images/header__scrolled-logo-img.png");
        $("#header__logo-txt-img_low").attr("src","images/header__scrolled-logo-txt-img.svg");
      } else {
        $("#header").removeClass("scrolled");
        $("#header__logo-img_low").attr("src","images/logo_img.svg");
        $("#header__logo-txt-img_low").attr("src","images/logo_name.svg");
      }
    });
  });