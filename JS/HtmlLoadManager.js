// HtmlLoadManager.js

/**
 * 특정 HTML 파일을 fetch해서 지정한 컨테이너에 삽입하고,
 * 삽입 후 콜백 함수(onReady)를 실행하는 범용 유틸 함수
 *
 * @param {string} url - 불러올 HTML 파일 경로
 * @param {string} containerId - 삽입할 DOM 요소의 ID
 * @param {function} onReady - (선택) 삽입 후 실행할 콜백 함수
 */
export function loadHtmlIntoContainer(url, containerId, onReady) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`❗ container ID '${containerId}'를 찾을 수 없습니다.`);
        return;
      }

      container.innerHTML = data;

      if (typeof onReady === 'function') {
        onReady();
      }
    })
    .catch(err => {
      console.error(`❌ '${url}' 로딩 실패:`, err);
    });
}
