// loadCDNs.js

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      // 이미 로드된 스크립트 있으면 중복 로드 방지
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;  // 순서 유지용
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

// 불러올 CDN JS 주소들 (순서가 중요하다면 순차 로딩)
const cdnScripts = [
  "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollSmoother.min.js",
];

// 함수 실행해서 스크립트들 로드
async function loadCDNs() {
  for (const src of cdnScripts) {
    await loadScript(src);
    console.log(`Loaded: ${src}`);
  }
  // 로드 완료 후 초기화 함수 호출 가능
  if (typeof onCDNsLoaded === "function") {
    onCDNsLoaded();
  }
}

loadCDNs();
