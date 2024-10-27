const header = document.querySelector('#header');
const headerLogoImg = document.querySelector('#logo > a > img');
const uiUx = document.querySelector('.ui_ux');
const topBtnWrap = document.querySelector('.top_btn_wrap');
const topBtn = document.querySelector('.top_btn')

// 스크롤시 상단 헤더 고정
const headerFixed = () => {
  const pageScrollTop = window.scrollY;

  if(pageScrollTop >= 100) {
    header.classList.remove('default');
    header.classList.add('fixed');
    headerLogoImg.src = './img/pc-header-fixed.png';
  } else {
    header.classList.remove('fixed');
    header.classList.add('default');
    headerLogoImg.src = './img/pc-header-default.png';
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

window.addEventListener('scroll', headerFixed);
topBtn.addEventListener('click', goTop);
uiUx.addEventListener('click', goTop);