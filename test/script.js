document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const sections = document.querySelectorAll('section');
    
    let isInSpecialSection = false;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    
    // 마우스 이동 이벤트 리스너
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 메인 커서는 즉시 반응 (지연 없음)
        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.1,
            ease: 'power2.out'
        });
    });
    
    // Intersection Observer 설정
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 페이드 인 효과
                gsap.to(entry.target, {
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onStart: () => {
                        entry.target.classList.add('active');
                        
                        if (entry.target.classList.contains('special-section')) {
                            isInSpecialSection = true;
                            document.body.style.cursor = 'none';
                            
                            // 커서 서서히 나타나기
                            gsap.to([cursor, cursorFollower], {
                                opacity: 1,
                                duration: 0.4
                            });
                        }
                    }
                });
            } else {
                // 페이드 아웃 효과
                gsap.to(entry.target, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        entry.target.classList.remove('active');
                        
                        if (entry.target.classList.contains('special-section')) {
                            isInSpecialSection = false;
                            document.body.style.cursor = 'auto';
                            
                            // 커서 서서히 사라지기
                            gsap.to([cursor, cursorFollower], {
                                opacity: 0,
                                duration: 0.3
                            });
                        }
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    // 모든 섹션 관찰 시작
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // GSAP 애니메이션 루프 - 따라오는 커서 효과 (0.1초 지연)
    gsap.ticker.add(function() {
        if (isInSpecialSection) {
            const delay = 0.1; // 0.1초 지연으로 변경
            
            // 따라오는 커서에 지연 효과 적용
            posX += (mouseX - posX) / (delay * 60);
            posY += (mouseY - posY) / (delay * 60);
            
            gsap.set(cursorFollower, {
                x: posX,
                y: posY
            });
        }
    });
    
});