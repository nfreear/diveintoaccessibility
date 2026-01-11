
# dia-plugins #

[![Build][ci-badge]][ci]

A collection of [Eleventy][] themes and [plugins][] for the book, [Dive Into Accessibility][dia].

Each plugin is small and focussed on one task.

## Usage

```apl
npm install --save-dev @11ty/eleventy dia-plugins
```

To use all the themes and plugins, put the following in your [`eleventy.config.js` file][config]:

```js
import diaPluginLoader from 'dia-plugins';

export default async function (eleventyConfig) {
  // ...

  eleventyConfig.addPlugin(diaPluginLoader, {
    // options...
  });
}
```

To use individual plugins, see the code samples below.

## originalThemePlugin

The original styles and template, designed by Mark Pilgrim, as seen in this [archive][], turned into an Eleventy plugin, with minimal changes.

```js
import { originalThemePlugin } from 'dia-plugins';

eleventyConfig.addPlugin(originalThemePlugin);
```

The theme uses [Nunjucks][], and exposes a [layout][], [aliased][] as `page` and uses a layout aliased as `dia_outer_page`.

## mobileThemePlugin

A mobile-first theme for Eleventy, inspired by the original theme, with the same maroon colour.

```js
import { mobileThemePlugin } from 'dia-plugins';

eleventyConfig.addPlugin(mobileThemePlugin);
```

The theme uses [Nunjucks][], and exposes a [layout][], [aliased][] as `page` and uses a layout aliased as `dia_outer_page`.

## themeSwitchPlugin

Plugin to choose between the original or mobile themes, based on a `_THEME` environment variable.

Usage:
```apl
_THEME=orig npx @11ty/eleventy --serve
_THEME=mobile npx @11ty/eleventy --serve
```

```js
import { themeSwitchPlugin } from 'dia-plugins';

eleventyConfig.addPlugin(themeSwitchPlugin);
```

## clientJsPlugin

Plugin to copy client-side (browser) JavaScript. Currently makes available a `<page-note>` custom element, and the following third-party code:

* [fix-title-attr][]

```js
import { clientJsPlugin } from 'dia-plugins';

eleventyConfig.addPlugin(clientJsPlugin);
```

## importMapPlugin

Plugin to output an [importmap][], via a `myImportMap` shortcode.

Used in the mobile theme.

## sortByDayNumberPlugin

Plugin to sort pages in a [collection][] by day number (page ID).

Used in [`pagination.njk`][pagination] in the original and mobile themes.

```js
import { sortByDayNumberPlugin } from 'dia-plugins';

eleventyConfig.addPlugin(sortByDayNumberPlugin, {
  collection: 'myCustomSort'
});
```

## pageIdAndInfoPlugin

Plugin to add `pageType` and `pageID` shortcodes.

```js
import { pageIdAndInfoPlugin } from 'dia-plugins';

eleventyConfig.addPlugin(pageIdAndInfoPlugin, {
  idShortcode: 'myPageID',
  typeShortcode: 'myPageType'
});
```

## addLinkRefsPlugin

Plugin to append the contents of `path/to/link/refs.md` to each Markdown file, via the [`addPreprocessor`][preprocessor] hook in Eleventy. Supports Markdown [reference-style links][md-link].

```js
import { addLinkRefsPlugin } from 'dia-plugins';

eleventyConfig.addPlugin(addLinkRefsPlugin, {
  linkFiles: ['path/to/link/refs.md']
});
```

## License

Original CSS styles and template, Copyright © 2002 Mark Pilgrim.
* License: [GNU Free Documentation License 1.1][GFDL-1.1].

New Eleventy plugins and themes, © 2025-2026 Nick Freear.
* License: [MIT][].

[eleventy]: https://www.11ty.dev/
[config]: https://www.11ty.dev/docs/config/
[plugins]: https://www.11ty.dev/docs/create-plugin/
[collection]: https://www.11ty.dev/docs/collections-api/
[preprocessor]: https://www.11ty.dev/docs/config-preprocessors/
[layout]: https://www.11ty.dev/docs/layouts/
[aliased]: https://www.11ty.dev/docs/layouts/#layout-aliasing
[nunjucks]: https://www.11ty.dev/docs/languages/nunjucks/
[dia]: https://github.com/nfreear/diveintoaccessibility
[pagination]: https://github.com/nfreear/diveintoaccessibility/blob/revive/plugins/mobile-theme/_includes/en/pagination.njk
[archive]: https://web.archive.org/web/20110927131211/http://diveintoaccessibility.org/
[md link]: https://daringfireball.net/projects/markdown/syntax#link
[importmap]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap

[fix-title-attr]: https://github.com/nfreear/fix-title-attr

[GFDL-1.1]: https://github.com/nfreear/diveintoaccessibility/blob/main/LICENSE
[mit]: https://nfreear.mit-license.org/#2025-2026

[d_ci]: https://github.com/nfreear/diveintoaccessibility/actions/workflows/deploy.yml
[d_ci-badge]: https://github.com/nfreear/diveintoaccessibility/actions/workflows/deploy.yml/badge.svg

[ci]: https://github.com/nfreear/diveintoaccessibility/actions/workflows/build.yml
[ci-badge]: https://github.com/nfreear/diveintoaccessibility/actions/workflows/build.yml/badge.svg
