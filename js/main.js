$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next_arrow.png"></button>'
      });
  });