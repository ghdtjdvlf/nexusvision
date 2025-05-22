


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
      scale = 0.6;
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

window.addEventListener('scroll', function() {
  console.log("현재 스크롤 위치:", window.scrollY + "px");
});



//sec03 연혁
