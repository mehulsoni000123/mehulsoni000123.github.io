# SONI. — free tools by Mehul Soni

Link-in-bio website for @mehuledits.ai: free apps, Claude skills and guides.

## How to update
All content lives in the `SITE` block at the bottom of `index.html`:
- New guide: add one line at the top of `guides` (`{ day, title, url, isNew: true }`) and remove `isNew` from the old one.
- App release: set `download` to the GitHub Release URL and change `status`.
- Push to `main` — GitHub Pages republishes in about a minute.
