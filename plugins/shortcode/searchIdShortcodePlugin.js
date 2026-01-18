/**
 * `mySearchId` and `mySearchApiKey` shortcodes, to allow configuration of `<site-search>`
 */
export default function searchIdShortcodePlugin (eleventyConfig, options) {
  eleventyConfig.addShortcode('mySearchId', function () {
    console.assert(process.env.SEARCH_ID, 'Missing SEARCH_ID environment variable.');
    return process.env.SEARCH_ID;
    // return options.searchId;
  });

  eleventyConfig.addShortcode('mySearchApiKey', function () {
    console.assert(process.env.SEARCH_API_KEY, 'Missing SEARCH_API_KEY environment variable.');
    return process.env.SEARCH_API_KEY;
  });
}
