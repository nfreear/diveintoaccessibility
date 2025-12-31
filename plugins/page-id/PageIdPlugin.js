/**
 * Plugin to sort pages in a collection by day number (page ID).
 *
 * @sort https://www.11ty.dev/docs/collections-api/
 */

// Fallback for non-"day" pages.
const PAGE_IDS_EN = [
  { id: null, slug: 'index' }, // Intentional null id - not included in collection.
  { id: -1, slug: 'introduction' }, // Don't use an id of 0!
  // { id: 1, slug: 'day_1_jackie' },
  { id: 41, slug: 'conclusion' },
  { id: 42, slug: 'accessibility_statement' },
  { id: 43, slug: 'terms_of_use' },
  { id: 44, slug: 'translations' },
];

export class SortByDayNumberPlugin {
// Was: export class PageIdPlugin {
  get #pageIds () { return PAGE_IDS_EN; }

  get #dayRegex () { return /day_(\d+)_/; }

  // https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable
  computePageId (page) {
    console.assert(page, 'is page missing?');
    const isNotesPage = /\/notes\//.test(page.url);
    // Ensure that "notes" pages are not included in the collection.
    if (isNotesPage) {
      return null;
    }
    const M = page.fileSlug.match(this.#dayRegex);
    const pageID = M ? parseInt(M[1]) : this.#fallbackID(page);
    // console.debug('pageID:', pageID, page.fileSlug);
    return pageID;
  }

  // https://www.11ty.dev/docs/collections-api/
  addCollection (collectionsApi) {
    console.assert(collectionsApi, 'is collectionsApi missing?');
    return collectionsApi.getAll().filter((it) => this.#filter(it)).sort((a, b) => {
      const aPageID = this.computePageId(a);
      const bPageID = this.computePageId(b);
      return aPageID - bPageID; // sort by `pageID` - ascending.
      // return a.date - b.date; // sort by date - ascending
      // return b.date - a.date; // sort by date - descending
      // return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      // return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  }

  #filter (page) { return this.computePageId(page); }

  #fallbackID (page) {
    const found = this.#pageIds.find(({ slug }) => slug === page.fileSlug);
    return found ? found.id : null;
  }
}

// Was: pageIdPlugin()
export default function sortByDayNumberPlugin (eleventyConfig, options) {
  console.assert(options.collection, 'Missing collection');
  console.assert(options.shortcode, 'Missing shortcode');

  const { collection, shortcode } = options;
  const sortBy = new SortByDayNumberPlugin();

  eleventyConfig.addShortcode(shortcode, function () {
    // this.page
    // this.eleventy
    return sortBy.computePageId(this.page) ?? '';
  });

  // https://www.11ty.dev/docs/collections-api/
  eleventyConfig.addCollection(collection, (collectionsApi) => sortBy.addCollection(collectionsApi));
}
