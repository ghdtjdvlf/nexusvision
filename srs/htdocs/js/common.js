var ui = {
    popupFn: {
        init: function () {
            $(document).on("click", ".layer_wrap .dim", function (e) {
                var popid = $(this).closest(".layer_wrap").attr("id");
                ui.popupFn.close(popid);
            });

            var currentCallback;
            // override default browser alert
            window.alert = function (msg, callback) {
                $(".message").text(msg);
                currentCallback = callback;
            };
        },
        open: function (tg) {
            var target = $("#" + tg);
            $("body").addClass("layer_activated");
            target.stop().fadeIn();
        },
        alertFn: function (tg) {
            var target = $("." + tg);
            $("body").addClass("layer_activated");
            target.stop().fadeIn();
        },
        close: function (tg) {
            var target = $("#" + tg);
            $("body").removeClass("layer_activated");
            target.stop().hide();
        },
    },
    common: {
        bindEvents: function () {
            //100vh
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
            $(window).resize(function () {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty("--vh", `${vh}px`);
            });

            //header
            var $header = $(".header");
            var $dropdown = $(".header .btn_dropdown");
            var $navbar = $(".header .navbar");
            let hadOnClass = $header.hasClass("on");

            function headerMainResize() {
                if ($(window).width() >= 1024) {
                    $header.removeClass("on");
                    $dropdown.removeClass("active");
                    $navbar.removeClass("active");
                    $("body").removeClass("header_activated");
                }
            }

            function setEventHandlers() {
                var isMobile = $(window).outerWidth() < 1024;

                $(".header .btn_dropdown").off("click");
                $(".header .navbar>li>a").off("click");
                $(".header .navbar>li.has_sub").off("mouseenter mouseleave focusin");
                $(".header .navbar>li.has_sub>a").off("mouseenter");

                if (isMobile) {
                    // 모바일 이벤트
                    $(".header .btn_dropdown").on("click", function (e) {
                        e.preventDefault();

                        var $this = $(this);
                        var $navbar = $(".header .navbar");
                        $this.toggleClass("active");
                        $navbar.toggleClass("active");
                        $(".header").toggleClass("on");
                        $("body").toggleClass("header_activated");
                    });

                    $(".header .navbar>li>a").on("click", function () {
                        var $this = $(this);
                        var $li = $this.closest(".menu_item");
                        var $subMenu = $li.find(".sub_menu");

                        if ($li.hasClass("active")) {
                            $subMenu.slideUp();
                            $li.removeClass("active");
                        } else {
                            $subMenu.slideDown();
                            $li.addClass("active");
                        }
                    });

                    //스크롤 이벤트
                    var lastScrollTop = 0;
                    $(window).scroll(function () {
                        var scrollTop = $(this).scrollTop();

                        if (scrollTop < 0) {
                            /* ios 바운스효과로 인한 오류제거 */
                            return;
                        }

                        if (scrollTop > lastScrollTop) {
                            $(".wrap").addClass("down");
                        } else {
                            $(".wrap").removeClass("down");
                        }
                        lastScrollTop = scrollTop;
                    });
                } else {
                    // PC 이벤트
                    $(".header .navbar>li.has_sub").on("mouseenter focusin", function () {
                        $(this).addClass("pc_active");
                        $(this).parents(".header").addClass("pc_on");
                    });

                    $(".header .navbar>li.has_sub").on("mouseleave", function () {
                        $(this).parents(".header").removeClass("pc_on");
                        $(this).closest(".has_sub").removeClass("pc_active");
                    });
                    $(".header .navbar>li .sub_menu").hide();
                    $(".header .navbar>li.active .sub_menu").show();

                    //포커스
                    $(".header .navbar>li.has_sub .sub_menu li:last-child a").on("focusout", function () {
                        $(this).parents(".header").removeClass("pc_on");
                        $(this).closest(".has_sub").removeClass("pc_active");
                    });
                    $(".header .navbar>.menu_item").on("keydown", function (e) {
                        if (e.keyCode == "9" && e.shiftKey) {
                            $(this).parents(".header").removeClass("pc_on");
                            $(this).closest(".has_sub").removeClass("pc_active");
                        }
                    });
                }
                $(".header .navbar>li .sub_menu").hide();
                $(".header .navbar>li.active .sub_menu").show();
            }

            headerMainResize();
            setEventHandlers();
            $(window).on("resize", function () {
                headerMainResize();
                setEventHandlers();
            });

            // header event
            const headerDev = document.querySelector('.header_dev');
            if(headerDev){
                const dropdownBtn = document.querySelector('.btn_dropdown');
                const wrap = document.querySelector('.wrap');
                let isDropdownClicked = false;

                dropdownBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    headerDev.classList.toggle('active');
                    document.body.classList.toggle('header_activated');
                    isDropdownClicked = true;

                    setTimeout(() => {
                        isDropdownClicked = false;
                    }, 1000);
                });

                // header - mobile
                const btn = document.querySelectorAll('.navbar_dev>.menu_item>a');

                btn.forEach(el => {
                    el.addEventListener('click',function(){
                        let tarGet = this.nextElementSibling;
                        tarGet.style.height = 'auto';
                        let _He = tarGet.clientHeight;
                        tarGet.style.height = '0';

                        if(el.classList.contains('active')){
                            tarGet.style.height = _He +'px';
                            setTimeout(function() {
                                tarGet.style.height = '0';
                            }, 0);
                        } else {
                            setTimeout(function() {
                                tarGet.style.height = _He +'px';
                            }, 0);
                        }

                        btn.forEach(sEl => {
                            if(sEl !== el){
                                if(sEl.classList.contains('active')){
                                    sEl.click();
                                }
                            }
                        });

                        el.classList.toggle("active");
                    })
                });

                // 240712 header focus event 추가 - [s]
                function handleFocus() {
                    const links = document.querySelectorAll('.wrap .header_dev .navbar_dev>.menu_item>a');
                    const isPc = 1024;

                    links.forEach(function(link) {
                        link.addEventListener('focus', function() {
                            if (window.innerWidth >= isPc) {
                                this.classList.add('focused');
                            }
                        });
                        
                        link.addEventListener('keydown', function(event) {
                            if (event.key === 'Tab') {
                                if (window.innerWidth >= isPc) {
                                    if (!event.shiftKey) {
                                        this.classList.add('focused');
                                    } else {
                                        this.classList.remove('focused');
                                    }
                                } else {
                                    this.classList.remove('focused');
                                }
                            }
                        });
                    });

                    const subMenus = document.querySelectorAll('.wrap .header_dev .navbar_dev .sub_menu');
                    subMenus.forEach(function(subMenu) {
                        const lastLink = subMenu.querySelector('li:last-child>a');
                        const firstLink = subMenu.querySelector('li:first-child>a');

                        lastLink.addEventListener('keydown', function(event) {
                            if (event.key === 'Tab' && !event.shiftKey && window.innerWidth >= isPc) {
                                this.parentNode.parentNode.previousElementSibling.classList.remove('focused');
                            }
                        });

                        if (firstLink) {
                            firstLink.addEventListener('keydown', function(event) {
                                if (event.key === 'Tab' && event.shiftKey && window.innerWidth >= isPc) {
                                    this.parentNode.parentNode.previousElementSibling.classList.add('focused');
                                }
                            });
                        }
                    });
                }

                handleFocus();
                window.addEventListener('resize', handleFocus);
                // 240712 header focus event 추가 - [e]
            
                // scroll event 
                let lastScrollTop = 0;
                let isScrollingUp = false;

                window.addEventListener('scroll', function() {
                    requestAnimationFrame(function() {
                        if (isDropdownClicked) return;

                        var scrollPosition = window.scrollY;
                        var windowWidth = window.innerWidth;

                        if (scrollPosition < lastScrollTop) {
                            isScrollingUp = true;
                        } else {
                            isScrollingUp = false;
                        }

                        // mobile case
                        if (scrollPosition < 0) {
                            return;
                        }

                        if (windowWidth <= 1024 && !isScrollingUp) {
                            wrap.classList.add('down');
                        } else {
                            wrap.classList.remove('down');
                        }

                        // pc case
                        if (scrollPosition === 0) {
                            wrap.classList.remove('pc_down');
                        } else {
                            wrap.classList.add('pc_down');
                        }

                        lastScrollTop = scrollPosition;
                    });
                });

                // header resize
                window.addEventListener('resize', function() {
                    const headerDev = document.getElementById('headerDev');
                    if (window.innerWidth > 1024) {
                        headerDev.classList.remove('active');
                        document.body.classList.remove('header_activated');
                    }
                });
            }

            //footer
            $(".footer .f_family .btn").on("click", function () {
                var $this = $(this);
                var $selBox = $this.siblings(".family_site_list");

                $selBox.slideToggle();
            });

            //collapse
            if ($(".faq_list").length > 0) {
                $(".btn_que").on("click", function () {
                    var $this = $(this);
                    var $accHead = $this.closest(".acc_head");
                    var $accBody = $accHead.next(".acc_body");
                    var $allAccBody = $(".faq_list").find(".acc_body");

                    if ($accBody.is(":visible")) {
                        $accBody.slideUp();
                        $accHead.removeClass("on");
                    } else {
                        $allAccBody.slideUp();
                        $accBody.slideDown();
                        $(".faq_list").find(".acc_head").removeClass("on");
                        $accHead.addClass("on");
                    }
                });
            }
        },
        tabs: {
            init: function () {
                //tab swiper
                if ($(".tab_wrap").not(".under_line").length > 0) {                    
                    var $active = $(".swiper-slide.active").index(); 
                    tabSwiper = new Swiper(".tab_wrap .swiper-container", {
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        centeredSlidesBounds: true,
                        a11y: false,
                    });
                    tabSwiper.slideTo($active, 0);
                    
                    ui.common.tabs.tabSwiper();
                    
                    $(window).resize(function () {
                        ui.common.tabs.tabSwiper();
                        tabSwiper.slideTo($active, 0);                        
                    });
                }
                
                // tab 콘텐츠 보여주기
                if ($(".tab_list").length > 0) {
                    $(".tab_list .tab_link").on("click", function () {
                        var $this = $(this);
                        var tab_id = $this.attr("data-tab");

                        $this.closest("ul").find("li").removeClass("active");
                        $this.addClass("active");
                        $("#" + tab_id).addClass("active");
                        $("#" + tab_id)
                            .siblings(".con")
                            .removeClass("active");
                    });
                }
            },
            tabSwiper: function () {
                var $tg = $(".tab_wrap .tabs");
                var $ww = $(window).outerWidth();
                var $li = $(".tab_wrap .tabs .tab_link");
                var $ttl = 0;
                $li.each(function () {
                    $ttl += $(this).outerWidth();
                });
                
                $tg.removeClass("unset");
                if ($ww - $ttl <= 100 && $ww > 1023) {
                    //pc case
                    $tg.addClass("unset");
                } else if ($ww - $ttl <= 730 && $ww <= 1023) {
                    //mobile case
                    $tg.addClass("unset");
                }
            },
        },
    },
};

