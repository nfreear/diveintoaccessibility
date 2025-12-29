import originalThemePlugin from './original-theme/originalThemePlugin.js';
import mobileThemePlugin from './mobile-theme/mobileThemePlugin.js';
import addLinksPlugin from './pre-process/AddLinksPlugin.js';
import sortByDayNumberPlugin from './page-id/PageIdPlugin.js';
import debugFiltersPlugin from './debug-filter/debugFiltersPlugin.js';
import clientJsPlugin from './client-js/clientJsPlugin.js';

/**
 * Load original or mobile theme, depending on `_THEME` environment variable.
 */
function themeSwitchPlugin (eleventyConfig, options) {
  const isMobile = (process.env._THEME === 'mobile');

  console.log('themeSwitchPlugin:', process.env._THEME);

  if (isMobile) {
    return mobileThemePlugin(eleventyConfig, options);
  } else {
    return originalThemePlugin(eleventyConfig, options);
  }
}

/**
 * Load the collection of plugins.
 */
function diaPluginLoader (eleventyConfig, options) {
  console.assert(options.inLinksFile, 'inLinksFile is missing');
  console.assert(options.outLinksFile, 'outLinksFile is missing');
  const { inLinksFile, outLinksFile } = options;

  eleventyConfig.addPlugin(themeSwitchPlugin);
  eleventyConfig.addPlugin(addLinksPlugin, { inLinksFile, outLinksFile });
  eleventyConfig.addPlugin(sortByDayNumberPlugin, {
    collection: 'myCustomSort',
    shortcode: 'myPageID'
  });
  eleventyConfig.addPlugin(clientJsPlugin);
  eleventyConfig.addPlugin(debugFiltersPlugin);
}

export {
  originalThemePlugin, mobileThemePlugin, themeSwitchPlugin,
  addLinksPlugin, sortByDayNumberPlugin, debugFiltersPlugin, clientJsPlugin
};

export default diaPluginLoader;
