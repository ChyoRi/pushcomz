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

const pcHeader = document.querySelector('.pc_header');
const pcHeaderLogoImg = document.querySelector('#logo > a > img');
const mobileNavDim = document.querySelector('.mobile_nav_dim');
const mobileNav = document.querySelector('.mobile_nav');
const mobileNavCloseBtn = document.querySelector('.mobile_nav_close_btn');
const hambergerBtn = document.querySelector('.hamberger_btn');
const topBtnWrap = document.querySelector('.top_btn_wrap');
const topBtn = document.querySelector('.top_btn')

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

// 모바일 햄버거 버튼 누를시 네비 active
const mobileNavMenu = () => {
  mobileNavDim.classList.add('active');
  mobileNav.classList.add('active');
}

// 모바일 X버튼 누를시 네비 default
const mobileNavClose = () => {
  mobileNavDim.classList.remove('active');
  mobileNav.classList.remove('active');
}

// resize시 PC Size로 넘어갔을경우 네비 default
const resizeNavClose = () => {
  if(window.innerWidth >= 992) {
    mobileNavDim.classList.remove('active');
    mobileNav.classList.remove('active');
  }
}

window.addEventListener('scroll', pcHeaderFixed);
window.addEventListener('resize', resizeNavClose);
hambergerBtn.addEventListener('click', mobileNavMenu);
mobileNavCloseBtn.addEventListener('click', mobileNavClose);
topBtn.addEventListener('click', goTop);