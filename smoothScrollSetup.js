// smoothScrollSetup.js

// GSAP core와 플러그인 임포트
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js";
import ScrollTrigger from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollTrigger.min.js";
import ScrollSmoother from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollSmoother.min.js";

// Swiper 모듈(ESM 지원)
// 만약 Swiper CSS가 필요시 별도 링크로 HTML에서 불러야 함
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother 생성 예시
const smoother = ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
  // scroller: "#smooth-content" // 필요 시 스크롤러 지정
});

// Swiper 슬라이더 예시 초기화
const swiper = new Swiper(".swiper-container", {
  // Swiper 옵션
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export { gsap, ScrollTrigger, ScrollSmoother, smoother, Swiper, swiper };
