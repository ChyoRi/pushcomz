document.addEventListener('DOMContentLoaded', () => {
  const lottieCardList = document.querySelectorAll('.lottie-card-link');
  const animations = [];

  const animationsConfig = [
    {
      path: './json/0729_promo_egg.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion1',
      playSegmentsOnce: [0, 64],
      loopSegments: [50, 64],
      delayTime: 2000,
    },
    {
      path: './json/today_card_fortune.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion2',
      playSegmentsOnce: [0, 44],
      loopSegments: [36, 44],
      delayTime: 2000,
    },
    {
      path: './json/0926_promo_fruit.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion3',
      playSegmentsOnce: [0, 36],
      loopSegments: [12, 36],
      delayTime: 2000,
    },
    {
      path: './json/are_you_having_fun.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion4',
      playSegmentsOnce: [0, 48],
      loopSegments: [36, 48],
      delayTime: 1000,
    },
    {
      path: './json/0311_promo_ssd.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion5',
      playSegmentsOnce: [0, 48],
      loopSegments: [42, 48],
      delayTime: 2000,
    },
    {
      path: './json/0103_promo_amorepacific.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion6',
      playSegmentsOnce: [0, 116],
      loopSegments: [92, 116],
      delayTime: 2000,
    },
    {
      path: './json/0905_promo_Chuseok.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion7',
      playSegmentsOnce: [0, 145],
      loopSegments: [49, 145],
      delayTime: 0,
    },
    {
      path: './json/1104_promo_peperoday.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion8',
      playSegmentsOnce: [0, 82],
      loopSegments: [66, 82],
      delayTime: 1500,
    },
    {
      path: './json/0307_promo_WhiteDay.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion9',
      playSegmentsOnce: [0, 69],
      loopSegments: [49, 69],
      delayTime: 1500,
    },
    {
      path: './json/0525_promo_end.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion10',
      playSegmentsOnce: [0, 70],
      loopSegments: [70, 118],
      delayTime: 0,
    },
    {
      path: './json/0308_promo_agricultural.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion11',
      playSegmentsOnce: [0, 78],
      loopSegments: [66, 78],
      delayTime: 2000,
    },
    {
      path: './json/0206_promo_sul.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion12',
      playSegmentsOnce: [0, 138],
      loopSegments: [78, 138],
      delayTime: 0,
    },
    {
      path: './json/nt_weekend_coupon.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion13',
      playSegmentsOnce: [0, 110],
      loopSegments: [62, 110],
      delayTime: 0,
    },
    {
      path: './json/nt_customer_monitering.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion14',
      playSegmentsOnce: [0, 66],
      loopSegments: [0, 66],
      delayTime: 3000,
    },
    {
      path: './json/gangsale.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion15',
      playSegmentsOnce: [0, 64],
      loopSegments: [16, 64],
      delayTime: 0,
    },
    {
      path: './json/spring_sale.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion16',
      playSegmentsOnce: [0, 120],
      loopSegments: [0, 120],
      delayTime: 0,
    },
    {
      path: './json/summer02.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion17',
      playSegmentsOnce: [0, 168],
      loopSegments: [0, 168],
      delayTime: 0,
    },
    {
      path: './json/0221_promo_socks.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion18',
      playSegmentsOnce: [0, 36],
      loopSegments: [0, 36],
      delayTime: 2000,
    },
    {
      path: './json/card_point_benefit.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion19',
      playSegmentsOnce: [0, 50],
      loopSegments: [42, 50],
      delayTime: 2000,
    },
    {
      path: './json/1218_promo_winterfood.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion20',
      playSegmentsOnce: [0, 80],
      loopSegments: [0, 80],
      delayTime: 0,
    },
    {
      path: './json/nt_new_join_event_top.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion21',
      playSegmentsOnce: [0, 80],
      loopSegments: [32, 80],
      delayTime: 0,
    },
    {
      path: './json/0731_promo_frosted-fruits.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion22',
      playSegmentsOnce: [0, 72],
      loopSegments: [24, 72],
      delayTime: 0,
    },
    {
      path: './json/0903_promo_camping.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion23',
      playSegmentsOnce: [0, 68],
      loopSegments: [20, 68],
      delayTime: 0,
    },
    {
      path: './json/giftbox.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion24',
      playSegmentsOnce: [0, 68],
      loopSegments: [18, 68],
      delayTime: 0
    },
    {
      path: './json/showty.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion25',
      playSegmentsOnce: [0, 19],
      loopSegments: [15, 19],
      delayTime: 3000,
    },
    {
      path: './json/0612_promo_pulmuone.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion26',
      playSegmentsOnce: [0, 34],
      loopSegments: [28, 34],
      delayTime: 3000,
    },
    {
      path: './json/0529_promo_diet.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie_motion27',
      playSegmentsOnce: [0, 21],
      loopSegments: [9, 21],
      delayTime: 3000,
    }
  ];

  animationsConfig.forEach(config => {
    const animation = lottie.loadAnimation({
      container: document.getElementById(config.containerId),
      renderer: 'svg',
      loop: config.loop,
      autoplay: true,
      path: config.path,
    });

    animation.config = config;  // 애니메이션 객체에 설정 저장
    animations.push(animation);
  });

  const playAnimationWithDelay = async (anim, config) => {
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

    const onComplete = async () => {
      await delay(config.delayTime);
      if (config.loopSegments) {
        anim.playSegments(config.loopSegments, true);
      } else if (config.playSegmentsOnce) {
        anim.playSegments(config.playSegmentsOnce, true);
      }
    };

    anim.addEventListener('complete', onComplete);

    if (config.loopSegments) {
      anim.playSegments(config.playSegmentsOnce, true);
    } else if (config.playSegmentsOnce) {
      anim.playSegments(config.playSegmentsOnce, true);
    } else {
      anim.play();
    }
  };
  
  lottieCardList.forEach((element, index) => {
    element.addEventListener('click', () => {
      const anim = animations[index];
      const config = anim.config;

      anim.stop();
      anim.goToAndStop(0, true);
      console.log(element);

      playAnimationWithDelay(anim, config);
    });
  });
  
});