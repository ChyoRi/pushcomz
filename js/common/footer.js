export const footer = () => {
  const footerInner = document.querySelector('.footer_inner');
  const companyInfoWrap = document.querySelector('.company_info_wrap');
  const footerNav = document.querySelector('.footer_nav_wrap');
  
  if(window.innerWidth <= 480) {
    footerInner.insertBefore(footerNav, companyInfoWrap);
  } else {
    footerInner.insertBefore(companyInfoWrap, footerNav);
  }
  
  // Resize Window Event
  const resizeFooterInner = () => {
    if(window.innerWidth <= 480) {
      footerInner.insertBefore(footerNav, companyInfoWrap);
    } else {
      footerInner.insertBefore(companyInfoWrap, footerNav);
    }
  }
  
  window.addEventListener('resize', resizeFooterInner);
}