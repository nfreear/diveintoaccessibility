import debug from 'debug';
import { readFile } from 'node:fs/promises';

/**
 * Plugin to add the contents of `links.md` to each Markdown file,
 * via the `addPreprocessor` hook in Eleventy.
 *
 * @see https://www.11ty.dev/docs/config-preprocessors/
 */
export class AddLinksPlugin {
  #linksFilePath;
  #linksMD;

  constructor (linksFilePath) {
    this.#linksFilePath = linksFilePath;
    const debugLog = debug('DIA:AddLinksPlugin');

    readFile(this.#linksFilePath, 'utf8').then((data) => {
      debugLog(linksFilePath, data);

      this.#linksMD = data;
    });
  }

  preProcess (data, content) {
    // You can also modify the raw input of the template here too, be careful!
    return `${content}<!-- // -->\n${this.#linksMD}`;
  }
}

const DEFAULTS = {
  name: 'addLinks',
  extensions: 'md'
};

export default function addLinksPlugin (eleventyConfig, options) {
  console.assert(options.linksFile, 'Missing linksFile');

  const OPT = { ...DEFAULTS, ...options };
  const { name, extensions } = OPT;
  const addLinks = new AddLinksPlugin(options.linksFile);

  eleventyConfig.addPreprocessor(name, extensions, (data, content) => addLinks.preProcess(data, content));
}
