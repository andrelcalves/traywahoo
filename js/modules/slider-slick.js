(function(jQuery) {
  jQuery(document).ready(function() {
    
    jQuery('.display-carousel').carousel({
      hMargin:0.7, 
      vMargin:0.2,
      frontWidth:300, 
      frontHeight:500,
      carouselWidth:1140,
      carouselHeight:550,
      directionNav:true,
      shadow:true,
      buttonNav:'bullets',
      backZoom:0.9,
      slidesPerScroll:5
    });
    
    // Slick Slider Brands
    jQuery('.gallery').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 450,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        }
      ]
    });
    
    // Slick Slider Brands
    jQuery('.menu-brands').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 450,
      slidesToShow: 8,
      slidesToScroll: 8,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
      // advertise store
      jQuery('.advert').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
      });
      
      // advertise store
      jQuery('.advert-mobile').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
      });
      
      // depoimentos 
      jQuery(".testimony .dep_lista").find('li[style="display: none;"]').remove();
      jQuery('.testimony .dep_lista').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      // advertise store
      jQuery('.ad-small').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
      
      // display products 
      jQuery('.slider').slick({
          lazyLoad: 'ondemand',
          infinite: true,
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 998,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
          
        });
        
      
      // seals footer  
      jQuery('.seals').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      });
      
      // main image and thumbnails in focus product  
      jQuery('.collection-products .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      jQuery('.collection-products .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: false,
        focusOnSelect: true
      });
        
     });
})(jQuery);