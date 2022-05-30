//$(document).ready(function(){
//    $('.carousel__inner').slick({
//        infinite: true,
//        speed: 1200, /* это не скорость, а время в ms за которую оно пролистывается */ 
//        slidesToShow: 1,
//        /* adaptiveHeight: true, */
//        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png"></button>',
//        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png"></button>',
//        responsive: [
//            {
//              breakpoint: 992,
//              settings: {
//                dots: true,
//                arrows: false
//              }
//            },
//            
//          ]
//      });
//  });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false, 
    controls: false,
    nav: false
  });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});