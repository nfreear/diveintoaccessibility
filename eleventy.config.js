import { resolve } from 'node:path';
import debug from 'debug';
import diaPluginLoader from 'dia-plugins';

/**
 * Configure Eleventy
 *
 * @see https://www.11ty.dev/docs/config/
 */
export default async function (eleventyConfig) {
  const debugLog = debug('DIA:config');

  debugLog('Loading config…');

  // Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory('pages');

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

  eleventyConfig.addPlugin(diaPluginLoader, {
    linkFiles: getLinkFilePaths()
  });

  eleventyConfig.addPassthroughCopy('download/*');
  eleventyConfig.addPassthroughCopy('examples/*');
  eleventyConfig.addPassthroughCopy('images/*');
}

function getLinkFilePaths () {
  return [
    resolve('pages', 'internal_links.md'),
    resolve('pages', 'external_links.md'),
    resolve('pages', 'links', 'translation_links.md'),
  ];
}

/* export const config = {
  dir: {
    includes: '../_includes',
    input: 'pages'
  }
}; */
