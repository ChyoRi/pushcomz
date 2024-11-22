const getCurrentPath = () => {
  // pathname 가져옴 ex) /g5/notice/test
  const currentPath = window.location.pathname;

  // split으로 배열로 나눔 
  const pathParts = currentPath.split('/');

  // 배열의 길이를 센다
  const depth = pathParts.filter(part => part.length > 0).length;

  // 배열의 길이만큼 ../ 을 추가  -> 이렇게 하는 이유는 경로마다 ../ 의 수가 다르기 때문
  return '../'.repeat(depth);
};

export const loadFile = (callback) => {
  let elementsLoaded = 0;
  let totalElementsToLoad = 0;

  const loadIfExists = (selector, path) => {
      const element = document.querySelector(selector);
      if (element) {
          totalElementsToLoad++;

         
          const basePath = getCurrentPath();
          const fullUrl = `${basePath}${path}`;

          console.log('Loading URL:', fullUrl); 

          fetch(fullUrl)
              .then(response => {
                  if (!response.ok) {
                      throw new Error(`${selector} 로딩 오류: ${response.statusText}`);
                  }
                  return response.text();
              })
              .then(data => {
                  element.innerHTML = data;

                  const parent = element.parentNode;
                  while (element.firstChild) {
                      parent.insertBefore(element.firstChild, element);
                  }
                  parent.removeChild(element);

                  checkCompletion();
              })
              .catch(error => {
                  console.error(`Failed to load ${fullUrl}:`, error);
                  checkCompletion();
              });
      }
  }

  const checkCompletion = () => {
      elementsLoaded++;
      if (elementsLoaded === totalElementsToLoad && typeof callback === 'function') {
          callback();
      }
  }


  loadIfExists('#header', 'section/include/header.html');
  loadIfExists('#footer', 'section/include/footer.html');
}


document.addEventListener('DOMContentLoaded', () => {
  loadFile(() => {
      console.log('All files loaded successfully');
  });
});