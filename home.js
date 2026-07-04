// Homepage - Carter Electrical Contracting

const {
  Header,
  Footer,
  TrustBar,
  Logo,
  useScrollReveal,
  StatNumber,
  TweaksPanel
} = window;
const HERO_HEADLINES = {
  outcome: {
    eyebrow: 'NICEIC · Chester · Est. 2019',
    h1: /*#__PURE__*/React.createElement(React.Fragment, null, "Electricians in Chester", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, ".")),
    strapline: /*#__PURE__*/React.createElement(React.Fragment, null, "Electrical services ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "you can trust", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--white)'
      }
    }, "."))),
    sub: 'Commercial, industrial and domestic electrical services across the North West and North Wales. Local electricians covering the full electrics scope from first fix to sign-off.'
  },
  credential: {
    eyebrow: 'NICEIC Approved · Est. 2019',
    h1: /*#__PURE__*/React.createElement(React.Fragment, null, "NICEIC-approved electricians in Chester", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, ".")),
    strapline: /*#__PURE__*/React.createElement(React.Fragment, null, "Built to ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "last", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--white)'
      }
    }, "."))),
    sub: 'Design and install of distribution, lighting, fire, emergency and renewable systems. Fully certified, documented, and handed over on schedule.'
  },
  regional: {
    eyebrow: 'Christleton · CH3 6AH',
    h1: /*#__PURE__*/React.createElement(React.Fragment, null, "Chester\u2019s electricians", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, ".")),
    strapline: /*#__PURE__*/React.createElement(React.Fragment, null, "Commercial-grade", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "."), " ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "Local accountability", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--white)'
      }
    }, "."))),
    sub: 'Based in Christleton. On-call across the North West and North Wales. The same team, owning the work from first fix to sign-off.'
  }
};
function Hero() {
  const [variant, setVariant] = useState('outcome');
  useEffect(() => {
    const update = () => setVariant(document.body.dataset.heroHeadline || 'outcome');
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-hero-headline']
    });
    return () => obs.disconnect();
  }, []);
  const copy = HERO_HEADLINES[variant] || HERO_HEADLINES.outcome;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-glow"
  }), window.HeroCanvas ? /*#__PURE__*/React.createElement(window.HeroCanvas, null) : null, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot-green"
  }), " ", copy.eyebrow), /*#__PURE__*/React.createElement("span", null, "01 / Electricians Chester"), /*#__PURE__*/React.createElement("span", null, "Ref \xB7 carterelec.co.uk")), /*#__PURE__*/React.createElement("h1", {
    className: "h-display"
  }, copy.h1), copy.strapline && /*#__PURE__*/React.createElement("div", {
    className: "hero-strapline"
  }, copy.strapline), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, copy.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "Takes 60 seconds \u2022 We'll be in touch within 48 hours")))), /*#__PURE__*/React.createElement("div", {
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
  }, "Sectors"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Commercial \xB7 Industrial \xB7 Domestic")), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Accreditation"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "NICEIC ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Approved Contractor"))), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Coverage"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "North West & North Wales")), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Assurance"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Fully Insured \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Guaranteed Work")))))));
}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
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
  }, "Electrician in Chester"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      marginTop: '12px'
    }
  }, "NICEIC approved electrical contractor serving Cheshire West", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Carter Electrical"), " is an NICEIC approved electrical contractor serving Cheshire West and the wider Cheshire area. Our electrical services cover domestic, commercial and industrial electrical work across the local area. Every job is compliant with current building regulations and BS\xA07671, and signed off with full documentation."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: '16px'
    }
  }, "Typical projects include full rewires, replacement consumer units, socket and light fitting installation, and electrical repairs - from a single socket to a full commercial electrical fit-out or fault repair, all delivered to the same certified standard.")), /*#__PURE__*/React.createElement("div", {
    className: "area-image",
    style: {
      height: '100%',
      width: '100%',
      position: 'relative',
      minHeight: '300px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "electricians-chester.jpg",
    alt: "Electricians in Chester",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      borderRadius: '4px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 1,
      background: 'var(--rule)',
      border: '1px solid var(--rule)',
      marginTop: 40
    }
  }, [{
    k: 'Coverage',
    v: 'Chester & Cheshire West'
  }, {
    k: 'Response time',
    v: 'Within 48 hours'
  }, {
    k: 'Distance from HQ',
    v: 'Christleton, CH3 6AH'
  }, {
    k: 'Accreditation',
    v: 'NICEIC + OZEV'
  }, {
    k: 'Est.',
    v: '2019 · 7+ years'
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
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "services",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "02 \xB7 Services"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "One contractor", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."), /*#__PURE__*/React.createElement("br", null), "The full electrical scope", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "From a single board upgrade to a full commercial fit-out. Certified, compliant and delivered by an in-house team that owns the job end to end."))), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, CARTER.services.map((s, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const chesterImages = {
      commercial: 'uploads/commercial-electrical-services-chester.jpg',
      industrial: 'uploads/industrial-electrical-services-chester.jpg',
      domestic: 'uploads/domestic-electrical-services-chester.jpg',
      testing: 'uploads/electrical-testing-inspection-chester.jpg',
      renewables: 'uploads/ev-charger-installation-chester.jpg'
    };
    const chesterAlts = {
      commercial: 'Commercial electrical services in Chester',
      industrial: 'Industrial electrical services in Chester',
      domestic: 'Domestic electrical services in Chester',
      testing: 'Electrical testing and inspection in Chester',
      renewables: 'EV charger installation in Chester'
    };
    const chesterImgSrc = chesterImages[s.slug] || s.imgSrc;
    const chesterAlt = chesterAlts[s.slug] || 'Carter Electrical';
    return /*#__PURE__*/React.createElement("a", {
      href: s.slug === 'commercial' || s.slug === 'industrial' || s.slug === 'domestic' ? `${s.slug}.html` : `services.html#${s.slug}`,
      key: s.slug,
      className: "service-card",
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-visual",
      style: {
        height: '220px',
        position: 'relative',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
      imgSrc: chesterImgSrc,
      alt: chesterAlt,
      hue: 210
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '32px 24px 28px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sc-num"
    }, num, " / ", String(CARTER.services.length).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      className: "sc-glyph",
      style: {
        marginTop: '16px'
      },
      dangerouslySetInnerHTML: {
        __html: CARTER.svg[s.icon]
      }
    }), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", {
      className: "sc-desc"
    }, s.lede || s.desc), /*#__PURE__*/React.createElement("div", {
      className: "sc-reveal"
    }, /*#__PURE__*/React.createElement("ul", null, (s.bullets || s.capabilities || []).slice(0, 5).map((c, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, c)))), /*#__PURE__*/React.createElement("div", {
      className: "sc-footer"
    }, /*#__PURE__*/React.createElement("span", null, "Get A Quote"), /*#__PURE__*/React.createElement("span", {
      className: "arrow",
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.arrow
      }
    }))));
  }))));
}
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "stats reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: '#8a8a85'
    }
  }, "03 \xB7 By the numbers"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Years of on-site", /*#__PURE__*/React.createElement("br", null), "accountability", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "A regional firm, built up one referral at a time. Indicative figures below; exact current totals kept on request for tender packs.")), /*#__PURE__*/React.createElement("div", {
    className: "stats-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement(StatNumber, {
    target: 7,
    unit: "+"
  }), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "Years in business")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement(StatNumber, {
    target: 640,
    suffix: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "Projects delivered across the region")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement(StatNumber, {
    target: 1,
    unit: " day"
  }), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "Typical response on contract enquiries")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement(StatNumber, {
    target: 100,
    unit: "%"
  }), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "NICEIC-certified on handover")))));
}
function Cases() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Commercial', 'Hospitality', 'Domestic', 'Industrial'];
  const visible = CARTER.cases.filter(c => {
    if (filter === 'All') return true;
    if (filter === 'Hospitality') return c.subsector === 'Hospitality';
    return c.sector === filter;
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "cases reveal",
    id: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "04 \xB7 Selected work"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Real projects", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."), /*#__PURE__*/React.createElement("br", null), "Real sign-offs", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A cross-section of recent installations. Commercial fit-outs, hospitality refits, period rewires and new-build renewables.")), /*#__PURE__*/React.createElement("div", {
    className: "case-filter",
    role: "tablist"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: filter === f ? 'active' : '',
    onClick: () => setFilter(f),
    role: "tab",
    "aria-selected": filter === f
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, visible.map((c, i) => /*#__PURE__*/React.createElement("a", {
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
  }))))))));
}
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "testimonials reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "05 \xB7 In their words"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Client Testimonials", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Representative feedback from recent commercial and domestic clients, attributed to the projects shown above.")), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-grid"
  }, CARTER.testimonials.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "testimonial",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", null, t.quote), /*#__PURE__*/React.createElement("div", {
    className: "cite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, t.who, /*#__PURE__*/React.createElement("small", null, t.role)), /*#__PURE__*/React.createElement("div", {
    className: "project"
  }, t.project)))))));
}
function Areas() {
  const [active, setActive] = useState('Chester');
  const map = CARTER.areas;
  return /*#__PURE__*/React.createElement("section", {
    className: "areas reveal",
    id: "areas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 50
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: '#8a8a85'
    }
  }, "06 \xB7 Areas we cover"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Covering the", /*#__PURE__*/React.createElement("br", null), "North West & North Wales", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Based at Unit 5, White Lane Depot in Christleton. Regular coverage across a 40\u201350 mile radius for both planned works and urgent call-outs.")), /*#__PURE__*/React.createElement("div", {
    className: "areas-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "area-image",
    style: {
      position: 'relative',
      borderRadius: '2px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "niceic-approved-electrician-chester.jpg",
    alt: "NICEIC approved electrician in Chester",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "area-detail"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      color: 'var(--accent)'
    }
  }, "Current selection"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      margin: '10px 0 10px'
    }
  }, active), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      maxWidth: '42ch'
    }
  }, active === 'Chester' ? 'Our base. Domestic work, commercial maintenance contracts, hospitality fit-outs across the city.' : `NICEIC electrical services in ${active}. Commercial, domestic and industrial installations and maintenance.`), (() => {
    const a = CARTER.areas.find(x => x.name === active);
    if (!a || !a.slug) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: active === 'Chester' ? '/' : `electricians-${a.slug}.html`,
      className: "btn btn-ghost-light",
      style: {
        padding: '14px 24px',
        fontSize: 14
      }
    }, "View ", active, " services ", /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.arrow
      }
    })));
  })()), /*#__PURE__*/React.createElement("div", {
    className: "area-list"
  }, map.map(p => {
    const isLink = !!p.slug;
    const href = p.name === 'Chester' ? '/' : `electricians-${p.slug}.html`;
    if (isLink) {
      return /*#__PURE__*/React.createElement("div", {
        key: p.name,
        className: `area-item ${active === p.name ? 'active' : ''}`,
        onClick: () => setActive(p.name)
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
        href: href
      }, p.name)), /*#__PURE__*/React.createElement("span", {
        className: "distance"
      }, p.distance));
    } else {
      return /*#__PURE__*/React.createElement("button", {
        key: p.name,
        type: "button",
        className: active === p.name ? 'active' : '',
        onClick: () => setActive(p.name)
      }, /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
        className: "distance"
      }, p.distance));
    }
  }))))));
}
function CTABand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "07 \xB7 Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Get Your Free Quote", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."), /*#__PURE__*/React.createElement("br", null), "Quick & no obligation", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Share the scope, the site and the timescale. We\u2019ll be in touch shortly to talk through the next sensible step - a site visit, a scoping call, or a straight proposal.")), /*#__PURE__*/React.createElement("div", {
    className: "cta-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-mono"
  }, "Speak to the team"), /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.phoneHref,
    className: "phone-big"
  }, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "\xB7"), " ", CARTER.company.phone), /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      color: 'var(--muted-2)'
    }
  }, "Mon\u2013Fri 07:30\u201317:30"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary"
  }, "Get Your Free Quote", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CARTER.company.email}`,
    className: "btn btn-ghost-dark"
  }, "Email us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--muted-2)',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })), "100% Secure. No obligation. Your data is strictly protected.")))));
}
function Home() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "home",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Areas, null), /*#__PURE__*/React.createElement(CTABand, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
ReactDOM.hydrateRoot(document.getElementById('root'), /*#__PURE__*/React.createElement(Home, null));