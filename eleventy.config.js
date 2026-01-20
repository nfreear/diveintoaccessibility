import { resolve } from 'node:path';
import debug from 'debug';
import diaPluginLoader, { loadEnvJs } from 'dia-plugins';

// GitHub Pages sub-directory deployment.
const buildBaseUrl = '/diveintoaccessibility/';

/**
 * Configure Eleventy
 *
 * @see https://www.11ty.dev/docs/config/
 */
export default async function (eleventyConfig) {
  const debugLog = debug('DIA:config');

  debugLog('Loading config…');

  await loadEnvJs([import.meta.dirname, '.env.js']);

  // Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory('pages');

  eleventyConfig.setIncludesDirectory('../_includes');
  // eleventyConfig.setLayoutsDirectory('../_includes/layouts');

  eleventyConfig.addLayoutAlias('dia_outer_page', 'layouts/page.njk');
  // @WAS: eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

  // Set global permalinks to "resource.html" style.
  eleventyConfig.addGlobalData('permalink', () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: '<!-- excerpt -->',
  });

  // https://www.11ty.dev/docs/data-global-custom/
  /* eleventyConfig.addGlobalData('pageID', () => {
    return (data) => pageId.compute(data.page);
  }); */

  eleventyConfig.addPlugin(diaPluginLoader, {
    linkFiles: getLinkFilePaths(),
    buildBaseUrl
  });

  eleventyConfig.addPassthroughCopy('download/*');
  eleventyConfig.addPassthroughCopy('examples/*');
  eleventyConfig.addPassthroughCopy('images/*');
}

function getLinkFilePaths () {
  return [
    resolve('pages', 'links', 'internal.md'),
    resolve('pages', 'links', 'external.md'),
    resolve('pages', 'links', 'translation_links.md'),
  ];
}

/* export const config = {
  dir: {
    includes: '../_includes',
    input: 'pages'
  }
}; */
