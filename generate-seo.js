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
    postcodes: ['CH41', 'CH42', 'CH43', 'CH44', 'CH45', 'CH46', 'CH47', 'CH48', 'CH49', 'CH60', 'CH61', 'CH62', 'CH63', 'CH64'],
    neighbourhoods: ['Birkenhead', 'Prenton', 'Wallasey', 'New Brighton', 'Bebington', 'Heswall', 'West Kirby', 'Hoylake', 'Bromborough', 'Moreton', 'Upton', 'Greasby', 'Port Sunlight', 'Eastham', 'Caldy', 'Neston', 'Willaston', 'Ness'],
    metaDesc: 'NICEIC-approved electricians in Wirral (CH41–CH49, CH60–CH64). Commercial fit-outs, industrial three-phase, EICRs & EV chargers. Contact us for a quote.',
    intro: `Looking for a reliable, NICEIC-approved electrician in Wirral?

We provide comprehensive commercial, industrial, and domestic electrical services across the peninsula, covering Birkenhead, Wallasey, Heswall, West Kirby, Neston, and all surrounding areas.

From three-phase industrial installations at Bromborough to retail fit-outs, landlord EICRs, and full domestic rewires, our in-house team delivers neat, compliant work with transparent, fixed pricing.`,
    commercialAngle: "Wirral's commercial demand spans the Wirral International Business Park and Bromborough's manufacturing estates, the regenerating Birkenhead waterfront around Wirral Waters and Twelve Quays, and the retail and hospitality trade at New Brighton's Marine Point, Birkenhead's Grange and Pyramids precincts and the West Kirby and Heswall high streets. We deliver design-and-install fit-outs, landlord EICRs ahead of lease renewals, emergency-lighting certification and planned maintenance contracts.",
    domesticAngle: "The peninsula's housing stock runs the full range: Victorian and Edwardian terraces in Birkenhead, Tranmere and Wallasey needing full rewires and replacement consumer units; interwar semis across Bebington, Eastham and Moreton; and higher-end detached and coastal property in Heswall, Caldy, Neston, Ness, West Kirby and Hoylake where the calls are for smart-lighting schemes, garden and outbuilding supplies, and OZEV-approved EV chargers with load management."
  }
];

// Per-location FAQs: same structure as window.CARTER.locationFaqs so the
// noscript version mirrors what React renders.
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
      a: 'For commercial premises across Wirral (from retail units on Heswall High Street to light industrial sites at Wirral International Business Park in Bromborough), you should ensure your contractor is registered with a competent person scheme such as the NICEIC. Carter Electrical is fully NICEIC-approved, meaning we are regularly assessed on health and safety compliance, holds £5M public liability insurance, and can self-certify all commercial works.'
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
