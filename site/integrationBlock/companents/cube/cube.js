import { h } from "./../../lib/preact.js";
import htm from "./../../lib/htm.js";

const html = htm.bind(h);

function Dot(props) {
  return html`<a class="menu-item fa"></a>`;
}

export function Cube(props) {
  return html`<div class="cube_main">
    <div id="circularMenu" class="circular-menu">
      <div
        class="floating-btn"
        onclick="${() =>
          document.getElementById("circularMenu").classList.toggle("active")}"
      >
        <i class="fa fa-plus"></i>
      </div>
      <menu class="items-wrapper">
        <${Dot} />
        <${Dot} />
        <${Dot} />
      </menu>
    </div>
  </div>`;
}
