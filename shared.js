// Carter Electrical - shared data + SVG pieces
(function(){
var h = React.createElement;

window.CARTER = {
  company: {
    name: 'Carter Electrical Contracting',
    phone: '01244 727291',
    phoneHref: 'tel:+441244727291',
    email: 'ian@carterelec.co.uk',
    address: ['Unit 5, White Lane Depot', 'White Lane, Christleton', 'Chester, CH3 6AH'],
    socialFb: 'https://facebook.com/carter.electrical.chester',
    founded: 2019
  },

  cases: [
    { id: 'prenton-wirral', title: 'Prenton, Wirral', sector: 'Commercial', subsector: 'Distribution', location: 'Wirral',
      blurb: 'Following an electrical inspection highlighting multiple issues, we planned and executed a comprehensive program of remedial works including a full mains distribution upgrade.',
      scope: ['Mains distribution upgrade', '3-phase board', 'Cable trunking routing'], year: '2024', hue: 210, size: 'big', imgSrc: 'uploads/prenton-wirral-1-EC916E4A923A40A2BF11CD68ACC35C5B.jpg' },
    { id: 'old-dukes', title: 'Old Dukes', sector: 'Commercial', subsector: 'Hospitality', location: 'Chester City Centre',
      blurb: 'Full electrical design and install for a two-floor conversion of a Chester tea rooms into a city-centre sports bar. Delivered ahead of opening week.',
      scope: ['Distribution', 'Lighting design', 'AV power', 'Emergency lighting', 'Fire alarm'],
      year: '2024', hue: 28, size: 'med', imgSrc: 'uploads/dukes-1.jpg' },
    { id: 'carbonara-no-49', title: 'Carbonara No.49', sector: 'Commercial', subsector: 'Restaurant', location: 'Chester',
      blurb: 'Restaurant fit-out. Kitchen power, dimmable lighting scheme, signage circuits.',
      scope: ['Kitchen distribution', 'Dimmable lighting', 'Signage power'], year: '2023', hue: 12, size: 'med', imgSrc: 'uploads/carbonara-1-scaled.jpg' },
    { id: 'bryn-rhiw', title: 'Bryn Rhiw', sector: 'Domestic', subsector: 'Residential', location: 'Lixwm',
      blurb: 'Comprehensive domestic electrical upgrade including full property rewire, outbuilding supplies, ASHP integration and external lighting design.',
      scope: ['Full rewire', 'ASHP Supply', 'External Lighting'], year: '2023', hue: 30, size: 'sm', imgSrc: 'uploads/bryn-1.jpg' }
  ],

  testimonials: [
    { quote: 'They handled the entire Old Dukes fit out under a tight programme and kept us informed every step. Genuinely the smoothest trades experience we have had in a Chester job.', author: 'M. Bradshaw', role: 'Director, Old Dukes' },
    { quote: 'Turned up when they said they would, left the site cleaner than they found it, and the price on the quote was the price on the invoice. Can\u2019t ask for more.', author: 'J. Pritchard', role: 'Operations, Quayside' },
    { quote: 'Kitchen distribution, dimmable lighting and signage: all scoped in one visit and delivered without fuss. Clear certificates at handover and the quote held right through to invoicing.', author: 'A. Colley', role: 'Owner, Carbonara No.49' }
  ],

  areas: [
    {
      name: 'Chester', slug: 'chester', cases: 14, featured: true, hq: true, x: 46, y: 58,
      county: 'Cheshire West', distance: '0 miles (HQ)',
      postcodes: ['CH1', 'CH2', 'CH3', 'CH4'],
      neighbourhoods: ['Hoole', 'Saltney', 'Upton', 'Blacon', 'Boughton', 'Handbridge', 'Vicars Cross', 'Christleton', 'Newton', 'Mickle Trafford', 'Waverton'],
      intro: `Based in Christleton, our NICEIC-approved electricians provide prompt, professional service across Chester.

We handle commercial office fit-outs, retail and hospitality installations in the city centre, landlord compliance testing, and domestic work from heritage rewires to smart-home installations.

Every job is completed by our own qualified engineers and backed by full certification at handover.`,
      commercialAngle: "Chester's retail and hospitality trade (from the Rows to the Northgate development) leans heavily on overnight shutdowns and Sunday-morning energisations so that fit-outs can open on schedule. We also carry out planned lighting upgrades, EICR programmes and emergency-lighting certification for the city's office estates.",
      domesticAngle: "Chester homeowners are often dealing with period properties: sensitive rewires around original plasterwork and panelling, replacement consumer units on listed buildings, and smart-lighting retrofits where the wiring chases need hiding with care. We've also done volume EV-charger installs across Hoole and Upton as the CH2 and CH3 postcodes picked up uptake.",
      featuredProject: "Old Dukes, a full electrical design-and-install on a two-floor Chester-centre tea-room-to-sports-bar conversion, delivered ahead of opening week with distribution, AV power, emergency lighting and fire alarm all scoped in-house.",
      landmarks: ['Chester Business Park', 'Sealand Industrial Estate', 'Chester city centre (Rows, Eastgate, Watergate)', 'Countess of Chester Hospital', 'University of Chester']
    },
    {
      name: 'Ellesmere Port', slug: 'ellesmere-port', cases: 6, x: 30, y: 40,
      county: 'Cheshire West', distance: '9 miles',
      postcodes: ['CH65', 'CH66'],
      neighbourhoods: ['Little Sutton', 'Whitby', 'Great Sutton', 'Hooton', 'Overpool', 'Rivacre', 'Strawberry', 'Wolverham'],
      intro: `We deliver reliable commercial, industrial, and domestic electrical services throughout Ellesmere Port.

Our team routinely carries out three-phase power installations and machinery wiring along the M53 corridor, retail fit-outs at Cheshire Oaks, and landlord EICR safety checks and rewires across the CH65 and CH66 postcodes.

Contact us for a clear, fixed-price quote.`,
      commercialAngle: "Cheshire Oaks, Coliseum Retail Park and the Stanney Lane trading estates all drive a steady flow of shop and restaurant fit-outs, landlord-side compliance testing, and emergency-lighting upgrades. Our team is used to working around live retail trading hours and overnight shutdown windows.",
      domesticAngle: "The CH65/CH66 housing stock is a mix of 1960s–1970s estates needing replacement consumer units and full rewires, and newer developments where we're installing OZEV-approved EV chargers and smart home controls.",
      featuredProject: "The nearby Prenton, Wirral commercial distribution upgrade: a full mains distribution replacement, three-phase board install and cable-trunking redesign following an inspection that flagged multiple issues.",
      landmarks: ['Cheshire Oaks Designer Outlet', 'Stanlow Refinery', 'Coliseum Retail Park', 'Essar petrochemical complex', 'Port Arcades shopping centre']
    },
    {
      name: 'Wrexham', slug: 'wrexham', cases: 5, x: 32, y: 80,
      county: 'Wrexham (Wales)', distance: '12 miles',
      postcodes: ['LL11', 'LL12', 'LL13', 'LL14'],
      neighbourhoods: ['Acton', 'Rhosddu', 'Rossett', 'Marford', 'Gwersyllt', 'Rhosllanerchrugog', 'Ruabon', 'Gresford', 'Coedpoeth', 'Borras', 'Hightown'],
      intro: `Our qualified, NICEIC-approved electricians cover Wrexham and all surrounding villages.

We specialize in heavy industrial work, three-phase distribution, and preventative maintenance on Wrexham Industrial Estate, alongside town-centre commercial fit-outs and domestic services including rewires and EV charger installations.

We operate fully under both English and Welsh building regulations.`,
      commercialAngle: "Wrexham's commercial demand ranges from town-centre retail units through to newer office and hospitality work around the Racecourse and Eagles Meadow. We deliver design-and-install, EICR-led remedials and emergency-lighting programmes to landlords and operators.",
      domesticAngle: "Cross-border working is routine for us: we hold NICEIC approval recognised across England and Wales. Domestic demand skews toward rewires in older terraced stock, EV chargers in Gresford and Marford, and replacement consumer units across the LL12 belt.",
      featuredProject: "Industrial distribution and machinery install work on Wrexham Industrial Estate, including a three-phase motor-control replacement executed during a planned two-day shutdown.",
      landmarks: ['Wrexham Industrial Estate', 'Racecourse Ground', 'Eagles Meadow', 'Wrexham Maelor Hospital', 'Glyndŵr University']
    },
    {
      name: 'Northwich', slug: 'northwich', cases: 4, x: 72, y: 66,
      county: 'Cheshire West', distance: '18 miles',
      postcodes: ['CW8', 'CW9'],
      neighbourhoods: ['Barnton', 'Hartford', 'Weaverham', 'Lostock Gralam', 'Rudheath', 'Castle', 'Winnington', 'Leftwich', 'Davenham', 'Sandiway', 'Kingsmead'],
      intro: `If you need an electrician in Northwich, we offer a full range of commercial, industrial, and domestic electrical services.

We support local businesses with commercial fit-outs and landlord safety checks, handle three-phase industrial installations, and assist homeowners with replacement consumer units, rewires, and OZEV-approved EV charger installations across CW8 and CW9.`,
      commercialAngle: "Barons Quay retail and leisure tenants, the Lostock Gralam trading estates and town-centre hospitality drive most of our Northwich commercial work: fit-outs, EICRs, landlord compliance, and planned lighting upgrades.",
      domesticAngle: "Hartford and Davenham demand sits with replacement consumer units and part-rewires on 1970s-era stock, while Kingsmead and Leftwich new-build owners most often call us for EV chargers, solar-PV add-ons and smart lighting.",
      featuredProject: "A planned commercial lighting and emergency-lighting upgrade for a leisure-sector tenant at Barons Quay, scheduled around trading hours to avoid disruption.",
      landmarks: ['Barons Quay', 'Tata Chemicals Winnington', 'Lostock Gralam industrial area', 'Anderton Boat Lift', 'Leftwich Community Village']
    },
    {
      name: 'Frodsham', slug: 'frodsham', cases: 3, x: 56, y: 46,
      county: 'Cheshire West', distance: '14 miles',
      postcodes: ['WA6'],
      neighbourhoods: ['Kingsley', 'Helsby', 'Overton', 'Alvanley', 'Manley', 'Mouldsworth', 'Norley', 'Crowton'],
      intro: `We provide professional electrical installations and testing for homes and businesses in Frodsham and Helsby.

From emergency lighting and landlord certificates for High Street shops to EV chargers and domestic rewires in the surrounding villages, our NICEIC-approved engineers ensure your project is completed safely, on time, and on budget.`,
      commercialAngle: "Frodsham's independents (restaurants, pubs, salons and the Main Street retail trade) rely on us for quick-turnaround fit-outs, EICRs ahead of lease renewals, and PAT testing programmes. We also cover the Helsby Industrial Estate for smaller-scale three-phase work.",
      domesticAngle: "Commuter demand dominates: OZEV-approved EV charger installs with load management, full-property rewires where homebuyers' surveys have flagged old wiring, and smart-heating retrofits for the Overton and Helsby stock.",
      featuredProject: "A staged domestic rewire on a pre-war stone-built property in the Delamere villages, carried out around the client's occupation with zero loss of power overnight.",
      landmarks: ['Frodsham Main Street', 'Helsby Industrial Estate', 'Delamere Forest', 'Frodsham Railway Station', 'Helsby Hill']
    },
    {
      name: 'Tarporley', slug: 'tarporley', cases: 3, x: 64, y: 72,
      county: 'Cheshire West', distance: '11 miles',
      postcodes: ['CW6'],
      neighbourhoods: ['Utkinton', 'Cotebrook', 'Eaton', 'Alpraham', 'Beeston', 'Bunbury', 'Tiverton', 'Little Budworth', 'Cuddington'],
      intro: `Our team delivers high-quality domestic and commercial electrical work across Tarporley and the CW6 area.

We are experienced in heritage-sensitive rewires for listed buildings, smart lighting controls, barn conversions, and three-phase supplies for agricultural and equestrian yards.

All work is completed by our in-house engineers with absolute respect for your property.`,
      commercialAngle: "Tarporley High Street's boutique retail, hospitality and professional-services offices use us for EICR-led remedials, fit-outs and emergency lighting. We also support the equestrian and agricultural sector with three-phase supplies to yards and barns.",
      domesticAngle: "High-end domestic is the core of our Tarporley demand: smart-lighting schemes with multi-room control, heritage-sensitive rewires on listed farmhouses, EV charger installs with three-phase capability, and outdoor lighting design on larger plots.",
      featuredProject: "A full-property rewire and smart-lighting install on a barn conversion in the Utkinton/Cotebrook belt, coordinated with the owner's main contractor and signed off at each stage.",
      landmarks: ['Tarporley High Street (conservation area)', 'Oulton Park motor-racing circuit (nearby)', 'Beeston Castle', 'Bunbury Mill', 'Tiverton villages']
    },
    {
      name: 'Mold', slug: 'mold', cases: 2, x: 22, y: 66,
      county: 'Flintshire (Wales)', distance: '13 miles',
      postcodes: ['CH7'],
      neighbourhoods: ['Buckley', 'New Brighton', 'Gwernaffield', 'Gwernymynydd', 'Leeswood', 'Nercwys', 'Pontblyddyn', 'Sychdyn', 'Alltami'],
      intro: `We provide fully certified, NICEIC-approved electrical services across Mold and the CH7 postcode.

Operating on both sides of the border, we handle commercial fit-outs and compliance testing in the town centre, agricultural and three-phase outbuilding installs in rural areas, and domestic services including rewires, consumer unit replacements, and EV charger installations.`,
      commercialAngle: "Mold town centre (Daniel Owen Square, the Market and High Street) drives most of our commercial work: small-to-mid fit-outs, landlord EICRs, emergency-lighting upgrades and PAT testing. We also serve the Flintshire-wide education and local-authority estate.",
      domesticAngle: "Rural demand is a big part of CH7: outbuilding supplies, three-phase for farms, smart-home and EV-charger installs for commuter villages, and full rewires on older stone-built properties.",
      featuredProject: "A three-phase agricultural supply and outbuilding install for a working farm in the Nercwys area, including a dedicated ASHP circuit and external yard lighting.",
      landmarks: ['Mold High Street', 'Daniel Owen Square', 'Theatr Clwyd', 'Loggerheads Country Park (nearby)', 'Alltami/Buckley commercial belt']
    },
    {
      name: 'Deeside', slug: 'deeside', cases: 4, x: 34, y: 52,
      county: 'Flintshire (Wales)', distance: '10 miles',
      postcodes: ['CH5'],
      neighbourhoods: ['Shotton', "Connah's Quay", 'Queensferry', 'Sealand', 'Hawarden', 'Garden City', 'Sandycroft', 'Mancot', 'Ewloe'],
      intro: `Looking for a qualified industrial or commercial electrician in Deeside?

We support manufacturers on Deeside Industrial Park with three-phase power upgrades, machinery wiring, and preventative maintenance, while providing local retail fit-outs, landlord EICR safety checks, and domestic rewires across the CH5 area.`,
      commercialAngle: "Deeside Industrial Park tenants are the backbone of our commercial work here: scheduled maintenance, RCD and distribution upgrades, compliance testing and planned remedial works. Retail and hospitality around Hawarden and the retail-park strip at Sandycroft pick up the rest.",
      domesticAngle: "Shotton and Connah's Quay terraced stock needs full rewires and replacement consumer units more often than not, while Hawarden and Ewloe homeowners are mostly calling us for EV chargers, solar-PV add-ons and smart-home retrofits.",
      featuredProject: "A planned three-phase distribution upgrade for a Deeside Industrial Park manufacturer, including thermal imaging survey, cable-trunking redesign and a two-phase energisation to avoid production loss.",
      landmarks: ['Deeside Industrial Park', 'Airbus Broughton (nearby)', 'Hawarden Airport', 'Queensferry retail belt', 'Connah’s Quay high street']
    },
    {
      name: 'Wirral', slug: 'wirral', cases: 1, x: 24, y: 34,
      county: 'Merseyside', distance: '20 miles',
      postcodes: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63'],
      neighbourhoods: ['Birkenhead', 'Prenton', 'Wallasey', 'New Brighton', 'Bebington', 'Heswall', 'West Kirby', 'Hoylake', 'Bromborough', 'Moreton', 'Upton', 'Greasby', 'Port Sunlight', 'Eastham', 'Caldy'],
      intro: `Looking for a reliable, NICEIC-approved electrician in Wirral?

We provide comprehensive commercial, industrial, and domestic electrical services across the peninsula, covering Birkenhead, Wallasey, Heswall, West Kirby, and all surrounding areas.

From three-phase industrial installations at Bromborough to retail fit-outs, landlord EICRs, and full domestic rewires, our in-house team delivers neat, compliant work with transparent, fixed pricing.`,
      commercialAngle: "Wirral's commercial demand spans the Wirral International Business Park and Bromborough's manufacturing estates, the regenerating Birkenhead waterfront around Wirral Waters and Twelve Quays, and the retail and hospitality trade at New Brighton's Marine Point, Birkenhead's Grange and Pyramids precincts and the West Kirby and Heswall high streets. We deliver design-and-install fit-outs, landlord EICRs ahead of lease renewals, emergency-lighting certification and planned maintenance contracts.",
      domesticAngle: "The peninsula's housing stock runs the full range: Victorian and Edwardian terraces in Birkenhead, Tranmere and Wallasey needing full rewires and replacement consumer units; interwar semis across Bebington, Eastham and Moreton; and higher-end detached and coastal property in Heswall, Caldy, West Kirby and Hoylake where the calls are for smart-lighting schemes, garden and outbuilding supplies, and OZEV-approved EV chargers with load management.",
      featuredProject: "Our Prenton, Wirral commercial distribution upgrade (CH43): a full mains distribution replacement, three-phase board install and cable-trunking redesign carried out after an inspection flagged multiple issues, energised in stages to keep the site trading.",
      landmarks: ['Wirral International Business Park (Bromborough)', 'Cammell Laird shipyard, Birkenhead', 'Wirral Waters & Twelve Quays regeneration', 'New Brighton Marine Point', 'Port Sunlight & Unilever, Bebington']
    },
    { name: 'Liverpool', slug: null, cases: 0, x: 18, y: 24, county: 'Merseyside', distance: '25 miles' },
    { name: 'Crewe', slug: null, cases: 0, x: 80, y: 78, county: 'Cheshire East', distance: '25 miles' },
    { name: 'Warrington', slug: null, cases: 0, x: 70, y: 50, county: 'Cheshire', distance: '22 miles' },
    { name: 'Conwy', slug: null, cases: 0, x: 14, y: 78, county: 'North Wales', distance: '45 miles' }
  ],

  services: [
    { title: 'Commercial', lede: 'Design and install for offices, hospitality, retail and light commercial.',
      bullets: ['Full distribution & sub-mains', 'Lighting design & controls', 'Emergency lighting & fire alarm', 'Data & containment', 'Planned shutdowns'],
      icon: 'building', slug: 'commercial', imgSrc: 'uploads/commercial-electrical-services-v2.jpg' },
    { title: 'Industrial', lede: 'Three-phase power, machinery wiring and maintenance contracts.',
      bullets: ['Three-phase & motor control', 'Machinery install & relocation', 'Preventative maintenance', 'Thermal imaging surveys', 'Factory shutdown work'],
      icon: 'factory', slug: 'industrial', imgSrc: 'uploads/industrial-electrical-services-v2.jpg' },
    { title: 'Domestic', lede: 'Rewires, extensions and smart-home work across Chester and the North West.',
      bullets: ['Full & partial rewires', 'Replacement Consumer Units', 'Extensions & loft conversions', 'Smart lighting & heating', 'Heritage & listed buildings'],
      icon: 'home', slug: 'domestic', imgSrc: 'uploads/domestic-electrical-services-v2.jpg' },
    { title: 'Testing & Inspection', lede: 'EICRs, landlord reports and PAT testing. NICEIC-approved.',
      bullets: ['EICR reports (commercial & domestic)', 'Landlord electrical safety', 'PAT testing', 'New-install certification', 'Remedial works'],
      icon: 'shield', slug: 'testing', imgSrc: 'uploads/electrician-testing-cropped.jpg' },
    { title: 'Renewables & EV', lede: 'EV chargers, solar PV and battery storage. OZEV-approved installer.',
      bullets: ['EV chargers (domestic & commercial)', 'Solar PV & battery', 'Load management', 'Grid application support'],
      icon: 'bolt', slug: 'renewables', imgSrc: 'uploads/renewables-1.jpg' }
  ],

  svg: {
    arrow: '<svg class="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    check: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8.5l3 3 7-7"/></svg>',
    building: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="12" width="16" height="30"/><rect x="22" y="6" width="20" height="36"/><path d="M10 18h8M10 24h8M10 30h8M10 36h8M26 12h4M34 12h4M26 20h4M34 20h4M26 28h4M34 28h4M26 36h4M34 36h4"/></svg>',
    factory: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 42V20l10 6V20l10 6V14l10 6V14l10 6v22z"/><path d="M4 42h40"/><rect x="10" y="32" width="4" height="6"/><rect x="20" y="32" width="4" height="6"/><rect x="30" y="32" width="4" height="6"/></svg>',
    home: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 22L24 6l18 16v20H6z"/><path d="M18 42V28h12v14"/></svg>',
    bolt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M26 4L10 26h10l-4 18 20-26H26z"/></svg>',
    niceic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M8 12l3 3 5-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 5c0 9 6 15 15 15 1 0 2-1 2-2v-2l-4-2-2 2c-3-1-5-3-6-6l2-2-2-4H6c-1 0-2 1-2 2z"/></svg>'
  },

  logoMark: function(accent, white) {
    accent = accent || '#7AC143'; white = white || '#ffffff';
    return '<svg class="logo-mark" viewBox="0 0 40 40" fill="none" stroke-width="3.2" stroke-linecap="round">' +
      '<path d="M28 9a12 12 0 1 0 0 22" stroke="' + white + '"/>' +
      '<path d="M12 31a12 12 0 1 0 0-22" stroke="' + accent + '"/>' +
      '<circle cx="20" cy="20" r="2.4" fill="' + accent + '"/>' +
      '</svg>';
  }
};

window.CarterPlaceholder = function(props) {
  var hue = props.hue == null ? 35 : props.hue;
  var bg = props.imgSrc ? 'transparent' : 'linear-gradient(135deg, hsl(' + hue + ', 10%, 18%) 0%, hsl(' + hue + ', 14%, 8%) 100%)';
  var children = [];
  
  if (props.imgSrc) {
    children.push(h('img', { 
      src: props.imgSrc, 
      alt: props.titleCaption || 'Carter Electrical',
      className: 'placeholder-img',
      key: 'img'
    }));
  }

  children.push(h('div', { className: 'vignette', key: 'v' }));
  children.push(h('div', { className: 'glow', key: 'g', style: { right: '10%', top: '12%' } }));
  
  if (props.metaTag) children.push(h('div', { className: 'meta-tag', key: 'm' }, props.metaTag));
  children.push(h('div', { className: 'caption', key: 'c' },
    h('span', { key: 't' }, props.titleCaption),
    h('span', { key: 'y' }, props.year)
  ));
  
  var combinedStyle = Object.assign({ background: bg }, props.style || {});
  return h('div', { className: 'case-photo-placeholder ' + (props.className || ''), style: combinedStyle }, children);
};
})();


