import debug from 'debug';
// import diaThemePlugin from './plugins/dia-orig-theme/index.js';
import { originalThemePlugin, PageIdPlugin } from 'dia-plugins';

/**
 * Configure Eleventy
 *
 * @see https://www.11ty.dev/docs/config/
 */
export default async function (eleventyConfig) {
  const debugLog = debug('DIA:config');
  const pageId = new PageIdPlugin();

  debugLog('Loading config…');

  // Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory('pages');

  eleventyConfig.addPlugin(originalThemePlugin);

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

  eleventyConfig.addShortcode('myPageID', function () {
    // this.page
    // this.eleventy
    return pageId.compute(this.page) ?? '';
  });

  // https://www.11ty.dev/docs/collections-api/
  eleventyConfig.addCollection('myCustomSort', (colsApi) => pageId.addCollection(colsApi));

  eleventyConfig.addPassthroughCopy('examples/*');
  eleventyConfig.addPassthroughCopy('images/*');
}

/* export const config = {
  dir: {
    includes: '../_includes',
    input: 'pages'
  }
}; */
