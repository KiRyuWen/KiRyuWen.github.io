// GoatCounter pageview tracking.
//
// SITE_CODE is the GoatCounter account name — the dashboard lives at
// https://kiryuwen.goatcounter.com. Setting it to null disables tracking
// entirely (the whole module is then stripped from the bundle).
//
// Two things this handles that GoatCounter's copy-paste snippet does not:
//   1. The router uses hash history, so location.pathname is always "/" — every
//      page would be counted as the home page. We pass the route path explicitly.
//   2. Route changes are client-side, so only the first load would ever be
//      counted. We count on every navigation instead of on script load.
//
// Note: count.js deliberately ignores localhost, so nothing is recorded during
// `npm run dev`. That is expected, not a bug.

const SITE_CODE = 'kiryuwen'

let count = null
const pending = []

export function initAnalytics(router) {
  if (!SITE_CODE) return

  const endpoint = `https://${SITE_CODE}.goatcounter.com/count`

  // no_onload: we send the first pageview ourselves from the router hook below,
  // so the script must not also count it — that would double the landing page.
  window.goatcounter = { no_onload: true, endpoint }

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://gc.zgo.at/count.js'
  script.dataset.goatcounter = endpoint
  script.onload = () => {
    count = window.goatcounter.count
    const queued = pending.splice(0)
    queued.forEach(path => send(path))
  }
  document.head.appendChild(script)

  // Fires on the initial navigation too, so the landing page is covered.
  router.afterEach(to => {
    if (count) send(to.fullPath)
    else pending.push(to.fullPath) // script still loading — send it once it lands
  })
}

function send(path) {
  count({ path, title: document.title })
}
