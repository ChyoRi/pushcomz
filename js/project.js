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

  // const uiUx = document.querySelector('.ui_ux');
  // console.log(uiUx);
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
  // uiUx.addEventListener('click', goTop);
  topBtn.addEventListener('click', goTop);
});

