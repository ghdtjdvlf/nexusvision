// sec02 product슬라이드

var swiper = new Swiper(".sec02_Swiper", {
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const slidesData = [
{
  title: "플렉스 스크린 (Nexus FlexScreen)",
  desc: "초박형, 플렉서블 OLED 디스플레이는 매우 얇고, 구부리거나 접을 수 있어 차세대 스마트 기기나 웨어러블에 적합합니다.",
  img: "../assets/img/sec03-01.png",
  alt: "플렉서블 OLED 디스플레이 이미지",
},
{
  title: "Nexus CrystalView",
  desc: "초고해상도 마이크로LED 디스플레이로, 고명암비와 생생한 컬러 표현이 특징입니다. 대형 TV 및 디지털 아트 갤러리 디스플레이 등에 이상적입니다.",
  img: "../assets/img/sec03-02.png",
  alt: "마이크로LED 디스플레이 예시 이미지",
},
{
  title: "Nexus AirTouch Panel",
  desc: "무접촉 터치 인식이 가능한 인터랙티브 패널로, 공중에서 손짓만으로 조작이 가능합니다. 의료기기, 박물관 전시, 방역이 중요한 공간에 적합합니다.",
  img: "../assets/img/sec03-03.png",
  alt: "비접촉식 터치 패널 조작 예시 이미지",
},
{
  title: "Nexus ClearVision",
  desc: "투명 OLED 디스플레이 기술을 적용해 유리처럼 보이지만 화면이 구현되는 디스플레이입니다. 쇼윈도, 자동차 HUD, AR 디바이스 등에 활용됩니다.",
  img: "../assets/img/sec03-01.png",
  alt: "투명 OLED 디스플레이 예시 이미지",
},

];
function createSlideContent(slide) {
  return `
    <div class="swiper-slide" data-title="${slide.title}" data-desc="${slide.desc}">
      <div class="img-wrapper">
        <img src="${slide.img}" alt="${slide.title}" />
      </div>
    </div>
  `;
}
function createThumbSlideContent(slide) {
  return `
    <div class="swiper-slide">
      <div class="img-wrapper">
        <img src="${slide.img}" alt="${slide.title} thumbnail" />
      </div>
    </div>
  `;
}
function renderSlides() {
  const lgWrapper = document.getElementById("swiper-lg-wrapper");
  const miniWrapper = document.getElementById("swiper-mini-wrapper");

  lgWrapper.innerHTML = slidesData.map(createSlideContent).join("");
  miniWrapper.innerHTML = slidesData.map(createThumbSlideContent).join("");
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
        slidesPerView: 2.5,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
    },
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
      slideChange: updateContent,
    },
  });
}

function updateContent() {
  // loop:true일 때 swiper.slides는 loop 복제 포함하므로 activeIndex로 위치 정확히 잡기
  const realIndex = this.realIndex;
  const slide = slidesData[realIndex];

  const content = document.querySelector(".content");
  content.querySelector(".title").textContent = slide.title;
  content.querySelector(".desc").textContent = slide.desc;
}

// 초기 렌더링 및 swiper 초기화
renderSlides();
initSwipers();

addSlide({
  title: "Nexus SolarSkin",
  desc: "태양광을 전력으로 활용할 수 있는 반투명 디스플레이로, 스마트 윈도우와 에너지 수확형 건축 외장재에 쓰일 수 있습니다. 친환경 디스플레이 솔루션입니다.",
  img: "../assets/img/sec04-01.png",
  alt: "태양광 활용 가능한 반투명 디스플레이 이미지",
});

addSlide({
  title: "Nexus QuantumLayer",
  desc: "자체 개발한 양자점 기술 기반의 QD-OLED 디스플레이로, 블루라이트를 최소화하면서도 고색재현율을 실현합니다. 프로페셔널 모니터나 고급 의료용 디스플레이에 적합합니다.",
  img: "../assets/img/slide-img01.png",
  alt: "양자점 기반 QD-OLED 디스플레이 예시 이미지",
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
    390: {
      // 390px 이상일 때
      slidesPerView: 5,
    },
    768: {
      // 768px 이상일 때
      slidesPerView: 5,
    },
    1280: {
      // 1280px 이상일 때
      slidesPerView: 5,
    },
  },
});
