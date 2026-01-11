import PageNoteElement from 'page-note';
import ShareButtonElement from 'share-button';
import SiteSearchElement from 'site-search';
import fixTitleAttributes from 'fix-title-attr';

const { customElements } = window;

customElements.define('page-note', PageNoteElement);
customElements.define('share-button', ShareButtonElement);
customElements.define('site-search', SiteSearchElement);

fixTitleAttributes({
  titleSelector: 'main [ title ]'
});

console.debug('app.js completed.');
