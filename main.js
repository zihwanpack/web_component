const $app = document.querySelector("#app");

class Component {
  $target;
  state;

  // target을 저장하고, 초기 상태 설정 후 첫 렌더를 실행한다.
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  // 자식 컴포넌트에서 초기 state를 정의한다.
  setup() {}

  // 자식 컴포넌트가 화면에 그릴 HTML 문자열을 반환한다.
  template() {
    return "";
  }

  // template 결과를 target에 주입한다.
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }

  // 자식 컴포넌트에서 이벤트를 등록한다.
  setEvent() {}

  // state를 얕게 병합하고 다시 렌더링한다.
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
class App extends Component {
  // 목록 상태의 초기값을 준비한다.
  setup() {
    this.state = { items: ["item1", "item2"] };
  }

  // 현재 items를 <li> 목록으로 변환한다.
  template() {
    const { items } = this.state;
    return `
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <button>추가</button>
    `;
  }

  setEvent() {
    // 버튼 클릭 시 새 항목을 추가한다.
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector("#app"));
