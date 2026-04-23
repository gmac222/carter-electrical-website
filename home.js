// Homepage — Carter Electrical Contracting

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
    eyebrow: 'NICEIC · Chester · 24/7',
    h1: /*#__PURE__*/React.createElement(React.Fragment, null, "Electricians in Chester", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, ".")),
    strapline: /*#__PURE__*/React.createElement(React.Fragment, null, "Electrical services ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "you can trust.")),
    sub: 'Commercial, industrial and domestic electrical services across Cheshire West, North Wales, Wirral and Merseyside. Local electricians covering the full electrics scope from first fix to sign-off.'
  },
  credential: {
    eyebrow: 'NICEIC Approved · Est. 2008',
    h1: /*#__PURE__*/React.createElement(React.Fragment, null, "NICEIC-approved electricians in Chester", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, ".")),
    strapline: /*#__PURE__*/React.createElement(React.Fragment, null, "Built to ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "last.")),
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
    }, "Local accountability.")),
    sub: 'Based in Christleton. On-call across Chester, Wrexham, Wirral, Merseyside and North Wales. The same team, owning the work from first fix to sign-off.'
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
  }, "Takes 60 seconds \u2022 Receive a proposal within 24 hours")))), /*#__PURE__*/React.createElement("div", {
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
  }, "Chester \xB7 Wirral \xB7 North Wales")), /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Response"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "24/7 \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "emergency call-out")))))));
}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    className: "intro reveal",
    style: {
      padding: '120px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: '24px'
    }
  }, "Electrician in Chester"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      marginBottom: '28px',
      maxWidth: '18ch'
    }
  }, "NICEIC approved electrical contractor serving Cheshire West", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '32px',
      height: '2px',
      background: 'var(--accent)',
      marginTop: '8px',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "label-mono",
    style: {
      color: 'var(--muted)',
      maxWidth: '280px',
      textTransform: 'none',
      letterSpacing: '0',
      fontSize: '13px'
    }
  }, "Fully certified, documented, and handed over on schedule."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Carter Electrical"), " is an NICEIC approved electrical contractor serving Cheshire West and the wider Cheshire area. Our electrical services cover domestic, commercial and industrial electrical work across the local area. An electrician in Chester who is Part P qualified delivers every job to current building regulations and BS 7671."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Typical projects include a full rewire, consumer unit replacement, socket and light fitting installation, and electrical repairs. We handle single sockets, a full commercial electrical fit-out, or a fault repair with the same certified standard. Every job must comply with current regulations and is tested and signed off."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Our team also covers portable appliance testing, EICR inspections, fuse board upgrades and emergency call-outs. Proper qualification and electrical wiring compliance on every installation.")))));
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
    return /*#__PURE__*/React.createElement("a", {
      href: s.slug === 'commercial' ? 'commercial.html' : `services.html#${s.slug}`,
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
      imgSrc: s.imgSrc,
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
    target: 17,
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
    target: 24,
    unit: "/7"
  }), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "Emergency response for clients on contract")), /*#__PURE__*/React.createElement("div", {
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
    href: c.id === 'old-dukes' ? 'case-old-dukes.html' : 'case-studies.html',
    className: "case-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-visual"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: c.imgSrc,
    metaTag: `${c.sector} · ${c.subsector}`,
    titleCaption: `${c.title} — ${c.location}`,
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
  }, "Clients who came", /*#__PURE__*/React.createElement("br", null), "back for the next one", /*#__PURE__*/React.createElement("span", {
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
  }, "Local enough", /*#__PURE__*/React.createElement("br", null), "to be on-site by lunch", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Unit 5, White Lane Depot in Christleton. Main coverage within 25 miles, further afield for contract clients.")), /*#__PURE__*/React.createElement("div", {
    className: "areas-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "area-map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-grid"
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5,35 Q15,20 30,18 L45,10 Q60,12 70,22 Q82,28 88,42 Q92,58 84,72 Q74,84 60,86 Q42,90 28,82 Q14,74 8,58 Q2,48 5,35Z",
    fill: "rgba(255,255,255,0.03)",
    stroke: "rgba(255,255,255,0.12)",
    strokeWidth: "0.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20,45 L80,45 M50,15 L50,80",
    stroke: "rgba(255,255,255,0.05)",
    strokeWidth: "0.2",
    strokeDasharray: "1 1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "map-crosshair"
  }, "53\xB011\u2032N \xB7 02\xB050\u2032W"), map.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: `pin ${p.hq ? 'hq' : ''} ${active === p.name ? 'active' : ''}`,
    style: {
      left: `${p.x}%`,
      top: `${p.y}%`
    },
    onMouseEnter: () => setActive(p.name),
    onClick: () => setActive(p.name)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pin-label"
  }, p.name)))), /*#__PURE__*/React.createElement("div", {
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
  }, active === 'Chester' ? 'Our base. Domestic work, commercial maintenance contracts, hospitality fit-outs across the city.' : `NICEIC electrical services in ${active}. Commercial, domestic and industrial installations, maintenance and emergency response.`)), /*#__PURE__*/React.createElement("div", {
    className: "area-list"
  }, map.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.name,
    className: active === p.name ? 'active' : '',
    onClick: () => setActive(p.name)
  }, /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
    className: "distance"
  }, p.distance))))))));
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
  }, "."), /*#__PURE__*/React.createElement("br", null), "Quick, transparent, zero obligation", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Share the scope, the site and the timescale. You\u2019ll hear back within one working day with the next sensible step \u2014 a site visit, a scoping call, or a straight proposal.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Mon\u2013Fri 07:30\u201317:30 \xB7 24/7 emergency"), /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Areas, null), /*#__PURE__*/React.createElement(CTABand, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
ReactDOM.hydrateRoot(document.getElementById('root'), /*#__PURE__*/React.createElement(Home, null));