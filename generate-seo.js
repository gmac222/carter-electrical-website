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
    heroSubtext: 'NICEIC-approved commercial and industrial electrical contractors serving Ellesmere Port (CH65, CH66). Supporting retail fit-outs around Cheshire Oaks, industrial three-phase power along the M53 corridor, and local domestic rewires.',
    neighbourhoods: ['Little Sutton', 'Whitby', 'Great Sutton', 'Hooton', 'Overpool', 'Rivacre', 'Strawberry', 'Wolverham'],
    metaDesc: 'NICEIC-approved electricians in Ellesmere Port (CH65, CH66). Industrial three-phase, retail fit-outs, domestic rewires, and OZEV EV chargers. Get a free quote.',
    intro: `We deliver reliable commercial, industrial, and domestic electrical services throughout Ellesmere Port.

Our team routinely carries out three-phase power installations and machinery wiring along the M53 corridor, retail fit-outs at Cheshire Oaks, and landlord EICR safety checks and rewires across the CH65 and CH66 postcodes.

Contact us for a clear, fixed-price quote.`,
    commercialAngle: "Cheshire Oaks, Coliseum Retail Park and the Stanney Lane trading estates drive a steady flow of shop and restaurant fit-outs, landlord-side compliance testing, and emergency-lighting upgrades.",
    domesticAngle: "The CH65/CH66 housing stock is a mix of 1960s–1970s estates needing replacement consumer units and full rewires, and newer developments where we're installing OZEV-approved EV chargers and smart home controls.",
    testimonials: [
      { quote: 'Carter Electrical upgraded our retail unit lighting and distribution near Cheshire Oaks with zero downtime during trading hours. Professional, punctual, and fully certified.', author: 'D. Hughes', role: 'Facilities Manager, Ellesmere Port Retail' },
      { quote: 'Installed three fast EV chargers for our office car park in Great Sutton. Scoped load management perfectly so we had no issues with main supply power.', author: 'C. Jenkins', role: 'Operations Lead, Ellesmere Port' }
    ]
  },
  {
    name: 'Wrexham', slug: 'wrexham',
    county: 'Wrexham (Wales)', distance: '12 miles',
    postcodes: ['LL11', 'LL12', 'LL13', 'LL14'],
    heroSubtext: 'Cross-border NICEIC-approved electrical contractors covering Wrexham (LL11 to LL14). Specialising in heavy three-phase industrial maintenance on Wrexham Industrial Estate, town-centre commercial fit-outs, and domestic rewires under Welsh regulations.',
    neighbourhoods: ['Acton', 'Rhosddu', 'Rossett', 'Marford', 'Gwersyllt', 'Rhosllanerchrugog', 'Ruabon', 'Gresford', 'Coedpoeth', 'Borras', 'Hightown'],
    metaDesc: 'NICEIC-approved electricians in Wrexham (LL11–LL14). Industrial three-phase, commercial fit-outs, full rewires, and OZEV EV chargers. Contact us today.',
    intro: `Our qualified, NICEIC-approved electricians cover Wrexham and all surrounding villages.

We specialise in heavy industrial work, three-phase distribution, and preventative maintenance on Wrexham Industrial Estate, alongside town-centre commercial fit-outs and domestic services including rewires and EV charger installations.

We operate fully under both English and Welsh building regulations.`,
    commercialAngle: "Wrexham's commercial demand ranges from town-centre retail units through to newer office and hospitality work around the Racecourse and Eagles Meadow. We deliver design-and-install, EICR-led remedials and emergency-lighting programmes to landlords and operators.",
    domesticAngle: "Cross-border working is routine for us: we hold NICEIC approval recognised across England and Wales. Domestic demand skews toward rewires in older terraced stock, EV chargers in Gresford and Marford, and replacement consumer units across the LL12 belt.",
    testimonials: [
      { quote: 'Superb three-phase distribution installation at our Wrexham Industrial Estate facility. Executed during a planned weekend shutdown with total precision.', author: 'G. Roberts', role: 'Plant Engineer, Wrexham Industrial Estate' },
      { quote: 'Turned up exactly when promised for a full rewire and consumer unit upgrade in Gresford. Clean, tidy, and issued the NICEIC certificate immediately.', author: 'T. Edwards', role: 'Homeowner, Gresford (Wrexham)' }
    ]
  },
  {
    name: 'Northwich', slug: 'northwich',
    county: 'Cheshire West', distance: '18 miles',
    postcodes: ['CW8', 'CW9'],
    heroSubtext: 'NICEIC-approved commercial, industrial, and domestic electricians serving Northwich (CW8, CW9). Delivering retail fit-outs around Barons Quay, industrial power distribution in Lostock Gralam, and domestic rewires across Hartford and Davenham.',
    neighbourhoods: ['Barnton', 'Hartford', 'Weaverham', 'Lostock Gralam', 'Rudheath', 'Castle', 'Winnington', 'Leftwich', 'Davenham', 'Sandiway', 'Kingsmead'],
    metaDesc: 'NICEIC-approved electricians in Northwich (CW8, CW9). Industrial maintenance, retail fit-outs, full rewires, consumer units, and EV chargers. Request a quote.',
    intro: `If you need an electrician in Northwich, we offer a full range of commercial, industrial, and domestic electrical services.

We support local businesses with commercial fit-outs and landlord safety checks, handle three-phase industrial installations, and assist homeowners with replacement consumer units, rewires, and OZEV-approved EV charger installations across CW8 and CW9.`,
    commercialAngle: "Barons Quay retail and leisure tenants, the Lostock Gralam trading estates and town-centre hospitality drive most of our Northwich commercial work: fit-outs, EICRs, landlord compliance, and planned lighting upgrades.",
    domesticAngle: "Hartford and Davenham demand sits with replacement consumer units and part-rewires on 1970s-era stock, while Kingsmead and Leftwich new-build owners most often call us for EV chargers, solar-PV add-ons and smart lighting.",
    testimonials: [
      { quote: 'Completed our commercial EICR inspection and follow-up remedials in Northwich without any fuss. Clear digital reports provided promptly.', author: 'S. Taylor', role: 'Commercial Property Manager, Northwich' },
      { quote: 'Replaced our old fusebox and fitted an OZEV EV charger in Hartford. Neat trunking, great communication throughout, highly recommended.', author: 'M. Bennett', role: 'Homeowner, Hartford (Northwich)' }
    ]
  },
  {
    name: 'Frodsham', slug: 'frodsham',
    county: 'Cheshire West', distance: '14 miles',
    postcodes: ['WA6'],
    heroSubtext: 'NICEIC-approved electrical contractor serving Frodsham, Helsby, and the WA6 area. Providing High Street commercial fit-outs, emergency lighting testing to BS 5266 standards, landlord EICR reports, and domestic consumer unit upgrades.',
    neighbourhoods: ['Kingsley', 'Helsby', 'Overton', 'Alvanley', 'Manley', 'Mouldsworth', 'Norley', 'Crowton'],
    metaDesc: 'NICEIC-approved electricians in Frodsham (WA6). Commercial fit-outs, landlord EICRs, full rewires, and OZEV EV chargers. Contact us for a free quote.',
    intro: `We provide professional electrical installations and testing for homes and businesses in Frodsham and Helsby.

From emergency lighting and landlord certificates for High Street shops to EV chargers and domestic rewires in the surrounding villages, our NICEIC-approved engineers ensure your project is completed safely, on time, and on budget.`,
    commercialAngle: "Frodsham's independents (restaurants, pubs, salons and the Main Street retail trade) rely on us for quick-turnaround fit-outs, EICRs ahead of lease renewals, and PAT testing programmes.",
    domesticAngle: "Commuter demand dominates: OZEV-approved EV charger installs with load management, full-property rewires where homebuyers' surveys have flagged old wiring, and smart-heating retrofits for the Overton and Helsby stock.",
    testimonials: [
      { quote: 'Prompt domestic rewire and EV charger installation on our property in Helsby. Ian and the team left the site spotless every evening.', author: 'R. Evans', role: 'Homeowner, Helsby / Frodsham' },
      { quote: 'Fitted emergency lighting and completed landlord compliance testing for our retail shop on Frodsham High Street. Thorough, polite, and very fair pricing.', author: 'J. Miller', role: 'Shop Owner, Frodsham' }
    ]
  },
  {
    name: 'Tarporley', slug: 'tarporley',
    county: 'Cheshire West', distance: '11 miles',
    postcodes: ['CW6'],
    heroSubtext: 'NICEIC-approved electricians serving Tarporley and the CW6 area. Specialising in period property rewires, heritage barn conversion electrical design, agricultural three-phase supplies, and fast home EV charger installations.',
    neighbourhoods: ['Tarporley Village (High Street, Portal Estate)', 'Utkinton & Cotebrook', 'Bunbury & Alpraham', 'Tiverton & Huxley', 'Little Budworth'],
    metaDesc: 'NICEIC-approved electricians in Tarporley (CW6). Period property rewires, EV chargers, agricultural electrics, and RCD consumer unit upgrades. Get a free quote.',
    intro: `Are you looking for a reliable, Napit/NICEIC-approved electrician in Tarporley? Whether you need a comprehensive electrical safety check on a historic High Street property, a smart home upgrade, or an emergency fault fixed, our team provides a premium, safe, and efficient service.

Our Proximity Guarantee: While our main head office is located just down the road in Chester, our fully stocked service vans travel the A51 daily. Because our engineers regularly service Tarporley, Bunbury, and Tiverton, we guarantee rapid response times with zero travel premiums or hidden call-out fees for CW6 residents.`,
    commercialAngle: "Specialist Electrical Services for Tarporley Properties: Tarporley features a unique mix of beautiful historic homes, rural agricultural buildings, and modern architectural extensions. We specialise in period property rewiring in thatched cottages and listed buildings, fast EV charger installations tailored to rural commutes, agricultural and barn conversion electrics for outbuildings and stables, and modern RCD-protected consumer unit upgrades to BS 7671 standards.",
    domesticAngle: "Recent Electrical Work in the Tarporley Area: Designed and installed a complete low-energy LED exterior lighting display near Eaton Lane; completed a full EICR safety inspection for a rental cottage near Tarporley High Street; and resolved a sudden tripping circuit caused by water ingress in an outbuilding near Utkinton.",
    testimonials: [
      { quote: 'Delivered a flawless smart lighting design and high-end rewire on our barn conversion near Tarporley. Extremely respectful of heritage features.', author: 'E. Wright', role: 'Residential Client, Tarporley' },
      { quote: 'Installed a new three-phase supply for our equestrian yard near Bunbury. High standard of workmanship and complete attention to safety.', author: 'V. Stanhope', role: 'Farm Owner, Bunbury / Tarporley' }
    ]
  },
  {
    name: 'Mold', slug: 'mold',
    county: 'Flintshire (Wales)', distance: '13 miles',
    postcodes: ['CH7'],
    heroSubtext: 'NICEIC-approved electrical contractor delivering commercial, agricultural, and domestic electrical services in Mold (CH7) and Flintshire. Handling town-centre shop fit-outs, outbuilding three-phase supplies, landlord EICRs, and home rewires.',
    neighbourhoods: ['Buckley', 'New Brighton', 'Gwernaffield', 'Gwernymynydd', 'Leeswood', 'Nercwys', 'Pontblyddyn', 'Sychdyn', 'Alltami'],
    metaDesc: 'NICEIC-approved electricians in Mold (CH7). Commercial fit-outs, agricultural three-phase, outbuilding supplies, rewires, and EV chargers. Get a quote.',
    intro: `We provide fully certified, NICEIC-approved electrical services across Mold and the CH7 postcode.

Operating on both sides of the border, we handle commercial fit-outs and compliance testing in the town centre, agricultural and three-phase outbuilding installs in rural areas, and domestic services including rewires, consumer unit replacements, and EV charger installations.`,
    commercialAngle: "Mold town centre (Daniel Owen Square, the Market and High Street) drives most of our commercial work: small-to-mid fit-outs, landlord EICRs, emergency-lighting upgrades and PAT testing.",
    domesticAngle: "Rural demand is a big part of CH7: outbuilding supplies, three-phase for farms, smart-home and EV-charger installs for commuter villages, and full rewires on older stone-built properties.",
    testimonials: [
      { quote: 'Fitted a new three-phase supply and outbuilding distribution for our premises near Mold. Knowledgeable, friendly, and fully NICEIC compliant.', author: 'H. Davies', role: 'Business Owner, Mold' },
      { quote: 'Full rewire and consumer unit upgrade on our cottage near Buckley. Great advice on lighting positions and completely stress-free experience.', author: 'L. Owen', role: 'Homeowner, Buckley / Mold' }
    ]
  },
  {
    name: 'Deeside', slug: 'deeside',
    county: 'Flintshire (Wales)', distance: '10 miles',
    postcodes: ['CH5'],
    heroSubtext: 'NICEIC-approved industrial and commercial electricians serving Deeside Industrial Park and the CH5 area. Expert three-phase power distribution, factory shutdown maintenance, commercial EICR testing, and workplace EV charging installations.',
    neighbourhoods: ['Shotton', "Connah's Quay", 'Queensferry', 'Sealand', 'Hawarden', 'Garden City', 'Sandycroft', 'Mancot', 'Ewloe'],
    metaDesc: 'NICEIC-approved electricians in Deeside (CH5). Industrial three-phase, factory shutdowns, commercial fit-outs, full rewires, and EV chargers. Contact us.',
    intro: `Looking for a qualified industrial or commercial electrician in Deeside?

We support manufacturers on Deeside Industrial Park with three-phase power upgrades, machinery wiring, and preventative maintenance, while providing local retail fit-outs, landlord EICR safety checks, and domestic rewires across the CH5 area.`,
    commercialAngle: "Deeside Industrial Park tenants are the backbone of our commercial work here: scheduled maintenance, RCD and distribution upgrades, compliance testing and planned remedial works.",
    domesticAngle: "Shotton and Connah's Quay terraced stock needs full rewires and replacement consumer units more often than not, while Hawarden and Ewloe homeowners are mostly calling us for EV chargers, solar-PV add-ons and smart-home retrofits.",
    testimonials: [
      { quote: 'Extremely reliable electrical maintenance and machinery wiring on Deeside Industrial Park. Great communication and fair fixed quotes.', author: 'K. Williams', role: 'Operations Director, Deeside' },
      { quote: 'Prompt landlord EICR inspection across three commercial units in Shotton. Clear breakdown of remedial work and fast certification.', author: 'B. Thomas', role: 'Property Developer, Deeside' }
    ]
  },
  {
    name: 'Wirral', slug: 'wirral',
    county: 'Merseyside', distance: '20 miles',
    postcodes: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63', 'CH64'],
    heroSubtext: 'NICEIC-approved electrical contractor covering the entire Wirral peninsula (CH41 to CH64). Delivering commercial fit-outs, industrial three-phase maintenance at Bromborough, coastal period rewires in Heswall and Caldy, and landlord EICR safety reports.',
    neighbourhoods: ['Birkenhead', 'Prenton', 'Wallasey', 'New Brighton', 'Bebington', 'Heswall', 'West Kirby', 'Hoylake', 'Bromborough', 'Moreton', 'Upton', 'Greasby', 'Port Sunlight', 'Eastham', 'Caldy', 'Neston', 'Willaston', 'Ness'],
    metaDesc: 'NICEIC-approved electricians in Wirral (CH41–CH49, CH60–CH64). Commercial fit-outs, industrial three-phase, EICRs & EV chargers. Contact us for a quote.',
    intro: `Looking for a reliable, NICEIC-approved electrician in Wirral?

We provide comprehensive commercial, industrial, and domestic electrical services across the peninsula, covering Birkenhead, Wallasey, Heswall, West Kirby, Neston, and all surrounding areas.

From three-phase industrial installations at Bromborough to retail fit-outs, landlord EICRs, and full domestic rewires, our in-house team delivers neat, compliant work with transparent, fixed pricing.`,
    commercialAngle: "Wirral's commercial demand spans the Wirral International Business Park and Bromborough's manufacturing estates, the regenerating Birkenhead waterfront around Wirral Waters and Twelve Quays, and the retail and hospitality trade at New Brighton's Marine Point, Birkenhead's Grange and Pyramids precincts and the West Kirby and Heswall high streets. We deliver design-and-install fit-outs, landlord EICRs ahead of lease renewals, emergency-lighting certification and planned maintenance contracts.",
    domesticAngle: "The peninsula's housing stock runs the full range: Victorian and Edwardian terraces in Birkenhead, Tranmere and Wallasey needing full rewires and replacement consumer units; interwar semis across Bebington, Eastham and Moreton; and higher-end detached and coastal property in Heswall, Caldy, Neston, Ness, West Kirby and Hoylake where the calls are for smart-lighting schemes, garden and outbuilding supplies, and OZEV-approved EV chargers with load management.",
    testimonials: [
      { quote: 'Following our electrical inspection in Prenton, Carter Electrical completed a full distribution upgrade with minimal disruption to daily operations.', author: 'P. Harrison', role: 'Site Supervisor, Prenton (Wirral)' },
      { quote: 'Fitted a home EV charger and upgraded our consumer unit in Heswall. Extremely neat job, explained everything clearly, and great value.', author: 'N. Price', role: 'Homeowner, Heswall (Wirral)' }
    ]
  }
];

