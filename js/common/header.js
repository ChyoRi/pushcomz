export const header = () => {
  const body = document.querySelector('body');
  const pcHeader = document.querySelector('.pc_header');
  const pcHeaderDefaultLogo = document.querySelector('.pc_default_logo');
  const pcHeaderFixedLogo = document.querySelector('.pc_fixed_logo');
  const mobileHeader = document.querySelector('.mobile_header');
  const mainListItem = document.querySelectorAll('.main_list_item');
  const subList = document.querySelector('.sub_menu_list');
  const dimmed = document.querySelector('.dimmed');
  const mobileNav = document.querySelector('.mobile_nav');
  const mobileNavCloseBtn = document.querySelector('.mobile_nav_close_btn');
  const mobileSubNav = document.querySelector('.mobile_header_bottom');
  const hambergerBtn = document.querySelector('.hamberger_btn');
  const motionAnchor = document.querySelector('.motion_anchor');
  const motionParent = motionAnchor.closest('.main_list_item');
  const currentUrl = window.location.href;
  
  // nav의 list를 돌면서 active클래스를 전부 제거 ( active class 중복 방지 )
  // nav의 list를 돌면서 현재 url이 자식 a의 href를 포함하고 있다면 active class 추가
  // active 된 nav의 list중에 자식 a의 href가 project.html일경우 subList에 active class 추가
  mainListItem.forEach(item => {
    let itemChildren = item.querySelector('a');

    item.classList.remove('active');

    if (currentUrl.includes(itemChildren.getAttribute("href"))) {
      item.classList.add('active');

      if (itemChildren.getAttribute("href").includes("project")) {
        subList.classList.add('active');
        mobileSubNav.classList.add('active');
      }
    }

    if(currentUrl.includes("pushcomz.com") && window.location.pathname === "/") {
      mainListItem[0].classList.add('active');
    }

    if(currentUrl.includes("motion")) {
      subList.classList.add('active');
      motionParent.classList.add('active');
      mobileSubNav.classList.add('active');
    }

  });

  // const navActive = (e) => {
  //   let target = e.currentTarget;

  //   mainListItem.forEach(item => {
  //     item.classList.remove('active');
  //   });

  //   target.classList.add('active');
  // }

  // 스크롤시 상단 헤더 고정
  const headerFixed = () => {
    const pageScrollTop = window.scrollY;
  
    if(window.innerWidth >= 992 && pageScrollTop >= 100) {
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
      dimmed.classList.remove('active');
      mobileNav.classList.remove('active');
    }
  }
  
  // 모바일 햄버거 버튼 누를시 body에 fixed class와 네비, dimmed의 active class를 추가
  const mobileNavMenu = () => {
    body.classList.add('fixed');
    dimmed.classList.add('active');
    mobileNav.classList.add('active');
  }
  
  // 모바일 X버튼 누를시 nav의 body에 fixed class와 네비, dimmed의 active class를 추가
  const mobileNavClose = () => {
    body.classList.remove('fixed');
    dimmed.classList.remove('active');
    mobileNav.classList.remove('active');
  }
  
  // Event Listener
  window.addEventListener('scroll', headerFixed);
  window.addEventListener('resize', resizeNavClose);
  hambergerBtn.addEventListener('click', mobileNavMenu);
  mobileNavCloseBtn.addEventListener('click', mobileNavClose);
  // mainListItem.forEach(item => {
  //   item.addEventListener('click', navActive);
  // })
}