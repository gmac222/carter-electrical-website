# Carter Electrical: handover pack for the WordPress / Breakdance rebuild

Generated from the live site on 27 October 2026 (commit on `main` at that date).
Every page below is a self-contained HTML file with the full content and the site
CSS inlined, ready for the `ai-to-breakdance` skill. Run the skill from a Chrome
session with the Breakdance builder open and logged in, one page at a time.

Site: https://carterelec.co.uk. Business: Carter Electrical Contracting,
Unit 5, White Lane Depot, White Lane, Christleton, Chester CH3 6AH, 01244 727291.
All copy is UK English. Do not introduce em dashes.

## What is in this folder

| Path | What it is |
| --- | --- |
| `pages/*.html` | One file per page: title, meta description, site CSS, page content. Image paths are absolute (`https://carterelec.co.uk/...`). Links already point at the WordPress URLs. |
| `schema/*.json` | The JSON-LD for each page. Re-add it per page (SEO plugin custom schema, or a code block in the head). Not carried by Breakdance automatically. |
| `partials/header.html`, `partials/footer.html` | The global header and footer. Build these once as Breakdance global header and footer templates, not per page. |
| `partials/mobile-sticky-cta.html` | The mobile call/quote bar. Also global. |
| `redirects-current-to-wordpress.csv` | Each current `.html` URL and its WordPress slug. Every one needs a 301 when WordPress goes live. |
| `redirects-legacy-to-wordpress.csv` | The 35 pre-2026 URLs that `vercel.json` already redirects, mapped to their final WordPress URL so they go there in one hop. |
| `checklist.json` | Per page: title, meta description, H1, H2 list, and notes (form, map embed, FAQ). |

## Build order

Do the globals first, then the pages in this order. Location pages share one
layout, so once the first is right the rest are repeats with different content.

1. Global header (`partials/header.html`) and footer (`partials/footer.html`).
2. `pages/index.html` (home)
3. `pages/services.html`, `pages/commercial.html`, `pages/industrial.html`, `pages/domestic.html`
4. `pages/about.html`, `pages/areas.html`
5. The 8 location pages: `electricians-ellesmere-port`, `electricians-wrexham`,
   `electricians-northwich`, `electricians-frodsham`, `electricians-tarporley`,
   `electricians-mold`, `electricians-deeside`, `electricians-wirral`
6. `pages/case-studies.html` and the 4 case studies
7. `pages/contact.html` and `pages/thank-you.html`
8. `pages/blog.html` and `pages/blog-the-importance-of-eicr-testing.html`
9. `pages/privacy-policy.html`, `pages/terms.html`, `pages/sitemap.html`

## Things that need a WordPress replacement, not a copy

These do not exist in the HTML, or depend on the current Vercel backend.

- **Contact form.** The current form is a 3-step React form posting to `/api/lead`.
  Fields: `name`, `email`, `phone`, `company`, `postcode`, `sector`, `service`,
  `scope`, `timing`, `details`. Rebuild with a form plugin (Breakdance Form
  Builder, WS Form, Gravity Forms). It must redirect to `/thank-you/` on success
  because that page carries the conversion tracking.
- **Lead notifications.** `/api/lead` emails the lead (`CONTACT_EMAIL`), sends an
  SMS via ClickSend, and writes the lead to Airtable. The form plugin needs to
  replicate email at minimum; ClickSend and Airtable are optional but someone
  should decide, because the client may rely on them.
- **Call tracking.** `/api/twilio-webhook`, `/api/recording`, `/api/twilio-whisper`
  handle a Twilio tracking number: call forwarding, recording, SMS alert, Airtable
  logging and a GA4 event. This is independent of the website pages and can keep
  running on Vercel after the move, as long as the Twilio number still points at
  the Vercel functions. Do not delete the Vercel project until that is decided.
- **Admin dashboard.** `admin.html` is a leads dashboard over the same API. Not a
  public page, not in this pack. It stops working if the lead API is retired.
- **Google Maps embed.** The home, contact and location pages embed a Google Map
  iframe. Keep as an HTML/embed element in Breakdance, or use its map element.
- **FAQ accordions.** Location pages have FAQ accordions. Use the Breakdance
  accordion element. The FAQPage schema in `schema/` must match the questions.
- **Blog.** One article exists. Use native WordPress posts; the blog index becomes
  the posts page. The article's content is in `pages/blog-the-importance-of-eicr-testing.html`.
- **Hero background.** The home and location heroes drew an animated circuit
  pattern on a canvas. It is removed here. The CSS grid background remains. Treat
  the canvas as decorative and optional.
- **Google Ads / GA tags.** Pages load `gtag.js` with `AW-18182294304` (and a GA4
  ID in the inline config). Re-add site-wide via the theme or a tag plugin.
- **XML sitemap, robots.txt, favicon** (`favicon.ico`, `/uploads/logo-original.png`).
  WordPress or the SEO plugin regenerates the sitemap; copy the rest.

## URL rules

- Keep slugs exactly as in `redirects-current-to-wordpress.csv`. They are the
  current filenames with the `.html` dropped, except the case studies, which move
  under `/case-studies/`. Change them only if there is a reason, and then update
  both CSV files and the schema `@id`/`url` values.
- Set `https://carterelec.co.uk/` as the canonical on every page and keep the
  site on the same domain. The old `carterelectricalcontracting.co.uk` domain
  already redirects here; leave that alone.
- When WordPress goes live, load both CSV files as 301 redirects (Redirection
  plugin, or the host's redirect rules). Then test every row.

## Schema notes

- All pages share one business entity: `https://carterelec.co.uk/#business`.
  Keep that `@id` identical everywhere; it is how the pages link to one business.
- Location pages carry a `Service` with `provider` pointing at that `@id`, plus
  `BreadcrumbList` and `FAQPage`. If the WordPress slug changes, update the
  `@id`, `url` and breadcrumb `item` values in that page's JSON.
- `logo` and `image` point at files on the current site. Re-upload them to the
  WordPress media library and update the two URLs once, in every file.

## Checks before switching DNS or going live

1. Every page: title, meta description and H1 match `checklist.json`.
2. Every page: schema validates (Rich Results Test) and the `#business` `@id`
   is the same on all of them.
3. Contact form submits, emails arrive, and it lands on `/thank-you/`.
4. All rows in both redirect CSVs return 301 to the right page.
5. Search Console: fetch a location page with the URL Inspection live test and
   confirm the HTML tab shows the full content.
