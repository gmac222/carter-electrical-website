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
  phone: '01244 738493',
  phoneHref: 'tel:+441244738493',
  site: 'https://carterelec.co.uk',
  streetAddress: 'Unit 5, White Lane Depot, White Lane, Christleton',
  locality: 'Chester',
  postalCode: 'CH3 6AH',
  region: 'Cheshire',
  country: 'GB'
};

// Chester is intentionally NOT in this list — the homepage (/) is the Chester
// service+location page, so we don't generate electricians-chester.html (would
// cannibalise the homepage keyword). Cross-links to Chester from the 7 city
// pages below go to "/" instead of a separate Chester page.
const areas = [
  {
    name: 'Ellesmere Port', slug: 'ellesmere-port',
    county: 'Cheshire West', distance: '9 miles', responseTime: '45–75 minutes',
    postcodes: ['CH65', 'CH66'],
    neighbourhoods: ['Little Sutton', 'Whitby', 'Great Sutton', 'Hooton', 'Overpool', 'Rivacre', 'Strawberry', 'Wolverham'],
    metaDesc: 'NICEIC-approved electricians in Ellesmere Port (CH65, CH66). Industrial three-phase, retail fit-outs at Cheshire Oaks, domestic rewires and OZEV EV chargers across Little Sutton, Whitby, Hooton and the surrounding area.',
    intro: "Ellesmere Port is the industrial anchor of our north-Wirral coverage — a town whose electrical demand is shaped by Cheshire Oaks Designer Outlet at one end and the Stanlow refinery, Essar petrochemical complex and the former Vauxhall plant at the other. In practice that means we spend as much time on three-phase industrial installations, motor control work and machinery relocations for manufacturers along the M53 corridor as we do on retail unit fit-outs and EICR testing for landlords across CH65 and CH66.",
    commercialAngle: "Cheshire Oaks, Coliseum Retail Park and the Stanney Lane trading estates drive a steady flow of shop and restaurant fit-outs, landlord-side compliance testing, and emergency-lighting upgrades.",
    domesticAngle: "The CH65/CH66 housing stock is a mix of 1960s–1970s estates needing consumer-unit upgrades and full rewires, and newer developments where we're installing OZEV-approved EV chargers and smart home controls."
  },
  {
    name: 'Wrexham', slug: 'wrexham',
    county: 'Wrexham (Wales)', distance: '12 miles', responseTime: '45–75 minutes',
    postcodes: ['LL11', 'LL12', 'LL13', 'LL14'],
    neighbourhoods: ['Acton', 'Rhosddu', 'Rossett', 'Marford', 'Gwersyllt', 'Rhosllanerchrugog', 'Ruabon', 'Gresford', 'Coedpoeth', 'Borras', 'Hightown'],
    metaDesc: 'NICEIC-approved electricians in Wrexham (LL11–LL14). Wrexham Industrial Estate three-phase work, commercial fit-outs, full rewires and EV chargers across Gresford, Rossett, Marford, Ruabon and the city centre.',
    intro: "Wrexham — now officially a city — sits at the heart of one of the UK's largest industrial estates. Wrexham Industrial Estate alone hosts hundreds of manufacturers, and that dominates the electrical demand we see across LL11, LL12, LL13 and LL14: three-phase supplies, machinery installation and relocation, planned factory shutdowns, motor control rewires and preventative maintenance contracts.",
    commercialAngle: "Wrexham's commercial demand ranges from town-centre retail units through to newer office and hospitality work around the Racecourse and Eagles Meadow. We deliver design-and-install, EICR-led remedials and emergency-lighting programmes to landlords and operators.",
    domesticAngle: "Cross-border working is routine for us — we hold NICEIC approval recognised across England and Wales. Domestic demand skews toward rewires in older terraced stock, EV chargers in Gresford and Marford, and consumer-unit upgrades across the LL12 belt."
  },
  {
    name: 'Northwich', slug: 'northwich',
    county: 'Cheshire West', distance: '18 miles', responseTime: '60–90 minutes',
    postcodes: ['CW8', 'CW9'],
    neighbourhoods: ['Barnton', 'Hartford', 'Weaverham', 'Lostock Gralam', 'Rudheath', 'Castle', 'Winnington', 'Leftwich', 'Davenham', 'Sandiway', 'Kingsmead'],
    metaDesc: 'NICEIC-approved electricians in Northwich (CW8, CW9). Industrial maintenance, Barons Quay retail fit-outs, full rewires, consumer-unit upgrades and EV chargers across Hartford, Davenham, Kingsmead, Leftwich and Weaverham.',
    intro: "Northwich has always been a chemical and industrial town — Tata Chemicals and the long Brunner Mond legacy still shape the commercial electrical demand across CW8 and CW9. Combined with a regenerated town centre (Barons Quay, Northwich Indoor Market) and a strong pipeline of new-build residential in Kingsmead, Leftwich and Davenham, Northwich gives us a full spread of work.",
    commercialAngle: "Barons Quay retail and leisure tenants, the Lostock Gralam trading estates and town-centre hospitality drive most of our Northwich commercial work — fit-outs, EICRs, landlord compliance, and planned lighting upgrades.",
    domesticAngle: "Hartford and Davenham demand sits with consumer-unit upgrades and part-rewires on 1970s-era stock, while Kingsmead and Leftwich new-build owners most often call us for EV chargers, solar-PV add-ons and smart lighting."
  },
  {
    name: 'Frodsham', slug: 'frodsham',
    county: 'Cheshire West', distance: '14 miles', responseTime: '45–75 minutes',
    postcodes: ['WA6'],
    neighbourhoods: ['Kingsley', 'Helsby', 'Overton', 'Alvanley', 'Manley', 'Mouldsworth', 'Norley', 'Crowton'],
    metaDesc: 'NICEIC-approved electricians in Frodsham (WA6). Main Street commercial fit-outs, EICRs, full rewires and OZEV EV chargers across Helsby, Kingsley, Overton, Alvanley and Mouldsworth. On-site within the hour.',
    intro: "Frodsham is a market town with a strong high-street trade, a surrounding belt of Cheshire villages (Kingsley, Helsby, Alvanley, Manley) and a growing commuter population. The WA6 postcode gives us a mix we enjoy: small-to-mid commercial work for the independents on Main Street, EV charger installs across the commuter homes of Helsby and Overton, and sensitive rewires on older stone-built properties.",
    commercialAngle: "Frodsham's independents — restaurants, pubs, salons and the Main Street retail trade — rely on us for quick-turnaround fit-outs, EICRs ahead of lease renewals, and PAT testing programmes.",
    domesticAngle: "Commuter demand dominates: OZEV-approved EV charger installs with load management, full-property rewires where homebuyers' surveys have flagged old wiring, and smart-heating retrofits for the Overton and Helsby stock."
  },
  {
    name: 'Tarporley', slug: 'tarporley',
    county: 'Cheshire West', distance: '11 miles', responseTime: '40–70 minutes',
    postcodes: ['CW6'],
    neighbourhoods: ['Utkinton', 'Cotebrook', 'Eaton', 'Alpraham', 'Beeston', 'Bunbury', 'Tiverton', 'Little Budworth', 'Cuddington'],
    metaDesc: 'NICEIC-approved electricians in Tarporley (CW6). Heritage rewires, smart-home installs, barn conversion wiring, three-phase outbuilding supplies and EV chargers across Utkinton, Cotebrook, Beeston, Bunbury and Tiverton.',
    intro: "Tarporley is the archetypal upmarket Cheshire village — a conservation-area High Street of Georgian and Victorian property, surrounded by equestrian estates and barn conversions across Utkinton, Cotebrook, Beeston and Bunbury. Our CW6 work leans strongly domestic and high-end: full rewires on listed farmhouses, smart-home and lighting-control retrofits, outbuilding and stable-yard three-phase supplies, and sensitive work on conservation-area stock.",
    commercialAngle: "Tarporley High Street's boutique retail, hospitality and professional-services offices use us for EICR-led remedials, fit-outs and emergency lighting. We also support the equestrian and agricultural sector with three-phase supplies to yards and barns.",
    domesticAngle: "High-end domestic is the core of our Tarporley demand — smart-lighting schemes with multi-room control, heritage-sensitive rewires on listed farmhouses, EV charger installs with three-phase capability, and outdoor lighting design on larger plots."
  },
  {
    name: 'Mold', slug: 'mold',
    county: 'Flintshire (Wales)', distance: '13 miles', responseTime: '45–75 minutes',
    postcodes: ['CH7'],
    neighbourhoods: ['Buckley', 'New Brighton', 'Gwernaffield', 'Gwernymynydd', 'Leeswood', 'Nercwys', 'Pontblyddyn', 'Sychdyn', 'Alltami'],
    metaDesc: 'NICEIC-approved electricians in Mold (CH7). Town-centre commercial fit-outs, agricultural three-phase, rural outbuilding supplies, full rewires and EV chargers across Buckley, Gwernaffield, Leeswood, Nercwys and Alltami.',
    intro: "Mold is the county town of Flintshire and our primary foothold for cross-border Welsh work. The CH7 postcode covers a wide rural area — so alongside the town-centre commercial and hospitality trade, we carry out a lot of three-phase agricultural supplies, farm and outbuilding installs, and sensitive domestic rewires through Gwernaffield, Nercwys and Leeswood.",
    commercialAngle: "Mold town centre — Daniel Owen Square, the Market and High Street — drives most of our commercial work: small-to-mid fit-outs, landlord EICRs, emergency-lighting upgrades and PAT testing.",
    domesticAngle: "Rural demand is a big part of CH7: outbuilding supplies, three-phase for farms, smart-home and EV-charger installs for commuter villages, and full rewires on older stone-built properties."
  },
  {
    name: 'Deeside', slug: 'deeside',
    county: 'Flintshire (Wales)', distance: '10 miles', responseTime: '45–75 minutes',
    postcodes: ['CH5'],
    neighbourhoods: ['Shotton', "Connah's Quay", 'Queensferry', 'Sealand', 'Hawarden', 'Garden City', 'Sandycroft', 'Mancot', 'Ewloe'],
    metaDesc: 'NICEIC-approved electricians in Deeside (CH5). Deeside Industrial Park three-phase, factory shutdowns, commercial fit-outs, full rewires and EV chargers across Shotton, Connah\'s Quay, Queensferry, Hawarden and Ewloe.',
    intro: "Deeside is defined by the Deeside Industrial Park — one of North Wales' largest employment zones — and the nearby Airbus Broughton site. That shapes what we do here: heavy three-phase industrial supplies, motor-control rewires, planned factory shutdowns, machinery installation and relocation, and preventative-maintenance contracts for manufacturers across CH5.",
    commercialAngle: "Deeside Industrial Park tenants are the backbone of our commercial work here — scheduled maintenance, RCD and distribution upgrades, compliance testing and emergency call-outs.",
    domesticAngle: "Shotton and Connah's Quay terraced stock needs full rewires and consumer-unit upgrades more often than not, while Hawarden and Ewloe homeowners are mostly calling us for EV chargers, solar-PV add-ons and smart-home retrofits."
  }
];