window.CARTER.blog = [{"title":"The Importance of EICR Testing for Commercial Properties","date":"2026-04-22","author":"Carter Electrical Contracting","category":"Compliance","tags":["EICR","Commercial","Safety"],"excerpt":"Understanding the legal requirements and safety benefits of regular Electrical Installation Condition Reports (EICR) for businesses.","image":"","slug":"the-importance-of-eicr-testing"}];

// Build the FAQ set for a location. Answers are tailored per-area using the location
// data, so each page's FAQ section is genuinely unique rather than duplicate content.
window.CARTER.locationFaqs = function(area) {
  var post = (area.postcodes || []).join(', ');
  var nb = (area.neighbourhoods || []).slice(0, 5).join(', ');
  return [
    {
      q: "Are your electricians NICEIC-approved and qualified to work in " + area.name + "?",
      a: "Yes. Carter Electrical Contracting is a fully NICEIC-approved contractor, and every electrician dispatched to " + area.name + " works to BS 7671 (18th Edition, including the latest amendments). Certification is issued at handover on every job (EIC, minor works or EICR as appropriate) and logged against the property address so it's straightforward to retrieve if you need it for insurance, a landlord pack or a future sale."
    },
    {
      q: "What's your typical lead time for a new project in " + area.name + "?",
      a: "It depends on scope. A small domestic job (a replacement consumer unit, a few additional circuits, or a single EV charger) we can usually schedule within a week or two of sign-off. A larger commercial fit-out or industrial installation normally goes through a site visit, a detailed scope and a formal quote first, and we'll give you an honest date at that stage rather than overpromise. Our phone is answered during working hours by the same team that schedules the engineers, so you'll get a straight answer on timings."
    },
    {
      q: "Which " + area.name + " postcodes and neighbourhoods do you cover?",
      a: "We cover every postcode inside " + area.name + " and its surrounding villages, primarily " + post + ". That includes " + nb + " and the rest of the " + (area.county || 'local') + " area. If you're unsure whether your address is in our usual radius, call us with the postcode and we'll confirm before scheduling."
    },
    {
      q: "Do you carry out EICRs and landlord electrical-safety reports in " + area.name + "?",
      a: "Yes. We're a go-to contractor for EICRs across " + area.name + ": both for commercial landlords ahead of lease renewals and for residential landlords meeting the five-yearly Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, or the equivalent Welsh legislation where applicable. Reports are issued as a signed PDF within 48 hours of the test, with remedial quotes broken out clearly so you can decide what's urgent."
    },
    {
      q: "Can you install an OZEV-approved EV charger at a home or business in " + area.name + "?",
      a: "Yes, we're OZEV-approved and install 7 kW single-phase and 22 kW three-phase chargers throughout " + area.name + ". For domestic installs we handle the DNO notification, load management (so your main supply doesn't get overloaded) and OLEV/EV-chargepoint grant paperwork where you're eligible. For workplace installs we can scope multi-bay back-office systems with RFID authorisation and billing integration."
    },
    {
      q: "Do you work on heritage, listed or conservation-area properties in " + area.name + "?",
      a: "Yes, and we do it often. " + area.name + "'s older property stock needs a different hand: surface-clipped cable runs on stone walls, concealed containment through plasterwork, period-sympathetic switch and socket plates, and documentation that will satisfy both a conservation officer and the NICEIC. We scope heritage work slowly on the first visit so you know exactly what's going where before anything is cut or chased."
    }
  ];
};
