# RenHelp v2 – C&C Renegade Tutorial Site

This repository hosts internal tutorials and reference docs ("RenHelp"). Content lives in flat Markdown files, so you don’t need to know PHP to add or edit tutorials.

- **CMS**: [Grav](https://getgrav.org/) (flat-file, no database)
- **Code & content**: in the `grav/` directory
- **Tutorial pages**: under `grav/user/pages/`

---

## How to add a tutorial

You can add a new tutorial entirely by editing markdown files; no local server is required for simple content changes.

### 1. Find the tutorials section

1. Open the `grav/user/pages/01.tutorial` folder.
2. Locate the folder for the category your tutorial should go under (for example, something like `grav/user/pages/01.tutorials/01.buildings` or similar).

> If you’re unsure which folder to use, look for existing tutorial content you recognize and mirror that layout.

### 2. Create a folder for your tutorial

Inside the category folder:

1. Create a new subfolder for your tutorial.
   - Folder names must start with a numeric prefix and then have a slug, e.g.:  
     `03.my-new-tutorial/`
2. Try to follow the pattern used by existing tutorials.

### 3. Add the main Markdown file (`tutorial.md`)

Inside your new tutorial folder, create a file named:

- `tutorial.md`

You can use an existing tutorial’s `tutorial.md` as a starting point:

1. Copy the contents from a similar tutorial’s `tutorial.md`.
2. Update the frontmatter (the YAML block at the top) such as `title`, `author`, and any other applicable fields (the more fields you can specify the better but keep them short).
3. Replace the body text with your new tutorial content (you can use any [markdown formatting](https://www.markdownguide.org/basic-syntax/) and basic HTML).

> Grav uses this `tutorial.md` file to render the tutorial page.

### 4. Add images and other assets (optional)

If your tutorial needs images or other asset files:

1. In your tutorial folder, create a subfolder for assets, for example:
   - `images/`, `files/` or similar, following the convention used by existing tutorials.
2. Put your images (e.g. `.png`, `.jpg`) or other files in those assets folders.
3. In `tutorial.md`, reference the assets using standard Markdown image syntax, for example:

   ```md
   ![Screenshot of buildings screen](images/buildings-screen.jpg)
   ```
   
   Or like this to make images responsive (this is the preferred approach):
   ```md
    [![Screenshot of buildings screen](images/buildings-screen.jpg?classes=img-maxsize)](images/buildings-screen.jpg)
   ```

Again, check how existing tutorials reference images and mirror that pattern.

### 5. Save and push your changes

A typical tutorial folder looks like this:

```text
grav/
└─ user/
   └─ pages/
      └─ 01.tutorial/
         └─ 01.buildings/               # Existing Category folder
            └─ 03.my-new-tutorial/      # New tutorial folder
               ├─ tutorial.md           # Main tutorial content
               ├─ images/               # Optional folder for images
               └─ files/                # Optional folder for files
```

1. Save the new folder, `tutorial.md`, and any asset files.
2. Commit your changes in git.
3. Open a pull request to the repository.

Once deployed, Grav will automatically pick up the new tutorial.

---

## Local development (for layout / styling / structure changes)

You only need a local Grav instance running if you’re changing **styling**, **layout**, or the **overall site structure** (themes, templates, blueprints, etc.). For simple text/content edits in Markdown, you usually don’t need this.

This project includes a `docker-compose.yml` setup in the repository root.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
- (Optional) Basic familiarity with the command line.

### 1. Start the site with Docker Compose

From the repository root (where `docker-compose.yml` lives), run in your terminal (Windows `cmd.exe`):

```cmd
docker compose up -d
```

This will:

- Build/start the Grav container (in the background) using the included `Dockerfile` (omit `-d` to run in the foreground).
- Mount the `grav/` directory so changes to templates, CSS, or content are reflected live.

Once the container is up, open your browser to `http://localhost` and you should see the site.

### 2. Edit files locally

With Docker running, you can:

- Tweak Twig templates under `grav/user/themes/renhelp`.
- Adjust CSS, JS, or other assets.
- Modify page structure or frontmatter and refresh the browser to see the effect.

#### Theme structure overview

Key files and folders under `grav/user/themes/renhelp`:

```text
grav/
└─ user/
   └─ themes/
      └─ renhelp/
         ├─ blueprints.yaml                     # Theme metadata
         ├─ renhelp.yaml                        # Theme specific configuration
         ├─ css/
         │  └─ theme.css                        # Main theme stylesheet
         ├─ images/
         │  └─ logo.png                         # Theme logo
         └─ templates/                          # Twig templates
            ├─ base.html.twig                   # Base layout
            ├─ default.html.twig                # Home page template
            ├─ tutorial.html.twig               # Tutorial page template
            ├─ section.html.twig                # Section/landing template
            ├─ modular/
            │  └─ tutorials_section.html.twig   # Modular template for a tutorials section on the home page
            ├─ macros/
            │  └─ tutorials_table.twig          # Macros for creating a table of tutorials
            └─ partials/
               ├─ header.html.twig              # Header template
               ├─ navigation.html.twig          # Navigation menu template
               ├─ breadcrumbs.html.twig         # Breadcrumb trail template
               └─ footer.html.twig              # Footer template
```

Refer to the `docker-compose.yml` and `Dockerfile` for exact ports and volumes if you need to customize the stack.

### 3. Stop the containers

When you’re done testing:

In the same folder where you ran `docker compose up`, run:

```cmd
docker compose down
```

(If running in the foreground press `Ctrl + C` and then run the above command.)

This stops and removes the containers, but your code and content in the repo remain unchanged.

You can now commit your changes and open a pull request as needed.

---

## Troubleshooting

- **I don’t see my new tutorial in the menu**  
  - Check the numeric prefix of the folder name (e.g. `03.my-tutorial`) and compare with others.
  - Verify the `title`/`menu` fields in the `tutorial.md` frontmatter.
- **Images don’t appear**  
  - Confirm the files are in the correct assets folder (for example `images/` or `files/`).
  - Check for typos or incorrect paths in the Markdown `![image](path)`.
- **Docker won’t start**  
  - Make sure Docker Desktop is running.  
  - Check that no other service is already using the port configured in `docker-compose.yml`.

If in doubt, open an existing working tutorial and copy its structure as closely as possible.
