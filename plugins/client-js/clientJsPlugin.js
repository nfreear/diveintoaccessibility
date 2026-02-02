import debug from 'debug';
import pluginPath from '../utilities/pluginPath.js';

const clientJs = './js/app.js';

// const WC = 'web-components/src/components/MySharingWidgetElement.js';

/**
 * Plugin to copy browser/client JavaScript.
 */
export default function clientJsPlugin (eleventyConfig) {
  const debugLog = debug('DIA:client-js');
  const pluginPaths = getPluginPaths();

  debugLog('Loading client-side JavaScript', pluginPaths);

  eleventyConfig.addPassthroughCopy(pluginPaths.jsCopy);

  eleventyConfig.addShortcode('myClientJs', () => clientJs);

  /* const _wcCopy = {};
  _wcCopy[WC] = 'js';
  eleventyConfig.addPassthroughCopy(_wcCopy); */
}

function getPluginPaths () {
  const PATH = pluginPath(import.meta.url);
  const jsCopy = {};
  jsCopy[`${PATH}/js/*`] = 'js';

  return {
    jsCopy,
    root: PATH
  };
}
