export const lnbFixed = () => {
  const lnbList = document.querySelector('.lnb_list');
  const pageScrollTop = window.scrollY;

  if(pageScrollTop >= 100) {
    lnbList.classList.add('fixed');
  } else {
    lnbList.classList.remove('fixed');
  }

  window.addEventListener('scroll',lnbFixed);
}