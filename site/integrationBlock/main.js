import { h, Component, render } from "./lib/preact.js";
import htm from "./lib/htm.js";
import { Cube } from "./companents/cube/cube.js";
import { Hint } from "./companents/hint/hint.js";
const html = htm.bind(h);

const appDiv = document.getElementsByClassName("qube_assistent")[0];

const hintDiv = document.getElementsByClassName("qube_hint")[0];
console.log(hintDiv);
const rootDiv = document.createElement("div");
appDiv.appendChild(rootDiv);

const rootHintDiv = document.createElement("div");
hintDiv.appendChild(rootHintDiv);
console.log(rootHintDiv);
render(html`<${Cube} name="World" />`, rootDiv);

render(
  html`<${Hint} title="Подсказка" description="Lorem Ipsum - это текст-"рыба",
  часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
  "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
  печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
  Ipsum для распечатки образцов." blockName="qube_hint"/>`,
  hintDiv
);
