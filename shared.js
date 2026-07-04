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
      postcodes: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63', 'CH64'],
      neighbourhoods: ['Birkenhead', 'Prenton', 'Wallasey', 'New Brighton', 'Bebington', 'Heswall', 'West Kirby', 'Hoylake', 'Bromborough', 'Moreton', 'Upton', 'Greasby', 'Port Sunlight', 'Eastham', 'Caldy', 'Neston', 'Willaston', 'Ness'],
      intro: `Looking for a reliable, NICEIC-approved electrician in Wirral?

We provide comprehensive commercial, industrial, and domestic electrical services across the peninsula, covering Birkenhead, Wallasey, Heswall, West Kirby, Neston, and all surrounding areas.

From three-phase industrial installations at Bromborough to retail fit-outs, landlord EICRs, and full domestic rewires, our in-house team delivers neat, compliant work with transparent, fixed pricing.`,
      commercialAngle: "Wirral's commercial demand spans the Wirral International Business Park and Bromborough's manufacturing estates, the regenerating Birkenhead waterfront around Wirral Waters and Twelve Quays, and the retail and hospitality trade at New Brighton's Marine Point, Birkenhead's Grange and Pyramids precincts and the West Kirby and Heswall high streets. We deliver design-and-install fit-outs, landlord EICRs ahead of lease renewals, emergency-lighting certification and planned maintenance contracts.",
      domesticAngle: "The peninsula's housing stock runs the full range: Victorian and Edwardian terraces in Birkenhead, Tranmere and Wallasey needing full rewires and replacement consumer units; interwar semis across Bebington, Eastham and Moreton; and higher-end detached and coastal property in Heswall, Caldy, Neston, Ness, West Kirby and Hoylake where the calls are for smart-lighting schemes, garden and outbuilding supplies, and OZEV-approved EV chargers with load management.",
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
      alt: props.alt || props.titleCaption || 'Carter Electrical',
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
const faqsMap = {
  'ellesmere-port': [
    {
      q: 'How do I find a qualified commercial electrician in Ellesmere Port?',
      a: 'When hiring a contractor for commercial properties in Ellesmere Port, look for NICEIC or NAPIT registration. Carter Electrical is fully NICEIC-approved. We deliver compliant services for retail units around Cheshire Oaks, office premises in the town centre, and industrial premises along the M53 corridor, providing full certification at handover.'
    },
    {
      q: 'Do you provide commercial electrical services near Cheshire Oaks?',
      a: 'Yes, we regularly support retail and hospitality operators around Cheshire Oaks and the Coliseum Retail Park. Our local team carries out shop fit-outs, emergency lighting installations to BS 5266 standards, and planned compliance testing outside of standard trading hours to minimize business disruption.'
    },
    {
      q: 'What domestic electrical upgrades do you offer in CH65 and CH66?',
      a: 'Our domestic electricians handle full property rewires, replacement consumer units (fuse boxes), and general electrical upgrades across Great Sutton, Little Sutton, and Whitby. All domestic work complies with Part P of the Building Regulations and is backed by our NICEIC warranty.'
    },
    {
      q: 'How often should landlords in Ellesmere Port arrange EICR inspections?',
      a: 'Private landlords must arrange an Electrical Installation Condition Report (EICR) at least every five years. We conduct landlord electrical safety testing across Ellesmere Port, identifying issues quickly and issuing detailed, digital EICR certificates within 48 hours of the test.'
    },
    {
      q: 'Can you install workplace EV chargers in Ellesmere Port?',
      a: 'Yes. We are OZEV-approved EV charger installers. We design and install fast charging points for offices, commercial car parks, and industrial units, configuring load management systems to balance the power draw safely with your main supply.'
    },
    {
      q: 'Which postcodes and villages do you cover around Ellesmere Port?',
      a: 'From our Christleton base, we serve the whole of Ellesmere Port, including CH65 and CH66 postcodes. Our engineers regularly cover Great Sutton, Little Sutton, Whitby, Wolverham, Overpool, Hooton, Ledsham, and Capenhurst.'
    }
  ],
  'wrexham': [
    {
      q: 'How do I hire a qualified NICEIC electrician in Wrexham?',
      a: 'When hiring local electricians in Wrexham, always check their registration status on the Registered Competent Person Electrical database. Carter Electrical is a fully NICEIC-approved contractor. All our installations are self-certified, and we handle all notifications to local Building Control on your behalf.'
    },
    {
      q: 'Do you provide industrial three-phase services on Wrexham Industrial Estate?',
      a: 'Yes, heavy industrial three-phase power, motor controls, and factory shutdown maintenance are a core part of our local service. We support manufacturers, warehousing facilities, and logistical hubs across Wrexham Industrial Estate with planned maintenance and emergency repairs.'
    },
    {
      q: 'What domestic electrical services do you offer in Wrexham?',
      a: 'From consumer unit upgrades in town centre homes to full rewires of period terraces, our domestic electricians cover the entire Wrexham region. All work is completed by our in-house team to BS 7671 safety standards.'
    },
    {
      q: 'Are EICRs required for private rental properties in Wrexham?',
      a: 'Yes. Landlords in Wrexham and across Wales are required by law to keep electrical installations in safe working order, verified by an EICR test every five years. We perform these tests quickly and deliver comprehensive safety reports for landlords.'
    },
    {
      q: 'Do you install OZEV EV charging points in Wrexham?',
      a: 'Yes, we are OZEV-registered installers fitting smart charging units for domestic driveways and commercial parking zones. We cover Wrexham and commuter villages like Gresford, Rossett, and Marford, managing the entire grid application process with the local network operator.'
    },
    {
      q: 'Which postcodes and neighbourhoods do you cover in Wrexham?',
      a: 'Our coverage spans LL11, LL12, LL13, and LL14 postcodes. This includes Acton, Borras, Rhosddu, Rossett, Marford, Gwersyllt, Rhosllanerchrugog, Ruabon, Gresford, and Coedpoeth.'
    }
  ],
  'northwich': [
    {
      q: 'How do I verify if a Northwich electrician is qualified?',
      a: 'Ensure they are registered under a competent person scheme like NICEIC or NAPIT. Carter Electrical is a fully NICEIC-approved contractor. We carry out regular assessments to ensure all commercial, industrial, and domestic installations meet BS 7671 wiring regulations.'
    },
    {
      q: 'Do you support businesses with retail fit-outs in Northwich?',
      a: 'Yes, we work with retailers, cafes, and offices in Northwich, including developments around Barons Quay, delivering electrical design, commercial fit-outs, emergency lighting installations (BS 5266), and landlord safety compliance.'
    },
    {
      q: 'What domestic services do you offer in Hartford and Davenham?',
      a: 'For residential areas like Hartford, Davenham, and Kingsmead, we install OZEV EV chargers, replace outdated consumer units, and carry out full property rewires. Our domestic work is fully certified and compliant with Part P building regulations.'
    },
    {
      q: 'How often do landlords in Northwich need an EICR test?',
      a: 'Private landlords must arrange an Electrical Installation Condition Report (EICR) at least every five years. We conduct landlord electrical testing throughout the CW8 and CW9 postcode areas, ensuring all installations are fully safe and compliant.'
    },
    {
      q: 'Can you install solar battery storage or EV chargers in Northwich?',
      a: 'Yes. We install smart EV chargers and collaborate with leading renewables partners to integrate solar PV and battery storage systems, helping Northwich homeowners reduce energy bills and carbon emissions.'
    },
    {
      q: 'Which postcodes and villages do you cover around Northwich?',
      a: 'Our local team covers CW8 and CW9 postcodes, serving Northwich, Hartford, Davenham, Weaverham, Lostock Gralam, Rudheath, Leftwich, and Kingsmead.'
    }
  ],
  'frodsham': [
    {
      q: 'How do I choose an approved electrician in Frodsham?',
      a: 'Always check if your contractor is NICEIC-registered. Carter Electrical is fully NICEIC-approved, ensuring all work meets British Standard BS 7671. We self-certify all installations and handle building regulations notifications automatically.'
    },
    {
      q: 'Do you offer commercial emergency lighting and testing in Frodsham?',
      a: 'Yes, we support businesses on Frodsham High Street and Main Street with emergency lighting design, commercial EICR testing, and planned preventative maintenance to ensure health and safety compliance.'
    },
    {
      q: 'What residential electrical services do you provide in Frodsham and Helsby?',
      a: 'Our domestic electricians cover Frodsham, Helsby, and surrounding villages. We replace old consumer units, upgrade lighting, install outdoor power, and perform full property rewires with minimal disruption to your home.'
    },
    {
      q: 'Are EICRs required for commercial properties in Frodsham?',
      a: 'While not a single statutory rule like residential rentals, commercial property owners must ensure electrical systems are safe under the Electricity at Work Regulations 1989. This is typically achieved via a commercial EICR every 5 years. We provide full testing and safety certification.'
    },
    {
      q: 'Do you install smart EV home chargers in the WA6 area?',
      a: 'Yes, we are OZEV-approved EV charger installers. We fit smart wallboxes for homes in Overton, Helsby, and Kingsley, including full load management setup to balance power draw with the rest of your house.'
    },
    {
      q: 'Which areas do you cover around Frodsham?',
      a: 'Based near Chester, we cover Frodsham, Helsby, Kingsley, Overton, Alvanley, Manley, Mouldsworth, Norley, and Crowton within the WA6 postcode.'
    }
  ],
  'tarporley': [
    {
      q: 'How do I find a specialist electrician for a Tarporley barn conversion?',
      a: 'Barn conversions require careful electrical design, often involving exposed brick, oak beams, and smart lighting systems. Carter Electrical has extensive experience in high-end domestic installations, heritage properties, and barn conversions across the Tarporley area.'
    },
    {
      q: 'Do you provide three-phase power for agricultural yards in Tarporley?',
      a: 'Yes, we install three-phase power supplies, sub-mains distribution, and motor control systems for agricultural and equestrian properties around Tarporley, Kingsley, and Bunbury.'
    },
    {
      q: 'What domestic electrical upgrades do you recommend for historic homes in CW6?',
      a: 'For listed and heritage properties in Tarporley, we recommend heritage-sensitive rewires using hidden containment, high-quality consumer unit upgrades, and modern smart lighting integrations that preserve the historic character of the building.'
    },
    {
      q: 'Do you conduct landlord EICR safety inspections in Tarporley?',
      a: 'Yes, we carry out Electrical Installation Condition Reports (EICRs) for rental properties in Tarporley, Bunbury, and surrounding villages, helping local landlords comply with the latest private rented sector safety laws.'
    },
    {
      q: 'Are you OZEV-registered to install EV chargers in Tarporley?',
      a: 'Yes, we install OZEV-approved EV chargers for domestic properties and commercial sites. We configure load-management systems to ensure chargers run safely alongside large domestic loads.'
    },
    {
      q: 'What villages and postcodes do you cover near Tarporley?',
      a: 'We serve the CW6 postcode area, covering Tarporley, Utkinton, Cotebrook, Eaton, Alpraham, Beeston, Bunbury, Tiverton, Little Budworth, and Cuddington.'
    }
  ],
  'mold': [
    {
      q: 'How do I verify if a Mold electrician is NICEIC approved?',
      a: 'You can verify registrations on the Registered Competent Person Electrical website or by asking the contractor for their NICEIC number. Carter Electrical is fully NICEIC-approved, guaranteeing safe, compliant electrical installations across Mold.'
    },
    {
      q: 'Do you offer commercial electrical compliance testing in Mold town centre?',
      a: 'Yes. We support retail and hospitality businesses around Daniel Owen Square and High Street with commercial EICR safety testing, emergency lighting installation (BS 5266), and planned maintenance.'
    },
    {
      q: 'What domestic services do you provide in Buckley and Mold?',
      a: 'Our in-house electricians carry out full domestic rewires, replace old consumer units, and install smart home technology for homeowners in Mold, Buckley, and surrounding villages. All works are certified and Part P compliant.'
    },
    {
      q: 'Do you install three-phase electrical supplies for farms in Flintshire?',
      a: 'Yes, three-phase sub-mains, machinery wiring, and agricultural outbuilding installations are a major part of our work in the rural CH7 area, ensuring reliable power distribution for farm equipment.'
    },
    {
      q: 'Can I install my own EV charger at home in Mold?',
      a: 'No. Installing an EV charging point requires the addition of a new electrical circuit and must be notified to Building Control under Part P. It should only be carried out by an OZEV-registered, qualified electrician.'
    },
    {
      q: 'Which postcodes and villages do you cover in Mold?',
      a: 'We serve Mold and the CH7 postcode area, covering Buckley, New Brighton, Gwernaffield, Gwernymynydd, Leeswood, Nercwys, Pontblyddyn, Sychdyn, and Alltami.'
    }
  ],
  'deeside': [
    {
      q: 'Do you offer industrial three-phase services on Deeside Industrial Park?',
      a: 'Yes. Industrial electrical installations, factory shutdown maintenance, and machinery wiring are core services. We assist manufacturing and logistics firms on Deeside Industrial Park with sub-mains cabling, RCD upgrades, and safety compliance.'
    },
    {
      q: 'How do I find an approved commercial electrician in Queensferry or Connah\'s Quay?',
      a: 'Always check for NICEIC registration. Carter Electrical is fully NICEIC-approved, providing commercial shop fit-outs, landlord safety inspections (EICR), and emergency lighting services for businesses across Deeside.'
    },
    {
      q: 'What domestic electrical services do you offer in Hawarden and Shotton?',
      a: 'For domestic properties in Connah\'s Quay, Shotton, Hawarden, and Ewloe, we carry out consumer unit upgrades, full rewires, and smart home installations. All work complies with Part P building regulations.'
    },
    {
      q: 'How often do landlords in Deeside need EICR inspections?',
      a: 'Landlords must obtain a new EICR safety report at least every five years. We perform landlord inspections throughout the CH5 area, ensuring installations are fully compliant with current safety regulations.'
    },
    {
      q: 'Can you install EV charging points at Deeside workplaces?',
      a: 'Yes, we are OZEV-registered commercial EV charger installers. We design and install fast charging networks for staff and visitor parking, complete with load balancing to protect the site\'s main supply.'
    },
    {
      q: 'Which areas and postcodes do you cover in Deeside?',
      a: 'We cover the CH5 postcode, serving Connah\'s Quay, Shotton, Queensferry, Sealand, Hawarden, Garden City, Sandycroft, Mancot, and Ewloe.'
    }
  ],
  'wirral': [
    {
      q: 'How do I find a qualified electrician for a Wirral commercial property?',
      a: 'For commercial premises across Wirral—from retail units on Heswall High Street to light industrial sites at Wirral International Business Park in Bromborough—you should ensure your contractor is registered with a competent person scheme such as the NICEIC. Carter Electrical is fully NICEIC-approved, meaning we are regularly assessed on health and safety compliance, holds £5M public liability insurance, and can self-certify all commercial works.'
    },
    {
      q: 'Do you install OZEV EV chargers in Wirral residential areas?',
      a: 'Yes, we are OZEV-approved EV charger installers covering the entire Wirral peninsula. We regularly fit smart EV chargers for homeowners in Caldy, Heswall, Neston, Ness, West Kirby, and Hoylake, ensuring proper load management configuration so the charger doesn\'t overload your property\'s main fuse.'
    },
    {
      q: 'What are the EICR regulations for landlords in Birkenhead and Wallasey?',
      a: 'Private landlords in Birkenhead, Wallasey, and the wider Merseyside region are legally required to have their electrical installations inspected and tested at least every five years. Our local team conducts landlord EICR tests, providing a detailed report and moving quickly to resolve any C1 or C2 defects to ensure your tenants are safe.'
    },
    {
      q: 'Do you handle industrial three-phase installations at Bromborough?',
      a: 'Yes, three-phase power distribution and motor control circuits are key parts of our commercial and industrial service. We support businesses at Wirral International Business Park and around the Cammell Laird shipyard area with factory power upgrades, sub-mains cabling, and preventative maintenance.'
    },
    {
      q: 'Can I do my own electrical work in my Wirral home?',
      a: 'Under Part P of the Building Regulations, major work like installing a new circuit or replacing a consumer unit is legally notifiable and should only be completed by a registered electrician. Minor works (like replacing a single faceplate) can be done by competent DIYers, but must still comply with BS 7671 safety standards.'
    },
    {
      q: 'Which postcodes and neighbourhoods do you cover in Wirral?',
      a: 'We provide full coverage across CH41 to CH49, CH60 to CH63, and CH64. Our in-house engineers are on the road daily in Birkenhead, Prenton, Wallasey, New Brighton, Bebington, Heswall, West Kirby, Hoylake, Bromborough, Moreton, Upton, Greasby, Port Sunlight, Eastham, Caldy, Neston, Willaston, and Ness.'
    }
  ]
};

window.CARTER.locationFaqs = function(area) {
  return faqsMap[area.slug] || [];
};
