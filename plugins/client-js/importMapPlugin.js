/**
 * Plugin to output an importmap `<script>` element via a shortcode.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap
 * @see https://github.com/nfreear/elements
 */
const githubPages = 'https://nfreear.github.io';
const elementServer = `${githubPages}/elements/src/components`;

const importMap = {
  'page-note': './js/PageNoteElement.js',
  'npm:fix-title-attr': 'https://esm.sh/fix-title-attr@0.9.5',
  'fix-title-attr': `${githubPages}/fix-title-attr/index.js`,
  'ndf-elements/dia': `${githubPages}/elements/src/dia.js`,
  /* 'share-button': `${elementServer}/MySharingWidgetElement.js`,
  'site-search': `${elementServer}/MySearchElement.js`,
  'search-api': `${elementServer}/MySearchApiElement.js`,
  'site-counter': `${elementServer}/MySiteCounterElement.js`, */
  'validator-button': `${elementServer}/MyTestElement.js`
};

export default function importMapPlugin (eleventyConfig, options) {
  eleventyConfig.addShortcode('myImportMap', () => {
    return JSON.stringify({ imports: importMap }, null, 2);
  });
}
