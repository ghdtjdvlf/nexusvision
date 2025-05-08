document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  const body = document.body;
  
  // 2초 후 로딩 완료 처리
  setTimeout(function() {
      loadingScreen.style.opacity = '0';
      
      // 페이드 아웃 애니메이션 완료 후
      setTimeout(function() {
          loadingScreen.style.display = 'none';
          body.classList.remove('no-scroll'); // 스크롤 허용
      }, 500); // CSS 트랜지션 시간(0.5s)과 동일하게 설정
      
  }, 1500); // 로딩 시간 2초
});

//KV 커지는 영상

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-background');
    const maxScroll = 600; // 스크롤 범위 (0~600px)
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollProgress = Math.min(scrollY / maxScroll, 1); // 0~1 사이 값
      const newWidth = 60 + (35 * scrollProgress); // 60% → 100% 계산
  
      video.style.width = `${newWidth}%`;
    });
  });

//sec05 text 

document.addEventListener('DOMContentLoaded', function() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const progressBar = document.querySelector('.progress-bar');

  window.addEventListener('scroll', function() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // 프로그레스 바 업데이트
      // progressBar.style.width = (scrollY / (docHeight - windowHeight)) * 100 + '%';

      // 조건문 순서 중요! 높은 값부터 체크해야 합니다.
      if (scrollY >= 7200) {
          // 7000px 이상: 모두 숨김
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= 6500) {
          // 6000px~7000px: text3 표시
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.add('active');
      } 
      else if (scrollY >= 5500) {
          // 5000px~6000px: text2 표시
          text1.classList.remove('active');
          text2.classList.add('active');
          text3.classList.remove('active');
      } 
      else if (scrollY >= 4500) {
          // 4068px~5000px: text1 표시
          text1.classList.add('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      } 
      else {
          // 4068px 미만: 모두 숨김
          text1.classList.remove('active');
          text2.classList.remove('active');
          text3.classList.remove('active');
      }
  });
});
window.addEventListener('scroll', function() {
  console.log("현재 스크롤 위치:", window.scrollY + "px");
});
