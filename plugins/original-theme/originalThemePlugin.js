import debug from 'debug';
import { join } from 'node:path';
import pluginPath from '../utilities/pluginPath.js';

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

  eleventyConfig.addLayoutAlias('page', pluginPaths.layout);
  // @WAS: eleventyConfig.addLayoutAlias('dia_theme_page', pluginPaths.layout);

  eleventyConfig.addPassthroughCopy(pluginPaths.cssCopy);
  eleventyConfig.addPassthroughCopy(pluginPaths.jsCopy);
}

function getPluginPaths () {
  const PATH = pluginPath(import.meta.url);
  const cssCopy = {};
  const jsCopy = {};
  cssCopy[`${PATH}/css/*`] = 'css';
  jsCopy[`${PATH}/js/*`] = 'js';

  return {
    layout: `../${PATH}/_includes/layouts/page.njk`,
    cssCopy,
    jsCopy,
    absLayout: join(import.meta.url.replace('index.js', ''), '.', '_includes', 'layouts', 'page.njk'), // Not used!
    root: PATH
  };
}
