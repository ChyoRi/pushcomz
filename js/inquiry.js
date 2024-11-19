import { loadFile } from "./common/load.js";
import { header } from "./common/header.js";
import { footer } from "./common/footer.js";

document.addEventListener('DOMContentLoaded', () => {
  loadFile(() => {
    header();
    footer();
  });
  
  const topBtnWrap = document.querySelector('.top_btn_wrap');
  const topBtn = document.querySelector('.top_btn');
  
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
  
  window.addEventListener('scroll', topBtnShow);
  topBtn.addEventListener('click', goTop);
});

