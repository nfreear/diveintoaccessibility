import debug from 'debug';

const PATH = 'node_modules/dia-plugins/client-js';

/**
 * Plugin to copy browser/client JavaScript.
 */
export default function clientJsPlugin (eleventyConfig) {
  const debugLog = debug('DIA:client-js');
  const pluginPaths = getPluginPaths();

  debugLog('Loading client-side JavaScript', pluginPaths);

  eleventyConfig.addPassthroughCopy(pluginPaths.jsCopy);
}

function getPluginPaths () {
  const jsCopy = {};
  jsCopy[`${PATH}/js/*`] = 'js';

  return {
    jsCopy,
    root: PATH
  };
}
