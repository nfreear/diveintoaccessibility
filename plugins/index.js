import originalThemePlugin from './original-theme/originalThemePlugin.js';
import mobileThemePlugin from './mobile-theme/mobileThemePlugin.js';
import themeSwitchPlugin from './theme-switch/themeSwitchPlugin.js';
import addLinkRefsPlugin from './pre-process/AddLinksPlugin.js';
import pageIdAndInfoPlugin from './page-id/PageIdPlugin.js';
import sortByDayNumberPlugin from './page-id/sortByDayNumberPlugin.js';
import debugFiltersPlugin from './debug-filter/debugFiltersPlugin.js';
import clientJsPlugin from './client-js/clientJsPlugin.js';
import importMapPlugin from './client-js/importMapPlugin.js';
import baseUrlShortcodePlugin from './shortcode/baseUrlShortcodePlugin.js';
import searchIdShortcodePlugin from './shortcode/searchIdShortcodePlugin.js';
import customCollectionsPlugin from './page-id/customCollectionsPlugin.js';
import flagEmojiPlugin from './flag-emoji-polyfill/flagEmojiPlugin.js';
import loadEnvJs from './utilities/loadEnvJs.js';

/**
 * Load all plugins in the collection.
 */
function diaPluginLoader (eleventyConfig, options) {
  console.assert(options.linkFiles, 'linkFiles array is missing');
  const { linkFiles, buildBaseUrl, searchId } = options;

  eleventyConfig.addPlugin(themeSwitchPlugin);
  eleventyConfig.addPlugin(addLinkRefsPlugin, { linkFiles });
  eleventyConfig.addPlugin(pageIdAndInfoPlugin, {
    idShortcode: 'myPageID',
    typeShortcode: 'myPageType'
  });
  eleventyConfig.addPlugin(sortByDayNumberPlugin, {
    collection: 'myCustomSort' // 'sortByDayNumber'
  });
  eleventyConfig.addPlugin(customCollectionsPlugin);
  eleventyConfig.addPlugin(clientJsPlugin);
  eleventyConfig.addPlugin(importMapPlugin);
  eleventyConfig.addPlugin(baseUrlShortcodePlugin, { buildBaseUrl });
  eleventyConfig.addPlugin(searchIdShortcodePlugin, { searchId });
  eleventyConfig.addPlugin(debugFiltersPlugin);
  eleventyConfig.addPlugin(flagEmojiPlugin);
}

export {
  originalThemePlugin, mobileThemePlugin, themeSwitchPlugin,
  addLinkRefsPlugin, pageIdAndInfoPlugin, sortByDayNumberPlugin,
  clientJsPlugin, importMapPlugin, baseUrlShortcodePlugin, debugFiltersPlugin,
  customCollectionsPlugin, searchIdShortcodePlugin, flagEmojiPlugin,
  loadEnvJs
};

export default diaPluginLoader;
