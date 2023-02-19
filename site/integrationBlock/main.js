import { h, Component, render } from "./lib/preact.js";
import htm from "./lib/htm.js";
import { Cube } from "./components/cube/cube.js";
import { Hint } from "./components/hint/hint.js";
import { pages, qube_main_namespace } from "./test.js";

const html = htm.bind(h);

async function main() {
  let responsePages = await fetch("http://localhost:5000/api/page/get/");
  const pages = await responsePages.json();
  await Promise.all(
    pages.map(async (page) => {
      const curNamespace = document.getElementsByClassName(page.namespace)[0];

      if (curNamespace) {
        let mainDiv = document.getElementsByClassName(page.namespace)[0];
        const cubeContainer = document.createElement("div");
        mainDiv.appendChild(cubeContainer);
        console.log(mainDiv);
        render(html`<${Cube} dots="${page.hints}" />`, cubeContainer);

        let responseHints = await fetch("http://localhost:5000/api/hint/get/");
        const hints = await responseHints.json();
        hints.map((el) => {
          if (el.namespace === page.namespace) {
            const full_name = page.namespace + "_" + el.blockName;
            let curDiv = document.getElementsByClassName(full_name)[0];
            console.log(full_name);
            if (curDiv) {
              const rootDiv = document.createElement("div");
              curDiv.appendChild(rootDiv);
              render(
                html`<${Hint}
                  title="${el.title}"
                  description="${el.description}"
                  blockName="${full_name}"
                  disabled="${el.disabled}"
                  notEvent="${el.notEvent}"
                />`,
                rootDiv
              );
            }
          }
        });
      } else {
        return;
      }
    })
  );
}
main();
