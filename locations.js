// Location pages for targeted areas — long-form, unique per-city content to avoid
// thin/duplicate-content penalties on service+location pages.

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal,
  PageHero
} = window;
function LocationPage({
  locationName
}) {
  useScrollReveal();
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
    responseTime: 'within the same working day',
    distance: '',
    county: ''
  };
  const faqs = CARTER.locationFaqs ? CARTER.locationFaqs(area) : [];
  const relatedCases = CARTER.cases.filter(c => (c.location || '').toLowerCase().indexOf(locationName.toLowerCase()) !== -1);
  const otherAreas = CARTER.areas.filter(a => a.name !== locationName).slice(0, 6);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "areas",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: `Electricians in ${locationName}`,
    sectionNum: "03.1 / Location",
    title: `Local electricians covering ${locationName}`,
    titleAccent: `— on-site in ${area.responseTime || 'the same working day'}.`,
    subtext: `NICEIC-approved commercial, industrial, domestic and renewables electricians serving ${locationName}${area.postcodes && area.postcodes.length ? ' (' + area.postcodes.join(', ') + ')' : ''} and the surrounding ${area.county || 'area'}. EICR testing, EV chargers, full rewires and commercial fit-outs — delivered by our in-house team from our Christleton base, ${area.distance || 'a short drive from'} ${locationName}.`,
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
    }, "Takes 60 seconds \u2022 Receive a proposal within 24 hours"))
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
  }, "Response Time"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, area.responseTime || 'Same-day'), " on-site")), /*#__PURE__*/React.createElement("div", {
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
  }, "Commercial \xB7 Domestic \xB7 Industrial")))))), /*#__PURE__*/React.createElement("section", {
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
  }, "Local Electricians in ", locationName), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Electrical work in ", locationName, ", done properly the first time", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 'auto'
    }
  }, area.intro)), /*#__PURE__*/React.createElement("div", {
    className: "area-image",
    style: {
      height: '100%',
      width: '100%',
      position: 'relative',
      minHeight: '300px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `Carter Electrical Contractors man with clipboard.jpg`,
    alt: `${locationName} - Carter Electrical Contractors man with clipboard`,
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
    v: area.responseTime || 'Same-day'
  }, {
    k: 'Distance from HQ',
    v: area.distance || '—'
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
  }, "The full electrical scope for ", locationName, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Five service lines, one in-house team. Here's how each applies to the ", locationName, " market \u2014 and what our ", locationName, " clients most often call us about.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: 40
    }
  }, CARTER.services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.slug,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--rule)',
      overflow: 'hidden'
    }
  }, s.imgSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      position: 'relative',
      padding: '16px 16px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.imgSrc,
    alt: `${s.title} in ${locationName}`,
    style: {
      width: '100%',
      height: '220px',
      objectFit: 'contain',
      display: 'block',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }, s.title, " electricians in ", locationName)), /*#__PURE__*/React.createElement("p", {
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
  }, "Commercial in ", locationName), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Commercial electricians in ", locationName, /*#__PURE__*/React.createElement("span", {
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
  }, "Typical scopes we quote for in ", locationName, ": full distribution and sub-mains replacements, emergency-lighting upgrades to BS 5266, BS 5839-1 fire detection, retail and restaurant fit-outs, data containment and structured cabling, EICR remedials following a failed report, and scheduled shutdowns timed around the business's trading hours.")), area.domesticAngle && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Domestic in ", locationName), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "Domestic electricians in ", locationName, /*#__PURE__*/React.createElement("span", {
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
  }, "Common domestic jobs across ", locationName, ": full and partial rewires, consumer-unit (fuseboard) upgrades, OZEV-approved EV charger installs with load management, smart-lighting and smart-heating retrofits, extensions, loft conversions and garage conversions, external lighting and outbuilding supplies, and fault finding when a main breaker keeps tripping.")))), area.neighbourhoods && area.neighbourhoods.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, "Areas of ", locationName, " we cover", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "Our electricians work across every part of ", locationName, area.postcodes && area.postcodes.length ? ' — covering ' + area.postcodes.join(', ') : '', ". If your address is inside any of the following neighbourhoods, you're well inside our core coverage zone:")), /*#__PURE__*/React.createElement("div", {
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
  }, "We also work around key ", locationName, " locations including ", area.landmarks.join(', '), ". If you're scoping electrical work at one of these or on a nearby site, we've likely been on-site in the area recently \u2014 ask us for a reference."))), area.featuredProject && /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Recent work in ", locationName), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginTop: 10
    }
  }, "A ", locationName, " project we delivered", /*#__PURE__*/React.createElement("span", {
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
  }, "We've completed ", area.cases, " documented electrical installations or compliance programmes in and around ", locationName, ". Our work is built on reliability, transparent pricing (the number on the quote is the number on the invoice), and rigorous NICEIC-standard safety."), relatedCases.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html",
    className: "btn btn-ghost-dark"
  }, "See related case studies ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))), faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section-y reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Questions we get from ", locationName), /*#__PURE__*/React.createElement("h2", {
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
  }, "Other areas near ", locationName, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 16
    }
  }, "We cover the wider ", area.county || 'North West', " region from our Chester base. If you're scoping work outside ", locationName, " proper, the following are also in our core patch:")), /*#__PURE__*/React.createElement("div", {
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
  }, "Need an electrician in ", locationName, "?", /*#__PURE__*/React.createElement("br", null), "Let's scope it properly", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Brief the scope in three steps. You'll hear back within one working day.")), /*#__PURE__*/React.createElement("div", {
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
  }), "100% Secure. Zero obligation. Your data is strictly protected."))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
window.LocationPage = LocationPage;