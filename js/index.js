// 스와이퍼 
document.addEventListener("DOMContentLoaded", () => {
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
});

// 요소 Selector
const pcHeader = document.querySelector('.pc_header');
const pcHeaderLogoImg = document.querySelector('#logo > a > img');
const mobileNavDim = document.querySelector('.mobile_nav_dim');
const mobileNav = document.querySelector('.mobile_nav');
const mobileNavCloseBtn = document.querySelector('.mobile_nav_close_btn');
const hambergerBtn = document.querySelector('.hamberger_btn');
const mainTextBox = document.querySelector('.text_box');
const mainHangleText = document.querySelector('.hangle_text');
const mainEnglishText = document.querySelector('.english_text');
const topBtnWrap = document.querySelector('.top_btn_wrap');
const topBtn = document.querySelector('.top_btn')

// mobile 해상도로 진입시 mainvideo의 한글텍스트와 영문텍스트 순서를 변경
if(window.innerWidth <= 991) {
  mainTextBox.insertBefore(mainEnglishText, mainHangleText);
}

// 스크롤시 상단 헤더 고정
const pcHeaderFixed = () => {
  const pageScrollTop = window.scrollY;

  if(pageScrollTop >= 100) {
    pcHeader.classList.remove('default');
    pcHeader.classList.add('fixed');
    pcHeaderLogoImg.src = './img/pc-header-fixed.png';
  } else {
    pcHeader.classList.remove('fixed');
    pcHeader.classList.add('default');
    pcHeaderLogoImg.src = './img/pc-header-default.png';
  }

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

// 모바일 햄버거 버튼 누를시 네비와 dim의 active class를 추가
const mobileNavMenu = () => {
  mobileNavDim.classList.add('active');
  setTimeout(() => {
    mobileNav.classList.add('active');
  });
}

// 모바일 X버튼 누를시 nav의 active class를 제거
const mobileNavClose = () => {
  mobileNav.classList.remove('active');
}

// Resize Window Event
const resizeNavClose = () => {
  // // resize시 PC Size로 넘어갔을경우 nav와 dim의 active class를 제거
  if(window.innerWidth >= 992) {
    mobileNavDim.classList.remove('active');
    mobileNav.classList.remove('active');
  }

  // mobile 해상도로 진입시 mainvideo의 한글텍스트와 영문텍스트 순서를 변경
  if(window.innerWidth <= 991) {
    mainTextBox.insertBefore(mainEnglishText, mainHangleText);
  }
}

// nav의 transion이 끝난이후에 dim의 active class를 제거
const mobileNavCloseMove = () => {
  if (!mobileNav.classList.contains('active')) {
    mobileNavDim.classList.remove('active');
  }
}

// Event Listener
window.addEventListener('scroll', pcHeaderFixed);
window.addEventListener('resize', resizeNavClose);
hambergerBtn.addEventListener('click', mobileNavMenu);
mobileNavCloseBtn.addEventListener('click', mobileNavClose);
topBtn.addEventListener('click', goTop);
mobileNav.addEventListener('transitionend', mobileNavCloseMove);