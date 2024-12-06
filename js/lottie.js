// 요소 재정렬 함수
const lottieItems = document.querySelectorAll('.lottie_item');

const rearrangeElements = () => {
  const isSmallScreen = window.innerWidth <= 480;

  lottieItems.forEach((item, index) => {
    const textWrap = item.querySelector('.lottie_text_wrap');
    const lottieWrap = item.querySelector('.lottie_wrap');

    if (textWrap && lottieWrap) {
      if (isSmallScreen) {
        // 480 이하일 때 textWrap이 lottieWrap 뒤에 위치해야 함
        item.insertBefore(lottieWrap, textWrap);
      } else {
        if (index % 2 !== 0) {
          item.insertBefore(textWrap, lottieWrap);
        } else {
          // 인덱스를 2로 나누었을 때 나머지가 없는 경우
          // 원래 순서대로 textWrap이 lottieWrap 앞에 있어야 함
          item.insertBefore(lottieWrap, textWrap);
        }
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  
  const animations = [];

  const animationsConfig = [
    {
      path: '../json/0729_promo_egg.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion1',
      playSegmentsOnce: [0, 64],
      loopSegments: [50, 64],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false 
    },
    {
      path: '../json/today_card_fortune.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion2',
      playSegmentsOnce: [0, 44],
      loopSegments: [36, 44],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false 
    },
    {
      path: '../json/0926_promo_fruit.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion3',
      playSegmentsOnce: [0, 36],
      loopSegments: [12, 36],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/are_you_having_fun.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion4',
      playSegmentsOnce: [0, 48],
      loopSegments: [36, 48],
      delayTime: 1000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0311_promo_ssd.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion5',
      playSegmentsOnce: [0, 48],
      loopSegments: [42, 48],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0103_promo_amorepacific.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion6',
      playSegmentsOnce: [0, 116],
      loopSegments: [92, 116],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0905_promo_Chuseok.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion7',
      playSegmentsOnce: [0, 145],
      loopSegments: [49, 145],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/1104_promo_peperoday.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion8',
      playSegmentsOnce: [0, 82],
      loopSegments: [66, 82],
      delayTime: 1500,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0307_promo_WhiteDay.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion9',
      playSegmentsOnce: [0, 69],
      loopSegments: [49, 69],
      delayTime: 1500,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0525_promo_end.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion10',
      playSegmentsOnce: [0, 70],
      loopSegments: [70, 118],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0308_promo_agricultural.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion11',
      playSegmentsOnce: [0, 78],
      loopSegments: [66, 78],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0206_promo_sul.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion12',
      playSegmentsOnce: [0, 138],
      loopSegments: [78, 138],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/nt_weekend_coupon.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion13',
      playSegmentsOnce: [0, 110],
      loopSegments: [62, 110],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/nt_customer_monitering.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion14',
      playSegmentsOnce: [0, 66],
      loopSegments: [0, 66],
      delayTime: 3000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/gangsale.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion15',
      playSegmentsOnce: [0, 64],
      loopSegments: [16, 64],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/spring_sale.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion16',
      playSegmentsOnce: [0, 120],
      loopSegments: [0, 120],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/summer02.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion17',
      playSegmentsOnce: [0, 168],
      loopSegments: [0, 168],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0221_promo_socks.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion18',
      playSegmentsOnce: [0, 36],
      loopSegments: [0, 36],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/card_point_benefit.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion19',
      playSegmentsOnce: [0, 50],
      loopSegments: [42, 50],
      delayTime: 2000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/1218_promo_winterfood.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion20',
      playSegmentsOnce: [0, 80],
      loopSegments: [0, 80],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/nt_new_join_event_top.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion21',
      playSegmentsOnce: [0, 80],
      loopSegments: [32, 80],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0731_promo_frosted-fruits.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion22',
      playSegmentsOnce: [0, 72],
      loopSegments: [24, 72],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0903_promo_camping.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion23',
      playSegmentsOnce: [0, 68],
      loopSegments: [20, 68],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/giftbox.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion24',
      playSegmentsOnce: [0, 68],
      loopSegments: [18, 68],
      delayTime: 0,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0612_promo_pulmuone.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion25',
      playSegmentsOnce: [0, 34],
      loopSegments: [28, 34],
      delayTime: 3000,
      initialVisible: false,
      hasPlayed: false
    },
    {
      path: '../json/0529_promo_diet.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion26',
      playSegmentsOnce: [0, 21],
      loopSegments: [9, 21],
      delayTime: 3000,
      initialVisible: false,
      hasPlayed: false
    }
  ];

  rearrangeElements();

  const playAnimationWithDelay = async (anim, config) => {
    if (anim.isPlaying) return;
    
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

    const onComplete = async () => {
      await delay(config.delayTime);
      if (!anim || !anim.isLoaded) return;
      
      if (config.loopSegments) {
        anim.playSegments(config.loopSegments, true);
      } else if (config.playSegmentsOnce) {
        anim.playSegments(config.playSegmentsOnce, true);
      }
    };

    anim.removeEventListener('complete', onComplete);
    anim.addEventListener('complete', onComplete);

    anim.goToAndStop(0, true);
    
    if (config.playSegmentsOnce) {
      anim.playSegments(config.playSegmentsOnce, true);
    } else {
      anim.play();
    }
  };



  // 초기 화면에 보이는 요소들 체크 함수
  const checkInitialVisibleElements = () => {
    lottieItems.forEach((item, index) => {
      const anim = animations[index];
      if (!anim || !anim.isLoaded || anim.config.hasPlayed) return;

      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const elementMiddle = rect.top + (elementHeight / 3);
      
      // 요소의 중간 지점이 화면 안에 있는지 확인
      const isHalfVisible = (
        elementMiddle >= 0 &&
        elementMiddle <= windowHeight
      );

      if (isHalfVisible) {
        const textWrap = item.querySelector('.lottie_text_wrap');
        const lottie = item.querySelector('.lottie');
        const titleElement = textWrap?.querySelector('.lottie_text_title');
        const textElement = textWrap?.querySelectorAll('.lottie_text');

        if (textWrap && lottie && titleElement && textElement) {
          titleElement.classList.add('active');
          textElement.forEach((textElement) => textElement.classList.add('active'));
          lottie.classList.add('active');
          anim.config.hasPlayed = true;
          
          setTimeout(() => {
            playAnimationWithDelay(anim, anim.config);
          }, 100);
        }
      }
    });
  };

  const startTime = Date.now();

  animationsConfig.forEach(config => {
    const animation = lottie.loadAnimation({
      container: document.getElementById(config.containerId),
      renderer: 'svg',
      loop: config.loop,
      autoplay: false,
      path: config.path,
    });

    animation.addEventListener('DOMLoaded', () => {
      const endTime = performance.now(); // 종료 시간 기록
      const loadTime = endTime - startTime; // 로드 시간 계산
      console.log(`SVG loaded in ${loadTime.toFixed(2)} ms`);
      animation.isLoaded = true;
      if (config.initialVisible) {
        const container = document.getElementById(config.containerId);
        if (container) {
          const lottieBox = container.closest('.lottie');
          if (lottieBox) {
            lottieBox.classList.add('active');
            config.hasPlayed = true;
            playAnimationWithDelay(animation, config);
          }
        }
      }
    });

    animation.config = config;
    animations.push(animation);
  });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = Array.from(lottieItems).indexOf(entry.target);
      const anim = animations[index];

      if (!anim || !anim.isLoaded || anim.config.hasPlayed) return;

      const item = entry.target;
      const textWrap = item.querySelector('.lottie_text_wrap');
      const lottie = item.querySelector('.lottie');
      const titleElement = textWrap?.querySelector('.lottie_text_title');
      const textElement = textWrap?.querySelectorAll('.lottie_text');

      if (!textWrap || !lottie || !titleElement || !textElement) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        titleElement.classList.add('active');
        textElement.forEach((textElement) => textElement.classList.add('active'));
        lottie.classList.add('active');
        anim.config.hasPlayed = true;
        
        setTimeout(() => {
          playAnimationWithDelay(anim, anim.config);
        }, 100);
      }
    });
  }, observerOptions);

  // 요소 관찰 시작
  lottieItems.forEach(item => observer.observe(item));

  // 초기 화면에 보이는 요소들 체크
  window.addEventListener('load', () => {
    setTimeout(() => {
      checkInitialVisibleElements();
    }, 500);

  });

  // 스크롤 이벤트에서도 체크 (추가 안전장치)
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkInitialVisibleElements, 100);
  }, { passive: true });

  // resize 이벤트 연결
  window.addEventListener('resize', rearrangeElements);
});