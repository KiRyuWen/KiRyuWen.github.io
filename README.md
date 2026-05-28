# KiRyuWen.github.io

Personal GitHub Pages site for Wen Yi Lo (Leith). Vue 3 + Vite + Tailwind CSS.

## Dev & deploy

```bash
npm run dev       # local dev server
npm run deploy    # build + push to gh-pages branch
```

## Adding a project

Edit only `src/data/projects.js` — no other files need to change.

```js
{
  id: 'my-api',       // becomes the URL: /projects/my-api  (kebab-case)
  name: 'My API',
  summary: 'One-line description shown on the project card.',
  description: 'Longer text shown on the project detail page.',
  tags: ['Go', 'PostgreSQL'],
  github: 'https://github.com/KiRyuWen/my-api',
  demo: '',           // leave empty if no live demo
}
```

## File map

| File | Purpose |
|------|---------|
| `src/data/projects.js` | Project content — the only file to edit for projects |
| `src/pages/Home.vue` | Home intro text |
| `src/pages/Projects.vue` | Project card list (auto-generated) |
| `src/pages/ProjectDetail.vue` | Per-project detail page |
| `src/pages/Blog.vue` | Blog placeholder |
| `src/App.vue` | Global nav |
| `src/components/SocialLinks.vue` | GitHub, Email, Resume links |

## Pending placeholders

- **Email:** replace `you@example.com` in `src/App.vue` and `src/components/SocialLinks.vue`
- **Resume:** drop your PDF at `public/resume.pdf`
- **Favicon:** replace `public/vite.svg` and update the `<link>` in `index.html`
