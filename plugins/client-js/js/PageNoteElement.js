const { DOMParser, fetch, HTMLElement, location } = window;

/**
 * Custom element to create an information box containing notes about the page.
 *
 * @customElement page-note
 */
export default class PageNoteElement extends HTMLElement {
  #isLoaded;
  #httpStatus;
  #dom;
  #firstParaEl;
  #pageStatus;
  #pageType;
  #summary;
  #dayTitle;
  #pageId;

  get urlTemplate () {
    return this.getAttribute('url-template') ?? './en/notes/%s.html';
  }

  get mainSelector () { return this.getAttribute('main-selector') ?? 'main'; }

  get paraSelector () { return this.getAttribute('para-selector') ?? 'p:first-of-type'; }

  get moreText () { return this.getAttribute('more-text') ?? 'Find out more'; } /* @translate */

  get ariaRoleDescription () { return this.getAttribute('description') ?? 'page note'; } /* @translate */

  get #isNotesPage () { return this.#pageType === 'note'; }
  // Was: get #isNotesPage () { return /\/notes\//.test(location.pathname); }

  get #fileSlug () {
    const slug = location.pathname.split('/').pop().replace('.html', '');
    return slug === '' ? 'index' : slug;
  }

  get #notesUrl () { return this.urlTemplate.replace('%s', this.#fileSlug); }

  get #root () { return document.documentElement; }

  async connectedCallback () {
    this.#getPageInfo();
    console.debug('<page-note> element:', this.#isNotesPage, [this]);

    if (this.#isNotesPage) {
      return this.#notesPage();
    }

    await this.#fetchNotesHtmlPage();
    if (this.#isLoaded) {
      this.#queryDomElements();
      const rootElem = this.#createNoteElements();
      this.attachShadow({ mode: 'open' }).appendChild(rootElem);
      this.removeAttribute('hidden');
      this.dataset.ready = true;
    }
  }

  async #fetchNotesHtmlPage () {
    const resp = await fetch(this.#notesUrl);
    console.debug('fetchNotesPage:', resp.status, resp);
    this.#httpStatus = resp.status;
    this.#isLoaded = resp.ok;
    this.setAttribute('http-status', resp.status);
    this.setAttribute('is-loaded', resp.ok);
    if (resp.ok) {
      const htmlSource = await resp.text();
      const parser = new DOMParser();
      this.#dom = parser.parseFromString(htmlSource, 'text/html');
    } else {
      this.setAttribute('hidden', '');
    }
  }

  #queryDomElements () {
    const mainEl = this.#dom.querySelector(this.mainSelector);
    console.assert(mainEl, 'Missing main element');
    const h2Elem = mainEl.querySelector('h2');
    const h3Elem = mainEl.querySelector('h3');
    this.#firstParaEl = mainEl.querySelector(this.paraSelector);

    console.assert(h2Elem, 'Missing <h2> heading');
    console.assert(h3Elem, 'Missing <h3> heading');
    console.assert(this.#firstParaEl, 'Missing <p> element');

    this.#summary = h2Elem.textContent;
    this.#dayTitle = h3Elem.textContent;
    this.#pageStatus = this.#dom.documentElement.dataset.pageStatus;
    // this.#pageId = parseInt(this.#root.dataset.pageId);
    this.setAttribute('page-status', this.#pageStatus);
    console.debug('queryElements:', mainEl, this.#summary, this.#firstParaEl);
  }

  #createElements () {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const div = document.createElement('div');
    const anchor = document.createElement('a');
    return { details, summary, div, anchor };
  }

  #createNoteElements () {
    const EL = this.#createElements();

    EL.details.appendChild(EL.summary);
    EL.details.appendChild(EL.div);
    EL.div.appendChild(this.#firstParaEl);
    EL.div.appendChild(EL.anchor);

    EL.summary.setAttribute('part', 'summary');
    EL.anchor.setAttribute('part', 'a moreLink');
    EL.summary.id = 'summary';
    EL.details.setAttribute('aria-labelledby', 'summary');
    EL.details.setAttribute('role', 'complementary');
    EL.details.setAttribute('aria-roledescription', this.ariaRoleDescription);

    EL.summary.textContent = this.#summary;
    EL.anchor.textContent = this.moreText;
    EL.anchor.href = this.#notesUrl;
    return EL.details;
  }

  get #noteId () {
    const M = location.pathname.match(/day_(\d+)_/);
    return M ? parseInt(M[1]) : null;
  }

  #notesPage () {
    this.#root.dataset.isNotesPage = true;
    this.#root.dataset.noteId = this.#noteId;
    this.setAttribute('hidden', '');
  }

  #getPageInfo () {
    this.#pageId = parseInt(this.#root.dataset.pageId) ?? null;
    this.#pageType = this.#root.dataset.pageType;
  }
}
