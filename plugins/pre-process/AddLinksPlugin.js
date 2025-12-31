import debug from 'debug';
import { readFile } from 'node:fs/promises';

/**
 * Plugin to append the contents of `link_references.md` to each Markdown file,
 * via the `addPreprocessor` hook in Eleventy.
 *
 * [example]: https://www.example.org
 *
 * @see https://daringfireball.net/projects/markdown/syntax#link
 * @see https://www.11ty.dev/docs/config-preprocessors/
 */
export class AddLinkRefsPlugin {
  #linkFilePaths = [];
  #linkReferencesMD = [];

  constructor (linkFilePathsArray) {
    this.#linkFilePaths = linkFilePathsArray;

    this.#readLinkFiles();
  }

  preProcess (data, content) {
    // You can also modify the raw input of the template here too, be careful!
    return `${content}<!-- // -->\n${this.#linkReferences}`;
  }

  async #readLinkFiles () {
    const debugLog = debug('DIA:AddLinkRefsPlugin');

    const linksRefsMD = await this.#linkFilePaths.map(async (path) => {
      const markdown = await readFile(path, 'utf8');
      const linkRefs = this.#stripFrontMatter(markdown);
      debugLog(path, linkRefs);
      return linkRefs;
    });
    Promise.all(linksRefsMD).then(data => { this.#linkReferencesMD = data; });
  }

  get #linkReferences () {
    return this.#linkReferencesMD.join('<!--//-->\n');
  }

  #stripFrontMatter (markdown) {
    return markdown.replace(/-{3}\n(\w+: [\w\. -]+\n)+-{3}/m, '');
  }
}

const DEFAULTS = {
  name: 'addLinks',
  extensions: 'md'
};

export default function addLinkRefsPlugin (eleventyConfig, options) {
  console.assert(options.linkFiles, 'Missing linkFiles array');

  const OPT = { ...DEFAULTS, ...options };
  const { name, extensions } = OPT;
  const linkRefs = new AddLinkRefsPlugin(options.linkFiles);

  eleventyConfig.addPreprocessor(name, extensions, (data, content) => linkRefs.preProcess(data, content));
}
