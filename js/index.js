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

const defaultHaeder = document.querySelector('.default_header');
const fixedHeader = document.querySelector('.fixed_header');

const header = () => {
  const pageScrollTop = window.scrollY;
  console.log(pageScrollTop);
  if(pageScrollTop >= 100) {
    fixedHeader
  }
}

window.addEventListener('scroll', header);
