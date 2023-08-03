
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
      $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation' ).fadeIn('slow');
      })
      $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      $('.button_mini').each(function(i) {
            $(this).on('click', function() {
            $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
            })
      })
     
      function validateForms (forms) {
            $(forms).validate({
                  rules: {
                        name: {
                              required: true,
                              minlength: 2,
                              },
                        phone: 'required',
                        email: {
                              required: true,
                              email: true
                        }
                  },
                  messages: {
                        name: {
                              required: "Введите ваше имя",
                              minlength: jQuery.validator.format("Введите {0} символа")
                            },
                        phone: 'Пожалуйста введите свой номер', 
                        email: {
                              required: 'Пожалуйста введите свою почту',
                              email: 'Неправильно введен адрес почты'
                        }
                  }
            });
      }
      validateForms ('#consultation form');
      validateForms ('#consultation-form');
      validateForms ('#order form');
});