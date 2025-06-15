import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'tossface/dist/tossface.css';

import 'bootstrap'; // Bootstrap JS (Popper 포함)
import Swiper from 'swiper';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 필요에 따라 JS 초기화
const swiper = new Swiper('.swiper-container', { /* swiper 옵션 */ });
