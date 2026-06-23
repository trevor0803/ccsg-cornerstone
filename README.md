# CCSG — Cornerstone Contractors Support Group

Static marketing site for Cornerstone Contractors Support Group (CCSG), a division of
Ryan Construction & Development — general contracting, permit expediting, contractor
licensing, structural construction, construction management, and consulting/expert
witness services across Florida (Palm Beach County).

## Pages
- `index.html` — Home (hero, intro, stats, services, why-us, CTA)
- `about.html` — About (owner bio, mission/vision, values, FAQ)
- `services.html` — Services (5 service cards, partners)
- `projects.html` — Projects (featured experience + recent-work placeholders)
- `contact.html` — Contact (form + details + map)

## Stack
Plain static HTML/CSS/JS — no build step. Shared `styles.css` + `script.js`.
Deployed on Vercel (`cleanUrls`, security headers in `vercel.json`).

## Contact form
`script.js` uses a **mailto fallback** by default (opens the visitor's email app,
pre-filled to mark@ccsg.com). To capture submissions in a dashboard, set
`FORM_ENDPOINT` in `script.js` to a Formspree or LeadConnector form action URL.

## To finish before launch (placeholders)
- Add real photos where `.media-ph` placeholders appear (home, about owner, projects).
- Add a real logo asset (currently a CSS "CCSG" wordmark + `assets/favicon.svg`).
- Add real project entries on `projects.html` (recent-work section).
- Confirm contact details: 561-723-3580 / mark@ccsg.com / Palm Beach County.
- Optionally wire the contact form to a CRM endpoint.

## Local preview
Open the files directly, or run any static server (e.g. `npx serve`).

## Deploy
```
vercel --prod --yes --scope trevor-6596s-projects
```
