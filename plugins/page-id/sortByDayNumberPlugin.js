import { PageIdAndInfoPlugin } from './PageIdPlugin.js';

/**
 * Plugin to sort pages in a collection by day number (page ID).
 *
 * @sort https://www.11ty.dev/docs/collections-api/
 * @was pageIdPlugin()
 */
export default function sortByDayNumberPlugin (eleventyConfig, options) {
  console.assert(options.collection, 'Missing collection');

  const { collection } = options;
  const sortBy = new PageIdAndInfoPlugin();

  // https://www.11ty.dev/docs/collections-api/
  eleventyConfig.addCollection(collection, (collectionsApi) => sortBy.addCollection(collectionsApi));
}
