import { h } from "./../../lib/preact.js";
import htm from "./../../lib/htm.js";

const html = htm.bind(h);

function Dot(props) {
  return html`<a
    class="menu-item fa"
    style="
  width: fit-content;
  padding: 0 10px
"
    ><p class="menu-item_text">${props.name}</p></a
  >`;
}

export function Cube(props) {
  return html` <div class="container-cube">
    <div id="circularMenu" class="circular-menu">
      <div
        class="cube-main"
        onclick="${() => {
          document.getElementById("circularMenu").classList.toggle("active");
          document
            .getElementsByClassName("cube-main")[0]
            .classList.toggle("active");
        }}"
      >
        <i class="fa fa-plus"></i>
      </div>
      <menu class="items-wrapper">
        <${Dot} name="С чего начать?" />
        <${Dot} name="Как создать проект?" />
        <${Dot} name="Как подать заявку?" />
        <${Dot} name="Другой вопрос" />
      </menu>
    </div>
  </div>`;
}
