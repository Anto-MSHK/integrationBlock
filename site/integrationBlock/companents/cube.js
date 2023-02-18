import { h } from "./../lib/preact.js";
import htm from "./../lib/htm.js";

const html = htm.bind(h);

export function Cube(props) {
  return html`<div class="cube_main"></div>`;
}
