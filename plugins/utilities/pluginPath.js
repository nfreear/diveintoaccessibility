import PKG from './package-json.js';

/**
 * Get a path suitable for eleventyConfig.addPassthroughCopy().
 */
export default function pluginPath (importMetaUrl) {
  const parts = importMetaUrl.split('/');
  const minusTwo = parts[parts.length - 2];
  const PATH = `node_modules/${PKG.name}/${minusTwo}`;

  // console.debug('pluginPath:', PKG.name, minusTwo, PATH);
  // process.exit(-1);
  return PATH;
}
