# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

RenHelp v2 is a static tutorial site for Command & Conquer Renegade modding, built with [Hugo](https://gohugo.io/). Content is flat Markdown; the theme is a small custom set of Go templates (no third-party theme). Deployed via Cloudflare Pages, which builds directly from the repo on push/merge — there is no CI config to maintain.

## Commands

```sh
hugo server -D      # local dev server at http://localhost:1313, live reload
hugo --minify        # production build, outputs to public/ (gitignored)
hugo version         # check installed version — standard (non-extended) Hugo is sufficient
```

There is no test suite, linter, or package manager in this repo — it's Markdown content plus Go templates. A local Hugo server is only needed when changing styling/layout/site structure; pure content edits don't require it.

## Architecture

**Content model**: Each category (`content/<category>/`) has an `_index.md` (title + `weight` controlling homepage order) and an `.svg` icon file that's auto-picked-up by `tutorials-section.html`. Each tutorial is a subfolder under a category containing `index.md` plus optional `images/`/`files/` asset subfolders. Tutorials are always listed alphabetically by title within a category, regardless of folder name (`.RegularPages.ByTitle` in templates).

**Front matter fields** (all except `title` are optional): `title`, `summary`, `tools` (list, rendered as pills/tags), `author`, `skill` (1–5, rendered as stars), `forum_url` (links to MPF Forums discussion), `video` (bool, shows a video icon in listing tables).

**Template structure** (`layouts/`):
- `_default/baseof.html` — base HTML shell (head/meta/OG tags, header, breadcrumbs, footer); defines the `content` block other templates fill in.
- `_default/list.html` — category page: renders the category's own content, then a `tutorials-table.html` of its tutorials.
- `_default/single.html` — tutorial page: renders a meta table (author/skill/tools/forum link) above the article body if any of those fields are set.
- `index.html` (site root) — homepage: iterates `.Sections.ByWeight` and renders a `tutorials-section.html` preview block per category.
- `partials/tutorials-section.html` — one category's homepage preview card (icon + title + summary + its tutorials table).
- `partials/tutorials-table.html` — shared table (name/skill/author/tools) used by both the homepage and category pages.
- `partials/header.html`, `navigation.html`, `breadcrumbs.html`, `footer.html` — site chrome.

Taxonomies (tags/categories) and the RSS output format are explicitly disabled in `hugo.toml` since the site doesn't use them.

**Styling**: single plain CSS file at `static/css/theme.css` (extended Hugo/Sass is not required). Static assets (logo, icons, favicon) live under `static/images/` and are referenced with `relURL`/`absURL`.

## Adding content

Prefer mirroring an existing tutorial or category folder over building front matter from scratch. See README.md for the full walkthrough (front-matter table, YouTube shortcode syntax `{{< youtube VIDEO_ID >}}`, troubleshooting for tutorials/images not appearing).
