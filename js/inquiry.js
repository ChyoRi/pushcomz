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

const pcHeader = document.querySelector('.pc_header');
const pcHeaderLogoImg = document.querySelector('#logo > a > img');
const mobileHeader = document.querySelector('.mobile_header');
const mobileNavDim = document.querySelector('.mobile_nav_dim');
const mobileNav = document.querySelector('.mobile_nav');
const mobileNavCloseBtn = document.querySelector('.mobile_nav_close_btn');
const hambergerBtn = document.querySelector('.hamberger_btn');
const topBtnWrap = document.querySelector('.top_btn_wrap');
const topBtn = document.querySelector('.top_btn')

// 스크롤시 상단 헤더 고정
const headerFixed = () => {
  const pageScrollTop = window.scrollY;

  if(window.innerWidth >= 992 && pageScrollTop >= 100) {
    pcHeader.classList.add('fixed');
    pcHeaderLogoImg.src = './img/pc-header-fixed.png';
  } else {
    pcHeader.classList.remove('fixed');
    pcHeaderLogoImg.src = './img/pc-header-default.png';
  }

  if (window.innerWidth <= 991 && pageScrollTop >= 100) {
    mobileHeader.classList.add('fixed');
  } else {
    mobileHeader.classList.remove('fixed');
  }

  if(pageScrollTop >= 500) {
    topBtnWrap.classList.add('show');
  } else {
    topBtnWrap.classList.remove('show');
  }
}

// 모바일 햄버거 버튼 누를시 네비와 dim의 active class를 추가
const mobileNavMenu = () => {
  mobileNavDim.classList.add('active');
  setTimeout(() => {
    mobileNav.classList.add('active');
  });
}

// 모바일 X버튼 누를시 nav의 active class를 제거
const mobileNavClose = () => {
  mobileNav.classList.remove('active');
}

// Resize Window Event
const resizeNavClose = () => {
  // // resize시 PC Size로 넘어갔을경우 nav와 dim의 active class를 제거
  if(window.innerWidth >= 992) {
    mobileNavDim.classList.remove('active');
    mobileNav.classList.remove('active');
  }
}

// nav의 transion이 끝난이후에 dim의 active class를 제거
const mobileNavCloseMove = () => {
  if (!mobileNav.classList.contains('active')) {
    mobileNavDim.classList.remove('active');
  }
}

// 탑버튼 클릭시 상단 이동
const goTop = e => {
  e.preventDefault();

  window.scrollTo({top: 0});
}

window.addEventListener('scroll', headerFixed);
window.addEventListener('resize', resizeNavClose);
hambergerBtn.addEventListener('click', mobileNavMenu);
mobileNavCloseBtn.addEventListener('click', mobileNavClose);
mobileNav.addEventListener('transitionend', mobileNavCloseMove);
topBtn.addEventListener('click', goTop);
