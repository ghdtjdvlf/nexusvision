document.addEventListener('DOMContentLoaded', () => {
    // GSAP 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);
    
    // 요소 선택
    const leftBox = document.querySelector('.left-box');
    const rightBox = document.querySelector('.right-box');
    const image = document.querySelector('.image-container img');
    const animationSection = document.querySelector('.animation-section');
    
    // 반응형 설정을 위한 변수
    let movementDistance;
    
    function setMovementDistance() {
        // 화면 너비에 따라 이동 거리 조정
        movementDistance = window.innerWidth > 768 ? '100%' : '80%';
    }
    
    // 초기 설정
    setMovementDistance();
    
    // 창 크기 변경 시 반응형 대응
    window.addEventListener('resize', () => {
        setMovementDistance();
        ScrollTrigger.refresh(); // ScrollTrigger 갱신
    });
    
    // GSAP 애니메이션
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".animation-section",
            start: "top center", // 화면 중앙에 왔을 때 시작
            end: "+=1000", // 1000px 스크롤 동안 애니메이션
            scrub: 1, // 스크롤에 따라 부드럽게 애니메이션
            markers: true, // 디버깅용 마커 (실제 배포시 false로 변경)
            toggleActions: "play none none none", // 한 번만 재생
            onEnter: () => {
                // 모바일에서 성능 향상을 위해 will-change 추가
                gsap.set([leftBox, rightBox, image], { willChange: "transform, opacity" });
            },
            onLeaveBack: () => {
                // 스크롤 올릴 때 애니메이션 초기화
                tl.progress(0);
                tl.pause();
            }
        }
    });
    
    // 애니메이션 시퀀스
    tl.to([leftBox, rightBox], {
        x: (i) => i === 0 ? `-${movementDistance}` : movementDistance,
        duration: 1,
        ease: "power3.out"
    })
    .to(image, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3");
});