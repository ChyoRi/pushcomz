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
}

window.addEventListener('scroll', headerFixed);