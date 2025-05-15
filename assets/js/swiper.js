
// sec02 product슬라이드


  const slidesData = [
    {
      title: "Exhuma",
      desc: "험한 것이 나왔다",
      img: "https://image.news1.kr/system/photos/2024/2/28/6505458/high.jpg/dims/resize/1200x/optimize"
    },
    {
      title: "Dune",
      desc: "Long live the fighters",
      img: "https://img.stoo.com/upimages/gisaimg/202402/27_919500_96465.jpg"
    },
    {
      title: "Wonka",
      desc: "Every good thing in this world started with a dream",
      img: "https://file2.nocutnews.co.kr/newsroom/image/2024/02/26/202402261656321243_0.jpg"
    },
    {
      title: "The Roundup : Punishment",
      desc: "Don lee returns as the monster cop",
      img: "https://isplus.com/data/isp/image/2024/02/26/isp20240226000026.800x.0.jpg"
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
      slidesPerView: 4.5,
      watchSlidesProgress: true,
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

