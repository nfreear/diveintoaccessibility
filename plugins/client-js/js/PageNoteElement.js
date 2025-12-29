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

  get #isNotesPage () { return /\/notes\//.test(location.pathname); }

  get #fileSlug () { return location.pathname.replace('.html', '').replace(/\/\w+\//, ''); }

  get #notesUrl () { return `/en/notes/${this.#fileSlug}.html`; }

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
    }
  }

  #queryDomElements () {
    const mainEl = this.#dom.querySelector('main');
    const h2Elem = mainEl.querySelector('h2');
    this.#firstParaEl = mainEl.querySelector('p:first-of-type');
    this.#summary = h2Elem.textContent;
    this.#pageStatus = this.#dom.documentElement.dataset.pageStatus;
    this.setAttribute('page-status', this.#pageStatus);
    console.debug('queryElements:', mainEl, this.#firstParaEl, h2Elem);
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
    linkEl.setAttribute('part', 'more');

    summaryEl.textContent = this.#summary;
    linkEl.textContent = 'Find out more';
    linkEl.href = this.#notesUrl;
    return detailsEl;
  }
}
