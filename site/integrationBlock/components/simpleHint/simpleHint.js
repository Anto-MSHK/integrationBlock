import { h } from "./../../lib/preact.js";
import htm from "./../../lib/htm.js";

const html = htm.bind(h);
export function SimpleHint(props) {
  function onChange() {
    const elem = document.getElementsByClassName("s-hint-main")[0];
    elem.classList.toggle("disactive");
  }

  return html`<div class="s-hint-main disactive">
    <div>
      <div
        style="display: flex; justify-content: space-between; width: 100%"
      ></div>
      ${props.description}
    </div>
    <button class="create">Создать проект</button>
  </div>`;
}
