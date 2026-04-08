export default class Component {
  $target;
  state;

  // 모든 컴포넌트가 공통으로 가지는 기본 흐름:
  // 1) target 저장
  // 2) 초기 상태/이벤트 준비
  // 3) 첫 렌더링
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.setEvent();
    this.render();
  }

  // 자식 컴포넌트에서 초기 state를 설정하는 용도
  setup() {}

  // 자식 컴포넌트가 실제 HTML 문자열을 반환하도록 만든다.
  template() {
    return "";
  }

  // template() 결과를 target 내부에 다시 그린다.
  render() {
    this.$target.innerHTML = this.template();
  }

  // 자식 컴포넌트에서 클릭/입력 같은 이벤트를 등록하는 훅
  setEvent() {}

  // state를 얕게 병합한 뒤 다시 렌더링한다.
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // 이벤트 위임용 헬퍼.
  // target 내부에서 selector에 맞는 요소가 클릭되었을 때만 callback을 실행한다.
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}
