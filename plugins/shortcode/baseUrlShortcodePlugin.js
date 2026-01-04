/**
 * A `myBaseUrl` shortcode, to allow configuration of a `<base href=...>` element.
 *
 * @see https://codepen.io/nfreear/pen/ZYOQvWQ
 * @see https://codepen.io/nfreear/pen/RNRWmpP
 */
export default function baseUrlShortcodePlugin (eleventyConfig, options) {
  eleventyConfig.addShortcode('myBaseUrl', function () {
    // Only use the configurable `buildBaseUrl` option in "build" mode (not "serve" mode)!
    const isBuild = (this.eleventy.env.runMode === 'build');
    const baseUrl = isBuild && options.buildBaseUrl ? options.buildBaseUrl : '/';

    return baseUrl;
  });
}
