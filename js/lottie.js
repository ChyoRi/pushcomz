document.addEventListener('DOMContentLoaded', () => {
  const lottieItems = document.querySelectorAll('.lottie_item');
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

  const checkInitialVisibility = () => {
    lottieItems.forEach((item, index) => {
      const anim = animations[index];
      const config = anim?.config;

      // 애니메이션 로드 상태와 실행 여부를 확인
      if (!anim || !anim.isLoaded || config?.hasPlayed) return;

      // 위치 확인 로직 추가
      const textWrap = item.querySelector('.lottie_text_wrap');
      const lottie = item.querySelector('.lottie');
      if (textWrap && lottie) {
        const position = textWrap.compareDocumentPosition(lottie);
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
          console.log(`Item ${index + 1}: lottie_text_wrap이 lottie보다 앞에 있습니다.`);
        } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
          console.log(`Item ${index + 1}: lottie_text_wrap이 lottie보다 뒤에 있습니다.`);
        }
      }
      
      const rect = item.getBoundingClientRect();
      const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (isVisible) {
        // 요소의 위치 관계를 비교하여 클래스 추가
        const position = textWrap.compareDocumentPosition(lottie);
        const textElement = textWrap.querySelector('p');

        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
          textElement?.classList.add('lottie_fade_left');
          // lottie ::after 스타일 변경
          lottie.style.setProperty('--lottie-after-right', 'auto');
          lottie.style.setProperty('--lottie-after-left', '0');
        } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
          textElement?.classList.add('lottie_fade_right');
        }

        // 애니메이션 활성화 및 실행
        if (!lottie.classList.contains('active')) {
          lottie.classList.add('active');
          playAnimationWithDelay(anim, config);
          config.hasPlayed = true; // 실행 상태 업데이트
        }
      }
    });
  };

  animationsConfig.forEach(config => {
    const animation = lottie.loadAnimation({
      container: document.getElementById(config.containerId),
      renderer: 'svg',
      loop: config.loop,
      autoplay: false,
      path: config.path,
    });

    animation.addEventListener('DOMLoaded', () => {
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
    threshold: 0.5
  };
  function isElementPartiallyVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // 요소가 화면에 조금이라도 보이는지 확인
    return (
      (rect.top <= windowHeight && rect.bottom >= 0) ||
      (rect.bottom >= 0 && rect.top <= windowHeight)
    );
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = Array.from(lottieItems).indexOf(entry.target);
      const anim = animations[index];
      const currentIndex = index + 1;
      console.log(currentIndex);

      if (!anim || !anim.isLoaded|| anim.config.hasPlayed) return;

      const item = entry.target;
      const textWrap = item.querySelector('.lottie_text_wrap');
      const lottie = item.querySelector('.lottie');
      const textElement = textWrap ? textWrap.querySelector('p') : null;

      if (!textWrap || !lottie) return;

      const position = textWrap.compareDocumentPosition(lottie);

      if (entry.isIntersecting || isElementPartiallyVisible(item)) {
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
          // lottie가 textWrap 뒤에 있는 경우
          textElement.classList.add('lottie_fade_left');
          // lottie ::after 스타일 변경
          lottie.style.setProperty('--lottie-after-right', 'auto');
          lottie.style.setProperty('--lottie-after-left', '0');
        } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
          // lottie가 textWrap 앞에 있는 경우
          textElement.classList.add('lottie_fade_right');
        }
  
        if (!lottie.classList.contains('active')) {
          lottie.classList.add('active');
          anim.config.hasPlayed = true;
          setTimeout(() => {
            playAnimationWithDelay(anim, anim.config);
          }, 100);
        }
      }
    });
  }, observerOptions);

  
  lottieItems.forEach((item) => observer.observe(item));
  
  setTimeout(checkInitialVisibility, 100);
});