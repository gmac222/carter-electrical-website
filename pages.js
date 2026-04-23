// About, Services, Areas — compact pages

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal,
  PageHero
} = window;

// ----- About -----
function AboutPage() {
  useScrollReveal();
  const values = [{
    n: '01',
    t: 'Candid scoping',
    d: 'If we\'re not right for the job, we\'ll say so in the first call. Saves everyone time.'
  }, {
    n: '02',
    t: 'In-house delivery',
    d: 'Our electricians, on our vans. No sub-contracting daisy-chain on installation works.'
  }, {
    n: '03',
    t: 'Documentation discipline',
    d: 'Certificates, as-builts, RAMS and asset registers. Every time, not on request.'
  }, {
    n: '04',
    t: 'Long-term relationships',
    d: 'Most of our work is repeat or referred. We\'d rather earn the next project than hard-sell this one.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "about",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "About Carter Electrical",
    sectionNum: "04 / About",
    title: "A regional firm",
    titleAccent: "that punches above its weight.",
    subtext: "NICEIC-approved electrical contractors based in Christleton, Chester. We deliver commercial, industrial and domestic installations across the North West \u2014 scoped candidly, installed by our own team, documented at handover."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our principles"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "How we run jobs.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Four things we don't compromise on, however big or small the project.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 60,
      height: 400,
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.CarterPlaceholder, {
    imgSrc: "uploads/worker-1.jpg",
    titleCaption: "Our Team"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 1,
      background: 'var(--rule)',
      border: '1px solid var(--rule)'
    }
  }, values.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.n,
    style: {
      background: 'var(--white)',
      padding: '40px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--muted)'
    }
  }, v.n), /*#__PURE__*/React.createElement("h3", {
    className: "h-3",
    style: {
      margin: '18px 0 12px'
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0,
      maxWidth: '40ch'
    }
  }, v.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section-y dark reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Accreditation"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      marginTop: 18
    }
  }, "NICEIC-approved.", /*#__PURE__*/React.createElement("br", null), "Documented at handover.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, [{
    k: 'NICEIC',
    v: 'Approved Contractor'
  }, {
    k: 'OZEV',
    v: 'EV charge-point installer'
  }, {
    k: 'BS 7671',
    v: '18th Edition (incl. amendments)'
  }, {
    k: 'BS 5839-1',
    v: 'Fire detection & alarm systems'
  }, {
    k: 'BS 5266',
    v: 'Emergency lighting'
  }, {
    k: 'PLI',
    v: '£5M Public Liability'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '18px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, r.v)))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}

// ----- Services stub page -----
function ServicesPage() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "services",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Carter Electrical Services",
    sectionNum: "02 / Services",
    title: "One contractor.",
    titleAccent: "The full electrical scope.",
    subtext: "Four service lines, one in-house team. Deep-dive pages below \u2014 each with scope, compliance and recent work."
  }), CARTER.services.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: s.slug,
    id: s.slug,
    className: `section-y reveal ${i % 2 === 0 ? 'light' : 'bright'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 60,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--muted)'
    }
  }, "0", i + 1, " / 05"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      marginTop: 18,
      marginBottom: 28
    }
  }, s.title), s.imgSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '280px',
      position: 'relative',
      marginBottom: 28,
      borderRadius: '2px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.CarterPlaceholder, {
    imgSrc: s.imgSrc,
    titleCaption: s.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "sc-glyph",
    style: {
      width: 60,
      height: 60,
      color: 'var(--accent)'
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg[s.icon]
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'var(--ink-2)'
    }
  }, s.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'var(--rule)',
      border: '1px solid var(--rule)'
    }
  }, s.bullets.map((c, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      background: 'var(--white)',
      padding: '22px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontWeight: 500,
      fontSize: 15
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, s.slug === 'commercial' ? /*#__PURE__*/React.createElement("a", {
    href: "commercial.html",
    className: "btn btn-ghost-dark"
  }, "Commercial deep-dive ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })) : /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-ghost-dark"
  }, "Get your free quote ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Next step"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Not sure which service fits?", /*#__PURE__*/React.createElement("br", null), "Start a conversation."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Brief the scope in three steps. We'll come back with the next sensible action.")), /*#__PURE__*/React.createElement("div", {
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
    className: "btn btn-primary",
    style: {
      marginTop: 0
    }
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

// ----- Areas -----
function AreasPage() {
  useScrollReveal();
  const [active, setActive] = useState('Chester');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "areas",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Carter Electrical Coverage",
    sectionNum: "03 / Areas We Cover",
    title: "Local enough",
    titleAccent: "to be on-site by lunch.",
    subtext: "Based in Christleton, with primary coverage within 25 miles and further afield for contract clients."
  }), /*#__PURE__*/React.createElement("section", {
    className: "areas",
    style: {
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "map-crosshair"
  }, "53\xB011\u2032N \xB7 02\xB050\u2032W"), CARTER.areas.map(p => /*#__PURE__*/React.createElement("div", {
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
  }, "Selected area"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      margin: '10px 0 10px'
    }
  }, active), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      maxWidth: '42ch'
    }
  }, "NICEIC electrical services in ", active, ". Commercial fit-outs, domestic rewires, EV chargers and compliance testing."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: active === 'Chester' ? '/' : `electricians-${active.toLowerCase().replace(/ /g, '-')}.html`,
    className: "btn btn-ghost-light",
    style: {
      padding: '14px 24px',
      fontSize: 14
    }
  }, "View ", active, " services ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "area-list"
  }, CARTER.areas.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.name,
    className: active === p.name ? 'active' : '',
    onClick: () => setActive(p.name)
  }, /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
    className: "distance"
  }, p.distance)))))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
window.AboutPage = AboutPage;
window.ServicesPage = ServicesPage;
window.AreasPage = AreasPage;