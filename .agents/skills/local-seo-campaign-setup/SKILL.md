---
name: Local SEO Campaign Setup
description: Onboards a new client, gathers E-E-A-T details, scaffolds local SEO landing page templates, sets up the keyword clustering dashboard template, and initialises the WordPress XML compiler.
---

# Local SEO Campaign Setup - Global Skill Guide

## Purpose

This skill handles the end-to-end setup and onboarding of new local SEO clients. It automates the creation of a standard directory structure, scaffolds the local service page templates, creates a custom page generator skill for the client, and sets up a keyword research dashboard.

---

## Workflow Phases

When this skill is triggered, execute the following three phases in order:

### Phase 1: Client Discovery & E-E-A-T Profile Capture

Start by asking the user to provide (or assist them in gathering) the following details:

1. **Company Profile**:
   - Trading Name and Legal Entity Name (e.g. Countrywide UPVC (NW) Ltd)
   - Office Address, local phone numbers, email, founding year
   - Key trade accreditations (e.g. FENSA, Gas Safe, NICEIC)
   - Trust and review stats (e.g. Google rating, number of reviews)

2. **Core USPs & Brand Pitch**:
   - Key differentiators (family-run, no pressure sales, own installers, years of active business)
   - Trust badges and logos URLs

3. **Design System & Aesthetics**:
   - Primary and secondary brand colours (HEX codes)
   - Font family pairings
   - Image guidelines (e.g. where they source their product photos)

4. **Locations & Service Lines**:
   - Target cities/towns and surrounding service areas to target
   - Main services (e.g. windows, doors) and subtypes (e.g. casement, composite)

5. **Ideal Customer Avatar (ICA) and Pain Points**:
   - Target demographic profile (age, property types, core desires)
   - Specific local pain points to solve (e.g., coastal weathering for sea-facing areas, home security for urban areas, sales trust and subcontractor issues for all)

---

### Phase 2: Project Scaffolding

Once the client details are locked in, create the following directory structure and files in the active workspace:

1. **Create Directory Structure**:
   ```
   [Workspace Root]
   ├── .agent
   │   └── skills
   │       └── [client-slug]-pages
   │           └── SKILL.md
   ├── templates
   │   └── [service]-base.html
   ├── scripts
   │   └── generate_wp_xml.py
   ├── keywords_to_check.txt
   └── keyword_dashboard.html
   ```

2. **Generate client-specific Page Creator Skill (`.agent/skills/[client-slug]-pages/SKILL.md`)**:
   Create a local skill that details:
   - The exact schema markup structure (LocalBusiness, Service, FAQPage) with the client's fixed details.
   - The CSS custom properties (design tokens) using their brand colours.
   - The section-by-section layout structure following the Conversion Rate Optimisation (CRO) blueprint (Hero, Trust Bar, Intro, Services Grid, Promise, How It Works, SEO Prose, Areas Covered, Gallery, Testimonials, FAQ, Final CTA).
   - Strict content rules: UK English spelling, no em dashes, and a limit on narrative paragraph lengths on mobile (max 3 lines).
   - **Semantic FAQ Rule**: Banish generic placeholder or guessed questions. The FAQ section must always be derived from real Google 'People Also Asked' (PAA) questions for the page's target keywords. Use the Data For SEO tool (`serp_organic_live_advanced`) to retrieve real-time PAA questions. If Data For SEO is unavailable, execute web search queries targeting UK PAA data. Answers must address these questions naturally while weaving in local geographical context.
   - **Critical Copywriting Guidelines**: Explicitly document the Duplicate Content Prevention rules, requiring 100% unique prose, varied layouts, unique FAQ questions and answers for every page (banning simple locate-and-replace naming swaps), and direct alignment with the Ideal Customer Avatar (ICA) pain points (coastal weathering, security, trade trust).

3. **Generate WordPress XML Compiler (`scripts/generate_wp_xml.py`)**:
   Create a Python script that reads the individual local service HTML pages and compiles them into a single WXR XML file for easy bulk import into WordPress Breakdance. The compiler must include:
   - Correct WordPress post types (`page` or `wp_block`).
   - Automated Yoast SEO meta title and meta description inclusion.
   - Breakdance JSON block tree integration if applicable.

4. **Initialize Keywords File (`keywords_to_check.txt`)**:
   Create a blank template file where the user can paste their list of target search terms.

---

### Phase 3: Setup the Keyword Research Dashboard

1. **Create `keyword_dashboard.html`**:
   Write a self-contained, high-performance dashboard file with a premium dark theme matching the Graham SEO brand style (Dark blue #1B2A4A, Accent Blue #3B7DD8).
   - It must support searching and filtering by keyword, location, and type (Bridging Post, Blog Post, Resource).
   - It must display KPI summary cards (Total Keywords, Combined Volume, Average CPC, count by type).
   - It must include copy-to-clipboard (TSV) and export CSV buttons.
   - It must read from a local JavaScript dataset variable containing keyword objects.

2. **Onboarding Wrap-up**:
   Explain the newly created files to the user and prompt them to add keywords to `keywords_to_check.txt` so we can begin the clustering and volume-validation phase.