$(document).ready(function () {
    ui.popupFn.init();
    ui.common.bindEvents();
    ui.common.tabs.init();

    // datepicker
    if ($("#datepicker").length) {
        var $date = new Date();
        var $month = $date.getMonth() + 1;
        var $year = $date.getFullYear();
        var $day = $date.getDate();
        var $winW;

        $.datepicker.setDefaults({
            dateFormat: "yy-mm-dd", //Input Display Format 변경
            showMonthAfterYear: true, //년도 먼저 나오고, 뒤에 월 표시
            showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            firstDay: 0, //달력의 가장 첫번째 요일
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], //달력의 월 부분 텍스트
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], //달력의 월 부분 Tooltip 텍스트
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 부분 텍스트
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], //달력의 요일 부분 Tooltip 텍스트
            maxDate: 0, // 오늘 이후의 날짜 비활성화
            minDate: "-5y", // 5년 이전까지만 선택 가능
            changeMonth: true, // 월 선택 가능
            changeYear: true, // 년도 선택 가능
            beforeShow: function () {
                // datepicker가 표시되기 전에 dim 효과 추가
                $("body").append('<div class="datepicker_dim"></div>');
                $winW = $(window).width();
                if ($winW < 1024) {
                    $("body").addClass("datepicker_mobile");
                } else {
                    $("body").removeClass("datepicker_mobile");
                }
            },
            onClose: function () {
                // datepicker가 닫힐 때 dim 효과 제거
                $(".datepicker_dim").remove();
            },
        });

        $(window).resize(function () {
            $winW = $(window).width();
            if ($winW < 1024) {
                $("body").addClass("datepicker_mobile");
            } else {
                $("body").removeClass("datepicker_mobile");
            }
        });
        $("#datepicker").val($year + "-" + (($month < 10) ? '0' + $month : $month)  + "-" + (($day < 10) ? '0' + $day : $day));
        $("#datepicker").datepicker({});
        $("#datepicker2").datepicker({});

        $("#datepicker").on("focus", function () {
            // 년도 선택 드롭다운 메뉴의 모든 옵션에 대해
            $(".ui-datepicker-year option").each(function () {
                var year = $(this).val(); // 현재 옵션의 년도
                $(this).text(year + "년"); // 년도 뒤에 '년' 텍스트 추가
            });
        });
    }
});

