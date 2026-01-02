import PageNoteElement from 'page-note';
import ShareButtonElement from 'share-button';
import SiteSearchElement from 'site-search';

const { customElements } = window;

customElements.define('page-note', PageNoteElement);
customElements.define('share-button', ShareButtonElement);
customElements.define('site-search', SiteSearchElement);

console.debug('app.js');
