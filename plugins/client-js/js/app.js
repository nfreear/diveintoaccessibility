import PageNoteElement from 'page-note';
import ShareButtonElement from 'share-button';
import SearchApiElement from 'search-api';
// import SiteSearchElement from 'site-search';
import fixTitleAttributes from 'fix-title-attr';

const { customElements } = window;

customElements.define('page-note', PageNoteElement);
customElements.define('share-button', ShareButtonElement);
customElements.define('search-api', SearchApiElement);
// customElements.define('site-search', SiteSearchElement);

// Only add the HTML validator button when serving locally.
if (pageInfo().isServeMode) {
  import('validator-button').then(({ default: ValidatorButton }) => {
    customElements.define('validator-button', ValidatorButton);
  });
}

fixTitleAttributes({
  titleSelector: 'main [ title ]'
});

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

console.debug('app.js completed:', pageInfo());

function pageInfo () {
  const { dataset } = document.documentElement;
  const { pageId, pageSlug, pageStatus, pageType } = dataset;
  const isServeMode = dataset.runMode === 'serve';
  return { isServeMode, pageId, pageSlug, pageStatus, pageType };
}
