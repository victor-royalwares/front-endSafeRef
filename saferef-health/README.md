# SafeRef Health

AI-assisted emergency referral system: 11 static pages (onboarding, auth, dashboard,
request-help flow, facility management, map/directions).

## Project structure

```
saferef-health/
├── public/                 # deployed as-is (Vercel outputDirectory)
│   ├── *.html               # the 11 app pages
│   ├── index.html           # redirects "/" -> /onboarding.html
│   ├── config.js             # generated at build time (git-ignored)
│   └── css/output.css        # compiled Tailwind (generated, git-ignored)
├── src/input.css            # Tailwind source + all consolidated custom CSS
├── scripts/generate-config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

## What changed from the prototype

- **No more Tailwind CDN script or per-page inline `tailwind.config`.** All pages now
  share one `tailwind.config.js` and load a single compiled, minified,
  purged stylesheet at `/css/output.css`.
- **No more hardcoded `http://127.0.0.1:5000` API calls.** `healthWorkerAuth.html`,
  `healthWorkerFacility.html`, `userAuth.html`, and `requestHelp.html` now call
  `` `${window.API_BASE_URL}/api/...` ``, where `window.API_BASE_URL` comes from a
  generated `public/config.js`.
- All page-specific `<style>` blocks were consolidated into `src/input.css`, so
  animations/utilities (`.glass-card`, `.pulse-soft`, `.role-card`, etc.) are
  defined once instead of duplicated across files.

## Local development

```bash
npm install
npm run dev        # generates config.js, then serves ./public on localhost
```

In another terminal, keep the CSS rebuilding on change:

```bash
npm run dev:css
```

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket and import it in Vercel, **or**
   run `vercel` from this directory with the Vercel CLI.
2. In Project Settings → Environment Variables, add:
   - `API_BASE_URL` = the URL of your deployed backend (e.g.
     `https://api.saferefhealth.com`). Leave it unset to make all API calls
     relative to the deployed site's own origin.
3. Vercel will run `npm run build` (defined in `vercel.json`), which:
   - writes `public/config.js` from `API_BASE_URL`
   - compiles/minifies `src/input.css` → `public/css/output.css`
4. `outputDirectory` is `public`; `/` rewrites to `/onboarding.html`, and
   `cleanUrls` is on, so `/dashboard` serves `dashboard.html`.

No serverless functions are included — this repo is the frontend only. Point
`API_BASE_URL` at wherever the referral/auth/AI-matching backend is hosted.

## Known follow-ups (not in scope of this pass)

- Placeholder photography is served from `lh3.googleusercontent.com` mock
  asset URLs — swap in real, licensed imagery before launch.
- Forms have no client-side validation beyond `required`/`type` — consider
  adding it for phone/email formats.
- `localStorage` (`saferefFacilities`, `saferefUser`, `saferefHealthWorker`,
  `saferefRequest`) is still used as local UI state/cache; it is not a
  substitute for server-side persistence and won't sync across devices.
