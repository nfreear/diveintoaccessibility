import pluginPath from '../utilities/pluginPath.js';

/**
 * Polyfill for flag emojis on Windows.
 *
 * @see https://geyer.dev/blog/windows-flag-emojis/
 * @see https://github.com/mozilla/twemoji-colr
 * @see https://github.com/talkjs/country-flag-emoji-polyfill/blob/master/src/emoji.ts
 * @see https://caponte.io/2024/01/25/Flag-Emojis-in-Windows-Browsers/
 * @see https://stackoverflow.com/questions/54519758/flag-emojis-not-rendering
 * @see https://github.com/lipis/flag-icons
 *
 * @source https://unpkg.com/country-flag-emoji-polyfill@0.1.8/dist/TwemojiCountryFlags.woff2
 * @sounce https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2
 */
export default function mobileThemePlugin (eleventyConfig) {
  const pluginPaths = getPluginPaths();

  eleventyConfig.addPassthroughCopy(pluginPaths.cssCopy);
}

function getPluginPaths () {
  const PATH = pluginPath(import.meta.url);
  const cssCopy = {};
  cssCopy[`${PATH}/css/*`] = 'css';

  return {
    cssCopy,
    pluginRoot: PATH
  };
}