// Per-location FAQs — same structure as window.CARTER.locationFaqs so the
// noscript version mirrors what React renders.
function buildFaqs(area) {
  const post = area.postcodes.join(', ');
  const nb = area.neighbourhoods.slice(0, 5).join(', ');
  return [
    {
      q: 'Are your electricians NICEIC-approved and qualified to work in ' + area.name + '?',
      a: 'Yes. Carter Electrical Contracting is a fully NICEIC-approved contractor, and every electrician dispatched to ' + area.name + ' works to BS 7671 (18th Edition, including the latest amendments). Certification is issued at handover on every job — EIC, minor works or EICR as appropriate — and logged against the property address so it\'s straightforward to retrieve if you need it for insurance, a landlord pack or a future sale.'
    },
    {
      q: 'How quickly can you respond to an emergency call-out in ' + area.name + '?',
      a: 'From our Christleton base we typically reach ' + area.name + ' in ' + area.responseTime + ' for genuine emergencies — loss of power, a burning-plastic smell, water ingress near a consumer unit, or tripped main breakers that won\'t reset. Our phone line is answered during working hours by the same team that schedules the engineers, so you\'ll get an honest answer on timings rather than a call-handler promise.'
    },
    {
      q: 'Which ' + area.name + ' postcodes and neighbourhoods do you cover?',
      a: 'We cover every postcode inside ' + area.name + ' and its surrounding villages — primarily ' + post + '. That includes ' + nb + ' and the rest of the ' + area.county + ' area. If you\'re unsure whether your address is in our usual radius, call us with the postcode and we\'ll confirm before scheduling.'
    },
    {
      q: 'Do you carry out EICRs and landlord electrical-safety reports in ' + area.name + '?',
      a: 'Yes. We\'re a go-to contractor for EICRs across ' + area.name + ' — both for commercial landlords ahead of lease renewals and for residential landlords meeting the five-yearly Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, or the equivalent Welsh legislation where applicable. Reports are issued as a signed PDF within 48 hours of the test, with remedial quotes broken out clearly so you can decide what\'s urgent.'
    },
    {
      q: 'Can you install an OZEV-approved EV charger at a home or business in ' + area.name + '?',
      a: 'Yes — we\'re OZEV-approved and install 7 kW single-phase and 22 kW three-phase chargers throughout ' + area.name + '. For domestic installs we handle the DNO notification, load management (so your main supply doesn\'t get overloaded) and OLEV/EV-chargepoint grant paperwork where you\'re eligible. For workplace installs we can scope multi-bay back-office systems with RFID authorisation and billing integration.'
    },
    {
      q: 'Do you work on heritage, listed or conservation-area properties in ' + area.name + '?',
      a: 'Yes, and we do it often. ' + area.name + '\'s older property stock needs a different hand — surface-clipped cable runs on stone walls, concealed containment through plasterwork, period-sympathetic switch and socket plates, and documentation that will satisfy both a conservation officer and the NICEIC.'
    }
  ];
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHtml(area) {
  const url = `${COMPANY.site}/electricians-${area.slug}.html`;
  const title = `Electricians in ${area.name} | NICEIC-approved | ${COMPANY.name}`;
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

  // Noscript fallback — real, crawlable content for non-JS crawlers.
  const noscript = `
    <header>
      <p><a href="${COMPANY.site}">${COMPANY.name}</a> · <a href="tel:+441244738493">${COMPANY.phone}</a></p>
    </header>
    <main>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <a href="/areas.html">Areas We Cover</a> &rsaquo; Electricians in ${esc(area.name)}
      </nav>
      <h1>Electricians in ${esc(area.name)} — NICEIC-approved</h1>
      <p>${esc(area.intro)}</p>

      <h2>Coverage</h2>
      <ul>
        <li><strong>Postcodes:</strong> ${area.postcodes.map(esc).join(', ')}</li>
        <li><strong>Response time:</strong> ${esc(area.responseTime)}</li>
        <li><strong>Distance from Chester HQ:</strong> ${esc(area.distance)}</li>
        <li><strong>County:</strong> ${esc(area.county)}</li>
      </ul>

      <h2>Commercial electricians in ${esc(area.name)}</h2>
      <p>${esc(area.commercialAngle)}</p>

      <h2>Domestic electricians in ${esc(area.name)}</h2>
      <p>${esc(area.domesticAngle)}</p>

      <h2>Neighbourhoods of ${esc(area.name)} we cover</h2>
      <ul>
        ${area.neighbourhoods.map(n => '<li>' + esc(n) + '</li>').join('\n        ')}
      </ul>

      <h2>Services in ${esc(area.name)}</h2>
      <ul>
        <li>Commercial fit-outs, distribution, emergency lighting and fire alarm</li>
        <li>Industrial three-phase, motor control and factory shutdowns</li>
        <li>Full and partial domestic rewires, consumer-unit upgrades</li>
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

      <p><a href="/contact.html">Discuss your ${esc(area.name)} project</a> &middot; <a href="tel:+441244738493">Call ${esc(COMPANY.phone)}</a></p>
    </main>`;

  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(area.metaDesc)}"/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large"/>
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
</head>
<body>
  <div id="root"></div>

  <noscript>${noscript}
  </noscript>

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script src="shared.js"></script>
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
