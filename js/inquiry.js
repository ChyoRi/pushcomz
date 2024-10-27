function initMap() {
  const company = { lat: 37.5496986402311, lng: 127.00777905233 };
  const contentString = `
    <div>
      <h1 class="company_title">주식회사 푸시컴즈</h1>
      <div>
        <p>
          서울특별시 중구 다산로 58-1
        </p>
      </div>
    </div>
  `;

  const infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  const map = new google.maps.Map(document.querySelector('.google_map'), {
    zoom: 18,
    center: company
  });

  const marker = new google.maps.Marker({
    position: company,
    map: map
  });

  infoWindow.open(map, marker);
}

const header = document.querySelector('#header');
const headerLogoImg = document.querySelector('#logo > a > img');
const topBtnWrap = document.querySelector('.top_btn_wrap');
const topBtn = document.querySelector('.top_btn')

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

window.addEventListener('scroll', headerFixed);
topBtn.addEventListener('click', goTop);
