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