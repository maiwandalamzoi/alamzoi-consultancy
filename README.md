# Alamzoi Consultancy - Services Website

Independent static website for Alamzoi Consultancy, Maiwand Alamzoi's professional services business.

This project is separate from the ZaminAI product application. It must not push to or reuse the ZaminAI repository remote.

## Business Focus

Paid consulting assignments in:

1. Agricultural data and GIS analysis
2. Precision agriculture and digital agriculture advisory
3. Agricultural engineering and feasibility studies

Commercial model: project-based assignments, day/hour consulting, and ongoing support. Public prices are intentionally not shown; visitors are asked to request a proposal.

## Local Preview

Open `index.html` directly in a browser. No build step is required.

Optional static server:

```powershell
npx serve .
```

## Enquiry Handling

The enquiry form is static and opens a `mailto:` draft to `maiwand@alamzoiconsultancy.com`. It does not store submissions or guarantee delivery by itself.

A backend or form service is required for production-grade delivery, spam protection, logging, and reliable success/error states.

## Deployment

`CNAME` contains `alamzoiconsultancy.com`, indicating GitHub Pages custom-domain ownership for the live site. Do not change domains, push to `main`, or deploy without explicit approval.

## ZaminAI Link

ZaminAI is presented as an external portfolio product only:

- https://zaminai.org/

Do not add farm accounts, crop maps, dairy records, ZaminAI subscription flows, or local ZaminAI application routes to this consultancy website.
