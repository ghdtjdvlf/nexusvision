    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 3.5, 
      speed: 2400,
      loop:true,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },  
      autoplay: {
        delay: 0,
        pauseOnMouseEnter : true,
    },
    });

    document.querySelector('.mySwiper').addEventListener('mouseenter', function() {
      swiper.autoplay.pause();
    });
    
    document.querySelector('.mySwiper').addEventListener('mouseleave', function() {
      swiper.autoplay.resume();
    });

    var logoSwiper = new Swiper(".logoSwiper", {
      slidesPerView: 4, 
      speed: 3000,
      loop:true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter : false
    },
    });