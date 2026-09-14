// Location pages for targeted areas - long-form, unique per-city content to avoid
// thin/duplicate-content penalties on service+location pages.

const {
  Header,
  Footer,
  TrustBar,
  CarterPlaceholder,
  TweaksPanel,
  useScrollReveal,
  PageHero
} = window;
function LocationPage({
  locationName
}) {
  useScrollReveal();
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  React.useEffect(() => {
    const handleContactClick = e => {
      const a = e.target.closest('a');
      if (a && a.getAttribute('href') === 'contact.html') {
        e.preventDefault();
        setIsContactModalOpen(true);
      }
    };
    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);
  const area = CARTER.areas.find(a => a.name === locationName) || {
    name: locationName,
    slug: locationName.toLowerCase().replace(/\s+/g, '-'),
    cases: 0,
    postcodes: [],
    neighbourhoods: [],
    intro: 'NICEIC-approved electrical services across ' + locationName + '.',
    commercialAngle: '',
    domesticAngle: '',
    featuredProject: '',
    landmarks: [],
    distance: '',
    county: ''
  };
  const slug = area.slug;
  const isArchetypeB = slug === 'tarporley' || slug === 'frodsham';
  const isArchetypeC = slug === 'deeside' || slug === 'ellesmere-port';
  const isArchetypeA = !isArchetypeB && !isArchetypeC; // mold, wrexham, northwich, wirral

  const faqs = CARTER.locationFaqs ? CARTER.locationFaqs(area) : [];
  const relatedCases = CARTER.cases.filter(c => (c.location || '').toLowerCase().indexOf(locationName.toLowerCase()) !== -1 || locationName === 'Ellesmere Port' && c.id === 'prenton-wirral');
  const displayCases = relatedCases.length > 0 ? relatedCases : CARTER.cases.filter(c => c.id === 'old-dukes' || c.id === 'bryn-rhiw');
  const chesterArea = CARTER.areas.find(a => a.slug === 'chester');
  const adjacentList = area.adjacentSilos && area.adjacentSilos.length ? area.adjacentSilos.map(s => CARTER.areas.find(a => a.slug === s)).filter(Boolean) : CARTER.areas.filter(a => a.name !== locationName).slice(0, 6);
  const otherAreas = [chesterArea, ...adjacentList].filter(a => a && a.name !== locationName);

  // Common Reusable Components
  const IntroSection = /*#__PURE__*/React.createElement("section", {
    key: "intro",
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '60px',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Local Electrical Contractor"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "NICEIC-approved electrical contractor serving ", locationName, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, (area.intro || '').split('\n\n').map((para, idx) => /*#__PURE__*/React.createElement("p", {
    key: idx,
    className: idx === 0 ? "lede" : "",
    style: {
      marginTop: idx === 0 ? 0 : 14,
      marginBottom: 0,
      color: idx === 0 ? 'var(--dark)' : 'var(--muted-1)',
      lineHeight: 1.6
    }
  }, para)))), /*#__PURE__*/React.createElement("div", {
    className: "area-image",
    style: {
      height: '100%',
      width: '100%',
      position: 'relative',
      minHeight: '300px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `electricians-${area.slug}.jpg`,
    alt: `Electricians in ${locationName}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 1,
      background: 'var(--rule)',
      border: '1px solid var(--rule)',
      marginTop: 40
    }
  }, [{
    k: 'Coverage',
    v: area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : locationName
  }, {
    k: 'Service Model',
    v: 'Booked appointments'
  }, {
    k: 'Accreditation',
    v: 'NICEIC Approved'
  }, {
    k: 'Insurance',
    v: '£5M Public Liability'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--white)',
      padding: '24px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--muted)',
      textTransform: 'uppercase'
    }
  }, r.k), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 16,
      fontWeight: 500,
      marginTop: 6
    }
  }, r.v))))));
  const ServicesSection = /*#__PURE__*/React.createElement("section", {
    key: "services",
    className: "section-y reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Service Scope"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Our electrical services", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "In-house NICEIC engineers providing planned electrical installations, testing and safety upgrades.")), /*#__PURE__*/React.createElement("div", {
    className: "locations-services-grid"
  }, CARTER.services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.slug,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      overflow: 'hidden'
    }
  }, (() => {
    let localImgSrc = s.imgSrc;
    let localAlt = `${s.title} in ${locationName}`;
    if (s.slug === 'commercial') {
      localImgSrc = `uploads/commercial-electrical-services-${area.slug}.jpg`;
      localAlt = `Commercial electrical services in ${locationName}`;
    } else if (s.slug === 'industrial') {
      localImgSrc = `uploads/industrial-electrical-services-${area.slug}.jpg`;
      localAlt = `Industrial electrical services in ${locationName}`;
    } else if (s.slug === 'domestic') {
      localImgSrc = `uploads/domestic-electrical-services-${area.slug}.jpg`;
      localAlt = `Domestic electrical services in ${locationName}`;
    } else if (s.slug === 'testing') {
      localImgSrc = `uploads/electrical-testing-inspection-${area.slug}.jpg`;
      localAlt = `Electrical testing and inspection in ${locationName}`;
    } else if (s.slug === 'renewables') {
      localImgSrc = `uploads/ev-charger-installation-${area.slug}.jpg`;
      localAlt = `EV charger installation in ${locationName}`;
    }
    return localImgSrc ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        position: 'relative',
        padding: '16px 16px 0 16px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: localImgSrc,
      alt: localAlt,
      style: {
        width: '100%',
        height: '220px',
        objectFit: 'contain',
        display: 'block',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
      }
    })) : null;
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px',
      paddingTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-glyph",
    style: {
      width: 40,
      height: 40,
      color: 'var(--accent)',
      flexShrink: 0
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg[s.icon]
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "h-3",
    style: {
      margin: 0
    }
  }, s.title === 'Commercial' || s.title === 'Industrial' || s.title === 'Domestic' ? `${s.title} Electrical` : s.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.6,
      marginBottom: 16
    }
  }, s.lede), /*#__PURE__*/React.createElement("ul", {
    className: "bullets",
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, s.bullets && s.bullets.slice(0, 4).map((bullet, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx,
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 8,
      fontSize: '0.9rem',
      color: 'var(--muted-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.check
    }
  }), bullet)))))))));
  const CommercialDomesticDeep = (area.commercialAngle || area.domesticAngle) && /*#__PURE__*/React.createElement("section", {
    key: "deep-angles",
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 40
    }
  }, area.commercialAngle && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Commercial Focus"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Commercial Electrical Services", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 16
    }
  }, area.commercialAngle), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "Scopes we routinely quote: full distribution board upgrades, emergency lighting to BS 5266, retail and office fit-outs, data containment, and landlord EICR inspection reports.")), area.domesticAngle && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Domestic Focus"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Domestic Electrical Upgrades", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 16
    }
  }, area.domesticAngle), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 14
    }
  }, "Common domestic projects: consumer unit replacements, full and partial rewires, OZEV-approved EV charger installs, smart home lighting, and outbuilding power supplies."))));
  const ProcessSectionB = /*#__PURE__*/React.createElement("section", {
    key: "process-b",
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "How We Work"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Our 3-Step Project Process", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Transparent, professional electrical installations delivered on agreed schedules.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24
    }
  }, [{
    step: '01',
    title: 'Site Survey & Scoping',
    desc: 'We inspect your electrical installation and review your project requirements in detail.'
  }, {
    step: '02',
    title: 'Itemised Fixed Quote',
    desc: 'You receive a clear, written specification detailing all materials, labor, and NICEIC certification.'
  }, {
    step: '03',
    title: 'Scheduled Work',
    desc: 'Our qualified engineers carry out the work to regulation standards with minimal disruption.'
  }].map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      padding: 32,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 28,
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, item.step), /*#__PURE__*/React.createElement("h3", {
    className: "h-3",
    style: {
      marginTop: 16
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      marginTop: 12,
      lineHeight: 1.6
    }
  }, item.desc))))));
  const ComplianceSectionC = /*#__PURE__*/React.createElement("section", {
    key: "compliance-c",
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Health & Safety Compliance"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Commercial Standards & Safety First", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Full RAMS documentation, \xA35M Public Liability Insurance, and strict adherence to BS 7671 standards for industrial and commercial environments.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 20
    }
  }, [{
    title: 'NICEIC Approved',
    detail: 'Full contractor approval for commercial & industrial power.'
  }, {
    title: 'RAMS Compliant',
    detail: 'Site-specific Risk Assessments and Method Statements issued prior to work.'
  }, {
    title: 'Minimal Disruption',
    detail: 'Out-of-hours and planned shutdown scheduling to protect operational continuity.'
  }, {
    title: 'Digital Certification',
    detail: 'NICEIC compliance certificates delivered within 48 hours of completion.'
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      padding: 24,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--muted-2)',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, c.detail))))));
  const NeighbourhoodsSection = area.neighbourhoods && area.neighbourhoods.length > 0 && /*#__PURE__*/React.createElement("section", {
    key: "neighbourhoods",
    className: "section-y reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Coverage Areas"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Sub-areas & postcodes covered", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Covering ", area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : locationName, " and surrounding localities:")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 1,
      background: 'var(--rule)',
      border: '1px solid var(--rule)',
      marginTop: 30
    }
  }, area.neighbourhoods.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--white)',
      padding: '18px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.pin
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, n))))));
  const MapSection = /*#__PURE__*/React.createElement("section", {
    key: "map",
    className: "section-y light reveal",
    id: "map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Local Area Map"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Where We Serve", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Our qualified engineers provide scheduled coverage across ", locationName, " and neighbouring postcodes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '400px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      border: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: `Map of coverage area in ${locationName}`,
    width: "100%",
    height: "100%",
    style: {
      border: 0
    },
    loading: "lazy",
    allowFullScreen: true,
    src: `https://maps.google.com/maps?q=${encodeURIComponent(locationName + ', UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`
  }))));
  const TestimonialsSection = area.testimonials && area.testimonials.length > 0 && /*#__PURE__*/React.createElement("section", {
    key: "testimonials",
    className: "section-y reveal",
    id: "testimonials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Client Feedback"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Testimonials", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Feedback from commercial and domestic clients across ", locationName, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 24
    }
  }, area.testimonials.map((t, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      borderRadius: '16px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontSize: '20px',
      marginBottom: 12
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink)',
      fontSize: '1.05rem',
      lineHeight: 1.6,
      fontStyle: 'italic',
      margin: 0
    }
  }, "\"", t.quote, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--ink)',
      fontSize: '15px'
    }
  }, t.author), /*#__PURE__*/React.createElement("small", {
    style: {
      color: 'var(--muted)',
      fontSize: '13px'
    }
  }, t.role))))))));
  const FAQsSection = faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
    key: "faqs",
    className: "section-y reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Common Questions"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Frequently asked questions", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'grid',
      gap: 1,
      background: 'var(--rule)',
      border: '1px solid var(--rule)'
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    style: {
      background: 'var(--white)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("summary", {
    className: "display",
    style: {
      fontSize: 17,
      fontWeight: 500,
      cursor: 'pointer',
      listStyle: 'none'
    }
  }, f.q), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 14
    }
  }, f.a))))));
  const NearbySection = otherAreas.length > 0 && /*#__PURE__*/React.createElement("section", {
    key: "nearby",
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Also covering"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Nearby coverage", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "We cover the wider ", area.county || 'North West', " region from our Chester base:")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 12,
      marginTop: 24
    }
  }, otherAreas.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.name,
    href: a.slug === 'chester' ? '/' : `electricians-${a.slug}.html`,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      padding: '18px 20px',
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontWeight: 500,
      fontSize: 15
    }
  }, "Electricians in ", a.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))))));

  // Construct page layout based on Archetype
  let contentBlocks = [];
  if (isArchetypeB) {
    // Archetype B (Residential & Villages: Tarporley, Frodsham)
    contentBlocks = [IntroSection, CommercialDomesticDeep, ServicesSection, NeighbourhoodsSection, TestimonialsSection, MapSection, FAQsSection, NearbySection];
  } else if (isArchetypeC) {
    // Archetype C (Commercial & Industrial Hubs: Deeside, Ellesmere Port)
    contentBlocks = [IntroSection, ComplianceSectionC, CommercialDomesticDeep, ServicesSection, MapSection, NeighbourhoodsSection, TestimonialsSection, FAQsSection, NearbySection];
  } else {
    // Archetype A (Regional Hubs: Mold, Wrexham, Northwich, Wirral)
    contentBlocks = [IntroSection, TestimonialsSection, ServicesSection, CommercialDomesticDeep, MapSection, NeighbourhoodsSection, FAQsSection, NearbySection];
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "areas",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    title: `Electricians in ${locationName}`,
    titleAccent: " - NICEIC-approved.",
    subtext: `NICEIC-approved commercial, industrial and domestic electrical contractor serving ${locationName}${area.postcodes && area.postcodes.length ? ' (' + area.postcodes.join(', ') + ')' : ''} and the surrounding area. Booked site surveys, EICR testing, full rewires and commercial installations.`,
    ctas: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "contact.html",
      className: "btn btn-primary"
    }, "Get Your Free Quote", /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.arrow
      }
    })), /*#__PURE__*/React.createElement("a", {
      href: CARTER.company.phoneHref,
      className: "btn btn-ghost-light"
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.phone
      },
      style: {
        width: 14,
        height: 14
      }
    }), "Call ", CARTER.company.phone))
  }), /*#__PURE__*/React.createElement(TrustBar, {
    area: area
  }), contentBlocks, /*#__PURE__*/React.createElement("section", {
    className: "cta-band reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Need an electrician in ", locationName, "?", /*#__PURE__*/React.createElement("br", null), "Get in touch today", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Brief your project requirements. Our team will follow up promptly with a written quote.")), /*#__PURE__*/React.createElement("div", {
    className: "cta-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-mono"
  }, "Direct line"), /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.phoneHref,
    className: "phone-big"
  }, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "\xB7"), " ", CARTER.company.phone), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary"
  }, "Get Your Free Quote ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--muted-2)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.lock || '&#128274;'
    },
    style: {
      display: 'inline-block',
      width: 12,
      marginRight: 6,
      verticalAlign: 'middle'
    }
  }), "100% Secure. No obligation. Your data is strictly protected."))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null), /*#__PURE__*/React.createElement(ContactModal, {
    isOpen: isContactModalOpen,
    onClose: () => setIsContactModalOpen(false)
  }));
}
function ContactModal({
  isOpen,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [data, setData] = React.useState({
    service: '',
    sector: '',
    scope: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    postcode: '',
    timing: '',
    details: ''
  });
  const [errors, setErrors] = React.useState({});

  // Reset form when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setStep(0);
      setSubmitted(false);
      setIsSubmitting(false);
      setData({
        service: '',
        sector: '',
        scope: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        postcode: '',
        timing: '',
        details: ''
      });
      setErrors({});
    }
  }, [isOpen]);
  const update = patch => setData(d => ({
    ...d,
    ...patch
  }));
  const setErr = (key, msg) => setErrors(e => ({
    ...e,
    [key]: msg
  }));
  const clearErr = key => setErrors(e => {
    const n = {
      ...e
    };
    delete n[key];
    return n;
  });
  const services = ['Commercial', 'Industrial', 'Domestic', 'Renewables / EV', 'Testing / EICR', 'Maintenance'];
  const sectors = ['Office', 'Retail', 'Hospitality', 'Healthcare', 'Warehouse', 'Residential', 'Other'];
  const timings = ['Within a month', '1–3 months', '3+ months / scoping'];
  const validateStep = () => {
    const errs = {};
    if (step === 0) {
      if (!data.service) errs.service = 'Pick a service area';
    }
    if (step === 1) {
      if (!data.scope) errs.scope = 'Tell us briefly what you need';
      if (!data.timing) errs.timing = 'Pick a timeframe';
    }
    if (step === 2) {
      if (!data.name) errs.name = 'Your name, please';
      if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = 'A valid email address';
      if (!data.phone || data.phone.replace(/\D/g, '').length < 9) errs.phone = 'A reachable UK number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const next = () => {
    if (validateStep()) setStep(s => s + 1);
  };
  const back = () => setStep(s => Math.max(0, s - 1));
  const submit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        window.location.href = 'thank-you.html';
      } else {
        alert('There was a problem submitting your enquiry. Please try again or call us directly.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again or call us directly.');
    }
    setIsSubmitting(false);
  };
  const refNum = 'CEC-' + Math.floor(1000 + Math.random() * 9000) + '-' + new Date().getFullYear();

  // Close when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `contact-modal-overlay ${isOpen ? 'is-open' : ''}`,
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-modal-container",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "contact-modal-close",
    onClick: onClose,
    "aria-label": "Close form"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l12 12M16 4L4 16"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-stepper"
  }, ['Service', 'Project', 'Details'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `form-step ${step === i ? 'active' : step > i ? 'done' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, step > i ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", null, s)))), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 12
    }
  }, "Step 1 of 3"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      margin: '0 0 24px'
    }
  }, "What can we help with?"), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Service area ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "chip-group"
  }, services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    className: `chip ${data.service === s ? 'selected' : ''}`,
    onClick: () => {
      update({
        service: s
      });
      clearErr('service');
    }
  }, data.service === s && /*#__PURE__*/React.createElement("span", {
    className: "tick",
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.check
    }
  }), s))), errors.service && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.service)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Sector (optional)"), /*#__PURE__*/React.createElement("div", {
    className: "chip-group"
  }, sectors.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    className: `chip ${data.sector === s ? 'selected' : ''}`,
    onClick: () => update({
      sector: data.sector === s ? '' : s
    })
  }, s))))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 12
    }
  }, "Step 2 of 3"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      margin: '0 0 24px'
    }
  }, "Tell us about the project."), /*#__PURE__*/React.createElement("div", {
    className: `field ${errors.scope ? 'error' : ''}`
  }, /*#__PURE__*/React.createElement("label", null, "Scope in a couple of sentences ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    value: data.scope,
    onChange: e => {
      update({
        scope: e.target.value
      });
      if (errors.scope) clearErr('scope');
    },
    placeholder: "e.g. Office fit-out, ~1,200 sq ft, new distribution, LED lighting, fire alarm integration."
  }), errors.scope && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.scope)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "When do you need it done? ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "chip-group"
  }, timings.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    className: `chip ${data.timing === t ? 'selected' : ''}`,
    onClick: () => {
      update({
        timing: t
      });
      clearErr('timing');
    }
  }, t))), errors.timing && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.timing)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Site postcode (optional)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: data.postcode,
    onChange: e => update({
      postcode: e.target.value.toUpperCase()
    }),
    placeholder: "e.g. CH1 2AB"
  }))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 12
    }
  }, "Step 3 of 3"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      margin: '0 0 24px'
    }
  }, "How do we reach you?"), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: `field ${errors.name ? 'error' : ''}`
  }, /*#__PURE__*/React.createElement("label", null, "Your name ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: data.name,
    onChange: e => {
      update({
        name: e.target.value
      });
      if (errors.name) clearErr('name');
    }
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Company (optional)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: data.company,
    onChange: e => update({
      company: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: `field ${errors.email ? 'error' : ''}`
  }, /*#__PURE__*/React.createElement("label", null, "Email ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: data.email,
    onChange: e => {
      update({
        email: e.target.value
      });
      if (errors.email) clearErr('email');
    }
  }), errors.email && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: `field ${errors.phone ? 'error' : ''}`
  }, /*#__PURE__*/React.createElement("label", null, "Phone ", /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: data.phone,
    onChange: e => {
      update({
        phone: e.target.value
      });
      if (errors.phone) clearErr('phone');
    }
  }), errors.phone && /*#__PURE__*/React.createElement("span", {
    className: "err-msg"
  }, errors.phone))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Anything else we should know?"), /*#__PURE__*/React.createElement("textarea", {
    value: data.details,
    onChange: e => update({
      details: e.target.value
    }),
    placeholder: "Access, timings, existing documentation, other contractors on site\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, step > 0 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "back-link",
    onClick: back,
    disabled: isSubmitting
  }, "\u2190 Back") : /*#__PURE__*/React.createElement("span", null), step < 2 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: next
  }, "Continue ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: submit,
    disabled: isSubmitting
  }, isSubmitting ? 'Sending...' : 'Send enquiry', !isSubmitting && /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))))));
}
window.LocationPage = LocationPage;