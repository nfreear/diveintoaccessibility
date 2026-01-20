/**
 * Environment variables for local development only.
 * Copy, rename to ".env.js" and edit.
 *
 * @see .github/workflow/deploy.yml - Production ENV.
 */

process.env.DIA_THEME = 'mobile';
// process.env._THEME = 'original';
// Search API key: https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
process.env.SEARCH_API_KEY = 'abc';
process.env.SEARCH_ID = 'xyz';
process.env.ABSOLUTE_URL = 'https://nfreear.github.io/diveintoaccessibility';

/* End */
