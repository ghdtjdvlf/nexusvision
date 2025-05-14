document.querySelectorAll('.rightSwiper').forEach((swiperEl) => {
  const swiperInstance = new Swiper(swiperEl, {
    slidesPerView: 3.5,
    spaceBetween: 30,
    direction: "vertical",
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  swiperEl.addEventListener('mouseenter', () => {
    // 현재 슬라이드 인덱스 유지하며 애니메이션 즉시 끊기
    swiperInstance.setTransition(0);
    swiperInstance.slideToLoop(swiperInstance.realIndex, 0, false);
    swiperInstance.autoplay.stop();
  });

  swiperEl.addEventListener('mouseleave', () => {
    swiperInstance.autoplay.start();
  });
});



let leftSwiper = new Swiper(".leftSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  direction: "vertical",
  loop: true,
  speed: 2000, // 슬라이드 전환 속도 (ms)
  autoplay: {
    delay: 0,    // 0으로 설정하면 자동재생이 끊기지 않고 계속 진행
    disableOnInteraction: false, // 사용자 상호작용(드래그 등) 후에도 자동재생 유지
    reverseDirection: true // ★ 자동 재생 방향 반대로 (위→아래)
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let logoSwiper =  new Swiper(".logoSwiper", {
  spaceBetween: 30,
  loop: true,
  speed: 3000,
  slidesPerView:5,
  freeMode: true,
  autoplay : {
    delay: 0,
  },
})

