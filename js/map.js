function initMap() {
  const company = { lat: 37.5496986402311, lng: 127.00777905233 };
  const map = new google.maps.Map(document.querySelector('.google_map'), {
    zoom: 18,
    center: company
  });
  const marker = new google.maps.Marker({
    position: company,      // 마커의 위치
    label: '주식회사 푸시컴즈 서울특별시 중구 다산로 58-1',
    map: map              // 마커를 표시할 지도
  });
}
