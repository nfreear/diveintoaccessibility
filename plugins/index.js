import originalThemePlugin from './original-theme/originalThemePlugin.js';
import mobileThemePlugin from './mobile-theme/mobileThemePlugin.js';
import addLinkRefsPlugin from './pre-process/AddLinksPlugin.js';
import pageIdAndInfoPlugin from './page-id/PageIdPlugin.js';
import sortByDayNumberPlugin from './page-id/sortByDayNumberPlugin.js';
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
  console.assert(options.linkFiles, 'linkFiles array is missing');
  const { linkFiles } = options;

  eleventyConfig.addPlugin(themeSwitchPlugin);
  eleventyConfig.addPlugin(addLinkRefsPlugin, { linkFiles });
  eleventyConfig.addPlugin(pageIdAndInfoPlugin, {
    idShortcode: 'myPageID',
    typeShortcode: 'myPageType'
  });
  eleventyConfig.addPlugin(sortByDayNumberPlugin, {
    collection: 'myCustomSort'
  });
  eleventyConfig.addPlugin(clientJsPlugin);
  eleventyConfig.addPlugin(debugFiltersPlugin);
}

export {
  originalThemePlugin, mobileThemePlugin, themeSwitchPlugin,
  addLinkRefsPlugin, sortByDayNumberPlugin, debugFiltersPlugin, clientJsPlugin
};

export default diaPluginLoader;
