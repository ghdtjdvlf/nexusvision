

document.addEventListener('DOMContentLoaded', function() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');



  function isMobile() {
    return window.innerWidth <= 480;
  }
  function isTablet() {
    return window.innerWidth > 480 && window.innerWidth <= 768;
  }
  function isLaptop() {
    return window.innerWidth > 768 && window.innerWidth <= 1280;
  }

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || window.pageYOffset;
    

    // 기본 구간값
    const base1 = 1500;
    const base2 = 2500;
    const base3 = 3500;
    const baseHide = 4000;

    let scale = 1;

    if (isMobile()) {
      scale = 0.4;
    } else if (isTablet()) {
      scale = 0.8;
    } else if (isLaptop()) {
      scale = 0.9;
    }

    // 화면 크기에 맞게 구간 scale 적용
    const thresh1 = base1 * scale;
    const thresh2 = base2 * scale;
    const thresh3 = base3 * scale;
    const threshHide = baseHide * scale;

    if (scrollY >= threshHide) {
      text1.classList.remove('active');
      text2.classList.remove('active');
      text3.classList.remove('active');
    } else if (scrollY >= thresh3) {
      text1.classList.remove('active');
      text2.classList.remove('active');
      text3.classList.add('active');
    } else if (scrollY >= thresh2) {
      text1.classList.remove('active');
      text2.classList.add('active');
      text3.classList.remove('active');
    } else if (scrollY >= thresh1) {
      text1.classList.add('active');
      text2.classList.remove('active');
      text3.classList.remove('active');
    } else {
      text1.classList.remove('active');
      text2.classList.remove('active');
      text3.classList.remove('active');
    }
  });
});




//sec02 회사소개
  const contents = document.querySelectorAll('.content');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {});
  contents.forEach(content => {
    observer.observe(content);
  });



//sec03 연혁

// 1. 모든 대상 요소 선택 (부모 박스와 <p> 텍스트들)
const timelineBoxes = document.querySelectorAll('.section03 .col-md-6');
const timelineP = document.querySelectorAll('.section03 p');

// 2. 하나의 공통 observer 함수
function observeFadeIn(targets) {
  targets.forEach((el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        } else {
          entry.target.classList.remove('on');
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(el);
  });
}

// 3. 실행 (두 그룹 따로 전달)
observeFadeIn(timelineBoxes);
observeFadeIn(timelineP);

    