import Component from "../core/Component.js";

export default class Items extends Component {
  // 시작할 때 보여줄 목록을 state로 넣는다.
  setup() {
    this.state = { items: ["item1", "item2"] };
  }

  // state의 items를 HTML 목록으로 변환한다.
  template() {
    const { items } = this.state;
    return `
      <ul>
        ${items
          .map(
            (item, key) => `
            <li>
              ${item}
              <button class="deleteBtn" data-index="${key}">삭제</button>
            </li>`,
          )
          .join("")}

      </ul>
      <button class="addBtn">추가</button>
    `;
  }

  setEvent() {
    // 추가 버튼: 기존 배열 뒤에 새 항목을 붙인 뒤 state를 갱신한다.
    this.addEvent("click", ".addBtn", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    // 삭제 버튼: 버튼의 data-index를 읽어서 해당 항목만 제거한다.
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.state.items];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
  }
}
