// Collects every post file in this folder. To publish a new post, drop a file
// here named after its topic (kebab-case) — nothing else needs to change.
//
// The filename is the post's identity: `connect-to-tamu-linux-server.js`
// is served at /blog/connect-to-tamu-linux-server. Renaming the file changes
// the URL, so treat it as permanent once a post is public.

const modules = import.meta.glob('./*.js', { eager: true })

export const posts = Object.entries(modules)
  .filter(([path]) => path !== './index.js')
  .map(([path, mod]) => ({
    id: path.slice('./'.length, -'.js'.length),
    ...mod.default,
  }))
  .sort((a, b) => b.date.localeCompare(a.date)) // newest first
