import { resolve } from 'node:path';
import debug from 'debug';
// import diaThemePlugin from './plugins/dia-orig-theme/index.js';
import { originalThemePlugin, addLinksPlugin, pageIdPlugin } from 'dia-plugins';

/**
 * Configure Eleventy
 *
 * @see https://www.11ty.dev/docs/config/
 */
export default async function (eleventyConfig) {
  const debugLog = debug('DIA:config');
  const linksFile = resolve('pages', 'internal_links.md');

  debugLog('Loading config…');

  // Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory('pages');

  eleventyConfig.addPlugin(originalThemePlugin);
  eleventyConfig.addPlugin(addLinksPlugin, { linksFile });
  eleventyConfig.addPlugin(pageIdPlugin, {
    collection: 'myCustomSort',
    shortcode: 'myPageID'
  });

  eleventyConfig.setIncludesDirectory('../_includes');
  // eleventyConfig.setLayoutsDirectory('../_includes/layouts');

  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  // eleventyConfig.addLayoutAlias('notes_page', 'layouts/notes_page.njk');

  // Set global permalinks to "resource.html" style.
  eleventyConfig.addGlobalData('permalink', () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  // https://www.11ty.dev/docs/data-global-custom/
  /* eleventyConfig.addGlobalData('pageID', () => {
    return (data) => pageId.compute(data.page);
  }); */

  eleventyConfig.addPassthroughCopy('examples/*');
  eleventyConfig.addPassthroughCopy('images/*');
}

/* export const config = {
  dir: {
    includes: '../_includes',
    input: 'pages'
  }
}; */
