/**
 * Plugin to create some custom collections.
 * @see https://www.11ty.dev/docs/collections-api/
 */
export default function customCollectionsPlugin (eleventyConfig, options) {
  //
  eleventyConfig.addCollection('myMarkdown', function (collectionApi) {
    const result = collectionApi.getFilteredByGlob('**/*.md');
    console.log('Count, all Markdown:', result.length);
    return result;
  });

  eleventyConfig.addCollection('myNotes', function (collectionApi) {
    const result = collectionApi.getFilteredByGlob('**/notes/*.md');
    console.log('Count, notes:', result.length);
    return result;
  });

  eleventyConfig.addCollection('myHTML', function (collectionApi) {
    const result = collectionApi.getFilteredByGlob('**/*.html');
    console.log('Count, HTML:', result.length);
    return result;
  });
}
