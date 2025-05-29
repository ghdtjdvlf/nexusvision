//header 

        document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.querySelector('.toggle-btn');
            const mobileMenu = document.querySelector('.mobile-menu');
            const overlay = document.querySelector('.overlay');
            
            toggleBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                overlay.classList.toggle('active');
            });
            
            overlay.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
            });
        });


//KV 커지는 영상

window.addEventListener('scroll', () => {
  const videoDiv = document.querySelector('.video');
  if (window.scrollY >= 200) {
    videoDiv.classList.add('expanded');
  } else {
    videoDiv.classList.remove('expanded');
  }
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





//다크모드

  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');
    themeToggle.querySelector('span').textContent = isDark ? '라이트 모드' : '다크 모드';
  });