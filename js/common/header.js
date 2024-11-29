export const header = () => {
  const body = document.querySelector('body');
  const pcHeader = document.querySelector('.pc_header');
  const pcHeaderDefaultLogo = document.querySelector('.pc_default_logo');
  const pcHeaderFixedLogo = document.querySelector('.pc_fixed_logo');
  const mobileHeader = document.querySelector('.mobile_header');
  const moMainListItem = document.querySelectorAll('.mobile_nav .main_list_item');
  const mobileNav = document.querySelector('.mobile_nav');
  const hambergerBtn = document.querySelector('.hamberger_btn');
  const hambergerBtnSpanWrap = document.querySelector('.hamberger_btn_line_wrap');
  const currentUrl = window.location.href;
  let btnState = false;
  
  // nav의 list를 돌면서 active클래스를 전부 제거 ( active class 중복 방지 )
  // nav의 list를 돌면서 현재 url이 자식 a의 href를 포함하고 있다면 active class 추가
  // active 된 nav의 list중에 자식 a의 href가 project.html일경우 subList에 active class 추가

  moMainListItem.forEach(item => {
    let itemChildren = item.querySelector('a');
    const itemHref = itemChildren.getAttribute("href").replace(/\.html$/, "");

    item.classList.remove('active');

    if (currentUrl.includes(itemHref)) {
      item.classList.add('active');
    }

    if(currentUrl.includes("pushcomz.com") && window.location.pathname === "/") {
      moMainListItem[0].classList.add('active');
    }

    if(currentUrl.includes("motion")) {
      moMainListItem[1].classList.add('active');
    }

  });

  // 스크롤시 상단 헤더 고정
  const headerFixed = () => {
    const pageScrollTop = window.scrollY;
  
    if(pageScrollTop >= 100) {
      pcHeader.classList.add('fixed');
      pcHeaderDefaultLogo.style.display = 'none';
      pcHeaderFixedLogo.style.display = 'block';
    } else {
      pcHeader.classList.remove('fixed');
      pcHeaderDefaultLogo.style.display = 'block';
      pcHeaderFixedLogo.style.display = 'none';
    }
  
    if (window.innerWidth <= 991 && pageScrollTop >= 100) {
      mobileHeader.classList.add('fixed');
    } else {
      mobileHeader.classList.remove('fixed');
    }
  }
  
  // Resize Window Event
  const resizeNavClose = () => {
    // resize시 PC Size로 넘어갔을경우 nav와 dim의 active class를 제거
    if(window.innerWidth >= 992) {
      mobileNav.classList.remove('active');
    }
  }
  
  // 모바일 햄버거 버튼 누를시 body에 fixed class와 네비, dimmed의 active class를 추가
  const mobileNavFn = () => {
    btnState = !btnState;

    if (btnState) {
      console.log(btnState);
      body.classList.add('fixed');
      // dimmed.classList.add('active');
      mobileNav.classList.add('active');
      hambergerBtnSpanWrap.classList.add('active');
    } else {
      console.log(btnState);
      body.classList.remove('fixed');
      // dimmed.classList.remove('active');
      mobileNav.classList.remove('active');
      hambergerBtnSpanWrap.classList.remove('active');
    }
  }
  
  // Event Listener
  window.addEventListener('scroll', headerFixed);
  window.addEventListener('resize', resizeNavClose);
  hambergerBtn.addEventListener('click', mobileNavFn);
}