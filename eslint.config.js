import neostandard from 'neostandard';

export default neostandard({
  // globals: ['HTMLElement'],
  ignores: ['**/package-json.js', '_11ty', '_site', '_toggle-popover'],
  semi: true,  // Enforce semicolons (like semistandard)
});
