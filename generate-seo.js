// Generates one HTML shell per target area with unique meta, OG/Twitter,
// LocalBusiness + FAQPage + BreadcrumbList schema, and a noscript fallback
// containing the core SEO copy (H1, intro, neighbourhoods, FAQs). The React
// build renders the rich interactive version on top; the noscript block
// ensures non-JS crawlers see substantial unique content and we avoid thin-
// or duplicate-content penalties.
//
// Source of truth for the per-area data is mirrored from shared.js. Keep in
// sync when adding/removing areas or updating postcodes/neighbourhoods.

const fs = require('fs');

const COMPANY = {
  name: 'Carter Electrical Contracting',
  phone: '01244 727291',
  phoneHref: 'tel:+441244727291',
  site: 'https://carterelec.co.uk',
  streetAddress: 'Unit 5, White Lane Depot, White Lane, Christleton',
  locality: 'Chester',
  postalCode: 'CH3 6AH',
  region: 'Cheshire',
  country: 'GB'
};

// Chester is intentionally NOT in this list: the homepage (/) is the Chester
// service+location page, so we don't generate electricians-chester.html (would
// cannibalise the homepage keyword). Cross-links to Chester from the 7 city
// pages below go to "/" instead of a separate Chester page.
const areas = [
  {
    name: 'Ellesmere Port', slug: 'ellesmere-port',
    county: 'Cheshire West', distance: '9 miles',
    postcodes: ['CH65', 'CH66'],
    neighbourhoods: ['Little Sutton', 'Whitby', 'Great Sutton', 'Hooton', 'Overpool', 'Rivacre', 'Strawberry', 'Wolverham'],
    metaDesc: 'NICEIC-approved electricians in Ellesmere Port (CH65, CH66). Industrial three-phase, retail fit-outs, domestic rewires, and OZEV EV chargers. Get a free quote.',
    intro: `We deliver reliable commercial, industrial, and domestic electrical services throughout Ellesmere Port.

Our team routinely carries out three-phase power installations and machinery wiring along the M53 corridor, retail fit-outs at Cheshire Oaks, and landlord EICR safety checks and rewires across the CH65 and CH66 postcodes.

Contact us for a clear, fixed-price quote.`,
    commercialAngle: "Cheshire Oaks, Coliseum Retail Park and the Stanney Lane trading estates drive a steady flow of shop and restaurant fit-outs, landlord-side compliance testing, and emergency-lighting upgrades.",
    domesticAngle: "The CH65/CH66 housing stock is a mix of 1960s–1970s estates needing replacement consumer units and full rewires, and newer developments where we're installing OZEV-approved EV chargers and smart home controls."
  },
  {
    name: 'Wrexham', slug: 'wrexham',
    county: 'Wrexham (Wales)', distance: '12 miles',
    postcodes: ['LL11', 'LL12', 'LL13', 'LL14'],
    neighbourhoods: ['Acton', 'Rhosddu', 'Rossett', 'Marford', 'Gwersyllt', 'Rhosllanerchrugog', 'Ruabon', 'Gresford', 'Coedpoeth', 'Borras', 'Hightown'],
    metaDesc: 'NICEIC-approved electricians in Wrexham (LL11–LL14). Industrial three-phase, commercial fit-outs, full rewires, and OZEV EV chargers. Contact us today.',
    intro: `Our qualified, NICEIC-approved electricians cover Wrexham and all surrounding villages.

We specialize in heavy industrial work, three-phase distribution, and preventative maintenance on Wrexham Industrial Estate, alongside town-centre commercial fit-outs and domestic services including rewires and EV charger installations.

We operate fully under both English and Welsh building regulations.`,
    commercialAngle: "Wrexham's commercial demand ranges from town-centre retail units through to newer office and hospitality work around the Racecourse and Eagles Meadow. We deliver design-and-install, EICR-led remedials and emergency-lighting programmes to landlords and operators.",
    domesticAngle: "Cross-border working is routine for us: we hold NICEIC approval recognised across England and Wales. Domestic demand skews toward rewires in older terraced stock, EV chargers in Gresford and Marford, and replacement consumer units across the LL12 belt."
  },
  {
    name: 'Northwich', slug: 'northwich',
    county: 'Cheshire West', distance: '18 miles',
    postcodes: ['CW8', 'CW9'],
    neighbourhoods: ['Barnton', 'Hartford', 'Weaverham', 'Lostock Gralam', 'Rudheath', 'Castle', 'Winnington', 'Leftwich', 'Davenham', 'Sandiway', 'Kingsmead'],
    metaDesc: 'NICEIC-approved electricians in Northwich (CW8, CW9). Industrial maintenance, retail fit-outs, full rewires, consumer units, and EV chargers. Request a quote.',
    intro: `If you need an electrician in Northwich, we offer a full range of commercial, industrial, and domestic electrical services.

We support local businesses with commercial fit-outs and landlord safety checks, handle three-phase industrial installations, and assist homeowners with replacement consumer units, rewires, and OZEV-approved EV charger installations across CW8 and CW9.`,
    commercialAngle: "Barons Quay retail and leisure tenants, the Lostock Gralam trading estates and town-centre hospitality drive most of our Northwich commercial work: fit-outs, EICRs, landlord compliance, and planned lighting upgrades.",
    domesticAngle: "Hartford and Davenham demand sits with replacement consumer units and part-rewires on 1970s-era stock, while Kingsmead and Leftwich new-build owners most often call us for EV chargers, solar-PV add-ons and smart lighting."
  },
  {
    name: 'Frodsham', slug: 'frodsham',
    county: 'Cheshire West', distance: '14 miles',
    postcodes: ['WA6'],
    neighbourhoods: ['Kingsley', 'Helsby', 'Overton', 'Alvanley', 'Manley', 'Mouldsworth', 'Norley', 'Crowton'],
    metaDesc: 'NICEIC-approved electricians in Frodsham (WA6). Commercial fit-outs, landlord EICRs, full rewires, and OZEV EV chargers. Contact us for a free quote.',
    intro: `We provide professional electrical installations and testing for homes and businesses in Frodsham and Helsby.

From emergency lighting and landlord certificates for High Street shops to EV chargers and domestic rewires in the surrounding villages, our NICEIC-approved engineers ensure your project is completed safely, on time, and on budget.`,
    commercialAngle: "Frodsham's independents (restaurants, pubs, salons and the Main Street retail trade) rely on us for quick-turnaround fit-outs, EICRs ahead of lease renewals, and PAT testing programmes.",
    domesticAngle: "Commuter demand dominates: OZEV-approved EV charger installs with load management, full-property rewires where homebuyers' surveys have flagged old wiring, and smart-heating retrofits for the Overton and Helsby stock."
  },
  {
    name: 'Tarporley', slug: 'tarporley',
    county: 'Cheshire West', distance: '11 miles',
    postcodes: ['CW6'],
    neighbourhoods: ['Utkinton', 'Cotebrook', 'Eaton', 'Alpraham', 'Beeston', 'Bunbury', 'Tiverton', 'Little Budworth', 'Cuddington'],
    metaDesc: 'NICEIC-approved electricians in Tarporley (CW6). Heritage rewires, smart-home systems, barn conversions, and outbuilding three-phase supplies. Contact us.',
    intro: `Our team delivers high-quality domestic and commercial electrical work across Tarporley and the CW6 area.

We are experienced in heritage-sensitive rewires for listed buildings, smart lighting controls, barn conversions, and three-phase supplies for agricultural and equestrian yards.

All work is completed by our in-house engineers with absolute respect for your property.`,
    commercialAngle: "Tarporley High Street's boutique retail, hospitality and professional-services offices use us for EICR-led remedials, fit-outs and emergency lighting. We also support the equestrian and agricultural sector with three-phase supplies to yards and barns.",
    domesticAngle: "High-end domestic is the core of our Tarporley demand: smart-lighting schemes with multi-room control, heritage-sensitive rewires on listed farmhouses, EV charger installs with three-phase capability, and outdoor lighting design on larger plots."
  },
  {
    name: 'Mold', slug: 'mold',
    county: 'Flintshire (Wales)', distance: '13 miles',
    postcodes: ['CH7'],
    neighbourhoods: ['Buckley', 'New Brighton', 'Gwernaffield', 'Gwernymynydd', 'Leeswood', 'Nercwys', 'Pontblyddyn', 'Sychdyn', 'Alltami'],
    metaDesc: 'NICEIC-approved electricians in Mold (CH7). Commercial fit-outs, agricultural three-phase, outbuilding supplies, rewires, and EV chargers. Get a quote.',
    intro: `We provide fully certified, NICEIC-approved electrical services across Mold and the CH7 postcode.

Operating on both sides of the border, we handle commercial fit-outs and compliance testing in the town centre, agricultural and three-phase outbuilding installs in rural areas, and domestic services including rewires, consumer unit replacements, and EV charger installations.`,
    commercialAngle: "Mold town centre (Daniel Owen Square, the Market and High Street) drives most of our commercial work: small-to-mid fit-outs, landlord EICRs, emergency-lighting upgrades and PAT testing.",
    domesticAngle: "Rural demand is a big part of CH7: outbuilding supplies, three-phase for farms, smart-home and EV-charger installs for commuter villages, and full rewires on older stone-built properties."
  },
  {
    name: 'Deeside', slug: 'deeside',
    county: 'Flintshire (Wales)', distance: '10 miles',
    postcodes: ['CH5'],
    neighbourhoods: ['Shotton', "Connah's Quay", 'Queensferry', 'Sealand', 'Hawarden', 'Garden City', 'Sandycroft', 'Mancot', 'Ewloe'],
    metaDesc: 'NICEIC-approved electricians in Deeside (CH5). Industrial three-phase, factory shutdowns, commercial fit-outs, full rewires, and EV chargers. Contact us.',
    intro: `Looking for a qualified industrial or commercial electrician in Deeside?

We support manufacturers on Deeside Industrial Park with three-phase power upgrades, machinery wiring, and preventative maintenance, while providing local retail fit-outs, landlord EICR safety checks, and domestic rewires across the CH5 area.`,
    commercialAngle: "Deeside Industrial Park tenants are the backbone of our commercial work here: scheduled maintenance, RCD and distribution upgrades, compliance testing and planned remedial works.",
    domesticAngle: "Shotton and Connah's Quay terraced stock needs full rewires and replacement consumer units more often than not, while Hawarden and Ewloe homeowners are mostly calling us for EV chargers, solar-PV add-ons and smart-home retrofits."
  },
  {
    name: 'Wirral', slug: 'wirral',
    county: 'Merseyside', distance: '20 miles',
    postcodes: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63'],
    neighbourhoods: ['Birkenhead', 'Prenton', 'Wallasey', 'New Brighton', 'Bebington', 'Heswall', 'West Kirby', 'Hoylake', 'Bromborough', 'Moreton', 'Upton', 'Greasby', 'Port Sunlight', 'Eastham', 'Caldy'],
    metaDesc: 'NICEIC-approved electricians in Wirral (CH41–CH49, CH60–CH63). Commercial fit-outs, industrial three-phase, EICRs & EV chargers. Contact us for a quote.',
    intro: `Looking for a reliable, NICEIC-approved electrician in Wirral?

We provide comprehensive commercial, industrial, and domestic electrical services across the peninsula, covering Birkenhead, Wallasey, Heswall, West Kirby, and all surrounding areas.

From three-phase industrial installations at Bromborough to retail fit-outs, landlord EICRs, and full domestic rewires, our in-house team delivers neat, compliant work with transparent, fixed pricing.`,
    commercialAngle: "Wirral's commercial demand spans the Wirral International Business Park and Bromborough's manufacturing estates, the regenerating Birkenhead waterfront around Wirral Waters and Twelve Quays, and the retail and hospitality trade at New Brighton's Marine Point, Birkenhead's Grange and Pyramids precincts and the West Kirby and Heswall high streets. We deliver design-and-install fit-outs, landlord EICRs ahead of lease renewals, emergency-lighting certification and planned maintenance contracts.",
    domesticAngle: "The peninsula's housing stock runs the full range: Victorian and Edwardian terraces in Birkenhead, Tranmere and Wallasey needing full rewires and replacement consumer units; interwar semis across Bebington, Eastham and Moreton; and higher-end detached and coastal property in Heswall, Caldy, West Kirby and Hoylake where the calls are for smart-lighting schemes, garden and outbuilding supplies, and OZEV-approved EV chargers with load management."
  }
];

