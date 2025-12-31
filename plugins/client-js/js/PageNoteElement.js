const { DOMParser, fetch, HTMLElement, location } = window;

/**
 * Custom element to create an information box containing notes about the page.
 * @customElement page-note
 */
export default class PageNoteElement extends HTMLElement {
  #isLoaded;
  #httpStatus;
  #dom;
  #firstParaEl;
  #pageStatus;
  #summary;
  #dayTitle;
  #pageId;

  get urlTemplate () {
    return this.getAttribute('url-template') ?? '/en/notes/%s.html';
  }

  get mainSelector () { return this.getAttribute('main-selector') ?? 'main'; }

  get paraSelector () { return this.getAttribute('para-selector') ?? 'p:first-of-type'; }

  get moreText () { return this.getAttribute('more-text') ?? 'Find out more'; }

  get #isNotesPage () { return /\/notes\//.test(location.pathname); }

  get #fileSlug () { return location.pathname.replace('.html', '').replace(/\/\w+\//, ''); }

  get #notesUrl () { return this.urlTemplate.replace('%s', this.#fileSlug); }

  async connectedCallback () {
    console.debug('page-note', this.#isNotesPage, [this]);

    if (this.#isNotesPage) {
      document.documentElement.dataset.isNotesPage = true;
      this.setAttribute('hidden', '');
      return;
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
    const h2Elem = mainEl.querySelector('h2');
    const h3Elem = mainEl.querySelector('h3');
    this.#firstParaEl = mainEl.querySelector(this.paraSelector);
    this.#summary = h2Elem.textContent;
    this.#dayTitle = h3Elem.textContent;
    this.#pageStatus = this.#dom.documentElement.dataset.pageStatus;
    this.#pageId = document.documentElement.dataset.pageId;
    this.setAttribute('page-status', this.#pageStatus);
    console.debug('queryElements:', mainEl, this.#summary, this.#firstParaEl);
  }

  #createNoteElements () {
    const detailsEl = document.createElement('details');
    const summaryEl = document.createElement('summary');
    const innerEl = document.createElement('div');
    const linkEl = document.createElement('a');

    detailsEl.appendChild(summaryEl);
    detailsEl.appendChild(innerEl);
    innerEl.appendChild(this.#firstParaEl);
    innerEl.appendChild(linkEl);

    summaryEl.setAttribute('part', 'summary');
    linkEl.setAttribute('part', 'a moreLink');

    summaryEl.textContent = this.#summary;
    linkEl.textContent = this.moreText;
    linkEl.href = this.#notesUrl;
    return detailsEl;
  }
}
