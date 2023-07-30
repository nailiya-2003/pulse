
$(document).ready(function(){
      $('.carousel__inner').slick({
            infinite: true,
            speed: 1000,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1500,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/previous.png" alt="previous"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/next.png" alt="next"></button>',
            responsive: [
                  {
                  breakpoint: 996,
                  settings: {
                        arrow: false,
                        dots: true
                  }
                  }
            ]
      }     
      );
});
// const slider = tns({
//       container: '.carousel__inner',
//       items: 1,
//       slideBy: 'page',
//       autoplay: false,
//       controls: false,
//       nav: false
//     });
// document.querySelector(".prev").addEventListener('click', function() {
//       slider.goTo("prev")
// });
// document.querySelector(".next").addEventListener('click', function() {
//       slider.goTo("next")
// });