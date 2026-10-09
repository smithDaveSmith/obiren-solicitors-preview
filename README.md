# O’Brien Solicitors — Clear margins

A complete, responsive, unofficial redesign concept for **Niall O’Brien & Co. Solicitors, Lucan**. Fourteen business pages, seven practice areas, three rendered design studies, accessible navigation and an email-draft contact flow. No framework or runtime dependencies.

The business has not approved this preview. Every page is marked as a concept and carries `noindex,nofollow,noarchive`. The business’s official domain has not been changed.

## GitHub Pages deployment

Repository: **smithDaveSmith/obiren-solicitors-preview**. The repository’s existing spelling is intentional in these deployment paths.

1. Open this repository on GitHub and sign in as its administrator.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source → Deploy from a branch**.
4. Set **Branch → main** and folder **/ (root)**, then **Save**.
5. Wait for the Pages deployment to complete. Use the **Visit site** link shown by GitHub, and check Home, a practice page and Contact.

Expected URL after activation: `https://smithDaveSmith.github.io/obiren-solicitors-preview/`. This is an expected destination, not a claim that deployment is live. Design studies will be at `studies.html` beneath that path.

`index.html` is already at the repository root. `.nojekyll` disables Jekyll processing. No build command, Actions workflow, npm installation, custom domain or environment secret is required. Relative links work under the repository subdirectory. `404.html` includes this repository base path so deep missing URLs recover correctly.

GitHub’s instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Work locally

Use Node.js 20 or later:

```sh
npm run dev -- --port 4173
```

Open `http://localhost:4173`. No dependency installation is needed.

```sh
npm run build
npm run check
```

`scripts/content.mjs` holds verified firm details and service content. `scripts/build.mjs` generates the fourteen business pages with shared headers, footers and layouts. `styles.css` contains the design system. `app.js` handles navigation and email-draft preparation. Commit both the source and regenerated HTML after changes; Pages serves the HTML directly.

## Review files

- [Research, concept and verification report](docs/RESEARCH-AND-HANDOVER.md)
- [Three live design studies](studies.html)
- [Responsive QA harness](docs/qa/review.html), with viewport and enlarged-text controls
- [URL migration map](docs/URL-MAP.md)
- [Rendered screenshots](docs/screenshots/)

## Contact flow

The form validates required fields, email format, whitespace-only names/messages and length limits. It creates a `mailto:` draft addressed to the published business email. **It does not send anything.** The visitor reviews and sends through their own email app. Editing entries invalidates the prepared draft. With JavaScript unavailable, visitors retain direct telephone and email alternatives.

No analytics, embedded maps, remote fonts, cookies, browser storage or form backend are included. Google Maps directions open only when selected.

## Before a business launch

Obtain business approval of content and contact destinations, current legal/regulatory and privacy wording, confirmation of the reused asset rights, and a decision on any authorised form backend. Confirm the current recruitment position and the detailed scope of tax work. Add genuine team information or office photography only when supplied. Remove the concept notices and search exclusion only after approval. Keep the platform decision open.
