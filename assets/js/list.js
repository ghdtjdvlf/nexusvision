  const cdnScripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js",
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollSmoother.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  ];

  cdnScripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;  // 순서 보장
    document.body.appendChild(script); // head 대신 body 맨 끝에 추가
  });