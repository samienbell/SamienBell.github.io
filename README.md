# Personal Website

A fast, dependency-free personal site for a software engineer. Semantic HTML, a
themeable CSS design system (light/dark with persistence), and a data-driven
projects section. No build step — it's just static files.

## Run locally

Open `index.html` directly, or serve it (recommended, so fonts/assets load with
correct headers):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize (checklist)

Everything you need to edit is plain content — no framework knowledge required.

- [ ] **Name & bio** — `index.html`: replace "Your Name" and the hero bio text.
- [ ] **Avatar** — replace `assets/avatar.svg` (or point the `<img>` at a `.jpg`/`.png`).
- [ ] **Résumé** — replace `assets/resume.pdf` with your real résumé.
- [ ] **Contact** — search `index.html` for `you@example.com` and update the email
      (used by the hero "Contact me" button and the nav Contact link).
- [ ] **Social links** — update the GitHub / LinkedIn URLs (`samienbell`).
- [ ] **Experience** — edit `experience.js`; each entry becomes a timeline row.
- [ ] **Projects** — edit `projects.js`; each entry becomes a card automatically.
- [ ] **Title/description/OG tags** — `<head>` of `index.html` (for SEO & sharing).

## Files

| File            | Purpose                                             |
| --------------- | --------------------------------------------------- |
| `index.html`    | Page structure and content                          |
| `styles.css`    | Design tokens + all styling (themes via `[data-theme]`) |
| `experience.js` | Work-experience data — edit for your career timeline |
| `projects.js`   | Project data — the one file to edit for your work   |
| `script.js`     | Theme toggle, content rendering, scroll reveal      |
| `assets/`       | Avatar, favicon, résumé                             |

## Deploy

Works as-is on any static host — GitHub Pages, Netlify, Cloudflare Pages, Vercel.
For GitHub Pages: push these files to a repo and enable Pages on the default branch.

## Notes on the implementation

- **Accessibility:** skip link, focus-visible outlines, `aria` on interactive
  controls, `prefers-reduced-motion` respected, semantic landmarks.
- **No FOUC:** the theme is applied from `localStorage`/OS preference before paint.
- **XSS-safe rendering:** project data is escaped before insertion into the DOM.
- **Progressive enhancement:** scroll-reveal degrades to fully-visible when JS or
  `IntersectionObserver` is unavailable.
