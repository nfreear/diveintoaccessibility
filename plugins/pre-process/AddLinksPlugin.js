import debug from 'debug';
import { readFile } from 'node:fs/promises';

/**
 * Plugin to add the contents of `links.md` to each Markdown file,
 * via the `addPreprocessor` hook in Eleventy.
 *
 * @see https://www.11ty.dev/docs/config-preprocessors/
 */
export class AddLinksPlugin {
  #inLinksFilePath;
  #inLinksMD;
  #outLinksFilePath;
  #outLinksMD;

  constructor (inLinksFilePath, outLinksFilePath) {
    this.#inLinksFilePath = inLinksFilePath;
    this.#outLinksFilePath = outLinksFilePath;
    const debugLog = debug('DIA:AddLinksPlugin');

    readFile(this.#inLinksFilePath, 'utf8').then((data) => {
      debugLog(inLinksFilePath, data);

      this.#inLinksMD = data;
    });
    readFile(this.#outLinksFilePath, 'utf8').then((data) => {
      debugLog(outLinksFilePath, data);

      this.#outLinksMD = data;
    });
  }

  preProcess (data, content) {
    // You can also modify the raw input of the template here too, be careful!
    return `${content}<!-- // -->\n${this.#inLinksMD}<!-- // -->\n${this.#outLinksMD}`;
  }
}

const DEFAULTS = {
  name: 'addLinks',
  extensions: 'md'
};

export default function addLinksPlugin (eleventyConfig, options) {
  console.assert(options.inLinksFile, 'Missing inLinksFile');
  console.assert(options.outLinksFile, 'Missing outLinksFile');

  const OPT = { ...DEFAULTS, ...options };
  const { name, extensions } = OPT;
  const addLinks = new AddLinksPlugin(options.inLinksFile, options.outLinksFile);

  eleventyConfig.addPreprocessor(name, extensions, (data, content) => addLinks.preProcess(data, content));
}
