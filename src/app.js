import Items from "./components/Items.js";

class App {
  constructor() {
    // 실제 렌더링이 일어날 루트 DOM을 찾는다.
    const $app = document.querySelector("#app");

    // App은 현재 Items 컴포넌트 하나만 마운트한다.
    new Items($app);
  }
}

// 페이지가 로드되면 App을 즉시 시작한다.
new App();
