# App Details Manager

Standalone local web interface for managing release detail content, translations, and assets for the main `stoopidcartoons` Astro project.

## Run

From the repository root:

```bash
npm run manager
```

Or from this folder:

```bash
node server.mjs
```

The default target project root is the parent folder of this manager. You can point the manager at another checkout by setting:

```bash
STOOPIDCARTOONS_PROJECT_ROOT=/absolute/path/to/stoopidcartoons node app-details-manager/server.mjs
```

## What it edits

- `content/releases/*.json`
- `public/apps/icons/*`
- `public/apps/screenshots/<slug>/*`

The Astro site reads those release JSON files directly, so saving in the manager updates the main project immediately.
