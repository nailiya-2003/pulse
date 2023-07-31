
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
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });
      // $('.catalog-item__link').each(function(i) {
      //       $(this).on('click', function(e) {
      //             e.preventDefault()
      //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
      //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      //       });    
      // });
      // $('.catalog-item__back').each(function(i) {
      //       $(this).on('click', function(e) {
      //             e.preventDefault()
      //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
      //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      //       });    
      // });
      function toogleSlide (item) {
            $(item).each(function(i) {
                  $(this).on('click', function(e) {
                        e.preventDefault()
                        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
                  });    
            }); 
      };
      toogleSlide('.catalog-item__link');
      toogleSlide('.catalog-item__back');
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