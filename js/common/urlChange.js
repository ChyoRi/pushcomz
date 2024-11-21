 export const urlChange = () => {
   // 현재 URL 확인
   const currentUrl = window.location.href;
  
   // .html이 포함된 경우 URL 수정
   if (currentUrl.includes('.html')) {
      const newUrl = currentUrl.replace('.html', '');
      history.replaceState(null, '', newUrl); // URL만 변경, 페이지 새로고침 없음
   }

};