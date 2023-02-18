import { h, Component, render } from "./lib/preact.js";
import htm from "./lib/htm.js";
import { Cube } from "./companents/cube/cube.js";
const html = htm.bind(h);

const appDiv = document.getElementsByClassName("qube_assistent")[0];
const rootDiv = document.createElement("div");
appDiv.appendChild(rootDiv);

render(html`<${Cube} name="World" />`, rootDiv);
