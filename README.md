# RenHelp v2 – C&C Renegade Tutorial Site

This repository hosts internal tutorials and reference docs ("RenHelp"). Content lives in flat Markdown files, so you don't need to know Go templates to add or edit tutorials.

- **Static site generator**: [Hugo](https://gohugo.io/)
- **Content**: under `content/`
- **Theme**: under `layouts/` and `static/`

---

## How to add a tutorial

You can add a new tutorial entirely by editing markdown files; no local server is required for simple content changes.

### 1. Find the category folder

Open the `content/` folder and pick the category your tutorial belongs in, e.g. `content/buildings/`, `content/characters/`, etc. Each category is a folder containing an `_index.md`.

> If you're unsure which folder to use, look for existing tutorials you recognize and mirror that layout.

### 2. Create a folder for your tutorial

Inside the category folder, create a new subfolder for your tutorial, e.g.:

```text
content/buildings/my-new-tutorial/
```

Tutorials within a category are always listed alphabetically by title, regardless of folder name.

### 3. Add the main Markdown file (`index.md`)

Inside your new tutorial folder, create a file named `index.md`. You can use an existing tutorial's `index.md` as a starting point — copy its front matter and update the fields:

```yaml
---
title: My New Tutorial
summary: One sentence describing what this tutorial covers.
tools: [RenX, 3DSMax]
author: YourName
skill: 2
forum_url: https://multiplayerforums.com/topic/...
video: true
---
```

| Field | Required? | Notes |
|---|---|---|
| `title` | yes | Shown as the page heading and in the tutorials table |
| `summary` | no | Short one-line blurb shown in the tutorials table |
| `tools` | no | List of tags (software/tools used), shown as pills |
| `author` | no | |
| `skill` | no | 1–5, rendered as stars |
| `forum_url` | no | Link to the MPF Forums discussion thread |
| `video` | no | Set to `true` to show a video icon next to the title in tables |

Replace the body text with your tutorial content — standard [Markdown](https://www.markdownguide.org/basic-syntax/) and basic HTML both work.

### 4. Add images and other assets (optional)

If your tutorial needs images or downloadable files, add them as subfolders next to `index.md`:

```text
content/buildings/my-new-tutorial/
├─ index.md
├─ images/
└─ files/
```

Reference them with normal relative Markdown links — no special query-string syntax needed:

```md
![Screenshot of buildings screen](images/buildings-screen.jpg)
```

### 5. Embedding a YouTube video

Use Hugo's built-in shortcode with just the video ID (the part after `v=` in a YouTube URL):

```md
{{< youtube VIDEO_ID >}}
```

### 6. Save and push your changes

1. Save the new folder, `index.md`, and any asset files.
2. Commit your changes in git.
3. Open a pull request to the repository.

Once merged, Cloudflare Pages will automatically rebuild and deploy the site.

---

## How to add a new category

1. Create a new folder under `content/`, e.g. `content/robots/`.
2. Inside it, create `_index.md`:

   ```yaml
   ---
   title: Robots
   weight: 11
   ---

   A short description of this category.
   ```

   `weight` controls where the category appears in the homepage list (lower numbers first).
3. Add an `.svg` icon file in the same folder — it's picked up automatically and shown next to the category title.

---

## Local development

You only need Hugo running locally if you're changing **styling**, **layout**, or the **overall site structure** (theme, templates). For simple content edits, you usually don't need this.

### 1. Install Hugo

Install [Hugo](https://gohugo.io/installation/). The standard build is enough — this site uses a plain CSS file, so the extended version isn't required. Verify with:

```sh
hugo version
```

### 2. Run the dev server

From the repository root:

```sh
hugo server -D
```

Open `http://localhost:1313`. Changes to content, templates, or CSS are reflected live.

### 3. Build the production site (optional)

```sh
hugo --minify
```

Output is written to `public/` (gitignored — this is what Cloudflare Pages builds and serves).

#### Theme structure overview

```text
layouts/
├─ _default/
│  ├─ baseof.html      # Base HTML shell (head, header, breadcrumbs, footer)
│  ├─ list.html        # Category page template
│  └─ single.html      # Tutorial page template
├─ index.html           # Homepage template
└─ partials/
   ├─ header.html
   ├─ navigation.html
   ├─ breadcrumbs.html
   ├─ footer.html
   ├─ tutorials-section.html  # Per-category preview block (used on homepage)
   └─ tutorials-table.html    # Shared tutorials table

static/
├─ css/theme.css        # All site styling
└─ images/               # Logo, video icon

hugo.toml                # Site config (title, description, etc.)
```

---

## Deployment

This site is deployed via **Cloudflare Pages**, which checks out the repository and runs the Hugo build directly — no Docker, no CI config to maintain. Build command: `hugo --minify`. Deploys happen automatically when changes are pushed/merged.

---

## Troubleshooting

- **I don't see my new tutorial in the list**
  - Confirm `index.md` sits directly inside a category folder under `content/` (e.g. `content/buildings/my-new-tutorial/index.md`).
  - Check the `title` field is set in the front matter.
- **Images don't appear**
  - Confirm the images live in an `images/` (or similarly named) subfolder next to your tutorial's `index.md`, and that the Markdown path matches exactly (case-sensitive).
- **My new category doesn't show up on the homepage**
  - Make sure it has an `_index.md` with a `title` set.

If in doubt, open an existing working tutorial or category and copy its structure as closely as possible.
