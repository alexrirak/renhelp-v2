# RenHelp: Grav → Hugo Migration Plan

## Context

RenHelp.net currently runs on [Grav](https://getgrav.org/), a flat-file PHP CMS, deployed via Docker (Apache + PHP) as described in `docker-compose.yml`/`Dockerfile`. The site is a tutorial directory for Command & Conquer Renegade modding, organized as ~23 tutorials across 10 categories, all authored as flat Markdown with a small custom theme (`renhelp`).

We're moving to [Hugo](https://gohugo.io/) to drop the PHP/Docker runtime entirely. The target deploy is Cloudflare Pages, which checks out the repo and runs the Hugo build directly — no container, no server process, no special CI config needed beyond pointing Cloudflare at the Hugo site directory with the right build command.

## Current Site — What We're Porting

**Content** (`grav/user/pages/01.tutorial/`): flat Markdown, numeric-prefixed folders (`01.buildings`, `02.characters`, …) give ordering. Each tutorial folder has `tutorial.md` plus `images/` and/or `files/` (zip downloads) subfolders. Totals: 23 `tutorial.md`, 10 `section.md`, 1 `default.md` (home), 146 images, 5 download zips.

**Front matter fields in use**: `title`, `summary`, `type` (array of tags), `author`, `skill` (1–5), `forum_url`, `video` (bool); sections additionally have `icon` (svg filename).

**Theme** (`grav/user/themes/renhelp/`): custom Twig, no third-party dependency.
- `base.html.twig` — HTML shell: header, nav, breadcrumbs, footer, CSS include
- `default.html.twig` — homepage, loops over category sections and renders a tutorials table for each
- `section.html.twig` — category page, renders a tutorials table of its children
- `tutorial.html.twig` — single tutorial: metadata table (author/skill stars/type tags/forum link) + content
- `macros/tutorials_table.twig` — shared table macro used by both homepage and section templates
- `css/theme.css` — all styling in one file

**Plugins that matter**:
- `youtube` — renders `[plugin:youtube](url)` shortcodes (used in 6 tutorials)
- `breadcrumbs` — drives the breadcrumb partial
- `markdown-notices`, `error`, `problems` — installed but unused in content / Grav-admin-only; nothing to port

## Target Hugo Structure

```
hugo/
├─ hugo.toml
├─ content/
│  ├─ _index.md                       # homepage (was 01.tutorial/default.md)
│  ├─ buildings/
│  │  ├─ _index.md                    # section (was 01.buildings/section.md), weight: 1
│  │  ├─ buildings.svg                # section icon as page resource
│  │  └─ advanced-building-tutorial/
│  │     └─ index.md                  # leaf bundle (was 01.advanced-building-tutorial/tutorial.md)
│  │     └─ images/…                  # co-located, resolves automatically
│  ├─ characters/…
│  └─ …                               # one dir per category, numeric prefix stripped, weight preserved
├─ layouts/
│  ├─ _default/baseof.html            # ~= base.html.twig
│  ├─ index.html                      # ~= default.html.twig
│  ├─ _default/list.html              # ~= section.html.twig
│  ├─ _default/single.html            # ~= tutorial.html.twig
│  ├─ partials/header.html, footer.html, nav.html, breadcrumbs.html
│  └─ partials/tutorials-table.html   # ~= macros/tutorials_table.twig
└─ static/                            # theme.css, logo, video.svg
```

Categories become top-level sections (`/buildings/...` instead of `/tutorial/buildings/...`) — URLs are simplified rather than preserved. Numeric folder prefixes are dropped from slugs and converted into a `weight:` front matter field so ordering is preserved.

## Mapping Details

| Grav | Hugo |
|---|---|
| `@self.children` ordering by folder prefix | `weight` front matter, sorted via `.Pages.ByWeight` |
| `page.header.*` in Twig | `.Params.*` in Go templates — same field names, direct copy |
| `breadcrumbs` plugin | Small partial walking `.Ancestors` (native in modern Hugo) |
| `[plugin:youtube](url)` | Hugo's built-in `{{< youtube ID >}}` shortcode — migration script extracts the video ID from the URL and rewrites the line |
| `images/foo.jpg?classes=img-maxsize` | Strip the `?classes=...` query param (Goldmark doesn't support it); apply `max-width:100%` to all `article img` globally in CSS instead — every current usage is that one class, so behavior is unchanged |
| `icon: 'buildings.svg'` on section | Kept as a page resource next to `_index.md`, referenced via `.Resources.GetMatch` |
| `robots.txt` / `.htaccess` Grav-internals rules | Dropped — static output has no PHP/system dirs to hide |

Images and download zips move as-is into per-tutorial leaf bundles; Hugo publishes bundle resources alongside the page automatically, so existing relative Markdown links (`images/foo.jpg`, `files/foo.zip`) keep working unmodified.

## Migration Mechanics

Given 34 content files, this is scripted rather than copied by hand:
1. Walk `grav/user/pages/01.tutorial/**`, strip numeric prefixes, compute `weight` from them.
2. Rewrite each file's YAML front matter (same keys, drop Grav-specific ones like `content.items`/`content.order`).
3. Regex-replace `[plugin:youtube](https://www.youtube.com/watch?v=ID)` → `{{< youtube ID >}}`.
4. Regex-strip `?classes=img-maxsize` from image URLs.
5. Copy `images/`, `files/`, and section `.svg` icons into the corresponding Hugo bundle folders unchanged.

## Deploy

Cloudflare Pages checks out the repo and runs the Hugo build directly — build command `hugo --minify`, output directory `hugo/public`, no CI config or container needed. `docker-compose.yml` and `Dockerfile` are removed as part of this migration since there's no PHP runtime left to containerize.

## Out of Scope / Dropped

- `markdown-notices`, `error`, `problems` Grav plugins — unused or admin-only, nothing to port.
- Redirects for old `/tutorial/...` URLs — not adding these since external links (forum posts) point *out* from this site, not in, so there's minimal link-rot risk from the URL simplification.

## Verification

- `hugo server -D` locally: click through home → each of the 10 category pages → a sample tutorial in each, confirming images, video embeds, and download links render.
- Diff tutorial count and front matter fields against the original 23 tutorials to catch any dropped metadata during the scripted conversion.
- `hugo --minify` production build with no errors/warnings; spot-check output HTML for a tutorial with images, a video embed, and a file download.
- Confirm Cloudflare Pages build succeeds end-to-end against the new `hugo/` directory before cutting over DNS/removing the Grav deployment.
