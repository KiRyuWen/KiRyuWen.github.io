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

## Adding a blog post

One file per post, named after its topic, in `src/data/posts/`. Drop the file in —
`src/data/posts/index.js` picks it up automatically via `import.meta.glob`, and
sorts posts newest-first by `date`. No registration step, no markdown dependency.

The **filename is the post's identity**: `src/data/posts/my-post.js` is served at
`/blog/my-post`. Renaming it changes the URL, so treat it as permanent once public.

```js
// src/data/posts/my-post.js
export default {
  title: 'My Post',
  date: '2026-09-02',   // YYYY-MM-DD — used for sorting
  summary: 'One-line description shown on the post card.',
  tags: ['Linux'],
  blocks: [
    { t: 'h2', text: 'Section heading' },
    { t: 'p', text: 'A paragraph.' },
    { t: 'p', html: 'A paragraph with a <a href="...">link</a>.' },
    { t: 'note', text: 'Highlighted callout.' },
    { t: 'ol', items: ['first', 'second'] },   // or t: 'ul'
    { t: 'code', label: 'macOS', code: 'ssh netid@host' },  // label optional
  ],
}
```

## File map

| File | Purpose |
|------|---------|
| `src/data/projects.js` | Project content — the only file to edit for projects |
| `src/data/posts/<topic>.js` | One blog post — the only kind of file to add for posts |
| `src/data/posts/index.js` | Auto-collects the post files; derives each post's URL id from its filename |
| `src/pages/Home.vue` | Home intro text |
| `src/pages/Projects.vue` | Project card list (auto-generated) |
| `src/pages/ProjectDetail.vue` | Per-project detail page |
| `src/pages/Blog.vue` | Blog post list (auto-generated) |
| `src/pages/PostDetail.vue` | Per-post page — renders the block types above |
| `src/App.vue` | Global nav |
| `src/components/SocialLinks.vue` | GitHub, Email, LinkedIn links |

## Pending placeholders

- **Favicon:** replace `public/vite.svg` and update the `<link>` in `index.html`
- `public/resume.pdf` is unused — the nav links to `public/wenyi_lo_resume_backend.pdf`
