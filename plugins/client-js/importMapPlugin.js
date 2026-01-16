/**
 * Plugin to output an importmap `<script>` element via a shortcode.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap
 * @see https://github.com/nfreear/elements
 */
const elementServer = 'https://nfreear.github.io/elements/src/components';

const importMap = {
  'page-note': './js/PageNoteElement.js',
  'fix-title-attr': 'https://esm.sh/fix-title-attr@0.9.5',
  'share-button': `${elementServer}/MySharingWidgetElement.js`,
  'site-search': `${elementServer}/MySearchElement.js`,
  'site-counter': `${elementServer}/MySiteCounterElement.js`,
  'validator-button': `${elementServer}/MyTestElement.js`
};

export default function importMapPlugin (eleventyConfig, options) {
  eleventyConfig.addShortcode('myImportMap', () => {
    return JSON.stringify({ imports: importMap }, null, 2);
  });
}