// Per-location FAQs: same structure as window.CARTER.locationFaqs so the
// noscript version mirrors what React renders.
const faqsMap = {
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

function buildFaqs(area) {
  return faqsMap[area.slug] || [];
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildHtml(area) {
  const url = `${COMPANY.site}/electricians-${area.slug}.html`;
  const title = `Electricians in ${area.name} | NICEIC-Approved | Carter Electrical`;
  const faqs = buildFaqs(area);
  const chesterObj = { name: 'Chester', slug: 'chester' };
  const adjacentList = area.adjacentSilos && area.adjacentSilos.length
    ? area.adjacentSilos.map(s => areas.find(a => a.slug === s)).filter(Boolean)
    : areas.filter(a => a.slug !== area.slug);
  const otherAreas = [chesterObj, ...adjacentList].filter(a => a && a.slug !== area.slug);

  // Schema: BreadcrumbList + LocalBusiness (Electrician) + FAQPage + Service
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
        '@type': ['LocalBusiness', 'Electrician'],
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
      <h1>Electricians in ${esc(area.name)} - NICEIC-approved</h1>
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

      <h2>Our electrical services</h2>
      <ul>
        <li>Commercial fit-outs, distribution, emergency lighting and fire alarm</li>
        <li>Industrial three-phase, motor control and factory shutdowns</li>
        <li>Full and partial domestic rewires, replacement consumer units</li>
        <li>EICR testing, landlord safety reports and PAT testing</li>
        <li>OZEV-approved EV charger installation and solar-PV integration</li>
      </ul>

      <h2>Local Area Map - Coverage in ${esc(area.name)}</h2>
      <p>Interactive coverage map showing our service radius across ${esc(area.name)} and surrounding postcodes (${area.postcodes.map(esc).join(', ')}).</p>

      <h2>Client Testimonials in ${esc(area.name)}</h2>
      ${(area.testimonials || []).map(t => `<blockquote><p>"${esc(t.quote)}"</p><cite>- ${esc(t.author)}, ${esc(t.role)}</cite></blockquote>`).join('\n      ')}

      <h2>Frequently asked questions</h2>
      ${faqs.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('\n      ')}

      <h2>Other areas we cover</h2>
      <ul>
        ${otherAreas.map(a => '<li><a href="' + (a.slug === 'chester' ? '/' : '/electricians-' + a.slug + '.html') + '">Electricians in ' + esc(a.name) + '</a></li>').join('\n        ')}
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
  gtag('config', 'AW-18182294304');
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
