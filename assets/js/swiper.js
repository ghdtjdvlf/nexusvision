
// sec02 product슬라이드

    var swiper = new Swiper(".sec02_Swiper", {
      loop:"true",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



  const slidesData = [
    {
      title: "플렉스 스크린 (Nexus FlexScreen)",
      desc: " 초박형, 플렉서블 OLED 디스플레이",
      img: "../assets/img/sec03-01.png"
    },
    {
      title: "Dune",
      desc: "Long live the fighters",
      img: "../assets/img/sec03-02.png"
    },
    {
      title: "Wonka",
      desc: "Every good thing in this world started with a dream",
      img: "../assets/img/sec03-03.png"
    },
    {
      title: "The Roundup : Punishment",
      desc: "Don lee returns as the monster cop",
      img: "../assets/img/sec03-01.png"
    }
  ];
  function createSlideContent(slide) {
    return `
      <div class="swiper-slide" data-title="${slide.title}" data-desc="${slide.desc}">
        <div class="img-wrapper">
          <img src="${slide.img}" />
        </div>
      </div>
    `;
  }
  function createThumbSlideContent(slide) {
    return `
      <div class="swiper-slide">
        <div class="img-wrapper">
          <img src="${slide.img}" />
        </div>
      </div>
    `;
  }
  function renderSlides() {
    const lgWrapper = document.getElementById('swiper-lg-wrapper');
    const miniWrapper = document.getElementById('swiper-mini-wrapper');

    lgWrapper.innerHTML = slidesData.map(createSlideContent).join('');
    miniWrapper.innerHTML = slidesData.map(createThumbSlideContent).join('');
  }
  function addSlide(slide) {
    slidesData.push(slide);
    renderSlides();

    // swiper 인스턴스가 있으면 다시 초기화 또는 업데이트 필요
    if (window.swiperMini) {
      swiperMini.destroy(true, true);
    }
    if (window.swiper) {
      swiper.destroy(true, true);
    }

    initSwipers();
  }

  // swiper 초기화 재사용 함수
  function initSwipers() {
    window.swiperMini = new Swiper(".swiper-mini", {
      spaceBetween: 10,
      slidesPerView: 3.5,
      watchSlidesProgress: true,
         breakpoints: {
      390: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      }
    }
    });

    window.swiper = new Swiper(".swiper-lg", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiperMini,
      },
      on: {
        init: updateContent,
        slideChange: updateContent
      }
    });
  }

  function updateContent() {
    // loop:true일 때 swiper.slides는 loop 복제 포함하므로 activeIndex로 위치 정확히 잡기
    const realIndex = this.realIndex; 
    const slide = slidesData[realIndex];

    const content = document.querySelector('.content');
    content.querySelector('.title').textContent = slide.title;
    content.querySelector('.desc').textContent = slide.desc;
  }

  // 초기 렌더링 및 swiper 초기화
  renderSlides();
  initSwipers();

  addSlide({
    title: "New Slide",
    desc: "New Desc",
    img: "../assets/img/sec04-01.png"
  });
  addSlide({
    title: "New Slide",
    desc: "New Desc",
    img: "../assets/img/slide-img01.png"
  });


// sec03 로고 슬라이드


let logoSwiper = new Swiper(".logoSwiper", {
  spaceBetween: 30,
  loop: true,
  speed: 3000,
  freeMode: true,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    390: {      // 390px 이상일 때
      slidesPerView: 3,
    },
    768: {      // 768px 이상일 때
      slidesPerView: 3,
    },
    1280: {     // 1280px 이상일 때
      slidesPerView: 5,
    }
  }
});
