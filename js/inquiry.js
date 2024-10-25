function initMap() {
  const company = { lat: 37.5496986402311, lng: 127.00777905233 };
  const map = new google.maps.Map(document.querySelector('.google_map'), {
    zoom: 18,
    center: company
  });
  const marker = new google.maps.Marker({
    position: company,
    label: '주식회사 푸시컴즈 서울특별시 중구 다산로 58-1',
    map: map
  });
}

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
