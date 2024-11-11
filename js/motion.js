const body = document.querySelector('body');
const pcHeader = document.querySelector('.pc_header');
const pcHeaderLogoImg = document.querySelector('#logo > a > img');
const mobileHeader = document.querySelector('.mobile_header');
const dimmed = document.querySelector('.dimmed');
const mobileNav = document.querySelector('.mobile_nav');
const mobileNavCloseBtn = document.querySelector('.mobile_nav_close_btn');
const hambergerBtn = document.querySelector('.hamberger_btn');
const lotiieWrap = document.querySelector('.grid');
const lottieCard = document.querySelectorAll('.grid-item');
const lottieCardLink = document.querySelectorAll('.lottie_card_link');
const modalWrap = document.querySelector('.modal_wrap');
const lyPopWrap = document.querySelectorAll('.ly_pop_wrap');
const lyPopCloseBtn = document.querySelectorAll('.ly_header_close');
const footerInner = document.querySelector('.footer_inner');
const companyInfoWrap = document.querySelector('.company_info_wrap');
const footerNav = document.querySelector('.footer_nav_wrap');
const topBtnWrap = document.querySelector('.top_btn_wrap');
const topBtn = document.querySelector('.top_btn');

if(window.innerWidth <= 480) {
  footerInner.insertBefore(footerNav, companyInfoWrap);
} else {
  footerInner.insertBefore(companyInfoWrap, footerNav);
}

// 스크롤시 상단 헤더 고정
const headerFixed = () => {
  const pageScrollTop = window.scrollY;

  if(window.innerWidth >= 992 && pageScrollTop >= 100) {
    pcHeader.classList.add('fixed');
    pcHeaderLogoImg.src = './img/pc-header-fixed.png';
  } else {
    pcHeader.classList.remove('fixed');
    pcHeaderLogoImg.src = './img/pc-header-default.png';
  }

  if (window.innerWidth <= 991 && pageScrollTop >= 100) {
    mobileHeader.classList.add('fixed');
  } else {
    mobileHeader.classList.remove('fixed');
  }

  if(pageScrollTop >= 500) {
    topBtnWrap.classList.add('show');
  } else {
    topBtnWrap.classList.remove('show');
  }
}

// 모바일 햄버거 버튼 누를시 네비와 dimmed의 active class를 추가
const mobileNavMenu = () => {
  dimmed.classList.add('active');
  mobileNav.classList.add('active');
}

// 모바일 X버튼 누를시 nav의 active class를 제거
const mobileNavClose = () => {
  dimmed.classList.remove('active');
  mobileNav.classList.remove('active');
}

// Resize Window Event
const resizeNavClose = () => {
  // // resize시 PC Size로 넘어갔을경우 nav와 dimmed의 active class를 제거
  if(window.innerWidth >= 992) {
    mobileNavdimmed.classList.remove('active');
    mobileNav.classList.remove('active');
  }

  if(window.innerWidth <= 480) {
    footerInner.insertBefore(footerNav, companyInfoWrap);
  } else {
    footerInner.insertBefore(companyInfoWrap, footerNav);
  }
}

// lottie card 클릭 시 motion modal open
const lyPopActive = e => {
  e.preventDefault();
  let targetParent = e.currentTarget.parentElement;
  let cardIdx = [...lottieCard].indexOf(targetParent);

  lyPopWrap.forEach(item => {
    item.classList.remove('active');
  });

  body.classList.add('fixed');
  modalWrap.classList.add('active');
  lyPopWrap[cardIdx].classList.add('active');
  dimmed.classList.add('active');
}

// exit 버튼 누를시 motion modal close
const lyPopClose = () => {
  lyPopWrap.forEach(item => {
    item.classList.remove('active');
  });

  body.classList.remove('fixed');
  modalWrap.classList.remove('active');
  dimmed.classList.remove('active');
}

// 탑버튼 클릭시 상단 이동
const goTop = e => {
  e.preventDefault();

  window.scrollTo({top: 0});
}

// masonry JS 라이브러리 객체 선언
const masonry = new Masonry(lotiieWrap, {
  itemSelector: '.grid-item',
  gutter: 15,
  percentPosition: true
});

imagesLoaded(lotiieWrap, () => {
  masonry.layout();
});

window.addEventListener('scroll', headerFixed);
window.addEventListener('resize', resizeNavClose);
hambergerBtn.addEventListener('click', mobileNavMenu);
mobileNavCloseBtn.addEventListener('click', mobileNavClose);
lottieCardLink.forEach(item => {
  item.addEventListener('click', lyPopActive);
});
lyPopCloseBtn.forEach(item => {
  item.addEventListener('click', lyPopClose);
})
topBtn.addEventListener('click', goTop);