//KV 커지는 영상

 document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-background');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(video, {
      width: "95%", // 목표 너비 (60%에서 95%로 변경 가능)
      ease: "power1.out",
      markers: true,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",      // 스크롤 시작 위치
        end: "+=200",          // 200px 까지 애니메이션
        scrub: 1.5             // 스크롤에 부드럽게 연동(0.3초 딜레이)
      }
    });
  });



 

//sec05 text 
document.addEventListener('DOMContentLoaded', function() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const progressBar = document.querySelector('.progress-bar');

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

      let scale = 1; // 기본 scale

      if (isMobile()) {
          scale = 0.6;
      } else if (isTablet()) {
          scale = 0.4;
      } else if (isLaptop()) {
          scale = 0.9;
      }

      const thresh1 = 4900 * scale;
      const thresh2 = 5900 * scale;
      const thresh3 = 6900 * scale;
      const threshHide = 7500 * scale;

      if (scrollY >= threshHide) {
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= thresh3) {
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.add('active');
      } 
      else if (scrollY >= thresh2) {
          text1.classList.remove('active');
          text2.classList.add('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= thresh1) {
          text1.classList.add('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else {
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      }
  });
});



window.addEventListener('scroll', function() {
  console.log("현재 스크롤 위치:", window.scrollY + "px");
});


//다크모드

  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');
    themeToggle.querySelector('span').textContent = isDark ? '라이트 모드' : '다크 모드';
  });