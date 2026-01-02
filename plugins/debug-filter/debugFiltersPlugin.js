/**
 * Plugin to add `stringify` and `console_log` filters.
 *
 * @see https://www.trovster.com/blog/2023/09/eleventy-json-output
 */
export default function debugFiltersPlugin (eleventyConfig) {
  eleventyConfig.addFilter('stringify', (data) => {
    return JSON.stringify(data, null, '\t');
  });

  eleventyConfig.addFilter('console_log', function (data) {
    // Only output on development server!
    const isServe = (this.eleventy.env.runMode === 'serve');

    return isServe
      ? `<script>console.debug('>>', ${JSON.stringify(data)})</script>`
      : '';
  });
}
