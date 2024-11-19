export const loadFile = (callback) => {
  let elementsLoaded = 0;
  let totalElementsToLoad = 0;

  const loadIfExists = (selector, url) => {
    const element = document.querySelector(selector);
    if (element) {
      totalElementsToLoad++;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${selector} 로딩 오류: ${response.statusText}`);
          }
          return response.text();
        })
        .then(data => {
          // 로드된 HTML 내용을 element에 삽입
          element.innerHTML = data;

          // `unwrap`을 구현: element의 자식 노드를 element의 부모로 이동
          const parent = element.parentNode;
          while (element.firstChild) {
            parent.insertBefore(element.firstChild, element);
          }
          parent.removeChild(element);

          checkCompletion();
        })
        .catch(error => console.error(error));
    }
  }

  const checkCompletion = () => {
    elementsLoaded++;
    if (elementsLoaded === totalElementsToLoad && typeof callback === 'function') {
      callback();
    }
  }

  // 필요한 파일들을 로드
  loadIfExists('#header', '../html/include/header.html');
  loadIfExists('#footer', '../html/include/footer.html');
}