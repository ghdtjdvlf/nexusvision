  const container = document.querySelector('.s_container')
  
  var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 3.5, 
      speed: 2400,
      loop:true,
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