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
      heroSubtext: 'NICEIC-approved electrical contractor based in Christleton, serving Chester city centre, Hoole, Upton, and the CH1 to CH4 area. Scoping commercial fit-outs, landlord EICR safety testing, and domestic rewires with zero call-out fees.',
      neighbourhoods: ['Hoole', 'Saltney', 'Upton', 'Blacon', 'Boughton', 'Handbridge', 'Vicars Cross', 'Christleton', 'Newton', 'Mickle Trafford', 'Waverton'],
      intro: `Based in Christleton, our NICEIC-approved electricians provide prompt, professional service across Chester.

We handle commercial office fit-outs, retail and hospitality installations in the city centre, landlord compliance testing, and domestic work from heritage rewires to smart-home installations.

Every job is completed by our own qualified engineers and backed by full certification at handover.`,
      commercialAngle: "Chester's retail and hospitality trade (from the Rows to the Northgate development) leans heavily on overnight shutdowns and Sunday-morning energisations so that fit-outs can open on schedule. We also carry out planned lighting upgrades, EICR programmes and emergency-lighting certification for the city's office estates.",
      domesticAngle: "Chester homeowners are often dealing with period properties: sensitive rewires around original plasterwork and panelling, replacement consumer units on listed buildings, and smart-lighting retrofits where the wiring chases need hiding with care. We've also done volume EV-charger installs across Hoole and Upton as the CH2 and CH3 postcodes picked up uptake.",
      featuredProject: "Old Dukes, a full electrical design-and-install on a two-floor Chester-centre tea-room-to-sports-bar conversion, delivered ahead of opening week with distribution, AV power, emergency lighting and fire alarm all scoped in-house.",
      landmarks: ['Chester Business Park', 'Sealand Industrial Estate', 'Chester city centre (Rows, Eastgate, Watergate)', 'Countess of Chester Hospital', 'University of Chester'],
      testimonials: [
        { quote: 'They handled the entire Old Dukes fit out under a tight programme and kept us informed every step. Genuinely the smoothest trades experience we have had in a Chester job.', author: 'M. Bradshaw', role: 'Director, Old Dukes (Chester City Centre)' },
        { quote: 'Kitchen distribution, dimmable lighting and signage: all scoped in one visit and delivered without fuss. Clear certificates at handover and the quote held right through to invoicing.', author: 'A. Colley', role: 'Owner, Carbonara No.49 (Chester)' }
      ]
    },
    {
      adjacentSilos: ['frodsham', 'wirral', 'deeside'],
      name: 'Ellesmere Port', slug: 'ellesmere-port', cases: 6, x: 30, y: 40,
      county: 'Cheshire West', distance: '9 miles',
      postcodes: ['CH65', 'CH66'],
      heroSubtext: 'NICEIC-approved commercial and industrial electrical contractors serving Ellesmere Port (CH65, CH66). Supporting retail fit-outs around Cheshire Oaks, industrial three-phase power along the M53 corridor, and local domestic rewires.',
      neighbourhoods: ['Little Sutton', 'Whitby', 'Great Sutton', 'Hooton', 'Overpool', 'Rivacre', 'Strawberry', 'Wolverham'],
      intro: `We deliver reliable commercial, industrial, and domestic electrical services throughout Ellesmere Port.

Our team routinely carries out three-phase power installations and machinery wiring along the M53 corridor, retail fit-outs at Cheshire Oaks, and landlord EICR safety checks and rewires across the CH65 and CH66 postcodes.

Contact us for a clear, fixed-price quote.`,
      commercialAngle: "Cheshire Oaks, Coliseum Retail Park and the Stanney Lane trading estates all drive a steady flow of shop and restaurant fit-outs, landlord-side compliance testing, and emergency-lighting upgrades. Our team is used to working around live retail trading hours and overnight shutdown windows.",
      domesticAngle: "The CH65/CH66 housing stock is a mix of 1960s–1970s estates needing replacement consumer units and full rewires, and newer developments where we're installing OZEV-approved EV chargers and smart home controls.",
      featuredProject: "The nearby Prenton, Wirral commercial distribution upgrade: a full mains distribution replacement, three-phase board install and cable-trunking redesign following an inspection that flagged multiple issues.",
      landmarks: ['Cheshire Oaks Designer Outlet', 'Stanlow Refinery', 'Coliseum Retail Park', 'Essar petrochemical complex', 'Port Arcades shopping centre'],
      testimonials: [
        { quote: 'Carter Electrical upgraded our retail unit lighting and distribution near Cheshire Oaks with zero downtime during trading hours. Professional, punctual, and fully certified.', author: 'D. Hughes', role: 'Facilities Manager, Ellesmere Port Retail' },
        { quote: 'Installed three fast EV chargers for our office car park in Great Sutton. Scoped load management perfectly so we had no issues with main supply power.', author: 'C. Jenkins', role: 'Operations Lead, Ellesmere Port' }
      ]
    },
    {
      adjacentSilos: ['mold', 'tarporley'],
      name: 'Wrexham', slug: 'wrexham', cases: 5, x: 32, y: 80,
      county: 'Wrexham (Wales)', distance: '12 miles',
      postcodes: ['LL11', 'LL12', 'LL13', 'LL14'],
      heroSubtext: 'Cross-border NICEIC-approved electrical contractors covering Wrexham (LL11 to LL14). Specialising in heavy three-phase industrial maintenance on Wrexham Industrial Estate, town-centre commercial fit-outs, and domestic rewires under Welsh regulations.',
      neighbourhoods: ['Acton', 'Rhosddu', 'Rossett', 'Marford', 'Gwersyllt', 'Rhosllanerchrugog', 'Ruabon', 'Gresford', 'Coedpoeth', 'Borras', 'Hightown'],
      intro: `Our qualified, NICEIC-approved electricians cover Wrexham and all surrounding villages.

We specialise in heavy industrial work, three-phase distribution, and preventative maintenance on Wrexham Industrial Estate, alongside town-centre commercial fit-outs and domestic services including rewires and EV charger installations.

We operate fully under both English and Welsh building regulations.`,
      commercialAngle: "Wrexham's commercial demand ranges from town-centre retail units through to newer office and hospitality work around the Racecourse and Eagles Meadow. We deliver design-and-install, EICR-led remedials and emergency-lighting programmes to landlords and operators.",
      domesticAngle: "Cross-border working is routine for us: we hold NICEIC approval recognised across England and Wales. Domestic demand skews toward rewires in older terraced stock, EV chargers in Gresford and Marford, and replacement consumer units across the LL12 belt.",
      featuredProject: "Industrial distribution and machinery install work on Wrexham Industrial Estate, including a three-phase motor-control replacement executed during a planned two-day shutdown.",
      landmarks: ['Wrexham Industrial Estate', 'Racecourse Ground', 'Eagles Meadow', 'Wrexham Maelor Hospital', 'Glyndŵr University'],
      testimonials: [
        { quote: 'Superb three-phase distribution installation at our Wrexham Industrial Estate facility. Executed during a planned weekend shutdown with total precision.', author: 'G. Roberts', role: 'Plant Engineer, Wrexham Industrial Estate' },
        { quote: 'Turned up exactly when promised for a full rewire and consumer unit upgrade in Gresford. Clean, tidy, and issued the NICEIC certificate immediately.', author: 'T. Edwards', role: 'Homeowner, Gresford (Wrexham)' }
      ]
    },
    {
      adjacentSilos: ['tarporley', 'frodsham'],
      name: 'Northwich', slug: 'northwich', cases: 4, x: 72, y: 66,
      county: 'Cheshire West', distance: '18 miles',
      postcodes: ['CW8', 'CW9'],
      heroSubtext: 'NICEIC-approved commercial, industrial, and domestic electricians serving Northwich (CW8, CW9). Delivering retail fit-outs around Barons Quay, industrial power distribution in Lostock Gralam, and domestic rewires across Hartford and Davenham.',
      neighbourhoods: ['Barnton', 'Hartford', 'Weaverham', 'Lostock Gralam', 'Rudheath', 'Castle', 'Winnington', 'Leftwich', 'Davenham', 'Sandiway', 'Kingsmead'],
      intro: `If you need an electrician in Northwich, we offer a full range of commercial, industrial, and domestic electrical services.

We support local businesses with commercial fit-outs and landlord safety checks, handle three-phase industrial installations, and assist homeowners with replacement consumer units, rewires, and OZEV-approved EV charger installations across CW8 and CW9.`,
      commercialAngle: "Barons Quay retail and leisure tenants, the Lostock Gralam trading estates and town-centre hospitality drive most of our Northwich commercial work: fit-outs, EICRs, landlord compliance, and planned lighting upgrades.",
      domesticAngle: "Hartford and Davenham demand sits with replacement consumer units and part-rewires on 1970s-era stock, while Kingsmead and Leftwich new-build owners most often call us for EV chargers, solar-PV add-ons and smart lighting.",
      featuredProject: "A planned commercial lighting and emergency-lighting upgrade for a leisure-sector tenant at Barons Quay, scheduled around trading hours to avoid disruption.",
      landmarks: ['Barons Quay', 'Tata Chemicals Winnington', 'Lostock Gralam industrial area', 'Anderton Boat Lift', 'Leftwich Community Village'],
      testimonials: [
        { quote: 'Completed our commercial EICR inspection and follow-up remedials in Northwich without any fuss. Clear digital reports provided promptly.', author: 'S. Taylor', role: 'Commercial Property Manager, Northwich' },
        { quote: 'Replaced our old fusebox and fitted an OZEV EV charger in Hartford. Neat trunking, great communication throughout, highly recommended.', author: 'M. Bennett', role: 'Homeowner, Hartford (Northwich)' }
      ]
    },
    {
      adjacentSilos: ['northwich', 'ellesmere-port'],
      name: 'Frodsham', slug: 'frodsham', cases: 3, x: 56, y: 46,
      county: 'Cheshire West', distance: '14 miles',
      postcodes: ['WA6'],
      heroSubtext: 'NICEIC-approved electrical contractor serving Frodsham, Helsby, and the WA6 area. Providing High Street commercial fit-outs, emergency lighting testing to BS 5266 standards, landlord EICR reports, and domestic consumer unit upgrades.',
      neighbourhoods: ['Kingsley', 'Helsby', 'Overton', 'Alvanley', 'Manley', 'Mouldsworth', 'Norley', 'Crowton'],
      intro: `We provide professional electrical installations and testing for homes and businesses in Frodsham and Helsby.

From emergency lighting and landlord certificates for High Street shops to EV chargers and domestic rewires in the surrounding villages, our NICEIC-approved engineers ensure your project is completed safely, on time, and on budget.`,
      commercialAngle: "Frodsham's independents (restaurants, pubs, salons and the Main Street retail trade) rely on us for quick-turnaround fit-outs, EICRs ahead of lease renewals, and PAT testing programmes. We also cover the Helsby Industrial Estate for smaller-scale three-phase work.",
      domesticAngle: "Commuter demand dominates: OZEV-approved EV charger installs with load management, full-property rewires where homebuyers' surveys have flagged old wiring, and smart-heating retrofits for the Overton and Helsby stock.",
      featuredProject: "A staged domestic rewire on a pre-war stone-built property in the Delamere villages, carried out around the client's occupation with zero loss of power overnight.",
      landmarks: ['Frodsham Main Street', 'Helsby Industrial Estate', 'Delamere Forest', 'Frodsham Railway Station', 'Helsby Hill'],
      testimonials: [
        { quote: 'Prompt domestic rewire and EV charger installation on our property in Helsby. Ian and the team left the site spotless every evening.', author: 'R. Evans', role: 'Homeowner, Helsby / Frodsham' },
        { quote: 'Fitted emergency lighting and completed landlord compliance testing for our retail shop on Frodsham High Street. Thorough, polite, and very fair pricing.', author: 'J. Miller', role: 'Shop Owner, Frodsham' }
      ]
    },
    {
      adjacentSilos: ['wrexham', 'northwich'],
      name: 'Tarporley', slug: 'tarporley', cases: 3, x: 64, y: 72,
      county: 'Cheshire West', distance: '11 miles',
      postcodes: ['CW6'],
      heroSubtext: 'NICEIC-approved electricians serving Tarporley and the CW6 area. Specialising in period property rewires, heritage barn conversion electrical design, agricultural three-phase supplies, and fast home EV charger installations.',
      neighbourhoods: ['Tarporley Village (High Street, Portal Estate)', 'Utkinton & Cotebrook', 'Bunbury & Alpraham', 'Tiverton & Huxley', 'Little Budworth'],
      intro: `Are you looking for a reliable, Napit/NICEIC-approved electrician in Tarporley? Whether you need a comprehensive electrical safety check on a historic High Street property, a smart home upgrade, or an emergency fault fixed, our team provides a premium, safe, and efficient service.

Our Proximity Guarantee: While our main head office is located just down the road in Chester, our fully stocked service vans travel the A51 daily. Because our engineers regularly service Tarporley, Bunbury, and Tiverton, we guarantee rapid response times with zero travel premiums or hidden call-out fees for CW6 residents.`,
      commercialAngle: "Specialist Electrical Services for Tarporley Properties: Tarporley features a unique mix of beautiful historic homes, rural agricultural buildings, and modern architectural extensions. We specialise in period property rewiring in thatched cottages and listed buildings, fast EV charger installations tailored to rural commutes, agricultural and barn conversion electrics for outbuildings and stables, and modern RCD-protected consumer unit upgrades to BS 7671 standards.",
      domesticAngle: "Recent Electrical Work in the Tarporley Area: Designed and installed a complete low-energy LED exterior lighting display near Eaton Lane; completed a full EICR safety inspection for a rental cottage near Tarporley High Street; and resolved a sudden tripping circuit caused by water ingress in an outbuilding near Utkinton.",
      featuredProject: "A snapshot of recent local work: LED architectural exterior lighting near Eaton Lane, landlord EICR safety inspection near Tarporley High Street, and fault finding repair on an outbuilding near Utkinton.",
      landmarks: ['Tarporley High Street', 'Portal Estate', 'Eaton Lane', 'Utkinton & Cotebrook', 'Bunbury & Alpraham', 'Tiverton & Huxley'],
      testimonials: [
        { quote: 'Delivered a flawless smart lighting design and high-end rewire on our barn conversion near Tarporley. Extremely respectful of heritage features.', author: 'E. Wright', role: 'Residential Client, Tarporley' },
        { quote: 'Installed a new three-phase supply for our equestrian yard near Bunbury. High standard of workmanship and complete attention to safety.', author: 'V. Stanhope', role: 'Farm Owner, Bunbury / Tarporley' }
      ]
    },
    {
      adjacentSilos: ['deeside', 'wrexham'],
      name: 'Mold', slug: 'mold', cases: 2, x: 22, y: 66,
      county: 'Flintshire (Wales)', distance: '13 miles',
      postcodes: ['CH7'],
      heroSubtext: 'NICEIC-approved electrical contractor delivering commercial, agricultural, and domestic electrical services in Mold (CH7) and Flintshire. Handling town-centre shop fit-outs, outbuilding three-phase supplies, landlord EICRs, and home rewires.',
      neighbourhoods: ['Buckley', 'New Brighton', 'Gwernaffield', 'Gwernymynydd', 'Leeswood', 'Nercwys', 'Pontblyddyn', 'Sychdyn', 'Alltami'],
      intro: `We provide fully certified, NICEIC-approved electrical services across Mold and the CH7 postcode.

Operating on both sides of the border, we handle commercial fit-outs and compliance testing in the town centre, agricultural and three-phase outbuilding installs in rural areas, and domestic services including rewires, consumer unit replacements, and EV charger installations.`,
      commercialAngle: "Mold town centre (Daniel Owen Square, the Market and High Street) drives most of our commercial work: small-to-mid fit-outs, landlord EICRs, emergency-lighting upgrades and PAT testing. We also serve the Flintshire-wide education and local-authority estate.",
      domesticAngle: "Rural demand is a big part of CH7: outbuilding supplies, three-phase for farms, smart-home and EV-charger installs for commuter villages, and full rewires on older stone-built properties.",
      featuredProject: "A three-phase agricultural supply and outbuilding install for a working farm in the Nercwys area, including a dedicated ASHP circuit and external yard lighting.",
      landmarks: ['Mold High Street', 'Daniel Owen Square', 'Theatr Clwyd', 'Loggerheads Country Park (nearby)', 'Alltami/Buckley commercial belt'],
      testimonials: [
        { quote: 'Fitted a new three-phase supply and outbuilding distribution for our premises near Mold. Knowledgeable, friendly, and fully NICEIC compliant.', author: 'H. Davies', role: 'Business Owner, Mold' },
        { quote: 'Full rewire and consumer unit upgrade on our cottage near Buckley. Great advice on lighting positions and completely stress-free experience.', author: 'L. Owen', role: 'Homeowner, Buckley / Mold' }
      ]
    },
    {
      adjacentSilos: ['mold', 'ellesmere-port', 'wirral'],
      name: 'Deeside', slug: 'deeside', cases: 4, x: 34, y: 52,
      county: 'Flintshire (Wales)', distance: '10 miles',
      postcodes: ['CH5'],
      heroSubtext: 'NICEIC-approved industrial and commercial electricians serving Deeside Industrial Park and the CH5 area. Expert three-phase power distribution, factory shutdown maintenance, commercial EICR testing, and workplace EV charging installations.',
      neighbourhoods: ['Shotton', "Connah's Quay", 'Queensferry', 'Sealand', 'Hawarden', 'Garden City', 'Sandycroft', 'Mancot', 'Ewloe'],
      intro: `Looking for a qualified industrial or commercial electrician in Deeside?

We support manufacturers on Deeside Industrial Park with three-phase power upgrades, machinery wiring, and preventative maintenance, while providing local retail fit-outs, landlord EICR safety checks, and domestic rewires across the CH5 area.`,
      commercialAngle: "Deeside Industrial Park tenants are the backbone of our commercial work here: scheduled maintenance, RCD and distribution upgrades, compliance testing and planned remedial works. Retail and hospitality around Hawarden and the retail-park strip at Sandycroft pick up the rest.",
      domesticAngle: "Shotton and Connah's Quay terraced stock needs full rewires and replacement consumer units more often than not, while Hawarden and Ewloe homeowners are mostly calling us for EV chargers, solar-PV add-ons and smart-home retrofits.",
      featuredProject: "A planned three-phase distribution upgrade for a Deeside Industrial Park manufacturer, including thermal imaging survey, cable-trunking redesign and a two-phase energisation to avoid production loss.",
      landmarks: ['Deeside Industrial Park', 'Airbus Broughton (nearby)', 'Hawarden Airport', 'Queensferry retail belt', 'Connah’s Quay high street'],
      testimonials: [
        { quote: 'Extremely reliable electrical maintenance and machinery wiring on Deeside Industrial Park. Great communication and fair fixed quotes.', author: 'K. Williams', role: 'Operations Director, Deeside' },
        { quote: 'Prompt landlord EICR inspection across three commercial units in Shotton. Clear breakdown of remedial work and fast certification.', author: 'B. Thomas', role: 'Property Developer, Deeside' }
      ]
    },
    {
      adjacentSilos: ['ellesmere-port', 'deeside'],
      name: 'Wirral', slug: 'wirral', cases: 1, x: 24, y: 34,
      county: 'Merseyside', distance: '20 miles',
      postcodes: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63', 'CH64'],
      heroSubtext: 'NICEIC-approved electrical contractor covering the entire Wirral peninsula (CH41 to CH64). Delivering commercial fit-outs, industrial three-phase maintenance at Bromborough, coastal period rewires in Heswall and Caldy, and landlord EICR safety reports.',
      neighbourhoods: ['Birkenhead', 'Prenton', 'Wallasey', 'New Brighton', 'Bebington', 'Heswall', 'West Kirby', 'Hoylake', 'Bromborough', 'Moreton', 'Upton', 'Greasby', 'Port Sunlight', 'Eastham', 'Caldy', 'Neston', 'Willaston', 'Ness'],
      intro: `Looking for a reliable, NICEIC-approved electrician in Wirral?

We provide comprehensive commercial, industrial, and domestic electrical services across the peninsula, covering Birkenhead, Wallasey, Heswall, West Kirby, Neston, and all surrounding areas.

From three-phase industrial installations at Bromborough to retail fit-outs, landlord EICRs, and full domestic rewires, our in-house team delivers neat, compliant work with transparent, fixed pricing.`,
      commercialAngle: "Wirral's commercial demand spans the Wirral International Business Park and Bromborough's manufacturing estates, the regenerating Birkenhead waterfront around Wirral Waters and Twelve Quays, and the retail and hospitality trade at New Brighton's Marine Point, Birkenhead's Grange and Pyramids precincts and the West Kirby and Heswall high streets. We deliver design-and-install fit-outs, landlord EICRs ahead of lease renewals, emergency-lighting certification and planned maintenance contracts.",
      domesticAngle: "The peninsula's housing stock runs the full range: Victorian and Edwardian terraces in Birkenhead, Tranmere and Wallasey needing full rewires and replacement consumer units; interwar semis across Bebington, Eastham and Moreton; and higher-end detached and coastal property in Heswall, Caldy, Neston, Ness, West Kirby and Hoylake where the calls are for smart-lighting schemes, garden and outbuilding supplies, and OZEV-approved EV chargers with load management.",
      featuredProject: "Our Prenton, Wirral commercial distribution upgrade (CH43): a full mains distribution replacement, three-phase board install and cable-trunking redesign carried out after an inspection flagged multiple issues, energised in stages to keep the site trading.",
      landmarks: ['Wirral International Business Park (Bromborough)', 'Cammell Laird shipyard, Birkenhead', 'Wirral Waters & Twelve Quays regeneration', 'New Brighton Marine Point', 'Port Sunlight & Unilever, Bebington'],
      testimonials: [
        { quote: 'Following our electrical inspection in Prenton, Carter Electrical completed a full distribution upgrade with minimal disruption to daily operations.', author: 'P. Harrison', role: 'Site Supervisor, Prenton (Wirral)' },
        { quote: 'Fitted a home EV charger and upgraded our consumer unit in Heswall. Extremely neat job, explained everything clearly, and great value.', author: 'N. Price', role: 'Homeowner, Heswall (Wirral)' }
      ]
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
  'chester': [
    {
      q: 'How often should a commercial property in Chester undergo EICR safety testing?',
      a: 'Under the Electricity at Work Regulations 1989 and BS 7671, commercial properties in Chester city centre, office estates, and hospitality venues should undergo EICR testing at least every 5 years (or every 3 years for industrial sites). We conduct thorough commercial inspections with minimal operational disruption.'
    },
    {
      q: 'What is involved in a full domestic property rewire in Chester?',
      a: 'A full rewire replaces all fixed electrical cabling, backboxes, socket outlets, light switches, and the central consumer unit. Because period homes across Hoole, Upton, and Christleton often feature legacy wiring, our engineers perform sensitive chasing and clean containment brought up to current BS 7671 standards.'
    },
    {
      q: 'Do I need an NICEIC-approved electrician for a consumer unit upgrade in Chester?',
      a: 'Yes. Replacing a consumer unit (fuse box) is reportable under Part P of the Building Regulations. As an NICEIC Approved Contractor based in Christleton, Carter Electrical installs modern metal RCBO fuse boards with Surge Protection (SPD) and self-certifies compliance with Cheshire West Building Control.'
    },
    {
      q: 'How long does an EICR test take for a landlord rental property in Chester?',
      a: 'A domestic EICR safety inspection for a 2 to 3-bedroom rental property in Chester takes approximately 2 to 3 hours. Our engineers test fixed wiring circuits and issue digital EICR certificates within 48 hours to fulfill Cheshire West landlord compliance duties.'
    },
    {
      q: 'Can Carter Electrical install EV charger wallboxes for homes in Chester?',
      a: 'Yes. We are OZEV-approved installers fitting smart, fast home EV chargers across CH1, CH2, CH3, and CH4 postcodes. We evaluate your main fuse capacity, coordinate SP Energy Networks DNO notifications, and ensure clean installation.'
    },
    {
      q: 'Which areas of Chester and Cheshire West do your electricians cover?',
      a: 'From our base in Christleton (CH3 6AH), we serve all of Chester city centre, Hoole, Upton, Blacon, Boughton, Handbridge, Vicars Cross, Newton, Mickle Trafford, Waverton, and surrounding Cheshire West communities.'
    }
  ],
  'tarporley': [
    {
      q: 'How do I know if a period property or barn conversion in Tarporley needs rewiring?',
      a: 'Warning signs include legacy rubber or lead-sheathed cabling, outdated timber-backed fuse boxes, round-pin sockets, or circuits that frequently trip. Many country homes and converted barns across Tarporley and the Eddisbury area feature extended wiring additions over decades. We conduct non-invasive EICR inspections to assess cabling condition and provide transparent recommendations.'
    },
    {
      q: 'What is the difference between an EICR and an Electrical Installation Certificate (EIC)?',
      a: 'An Electrical Installation Certificate (EIC) is issued for new electrical installations, complete property rewires, or consumer unit replacements. An Electrical Installation Condition Report (EICR) is an in-depth safety inspection of existing fixed wiring, mandatory for landlords every 5 years and recommended for property buyers across CW6.'
    },
    {
      q: 'Can I replace sockets or light switches myself under UK Building Regulations?',
      a: 'Under Part P of the Building Regulations, minor straightforward replacements of existing accessories are permitted for DIY. However, any work in special locations (such as bathrooms), new circuit additions, or fuse box replacements must be completed and certified by a registered competent electrician like Carter Electrical to guarantee safety and compliance.'
    },
    {
      q: 'How often are landlords in Tarporley required to carry out EICR safety testing?',
      a: 'Private landlords in Cheshire West and Chester must arrange an EICR inspection at least every 5 years or at the start of a new tenancy. We provide comprehensive landlord testing across Tarporley, Bunbury, and Little Budworth, issuing digital EICR certificates within 48 hours.'
    },
    {
      q: 'Do I need DNO permission to install a fast EV charger in Tarporley?',
      a: 'Yes. Every grid-connected EV charger requires notification or prior consent from the local Distribution Network Operator (SP Energy Networks across Cheshire). As OZEV-approved installers, we handle all DNO applications and assess your main fuse capacity before installation.'
    },
    {
      q: 'What makes an NICEIC Approved Contractor different from a basic installer?',
      a: 'NICEIC Approved Contractor status verifies that our engineers are independently assessed across complex domestic, commercial, and three-phase industrial installations. This ensures higher technical compliance and rigorous safety standards than basic single-phase domestic scheme registration.'
    }
  ],
  'deeside': [
    {
      q: 'What electrical compliance is required for commercial units on Deeside Industrial Park?',
      a: 'Under the Electricity at Work Regulations 1989, commercial and industrial duty holders must maintain electrical systems in a safe condition. This requires periodic EICR testing (typically every 3 years for industrial sites), annual emergency lighting testing to BS 5266, and regular PAT testing.'
    },
    {
      q: 'What happens if a commercial EICR inspection identifies C1 or C2 fault codes?',
      a: 'C1 indicates immediate danger and requires urgent isolation on site. C2 indicates potential danger requiring remedial work. By law, duty holders and landlords must rectify C1 and C2 defects within 28 days. Our Deeside team carries out fast remedial repairs and issues updated compliance paperwork.'
    },
    {
      q: 'How long does a commercial or three-phase power installation take on Deeside?',
      a: 'Timeframes depend on installation scope, ranging from single-day sub-main additions to multi-week factory distribution upgrades. We conduct thorough site surveys across CH5 postcodes, offering out-of-hours working schedules to avoid production downtime.'
    },
    {
      q: 'Are EICRs mandatory for private rented properties in Flintshire?',
      a: 'Yes. Landlords across Connah\'s Quay, Shotton, and Queensferry must possess a valid EICR covering the fixed electrical wiring. Inspections are required every 5 years, with copies provided to tenants and Flintshire County Council upon request.'
    },
    {
      q: 'Do workplace EV chargers require load management systems on Deeside?',
      a: 'For commercial premises with multiple charging bays, dynamic load management prevents overloading the site main switchgear. We design custom EV charging infrastructures for Deeside businesses, managing grid capacity notifications with SP Energy Networks.'
    },
    {
      q: 'Which local postcodes and industrial zones do you cover around Deeside?',
      a: 'We cover all CH5 postcodes, serving Deeside Industrial Park, Sandycroft, Connah\'s Quay, Shotton, Queensferry, Garden City, Mancot, and Sealand.'
    }
  ],
  'mold': [
    {
      q: 'Is an EICR safety inspection mandatory before selling a property in Mold?',
      a: 'While not legally mandatory for private home sellers, mortgage lenders and conveyancing solicitors in Flintshire increasingly request an up-to-date EICR. Having a satisfactory report avoids conveyancing delays and prevents buyers from negotiating price reductions due to outdated wiring.'
    },
    {
      q: 'What are the main warning signs that a property in Mold requires a consumer unit upgrade?',
      a: 'Key indicators include old rewireable fuse boxes with cast-iron or wooden backings, lack of residual current device (RCD) protection, flickering lights, or scorched socket outlets. Upgrading to a modern metal RCBO board with Surge Protection (SPD) ensures full BS 7671 safety compliance.'
    },
    {
      q: 'What electrical regulations apply to private landlords in Flintshire under Welsh law?',
      a: 'Under the Renting Homes (Wales) Act and electrical safety regulations, landlords must ensure fixed wiring is inspected at least every 5 years, accompanied by an EICR certificate. Landlords must also ensure working smoke and carbon monoxide alarms are hardwired on every floor.'
    },
    {
      q: 'Can Carter Electrical carry out commercial retail fit-outs on Mold High Street?',
      a: 'Yes. We work with local retailers, cafes, and offices in Mold town centre and surrounding commercial parks. We design energy-efficient LED lighting schemes, install emergency lighting to BS 5266, and perform commercial power distribution fit-outs.'
    },
    {
      q: 'How do I know if my electrician in CH7 is fully registered and accredited?',
      a: 'You can verify registration on the Registered Competent Person Electrical register. Carter Electrical is a fully NICEIC-approved contractor. All our work is self-certified with Building Control and backed by the NICEIC Platinum Promise warranty.'
    },
    {
      q: 'Which villages surrounding Mold do your domestic electricians cover?',
      a: 'We cover Mold (CH7) and surrounding areas including Gwernymynydd, Sychdyn, Mynydd Isa, Buckley, New Brighton, Loggerheads, and Llanferres.'
    }
  ],
  'wrexham': [
    {
      q: 'What are the electrical inspection duties for landlords under the Renting Homes (Wales) Act in Wrexham?',
      a: 'Landlords in Wrexham must ensure their rental properties pass an EICR test every 5 years. In addition, Welsh legislation requires mains-powered, interconnected smoke and heat alarms on each floor, alongside annual safety checks for all electrical accessories.'
    },
    {
      q: 'How does three-phase electrical maintenance work for industrial units on Wrexham Industrial Estate?',
      a: 'Industrial facilities require tailored maintenance routines to protect machinery and workforce safety. We provide thermal imaging inspections, sub-distribution board upgrades, motor control wiring, and periodic 3-year commercial EICR testing with minimal operational disturbance.'
    },
    {
      q: 'What is involved in a full domestic property rewire in Wrexham?',
      a: 'A full rewire replaces all hidden electrical cables, backboxes, socket outlets, switches, and the central consumer unit. Completed in two stages (first fix cabling and second fix accessory fitting), rewires bring older housing stock in Acton, Rhosddu, or Borras up to current BS 7671 standards.'
    },
    {
      q: 'Do I need an RCD or RCBO consumer unit for an EV charger installation in Wrexham?',
      a: 'Yes. Modern smart EV wallboxes require individual Type A or Type B RCD protection alongside Surge Protection Devices (SPD). Our engineers assess your current fuse box capacity and install dedicated sub-boards if necessary to meet IET Wiring Regulations.'
    },
    {
      q: 'What should I do if an EICR report shows C2 defects on my Wrexham property?',
      a: 'C2 indicates a potential danger requiring urgent attention. Property owners and landlords must instruct remedial repairs within 28 days. Once remedied, we issue a clear Electrical Installation Certificate confirming the installation is safe and compliant.'
    },
    {
      q: 'Which neighbourhoods and postcodes do you serve across Wrexham?',
      a: 'We cover LL11, LL12, LL13, and LL14 postcodes, including Wrexham town centre, Acton, Borras, Rhosddu, Rossett, Marford, Gwersyllt, Rhosllanerchrugog, Ruabon, Gresford, and Coedpoeth.'
    }
  ],
  'ellesmere-port': [
    {
      q: 'How do I choose a qualified commercial electrician in Ellesmere Port?',
      a: 'Look for NICEIC Approved Contractor status rather than basic domestic registration. Carter Electrical is fully NICEIC-approved, delivering compliant services for retail units at Cheshire Oaks, town centre offices, and industrial hubs along the M53 corridor.'
    },
    {
      q: 'Do you provide out-of-hours commercial electrical work around Cheshire Oaks?',
      a: 'Yes. We routinely carry out commercial shop fit-outs, display lighting installations, and emergency lighting testing (BS 5266) outside trading hours to ensure retail and hospitality businesses in CH65 suffer zero customer disruption.'
    },
    {
      q: 'What is covered during a domestic electrical inspection in CH65 and CH66?',
      a: 'An EICR tests circuit insulation resistance, earth fault loop impedance, earthing bond adequacy, and RCD trip speeds across all fixed wiring. It identifies hidden hazards, degraded insulation, or overloaded circuits in residential properties.'
    },
    {
      q: 'How often should landlords in Ellesmere Port order an EICR certificate?',
      a: 'Private landlords must obtain a valid EICR at least every 5 years or before a new tenant moves in. We conduct fast inspections across Great Sutton, Little Sutton, and Whitby, supplying digital certificates within 48 hours.'
    },
    {
      q: 'Can you install workplace EV charging stations for corporate car parks in Ellesmere Port?',
      a: 'Yes. As OZEV-approved installers, we engineer commercial EV charging hubs with multi-charger dynamic load balancing, payment integration options, and full DNO grid notification to SP Energy Networks.'
    },
    {
      q: 'Which local postcodes and villages do your engineers cover?',
      a: 'We serve all CH65 and CH66 postcodes, including Great Sutton, Little Sutton, Whitby, Wolverham, Overpool, Hooton, Ledsham, and Capenhurst.'
    }
  ],
  'wirral': [
    {
      q: 'How do I know if my house on the Wirral needs a complete rewire?',
      a: 'Common warning signs in older Wirral properties (especially period homes in Heswall, Caldy, or West Kirby) include original fabric or rubber insulated cables, fuse boxes with rewireable fuse wire, dimming lights, or a lack of earthing on metal switches.'
    },
    {
      q: 'What electrical certificate is legally required for rented properties on the Wirral?',
      a: 'Landlords across Wirral Council postcodes must possess a valid Electrical Installation Condition Report (EICR) issued by a registered electrician every 5 years. Failure to comply can result in local authority fines of up to £30,000.'
    },
    {
      q: 'Is an NICEIC Approved Contractor required for commercial premises in Bromborough?',
      a: 'While the law requires a "competent person", using an NICEIC Approved Contractor guarantees that the business meets rigorous annual technical assessments. We service retail units, offices, and industrial facilities in Bromborough and Birkenhead.'
    },
    {
      q: 'What is Part P building regulations compliance for domestic electrical work on the Wirral?',
      a: 'Part P requires that electrical installations in dwellings are designed and installed safely. Major additions, bathroom alterations, and fuse box upgrades must be notified to Building Control. We handle all notifications and issue official certificates automatically.'
    },
    {
      q: 'How long does a domestic smart EV charger installation take on the Wirral?',
      a: 'A standard domestic wallbox installation takes between 3 and 4 hours. Our engineers verify your main fuse board capacity, install dedicated cable routing, configure smart app control, and notify SP Energy Networks.'
    },
    {
      q: 'Which postcodes and towns do you cover across the Wirral peninsula?',
      a: 'We cover the entire Wirral including CH47, CH48, CH60, CH61, CH62, and CH63 postcodes, serving Heswall, Caldy, West Kirby, Bromborough, Bebington, Neston, Parkgate, and Willaston.'
    }
  ],
  'frodsham': [
    {
      q: 'How do I verify if an electrician in Frodsham is legally qualified?',
      a: 'Check their credentials on the Registered Competent Person Electrical register. Carter Electrical is fully NICEIC-approved. We self-certify all domestic and commercial work, automatically registering installations with local Building Control.'
    },
    {
      q: 'What emergency lighting regulations apply to commercial premises in Frodsham?',
      a: 'Under the Regulatory Reform (Fire Safety) Order 2005, commercial premises on Frodsham High Street and Main Street must maintain emergency escape lighting to BS 5266 standards. This requires monthly function checks and annual 3-hour battery discharge testing.'
    },
    {
      q: 'How long does it take to replace a consumer unit in a Frodsham property?',
      a: 'A complete consumer unit replacement takes approximately 4 to 6 hours. This includes isolating the supply, installing a modern metal RCBO board with Surge Protection (SPD), and performing 100% circuit safety testing before re-energising.'
    },
    {
      q: 'Are EICR safety checks mandatory for private landlords in Frodsham and Helsby?',
      a: 'Yes. Private landlords must obtain an EICR every 5 years or at the start of any new tenancy. We carry out non-invasive testing across WA6 postcodes, identifying potential safety defects and delivering digital reports within 48 hours.'
    },
    {
      q: 'Do you install home EV chargers for rural properties around Frodsham?',
      a: 'Yes. We install smart wallboxes for homes in Frodsham, Helsby, Kingsley, and Alvanley. We evaluate your incoming mains supply and coordinate DNO approval with SP Energy Networks for seamless charging.'
    },
    {
      q: 'Which postcodes and surrounding villages do your electricians cover?',
      a: 'We cover WA6 postcodes, including Frodsham town centre, Helsby, Kingsley, Alvanley, Manley, Newton by Frodsham, and Dunham on the Hill.'
    }
  ],
  'northwich': [
    {
      q: 'What is involved in a commercial EICR inspection for businesses in Northwich?',
      a: 'A commercial EICR involves dead testing (insulation resistance, continuity) and live testing (earth fault loop impedance, RCD trip times) across all distribution boards and sub-circuits. We test commercial units around Barons Quay and central CW9 outside trading hours to prevent business interruption.'
    },
    {
      q: 'What is the difference between C1, C2, and C3 codes on a Northwich EICR?',
      a: 'C1 indicates immediate danger (requires immediate isolation). C2 indicates potential danger requiring remedial work within 28 days. C3 indicates an improvement recommendation (optional upgrade). C1 and C2 codes result in an "Unsatisfactory" report until remedied.'
    },
    {
      q: 'What domestic electrical services do you offer in Hartford and Davenham?',
      a: 'In residential areas like Hartford, Davenham, and Kingsmead, we install smart EV wallboxes, perform consumer unit upgrades, install outdoor power, and conduct full house rewires to current BS 7671 standards.'
    },
    {
      q: 'How often do landlords in CW8 and CW9 need an EICR test?',
      a: 'Landlords must arrange an EICR inspection at least every 5 years under the Electrical Safety Standards in the Private Rented Sector Regulations. We deliver fast testing across Northwich, issuing digital reports within 48 hours.'
    },
    {
      q: 'Can Carter Electrical handle three-phase industrial power installations in Northwich?',
      a: 'Yes. Our NICEIC Approved engineers design, install, and maintain heavy three-phase power supplies, sub-distribution panels, and machinery supplies for industrial premises across Northwich and Lostock Gralam.'
    },
    {
      q: 'Which postcodes and surrounding areas do your engineers cover around Northwich?',
      a: 'We cover CW8 and CW9 postcodes, serving Northwich, Hartford, Davenham, Weaverham, Lostock Gralam, Rudheath, Leftwich, and Kingsmead.'
    }
  ]
};

window.CARTER.locationFaqs = function(area) {
  return faqsMap[area.slug] || [];
};
