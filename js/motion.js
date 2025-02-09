import { loadFile } from "./common/load.js";
import { header } from "./common/header.js";
import { lnbFixed } from "./common/lnb.js";
import { footer } from "./common/footer.js";
import { urlChange } from "./common/urlChange.js";

document.addEventListener('DOMContentLoaded', () => {
  loadFile(() => {
    header();
    footer();
  });

  urlChange();
  lnbFixed();

  const body = document.querySelector('body');
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

  // lottie card 클릭 시 motion modal open
  // const lyPopActive = e => {
  //   e.preventDefault();
  //   let targetParent = e.currentTarget.parentElement;
  //   let cardIdx = [...lottieCard].indexOf(targetParent);

  //   lyPopWrap.forEach(item => {
  //     item.classList.remove('active');
  //   });

  //   body.classList.add('fixed');
  //   modalWrap.classList.add('active');
  //   lyPopWrap[cardIdx].classList.add('active');
  //   dimmed.classList.add('active');
  // }

  // exit 버튼 누를시 motion modal close
  // const lyPopClose = () => {
  //   lyPopWrap.forEach(item => {
  //     item.classList.remove('active');
  //   });

  //   body.classList.remove('fixed');
  //   modalWrap.classList.remove('active');
  //   dimmed.classList.remove('active');
  // }

  // 탑버튼 클릭시 상단 이동
  const goTop = e => {
    e.preventDefault();

    window.scrollTo({top: 0});
  }

  window.addEventListener('scroll', topBtnShow);
  // lottieCardLink.forEach(item => {
  //   item.addEventListener('click', lyPopActive);
  // });
  // lyPopCloseBtn.forEach(item => {
  //   item.addEventListener('click', lyPopClose);
  // })
  topBtn.addEventListener('click', goTop);
});