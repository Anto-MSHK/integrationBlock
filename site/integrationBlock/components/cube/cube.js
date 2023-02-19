import { h } from "./../../lib/preact.js";
import htm from "./../../lib/htm.js";

const html = htm.bind(h);

import { SimpleHint } from "./../simpleHint/simpleHint.js";
function Dot(props) {
  return html`
    <a
      class="menu-item"
      style="padding: 0 10px; background-color: ${props.color === "red"
        ? "#D35252"
        : props.color === "yellow"
        ? "#FAA419"
        : "#8C64D8"}"
      onClick="${() => {
        const dotDesc = document.getElementsByClassName("menu-item")[0];
        const sh = document.getElementsByClassName("s-hint-main")[0];
        dotDesc.classList.toggle("open");
        sh.classList.toggle("disactive");
      }}"
    >
      <div class="dot-desc">
        ${html`<${SimpleHint} description="${props.description}" />`}
      </div>
      <p class="menu-item_text">${props.name}</p>
    </a>
  `;
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
      <div class="theme"></div>
      <menu class="items-wrapper">
        ${props.dots.map(
          (dot) =>
            html`<${Dot}
              name="${dot.title}"
              description="${dot.description}"
              color="${dot.color}"
            />`
        )}
      </menu>
    </div>
  </div>`;
}