/*
 *  global utils methods
 *  comma(price) : "숫자를 3자리마다 ','를 추가하는 문자열을 반환하다"
 */
function comma(input) {
    input.value = input.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*
 *  global utils methods
 *  validateNumberInput(input) : 숫자만 허용
 */
function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, "");
}


// footer event
function toggleFamilyList() {
    const familyList = document.querySelector('.family_site_list');
    const button = document.querySelector('.btn');
    
    if (familyList.classList.contains('active')) {            
        // 닫히는 경우
        familyList.style.height = familyList.clientHeight + 'px';
        setTimeout(function() {
            familyList.style.height = '0';
        }, 10);
    } else {            
        // 열리는 경우
        familyList.style.height = 'auto';
        const height = familyList.clientHeight + 'px';
        familyList.style.height = '0';
        setTimeout(function() {
            familyList.style.height = height;
        }, 10);
    }
    familyList.classList.toggle('active');
}

/*
 *  global utils methods
 *  validateAmountInput(input, method) : "입력하는 페이지별 제한금액 이상 입력하면 제한금액으로 설정 "
 */
function validateAmountInput(input, method) {
    var max = 0;
    if(method == "CARD" || method == "ACCT") {
        max = 100000000;
    } else if (method == "VA") {
        max = 10000000000;
    } else {
        max = 0;
    }
    input.value = input.value.replace(/[^0-9]/g, "");
    if(input.value > max) {
        input.value = max
    }
}
