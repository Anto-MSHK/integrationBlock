import { h, Component, render } from "./lib/preact.js";
import htm from "./lib/htm.js";
import { Cube } from "./components/cube/cube.js";
import { Hint } from "./components/hint/hint.js";
import { pages, qube_main_namespace } from "./test.js";

const html = htm.bind(h);

pages.map((page) => {
  const curNamespace = document.getElementsByClassName(page.namespace)[0];

  if (curNamespace) {
    let mainDiv = document.getElementsByClassName(page.namespace)[0];
    const cubeContainer = document.createElement("div");
    mainDiv.appendChild(cubeContainer);
    render(html`<${Cube} dots="${page.hints}" />`, cubeContainer);

    qube_main_namespace.map((el) => {
      const full_name = page.namespace + "_" + el.name_elem;
      let curDiv = document.getElementsByClassName(full_name)[0];
      const rootDiv = document.createElement("div");
      curDiv.appendChild(rootDiv);
      render(
        html`<${Hint}
          title="${el.title}"
          description="${el.description}"
          blockName="${full_name}"
        />`,
        rootDiv
      );
    });
  } else {
    return;
  }
});
