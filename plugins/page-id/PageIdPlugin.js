/**
 * Plugin to get the page "type", "pageID" and other information about a page.
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

export class PageIdAndInfoPlugin {
// Was: export class PageIdPlugin {
  /**
   * @TODO localize regular expressions?
   */
  #regex = {
    day: /day_(\d+)_/,
    isBy: /by_\w+/,
    isNote: /\/notes\//,
    isContents: /table_of_contents/,
    isHome: /\/en\/index/,
  };

  // Keys match '#regex' above.
  #pageTypes = {
    day: 'day',
    isBy: 'by',
    isNote: 'note',
    isContents: 'toc',
    isHome: 'home'
  };

  get #pageIds () { return PAGE_IDS_EN; }

  isNotesPage (page) { return this.#regex.isNote.test(page.url); }

  // https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable
  #computePageId (page) {
    console.assert(page, 'is page missing?');
    // Ensure that "notes" pages are not included in the collection.
    if (this.isNotesPage(page)) {
      return null;
    }
    const M = page.filePathStem.match(this.#regex.day);
    const pageID = M ? parseInt(M[1]) : this.#fallbackID(page);
    // console.debug('pageID:', pageID, page.fileSlug);
    return pageID;
  }

  // https://www.11ty.dev/docs/collections-api/
  addCollection (collectionsApi) {
    console.assert(collectionsApi, 'is collectionsApi missing?');
    return collectionsApi.getAll().filter((it) => this.#filter(it)).sort((a, b) => {
      const aPageID = this.#computePageId(a);
      const bPageID = this.#computePageId(b);
      return aPageID - bPageID; // sort by `pageID` - ascending.
      // return a.date - b.date; // sort by date - ascending
      // return b.date - a.date; // sort by date - descending
      // return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      // return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  }

  #filter (page) { return this.#computePageId(page); }

  #fallbackID (page) {
    const found = this.#pageIds.find(({ slug }) => slug === page.fileSlug);
    return found ? found.id : null;
  }

  getInfo (page) {
    console.assert(page && page.filePathStem, 'is page missing?');
    const M = page.filePathStem.match(this.#regex.day);
    const id = M ? parseInt(M[1]) : null;
    const myType = this.#getType(page);

    return {
      id,
      type: myType,
      isDay: myType === this.#pageTypes.day,
      isBy: myType === this.#pageTypes.isBy,
      isHome: myType === this.#pageTypes.isHome,
      isToc: myType === this.#pageTypes.isContents,
      isNote: myType === this.#pageTypes.isNote,
      isOther: myType === 'other',
      slug: page.fileSlug
    };
  }

  #getType (page) {
    console.assert(page && page.filePathStem, 'is page missing?');
    const stem = page.filePathStem;

    const found = Object.entries(this.#regex).find(([key, RE]) => RE.test(stem));

    return found ? this.#pageTypes[found[0]] : 'other';
  }
}

// Was: pageIdPlugin()
export default function pageIdAndInfoPlugin (eleventyConfig, options) {
  console.assert(options.idShortcode, 'Missing idShortcode');
  console.assert(options.typeShortcode, 'Missing typeShortcode');

  const { idShortcode, typeShortcode } = options;
  const plugin = new PageIdAndInfoPlugin();

  eleventyConfig.addShortcode(idShortcode, function () {
    // this.page
    // this.eleventy
    return plugin.getInfo(this.page).id ?? '';
  });

  eleventyConfig.addShortcode(typeShortcode, function () {
    return plugin.getInfo(this.page).type;
  });

  eleventyConfig.addShortcode('console_log_page_info', function (otherData) {
    // Only output on development server!
    const isServe = (this.eleventy.env.runMode === 'serve');

    const pageInfo = plugin.getInfo(this.page);
    const allData = { pageInfo, page: this.page, eleventy: this.eleventy, otherData };
    return isServe
      ? `<script>console.debug('pageIdAndInfoPlugin:', ${JSON.stringify(allData)})</script>`
      : '';
  });
}
