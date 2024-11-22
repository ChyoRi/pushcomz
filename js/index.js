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
  const mainVideoLogo = document.querySelector('.video_logo');
  const mainHangleText = document.querySelector('.hangle_text');
  const mainEnglishText = document.querySelector('.english_text');
  const topBtnWrap = document.querySelector('.top_btn_wrap');
  const topBtn = document.querySelector('.top_btn');

  // mobile 해상도로 진입시 mainvideo의 한글텍스트와 영문텍스트 순서를 변경
  if(window.innerWidth <= 991) {
    mainTextBox.insertBefore(mainEnglishText, mainHangleText);
    mainVideoLogo.classList.remove('fadeup_delay01');
    mainVideoLogo.classList.add('fadeup_delay02');
    mainTextBox.classList.remove('fadeup_delay02');
    mainTextBox.classList.add('fadeup_delay01');
  } else {
    mainTextBox.insertBefore(mainHangleText, mainEnglishText);
    mainVideoLogo.classList.remove('fadeup_delay02');
    mainVideoLogo.classList.add('fadeup_delay01');
    mainTextBox.classList.remove('fadeup_delay01');
    mainTextBox.classList.add('fadeup_delay02');
  }

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

  // Event Listener
  window.addEventListener('scroll', topBtnShow);
  window.addEventListener('resize', resizeTextBox);
  mainVideo.addEventListener('play', () => {
    mainImgWrap.classList.add('inactive');
  });
  topBtn.addEventListener('click', goTop);
});