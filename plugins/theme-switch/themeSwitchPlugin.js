import originalThemePlugin from '../original-theme/originalThemePlugin.js';
import mobileThemePlugin from '../mobile-theme/mobileThemePlugin.js';

/**
 * Load original or mobile theme, depending on `_THEME` environment variable.
 */
export default function themeSwitchPlugin (eleventyConfig, options) {
  console.assert(process.env.DIA_THEME, 'Missing _THEME environment variable.');
  const isMobile = (process.env.DIA_THEME === 'mobile');

  console.log('themeSwitchPlugin:', process.env.DIA_THEME);

  if (isMobile) {
    return mobileThemePlugin(eleventyConfig, options);
  } else {
    return originalThemePlugin(eleventyConfig, options);
  }
}
