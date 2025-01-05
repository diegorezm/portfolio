import {readFile, writeFile} from 'node:fs/promises';

/**
 * @param {String} html
*/
async function build(html) {
  // replace ./out with ./
  const replaced = html.replace("./out/style.css", "./style.css")
  await writeFile("./out/index.html", replaced);
}

(async () => {
  let html = (await readFile('./index.html')).toString()
  build(html)
})();

