import { h } from "./../../lib/preact.js";
import htm from "./../../lib/htm.js";

const html = htm.bind(h);
export function Hint(props) {
  function onChange() {
    const elem = document.getElementsByClassName("hint-main")[0];
    elem.classList.toggle("disactive");
  }
  const parent = document.getElementsByClassName(props.blockName)[0];
  console.log(props.blockName);
  console.log(parent);
  let inputChld = parent.querySelector(`${!props.notEvent ? "input" : "div"}`);
  console.log(inputChld);
  inputChld.addEventListener("click", function () {
    onChange();
  });
  inputChld.addEventListener("blur", function () {
    onChange();
  });

  return html`<div class="hint-main ${props.disabled ? "disactive" : ""}">
    <div>
      <div style="display: flex; justify-content: space-between; width: 100%">
        <h1>${props.title}</h1>
        <div
          class="img"
          onClick="${() => {
            onChange();
          }}"
        />
      </div>
      <p>${props.description}</p>
    </div>
  </div>`;
}
