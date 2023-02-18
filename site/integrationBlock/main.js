import { h, Component, render } from "./lib/preact.js";
import htm from "./lib/htm.js";

import { Cube } from "./companents/cube.js";

const html = htm.bind(h);
const rootDiv = document.createElement("div");

render(html`<${Cube} name="World" />`, rootDiv);
