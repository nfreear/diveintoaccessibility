import debug from 'debug';
import { join } from 'node:path';

const PATH = 'node_modules/dia-plugins/original-theme';
// const PATH = 'plugins/original-theme';

/**
 * The original "Dive Into Accessibility" theme/styles, in a plugin.
 *
 * @see https://www.11ty.dev/docs/create-plugin/
 */
export default function originalThemePlugin (eleventyConfig) {
  // I am a plugin!
  const debugLog = debug('DIA:theme');
  const pluginPaths = getPluginPaths();

  debugLog('Loading original theme', pluginPaths);

  eleventyConfig.addLayoutAlias('dia_theme_page', pluginPaths.layout);

  eleventyConfig.addPassthroughCopy(pluginPaths.cssCopy);
}

function getPluginPaths () {
  const cssCopy = {};
  cssCopy[`${PATH}/css/*`] = 'css';

  return {
    layout: `../${PATH}/_includes/layouts/page.njk`,
    cssCopy,
    absLayout: join(import.meta.url.replace('index.js', ''), '.', '_includes', 'layouts', 'page.njk'), // Not used!
    root: PATH
  };
}
