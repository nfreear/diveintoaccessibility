import PageNoteElement from 'page-note';
import { MySearchApiElement, MySharingWidgetElement, MySiteCounterElement } from 'ndf-elements/dia';
import { fixTitleAttributes, fixArchiveLinks, TitleTipElement } from 'fix-title-attr';

const { customElements } = window;

customElements.define('page-note', PageNoteElement);
customElements.define('share-button', MySharingWidgetElement);
customElements.define('search-api', MySearchApiElement);
customElements.define('site-counter', MySiteCounterElement);
// customElements.define('site-search', SiteSearchElement);
customElements.define('title-tip', TitleTipElement);

// Only add the HTML validator button when serving locally.
if (pageInfo().isServeMode) {
  import('validator-button').then(({ default: ValidatorButton }) => {
    customElements.define('validator-button', ValidatorButton);
  });
}

fixArchiveLinks();
fixTitleAttributes();

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

console.debug('app.js completed:', pageInfo());

function pageInfo () {
  const { dataset } = document.documentElement;
  const { pageId, pageSlug, pageStatus, pageType } = dataset;
  const isServeMode = dataset.runMode === 'serve';
  return { isServeMode, pageId, pageSlug, pageStatus, pageType };
}
