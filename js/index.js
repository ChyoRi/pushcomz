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

const header = document.querySelector('#header');
const headerLogoImg = document.querySelector('#logo > a > img');
const topBtn = document.querySelectorAll('.top_btn');

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

// 탑버튼 클릭시 상단 이동
const goTop = e => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', headerFixed);
topBtn.forEach(item => {
  item.addEventListener('click', goTop);
});