// Per-location FAQs: same structure as window.CARTER.locationFaqs so the
// noscript version mirrors what React renders.
function buildFaqs(area) {
  const post = area.postcodes.join(', ');
  const nb = area.neighbourhoods.slice(0, 5).join(', ');
  return [
    {
      q: 'How do I know if a local electrician in ' + area.name + ' is qualified?',
      a: 'Check if they are registered with a government-approved scheme, such as the NICEIC or NAPIT. Competent person schemes guarantee the contractor undergoes regular assessments, holds valid public liability insurance, and works to BS 7671 (the 18th Edition wiring regulations). You can verify registrations directly on the Registered Competent Person Electrical website or by asking the contractor for their NICEIC registration number.'
    },
    {
      q: 'What is the average hourly rate for an electrician in the UK?',
      a: 'Most qualified electricians in the UK charge between £45 and £60 per hour, with day rates typically ranging from £300 to £450 depending on the complexity of the work and the location. Minor works are often subject to a minimum call-out charge to cover travel and diagnostics. For larger projects, a reputable contractor will provide a detailed, fixed-price quote rather than working on an hourly basis.'
    },
    {
      q: 'What electrical work is legally notifiable in ' + area.name + '?',
      a: 'Under Part P of the Building Regulations in England and Wales, higher-risk electrical installations must be notified to local authority Building Control. This includes the installation of new circuits, replacing a consumer unit (fuse box), and any alterations within \'special locations\' (such as zones immediately surrounding a bath or shower). Registered competent electricians can self-certify this work and automatically notify Building Control on your behalf.'
    },
    {
      q: 'Are EICR reports a legal requirement for landlords in ' + area.name + '?',
      a: 'Yes. Under the Electrical Safety Standards in the Private Rented Sector Regulations, landlords of private tenancies in England are legally required to have the electrical installations in their properties inspected and tested by a qualified person at least every five years. This inspection produces an Electrical Installation Condition Report (EICR) which must be provided to existing tenants within 28 days of the test.'
    },
    {
      q: 'Can I do my own electrical work at home?',
      a: 'While you are legally permitted to carry out minor, non-notifiable electrical tasks, such as replacing a damaged light switch, socket faceplate, or light fitting on a like-for-like basis, all electrical work must comply with BS 7671 safety standards. Any notifiable work, such as adding new circuits or upgrading a fuse box, must either be certified by a registered electrician or approved in advance by local Building Control.'
    },
    {
      q: 'Which postcodes do you cover in ' + area.name + '?',
      a: 'Our local team covers every postcode and neighbourhood across ' + area.name + ' and its surrounding areas, primarily ' + post + '. This includes ' + nb + ' and neighbouring villages. If you are unsure whether your address falls within our standard service radius, you can get in touch with our team with your postcode, and we will confirm our availability.'
    }
  ];
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHtml(area) {
  const url = `${COMPANY.site}/electricians-${area.slug}.html`;
  const title = `Electricians in ${area.name} | NICEIC-Approved | Carter Electrical`;
  const faqs = buildFaqs(area);
  // Cross-link to the 7 other city pages plus back to the Chester/homepage.
  const otherAreas = areas.filter(a => a.slug !== area.slug);
  const chesterLink = { name: 'Chester', href: '/' };

  // Schema: BreadcrumbList + LocalBusiness (ElectricalContractor) + FAQPage + Service
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: COMPANY.site + '/' },
          { '@type': 'ListItem', position: 2, name: 'Areas We Cover', item: COMPANY.site + '/areas.html' },
          { '@type': 'ListItem', position: 3, name: 'Electricians in ' + area.name, item: url }
        ]
      },
      {
        '@type': ['LocalBusiness', 'ElectricalContractor'],
        '@id': url + '#business',
        name: COMPANY.name,
        url: url,
        telephone: COMPANY.phone,
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY.streetAddress,
          addressLocality: COMPANY.locality,
          postalCode: COMPANY.postalCode,
          addressRegion: COMPANY.region,
          addressCountry: COMPANY.country
        },
        areaServed: [
          { '@type': 'City', name: area.name },
          ...area.neighbourhoods.map(n => ({ '@type': 'Place', name: n + ', ' + area.name }))
        ],
        makesOffer: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial electrical services in ' + area.name } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial electrical services in ' + area.name } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domestic electrical services in ' + area.name } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EICR testing and inspection in ' + area.name } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'OZEV-approved EV charger installation in ' + area.name } }
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'NICEIC Approved Contractor' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'OZEV-approved EV installer' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  };

  // Noscript fallback: real, crawlable content for non-JS crawlers.
  const noscript = `
    <header>
      <p><a href="${COMPANY.site}">${COMPANY.name}</a> · <a href="tel:+441244727291">${COMPANY.phone}</a></p>
    </header>
    <main>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <a href="/areas.html">Areas We Cover</a> &rsaquo; Electricians in ${esc(area.name)}
      </nav>
      <h1>Local electricians covering ${esc(area.name)} - NICEIC-approved</h1>
      <h2>Approved electricians in ${esc(area.name)}, done properly the first time</h2>
      <p>${esc(area.intro)}</p>

      <h2>Coverage</h2>
      <ul>
        <li><strong>Postcodes:</strong> ${area.postcodes.map(esc).join(', ')}</li>
        <li><strong>Response time:</strong> Within 48 hours</li>
        <li><strong>Distance from Chester HQ:</strong> ${esc(area.distance)}</li>
        <li><strong>County:</strong> ${esc(area.county)}</li>
      </ul>

      <h2>Commercial Electrical</h2>
      <p>${esc(area.commercialAngle)}</p>

      <h2>Domestic Electrical</h2>
      <p>${esc(area.domesticAngle)}</p>

      <h2>Areas we cover</h2>
      <ul>
        ${area.neighbourhoods.map(n => '<li>' + esc(n) + '</li>').join('\n        ')}
      </ul>

      <h2>Our electrical services in ${esc(area.name)}</h2>
      <ul>
        <li>Commercial fit-outs, distribution, emergency lighting and fire alarm</li>
        <li>Industrial three-phase, motor control and factory shutdowns</li>
        <li>Full and partial domestic rewires, replacement consumer units</li>
        <li>EICR testing, landlord safety reports and PAT testing</li>
        <li>OZEV-approved EV charger installation and solar-PV integration</li>
      </ul>

      <h2>Frequently asked questions</h2>
      ${faqs.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('\n      ')}

      <h2>Other areas we cover</h2>
      <ul>
        <li><a href="${chesterLink.href}">Electricians in ${esc(chesterLink.name)}</a></li>
        ${otherAreas.map(a => '<li><a href="/electricians-' + a.slug + '.html">Electricians in ' + esc(a.name) + '</a></li>').join('\n        ')}
      </ul>

      <p><a href="/contact.html">Discuss your ${esc(area.name)} project</a> &middot; <a href="tel:+441244727291">Call ${esc(COMPANY.phone)}</a></p>
    </main>`;

  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(area.metaDesc)}"/>
  <link rel="canonical" href="${url}" />

  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(area.metaDesc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:site_name" content="${esc(COMPANY.name)}" />
  <meta property="og:locale" content="en_GB" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(area.metaDesc)}" />

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"/>
  <link rel="stylesheet" href="styles.css"/>

  <script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
  </script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18182294304"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6WK8M8E9R9');
</script>
</head>
<body>
  <div id="root"></div>

  <noscript>${noscript}
  </noscript>

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script src="shared.js"></script>
  <script type="text/babel" src="hero-bg.jsx"></script>
  <script type="text/babel" src="shell.jsx"></script>
  <script type="text/babel" src="tweaks.jsx"></script>
  <script type="text/babel" src="locations.jsx"></script>
  <script type="text/babel">ReactDOM.createRoot(document.getElementById('root')).render(<LocationPage locationName="${area.name.replace(/"/g, '\\"')}"/>);</script>
</body>
</html>`;
}

areas.forEach(area => {
  fs.writeFileSync(`electricians-${area.slug}.html`, buildHtml(area));
});

console.log('Generated ' + areas.length + ' SEO-optimised location pages.');
