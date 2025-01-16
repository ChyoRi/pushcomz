import { loadFile } from "./common/load.js";
import { header } from "./common/header.js";
import { footer } from "./common/footer.js";
import { urlChange } from "./common/urlChange.js";

document.addEventListener('DOMContentLoaded', () => {

  loadFile(() => {
    header();
    footer();
  });

  urlChange();

  // 스와이퍼 
  const swiper = new Swiper(".partners-logo-frame", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 7000,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    stopOnLastSlide: false,
    freeMode: true
  });

  // 요소 Selector
  const mainVideo = document.querySelector('.main_video');
  const mainImgWrap = document.querySelector('.img_wrap');
  const mainTextBox = document.querySelector('.text_box');
  const mainHangleText = document.querySelector('.hangle_text');
  const mainEnglishText = document.querySelector('.english_text');
  const topBtnWrap = document.querySelector('.top_btn_wrap');
  const topBtn = document.querySelector('.top_btn');
  const modalBtn = document.querySelector('.modal_close_btn');

  // mobile 해상도로 진입시 mainvideo의 한글텍스트와 영문텍스트 순서를 변경
  if(window.innerWidth <= 991) {
    mainTextBox.insertBefore(mainEnglishText, mainHangleText);
  } else {
    mainTextBox.insertBefore(mainHangleText, mainEnglishText);
  }

  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  }

  const sectionActions = {
    sec01: () => {
      const mainVideoLogo = document.querySelector('.video_logo');
      if (window.innerWidth <= 991) {
        mainVideoLogo.classList.add('fadeup_delay02');
        mainTextBox.classList.add('fadeup_delay01');
      } else {
        mainVideoLogo.classList.add('fadeleft');
        mainTextBox.classList.add('faderight');
      }
    },
    sec02: () => {
      const attitudeTitle = document.querySelector('.attitude_wrap h3');
      const attitudeItem = document.querySelectorAll('.attitude_item');
      attitudeTitle.classList.add('fadeup');
      attitudeItem.forEach(item => {
        item.classList.add('fadeup_delay03');
      });
    },
    sec03: () => {
      const worksImgBox = document.querySelector('.works_img_box');
      const worksTextBox = document.querySelector('.works_text_box');
      const worksTitle = document.querySelector('.works_text_box h3');
      const worksText = document.querySelector('.works_text_box p');
      const worksList = document.querySelector('.works_list');
      if (window.innerWidth <= 991) {
        worksTextBox.style.opacity = '1';
        worksTitle.style.opacity = '0';
        worksText.style.opacity = '0';
        worksList.style.opacity = '0';
        worksTitle.classList.add('fadeup');
        worksText.classList.add('fadeup_delay03');
        worksList.classList.add('fadeup_delay04');
      } else {
        worksImgBox.classList.add('active');
        worksTextBox.classList.add('faderight');
      }
    },
    sec04: () => {
      const partnersTitle = document.querySelector('.partners_wrap h3');
      const partnersText = document.querySelector('.partners_wrap p');
      partnersTitle.classList.add('fadeup');
      partnersText.classList.add('fadeup_delay03');
    }
  }

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log(`${entry.target.id} is in view`);

        const action = sectionActions[entry.target.id];
        if (action) action();
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // 스크롤시 탑버튼 Active
  const topBtnShow = () => {
    const pageScrollTop = window.scrollY;

    if(pageScrollTop >= 500) {
      topBtnWrap.classList.add('show');
    } else {
      topBtnWrap.classList.remove('show');
    }
  }

  // 탑버튼 클릭시 상단 이동
  const goTop = e => {
    e.preventDefault();

    window.scrollTo({top: 0});
  }

  // Resize Window Event
  const resizeTextBox = () => {
    // mobile 해상도로 진입시 mainvideo의 한글텍스트와 영문텍스트 순서를 변경
    if(window.innerWidth <= 991) {
      mainTextBox.insertBefore(mainEnglishText, mainHangleText);
    } else {
      mainTextBox.insertBefore(mainHangleText, mainEnglishText);
    }
  }

  const modalClose = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('deactivate');
  }

  // Event Listener
  window.addEventListener('scroll', topBtnShow);
  window.addEventListener('resize', resizeTextBox);
  mainVideo.addEventListener('play', () => {
    mainImgWrap.classList.add('inactive');
  });
  topBtn.addEventListener('click', goTop);
  modalBtn.addEventListener('click', modalClose);
});