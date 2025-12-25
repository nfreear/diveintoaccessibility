import originalThemePlugin from './original-theme/originalThemePlugin.js';
import mobileThemePlugin from './mobile-theme/mobileThemePlugin.js';
import addLinksPlugin from './pre-process/AddLinksPlugin.js';
import pageIdPlugin from './page-id/PageIdPlugin.js';
import debugFiltersPlugin from './debug-filter/debugFiltersPlugin.js';

function themeSwitchPlugin (eleventyConfig, options) {
  const isMobile = (process.env._THEME === 'mobile');

  console.log('themeSwitchPlugin:', process.env._THEME);

  if (isMobile) {
    return mobileThemePlugin(eleventyConfig, options);
  } else {
    return originalThemePlugin(eleventyConfig, options);
  }
}

export {
  originalThemePlugin, mobileThemePlugin, themeSwitchPlugin,
  addLinksPlugin, pageIdPlugin, debugFiltersPlugin
};
