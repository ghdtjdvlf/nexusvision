<<<<<<< Updated upstream
  const container = document.querySelector('.s_container')
  
  var swiper = new Swiper(".mySwiper", {
=======
const container = document.querySelector(".swiper_container")    

    var swiper = new Swiper(".mySwiper", {
>>>>>>> Stashed changes
      direction: "vertical",
      slidesPerView: 3.5, 
      speed: 2400,
      loop:true,
<<<<<<< Updated upstream
      freeMode: true,
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },  
      autoplay: {
        delay: 0,
    },
    });

    function stopAutoplay() {
      const swiperTranslate = swiper.getTranslate();
      swiper.setTranslate(swiperTranslate);
      swiper.autoplay.stop()
    }
function startAutoplay() {
  // swiper.slideTo(swiper.activeIndex, 3000, false); // 제거
  swiper.autoplay.start();
}
    container.addEventListener('mouseenter',() => stopAutoplay())
    container.addEventListener('mouseleave',() => startAutoplay())

=======
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, 
      autoplay : {
        delay : 0
      }
    });

    const stopAutoplay = () => {
      const swiperTranslate = swiper.getTranslate();
      swiper.setTranslate(swiperTranslate);
      swiper.autoplay.stop();
    }
    const startAutoplay = () => {
      swiper.slideTo(swiper.activeIndex, 3000, false);
      swiper.autoplay.start();
    }
  
  
    container.addEventListener("mouseenter", () => stopAutoplay())
    container.addEventListener("mouseleave", () => startAutoplay())

    
  
>>>>>>> Stashed changes

    // var logoSwiper = new Swiper(".logoSwiper", {
    //   slidesPerView: 4, 
    //   speed: 3000,
    //   loop:true,
    //   allowTouchMove: false,
    //   autoplay: {
    //     delay: 0,
    //     pauseOnMouseEnter : false
    // },
    // });