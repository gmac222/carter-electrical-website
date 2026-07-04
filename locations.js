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
  const faqs = CARTER.locationFaqs ? CARTER.locationFaqs(area) : [];
  const relatedCases = CARTER.cases.filter(c => (c.location || '').toLowerCase().indexOf(locationName.toLowerCase()) !== -1 || locationName === 'Ellesmere Port' && c.id === 'prenton-wirral');
  const displayCases = relatedCases.length > 0 ? relatedCases : CARTER.cases.filter(c => c.id === 'old-dukes' || c.id === 'bryn-rhiw');
  const otherAreas = CARTER.areas.filter(a => a.name !== locationName).slice(0, 6);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "areas",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Local Coverage",
    sectionNum: "03.1 / Location",
    title: `Electricians in ${locationName}`,
    titleAccent: " - NICEIC-approved.",
    subtext: `NICEIC-approved commercial, industrial, domestic and renewables electricians serving ${locationName}${area.postcodes && area.postcodes.length ? ' (' + area.postcodes.join(', ') + ')' : ''} and the surrounding ${area.county || 'area'}. EICR testing, EV chargers, full rewires and commercial fit-outs.`,
    ctas: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
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
    }), "Call ", CARTER.company.phone)), /*#__PURE__*/React.createElement("div", {
      className: "label-mono",
      style: {
        color: 'rgba(255,255,255,0.6)',
        marginTop: '4px'
      }
    }, "Takes 60 seconds \u2022 We'll be in touch within 48 hours"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-strip wrap",
    style: {
      maxWidth: '100%',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'contents'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-strip",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Coverage"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, locationName, " & ", area.county || 'Surrounds')), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Assurance"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Fully Insured \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Guaranteed"))), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Accreditation"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "NICEIC ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Approved"))), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Sectors"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Commercial \xB7 Domestic \xB7 Industrial")))))), /*#__PURE__*/React.createElement(TrustBar, {
    area: area
  }), /*#__PURE__*/React.createElement("section", {
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
  }, "Local Electricians"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Approved electricians in ", locationName, ", done properly the first time", /*#__PURE__*/React.createElement("span", {
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
    k: 'Response time',
    v: area.responseTime || 'Within 48 hours'
  }, {
    k: 'Accreditation',
    v: 'NICEIC + OZEV'
  }, {
    k: 'Documented projects',
    v: (area.cases || 0) + ' in ' + locationName
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
  }, r.v)))))), /*#__PURE__*/React.createElement("section", {
    className: "section-y reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Our electrical services", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Five service lines, one in-house team. Here is how we support local businesses, industrial facilities and homeowners.")), /*#__PURE__*/React.createElement("div", {
    className: "locations-services-grid"
  }, CARTER.services.map((s, i) => /*#__PURE__*/React.createElement("div", {
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
  }), bullet))))))))), (area.commercialAngle || area.domesticAngle) && /*#__PURE__*/React.createElement("section", {
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
  }, "Commercial Services"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Commercial Electrical", /*#__PURE__*/React.createElement("span", {
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
  }, "Typical scopes we quote for: full distribution and sub-mains replacements, emergency-lighting upgrades to BS 5266, BS 5839-1 fire detection, retail and restaurant fit-outs, data containment and structured cabling, EICR remedials following a failed report, and scheduled shutdowns timed around the business's trading hours.")), area.domesticAngle && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Domestic Services"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Domestic Electrical", /*#__PURE__*/React.createElement("span", {
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
  }, "Common domestic services we provide: full and partial rewires, replacement consumer units (fuseboards), OZEV-approved EV charger installs with load management, smart-lighting and smart-heating retrofits, extensions, loft conversions and garage conversions, external lighting and outbuilding supplies, and fault finding when a main breaker keeps tripping.")))), area.neighbourhoods && area.neighbourhoods.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section-y reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Neighbourhoods served"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Areas we cover", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Our local engineers cover all area postcodes, including ", area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : '', ". If your address is inside any of the following neighbourhoods, you're well inside our core coverage zone:")), /*#__PURE__*/React.createElement("div", {
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
  }, n)))), area.landmarks && area.landmarks.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 28,
      maxWidth: '70ch'
    }
  }, "We also work around key local landmarks and business parks, including ", area.landmarks.join(', '), ". If you're scoping electrical work at one of these or on a nearby site, we've likely been on-site in the area recently - ask us for a reference."))), area.featuredProject && /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal",
    id: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Recent Work"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Featured project & local work", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, area.featuredProject), area.cases > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      lineHeight: 1.7,
      marginTop: 16
    }
  }, "We have completed ", area.cases, " documented local projects. Below is a selection illustrating our standard of work:")), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, displayCases.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: `case-${c.id}.html`,
    className: "case-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-visual"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: c.imgSrc,
    metaTag: `${c.sector} · ${c.subsector}`,
    titleCaption: `${c.title} - ${c.location}`,
    year: c.year,
    hue: c.hue
  })), /*#__PURE__*/React.createElement("div", {
    className: "case-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "case-tag primary"
  }, c.sector), c.scope.slice(0, 2).map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "case-tag"
  }, s))), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.blurb), /*#__PURE__*/React.createElement("span", {
    className: "link"
  }, "View project", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))))), faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, f.a)))))), otherAreas.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, "We cover the wider ", area.county || 'North West', " region from our Chester base. If you are scoping work outside this primary zone, the following areas are also within our core patch:")), /*#__PURE__*/React.createElement("div", {
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
  })))))), /*#__PURE__*/React.createElement("section", {
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
  }, "Brief the scope in three steps. We'll be in touch within 48 hours.")), /*#__PURE__*/React.createElement("div", {
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