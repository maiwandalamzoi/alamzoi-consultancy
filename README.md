# Alamzoi Consultancy — Portfolio Site

Personal portfolio and consultancy site for **Maiwand Jan Alamzoi** — AI, Data Science & Geospatial Consultant, founder of Alamzoi Consultancy (Netherlands).

**Live site:** [alamzoiconsultancy.com](https://alamzoiconsultancy.com)

<p>
  <img alt="Status" src="https://img.shields.io/website?url=https%3A%2F%2Falamzoiconsultancy.com&label=site">
  <img alt="Deployed with GitHub Pages" src="https://img.shields.io/badge/deployed-GitHub%20Pages-222?logo=github">
  <img alt="No build step" src="https://img.shields.io/badge/build-none-blue">
</p>

## Overview

A single-page, self-contained portfolio built to the standard of a modern agency/SaaS landing page while staying professional and trustworthy for a data science & AI consultancy. No framework, no build step — just semantic HTML, hand-tuned CSS, and vanilla JS, optimized to load fast and work everywhere.

**Sections:** Hero · About · What I Can Do · Projects & Case Studies · Experience · Education · Languages · Contact

## Features

- **Scroll-triggered reveal animations** — sections and cards fade/slide into view via `IntersectionObserver`, respecting `prefers-reduced-motion`
- **Sticky, scroll-aware navigation** — active-section highlighting, smooth-scroll anchors, collapses to a mobile menu below 640px
- **Interactive project cards** — hover lift/shadow; click opens a modal with an expanded case study (challenge → approach → result)
- **Animated stats & skill bars** — counters and progress bars play once when scrolled into view
- **Dark / light theme toggle** — a purpose-built dark palette (not an inverted light theme), persisted via `localStorage`
- **Fully responsive** — tested at 375px, 768px, and 1440px
- **Social-ready** — Open Graph & Twitter Card meta tags with a generated preview image, inline SVG favicon

## Tech stack

Plain HTML5, CSS3 (custom properties, Grid, Flexbox), and vanilla JavaScript — no dependencies, no bundler. One Google Fonts (Inter) CDN link is the only external request.

## Project structure

```
.
├── index.html          # main portfolio site (served at /)
├── portfolio.html       # alternate/extended portfolio page
├── og-image.png         # social preview image (1200×630)
├── CNAME                # custom domain config for GitHub Pages
└── work/                 # CV, capability statement, and supporting assets
```

## Deployment

Hosted on **GitHub Pages**, served under the custom domain `alamzoiconsultancy.com` (DNS: A records to GitHub Pages + `www` CNAME, HTTPS enforced with an auto-provisioned certificate). Every push to `main` deploys automatically — no CI pipeline required.

## Contact

- **Email:** [maiwand@alamzoiconsultancy.com](mailto:maiwand@alamzoiconsultancy.com)
- **GitHub:** [@maiwandalamzoi](https://github.com/maiwandalamzoi)
- **Site:** [alamzoiconsultancy.com](https://alamzoiconsultancy.com)

---

© 2026 Alamzoi Consultancy — Leuth, Netherlands · KVK-registered (SBI 71120 & 62200)
