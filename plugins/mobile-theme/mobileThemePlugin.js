import debug from 'debug';
import { join } from 'node:path';
import pluginPath from '../utilities/pluginPath.js';

/**
 * A new mobile-first "Dive Into Accessibility" theme, in a plugin.
 *
 * @see https://www.11ty.dev/docs/create-plugin/
 */
export default function mobileThemePlugin (eleventyConfig) {
  const debugLog = debug('DIA:theme');
  const pluginPaths = getPluginPaths();

  debugLog('Loading mobile theme', pluginPaths);

  eleventyConfig.addLayoutAlias('page', pluginPaths.layout);
  // @WAS: eleventyConfig.addLayoutAlias('dia_theme_page', pluginPaths.layout);

  eleventyConfig.addPassthroughCopy(pluginPaths.cssCopy);
}

function getPluginPaths () {
  const PATH = pluginPath(import.meta.url);
  const cssCopy = {};
  cssCopy[`${PATH}/css/*`] = 'css';

  return {
    layout: `../${PATH}/_includes/layouts/page.njk`,
    cssCopy,
    absLayout: join(import.meta.url.replace('index.js', ''), '.', '_includes', 'layouts', 'page.njk'), // Not used!
    pluginRoot: PATH
  };
}
