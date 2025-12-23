/**
 * Plugin to generate `pageID` from the `fileSlug`, and sort a custom collection.
 */

const PAGE_IDS_EN = [
  { id: null, slug: 'index' }, // Intentional null id!
  { id: -1, slug: 'introduction' }, // Don't use an id of 0!
  // { id: 1, slug: 'day_1_jackie' },
  { id: 41, slug: 'conclusion' },
  { id: 42, slug: 'accessibility_statement' },
  { id: 43, slug: 'terms_of_use' },
  { id: 44, slug: 'translations' },
];

export default class PageIdPlugin {
  get #pageIds () { return PAGE_IDS_EN; }

  // https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable
  compute (page) {
    console.assert(page, 'is page missing?')
    const M = page.fileSlug.match(/day_(\d+)_/);
    const pageID = M ? parseInt(M[1]) : this.#fallbackID(page);
    // console.debug('pageID:', pageID, page.fileSlug);
    return pageID;
  }

  // https://www.11ty.dev/docs/collections-api/
  addCollection (collectionsApi) {
    console.assert(collectionsApi, 'is collectionsApi missing?');
    return collectionsApi.getAll().filter((it) => this.#filter(it)).sort((a, b) => {
      const aPageID = this.compute(a);
      const bPageID = this.compute(b);
      return aPageID - bPageID; // sort by `pageID` - ascending.
      // return a.date - b.date; // sort by date - ascending
      // return b.date - a.date; // sort by date - descending
      // return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      // return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  }

  #filter (page) { return this.compute(page); }

  #fallbackID (page) {
    const found = this.#pageIds.find(({ slug }) => slug === page.fileSlug);
    return found ? found.id : null;
  }
}
