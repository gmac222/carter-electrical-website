// About, Services, Areas - compact pages

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
    title: "Technical excellence",
    titleAccent: /*#__PURE__*/React.createElement(React.Fragment, null, "built on trust and safety", /*#__PURE__*/React.createElement("span", {
      className: "dot-white"
    }, ".")),
    subtext: "NICEIC Approved Electrical Contractors based in Christleton, Chester. We deliver commercial, industrial, and domestic installations across Cheshire, the Wirral, Merseyside, and North Wales - scoped candidly, installed by our in-house team, and fully certified at handover."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our Story"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      margin: '18px 0 24px'
    }
  }, "Serving the region since 2019."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 20
    }
  }, "Established in 2019, Carter Electrical Contracting has built a solid reputation as a reliable and professional electrical contractor in the North West."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 16,
      lineHeight: 1.6,
      marginBottom: 16
    }
  }, "Based at Unit 5, White Lane Depot in Christleton, Chester, we are perfectly positioned to serve domestic, commercial, and industrial clients across Cheshire, the Wirral, Merseyside, and North Wales."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 16,
      lineHeight: 1.6,
      margin: 0
    }
  }, "From small domestic testing to large-scale industrial control installations, our master electricians carry out every job with absolute precision. We do not rely on a daisy-chain of sub-contractors; our own qualified engineers on our own vans deliver the work.")))), /*#__PURE__*/React.createElement("section", {
    className: "section-y bright reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Specialist Services"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "EV Charging & Renewables.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Meeting the modern demands of businesses and homeowners with energy-efficient solutions.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      padding: 40,
      borderRadius: 2,
      border: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--accent-text)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "01 / EV INSTALLATION"), /*#__PURE__*/React.createElement("h3", {
    className: "h-3",
    style: {
      margin: '0 0 16px',
      fontSize: 20
    }
  }, "OZEV Registered Charger Installer"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "We are government-registered for OZEV electric vehicle charging station installations. We stay up-to-date on the latest EV models and charger types to install custom domestic and commercial charging systems, including load management setups for business fleets.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      padding: 40,
      borderRadius: 2,
      border: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--accent-text)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "02 / GREEN ENERGY"), /*#__PURE__*/React.createElement("h3", {
    className: "h-3",
    style: {
      margin: '0 0 16px',
      fontSize: 20
    }
  }, "Solar PV & Battery Partnerships"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "We maintain a long-standing partnership with one of the region\\'s leading renewables companies, installing domestic and commercial solar PV systems and battery storage. Our expertise in battery optimisation helps clients maximise their renewable energy yields and achieve energy independence.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      padding: 40,
      borderRadius: 2,
      border: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--accent-text)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "03 / SPECIALIST ENGINEERING"), /*#__PURE__*/React.createElement("h3", {
    className: "h-3",
    style: {
      margin: '0 0 16px',
      fontSize: 20
    }
  }, "Wider Capability Scope"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Our engineering capabilities go far beyond standard wiring. We specialise in three-phase power distribution, motor control circuits, emergency lighting layouts, fire alarm systems (BS 5839-1), ventilation circuits, CCTV setups, and automated gates."))))), /*#__PURE__*/React.createElement("section", {
    className: "section-y dark reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 60,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "EEAT & Accreditation"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      marginTop: 18,
      color: 'var(--white)'
    }
  }, "Fully accredited.", /*#__PURE__*/React.createElement("br", null), "Documented at handover."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 16,
      lineHeight: 1.6,
      marginTop: 20
    }
  }, "Your safety and peace of mind are our priority. We are registered with the National Inspection Council for Electrical Installation Contracting (NICEIC) and adhere strictly to British Standards, ensuring that every project is certified and logged correctly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.05)',
      padding: '12px 18px',
      borderRadius: 4,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "uploads/nic.png",
    alt: "NICEIC Approved Contractor Logo",
    style: {
      height: 44,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.05)',
      padding: '12px 18px',
      borderRadius: 4,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "uploads/ozev-logo.jpg",
    alt: "OZEV Registered Installer Logo",
    style: {
      height: 44,
      width: 'auto',
      objectFit: 'contain'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, [{
    k: 'NICEIC Approved Contractor',
    v: 'Full registration ensures all building regulations and H&S criteria are met.'
  }, {
    k: 'OZEV Registered Installer',
    v: 'Authorised to install domestic and commercial vehicle charging units.'
  }, {
    k: 'BS 7671 Wiring Regulations',
    v: 'Compliant with the current 18th Edition wiring standards and amendments.'
  }, {
    k: 'BS 5839-1 & BS 5266',
    v: 'Fully trained for British Standard fire detection and emergency lighting installations.'
  }, {
    k: '£5M Public Liability Insurance',
    v: 'Comprehensive coverage across all residential, commercial, and industrial sites.'
  }, {
    k: 'Local Christleton Depot',
    v: 'Unit 5 White Lane Depot, Christleton, Chester, CH3 6AH.'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '18px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
      flexShrink: 0
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 15,
      fontWeight: 500,
      textAlign: 'right',
      color: 'rgba(255,255,255,0.95)'
    }
  }, r.v))))))), /*#__PURE__*/React.createElement("section", {
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
  }, "Four things we do not compromise on, however big or small the project.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
      margin: 0
    }
  }, v.d)))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}

// ----- Services stub page -----
function ServicesPage() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "services",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Services",
    sectionNum: "02 / Services",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One contractor", /*#__PURE__*/React.createElement("span", {
      className: "dot-green"
    }, ".")),
    titleAccent: /*#__PURE__*/React.createElement(React.Fragment, null, "The full electrical scope", /*#__PURE__*/React.createElement("span", {
      className: "dot-white"
    }, ".")),
    subtext: "From replacing a faulty socket to a full commercial fit-out, we deliver work that looks right and tests perfectly. Every time."
  }), CARTER.services.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: s.slug,
    id: s.slug,
    className: `section-y reveal ${i % 2 === 0 ? 'light' : 'bright'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--muted)'
    }
  }, "0", i + 1, " / 05"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-glyph",
    style: {
      width: 50,
      height: 50,
      color: 'var(--accent)',
      flexShrink: 0
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg[s.icon]
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      margin: 0
    }
  }, s.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 60,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", null, s.imgSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      minHeight: '320px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--white)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.imgSrc,
    alt: s.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      borderRadius: '16px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'var(--ink-2)',
      marginTop: 0
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
      background: 'var(--accent)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontWeight: 500,
      fontSize: 15
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 28
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
  }, "Not sure which service", /*#__PURE__*/React.createElement("br", null), "you need?"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Get in touch and tell us a bit about your project and we\u2019ll guide you on the best approach.")), /*#__PURE__*/React.createElement("div", {
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
  }), "100% Secure. No obligation. Your data is strictly protected."))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}

// ----- Areas -----
function AreasPage() {
  useScrollReveal();
  const [active, setActive] = useState('Chester');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "areas",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Locations",
    sectionNum: "03 / Locations",
    title: "Regional coverage",
    titleAccent: /*#__PURE__*/React.createElement(React.Fragment, null, "you can rely on", /*#__PURE__*/React.createElement("span", {
      className: "dot-white"
    }, ".")),
    subtext: "Operating across the North West and North Wales, we provide dependable on-site support for both planned works and urgent requirements within a 50-mile radius of our Christleton base."
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
  }, "NICEIC electrical services in ", active, ". Commercial fit-outs, domestic rewires, EV chargers and compliance testing."), (() => {
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
  }, CARTER.areas.map(p => {
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
  })))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
function PrivacyPolicyPage() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Compliance & Security",
    sectionNum: "05.1 / Policy",
    title: "Privacy Policy",
    titleAccent: /*#__PURE__*/React.createElement(React.Fragment, null, "your data protection guaranteed", /*#__PURE__*/React.createElement("span", {
      className: "dot-white"
    }, ".")),
    subtext: "This policy explains how Carter Electrical Contracting Ltd collects, uses, and safeguards your personal data when you interact with our website."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("h2", null, "1. Introduction"), /*#__PURE__*/React.createElement("p", null, "Carter Electrical Contracting Ltd (\"we\", \"us\", or \"our\") is committed to protecting and respecting your privacy. We are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018."), /*#__PURE__*/React.createElement("p", null, "Our registered address is Unit 5, White Lane Depot, White Lane, Christleton, Chester, CH3 6AH. For any data protection enquiries, you can contact us at ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:ian@carterelec.co.uk"
  }, "ian@carterelec.co.uk"), "."), /*#__PURE__*/React.createElement("h2", null, "2. Information We Collect"), /*#__PURE__*/React.createElement("p", null, "We only collect personal information that you voluntarily provide to us when submitting an enquiry through our contact form. This includes:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Your name"), /*#__PURE__*/React.createElement("li", null, "Your email address"), /*#__PURE__*/React.createElement("li", null, "Your phone number"), /*#__PURE__*/React.createElement("li", null, "Details of your electrical enquiry and project address")), /*#__PURE__*/React.createElement("h2", null, "3. How We Use Your Information"), /*#__PURE__*/React.createElement("p", null, "We process your personal data for the following purposes:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "To respond to your project enquiries and provide scoping calls or fixed quotes."), /*#__PURE__*/React.createElement("li", null, "To manage our customer relationships and provide NICEIC-certified electrical services."), /*#__PURE__*/React.createElement("li", null, "To comply with legal, regulatory, and tax obligations under UK law.")), /*#__PURE__*/React.createElement("p", null, "We will never sell or rent your personal data to third parties for marketing purposes."), /*#__PURE__*/React.createElement("h2", null, "4. How We Secure Your Data"), /*#__PURE__*/React.createElement("p", null, "We implement industry-standard technical and organizational security measures to protect your data from unauthorized access, loss, or alteration. All lead submissions are encrypted in transit and securely processed through our central CRM system."), /*#__PURE__*/React.createElement("h2", null, "5. Your Rights"), /*#__PURE__*/React.createElement("p", null, "Under UK data protection laws, you have the following rights regarding your personal information:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "The right to request access to the personal data we hold about you."), /*#__PURE__*/React.createElement("li", null, "The right to request that we correct any inaccurate or incomplete data."), /*#__PURE__*/React.createElement("li", null, "The right to request the deletion of your personal data (\"the right to be forgotten\")."), /*#__PURE__*/React.createElement("li", null, "The right to withdraw your consent to data processing at any time.")), /*#__PURE__*/React.createElement("p", null, "If you wish to exercise any of these rights, please email us directly at ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:ian@carterelec.co.uk"
  }, "ian@carterelec.co.uk"), "."), /*#__PURE__*/React.createElement("h2", null, "6. Cookies"), /*#__PURE__*/React.createElement("p", null, "We use cookies to optimise website performance and remember your preferences. You can choose to accept or decline cookies using our consent banner. Declining cookies will not prevent you from using the main features of our website."))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
function TermsOfUsePage() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Compliance & Security",
    sectionNum: "05.2 / Terms",
    title: "Terms of Use",
    titleAccent: /*#__PURE__*/React.createElement(React.Fragment, null, "website usage guidelines", /*#__PURE__*/React.createElement("span", {
      className: "dot-white"
    }, ".")),
    subtext: "These terms govern your access to and use of the Carter Electrical Contracting website. By browsing this site, you accept these terms in full."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("h2", null, "1. Agreement to Terms"), /*#__PURE__*/React.createElement("p", null, "By accessing and browsing the website ", /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "carterelec.co.uk"), ", you agree to comply with and be bound by these Terms of Use, along with our Privacy Policy. If you disagree with any part of these terms, please do not use our website."), /*#__PURE__*/React.createElement("h2", null, "2. Intellectual Property Rights"), /*#__PURE__*/React.createElement("p", null, "Unless otherwise stated, Carter Electrical Contracting Ltd owns the intellectual property rights for all material on this website, including all photography, design layouts, graphics, logos, and written copy. All intellectual property rights are reserved."), /*#__PURE__*/React.createElement("p", null, "You must not republish, sell, rent, sub-license, duplicate, or redistribute any content from this website without our prior written consent."), /*#__PURE__*/React.createElement("h2", null, "3. Acceptable Use"), /*#__PURE__*/React.createElement("p", null, "You must use our website in a lawful manner that does not damage, disrupt, or impair the accessibility of the site, or interfere with other users' enjoyment. You must not use this website to distribute malware, spyware, viruses, or any other harmful software."), /*#__PURE__*/React.createElement("h2", null, "4. Disclaimer of Warranties"), /*#__PURE__*/React.createElement("p", null, "The information provided on this website is for general guidance and informational purposes only. While we endeavour to ensure that all information on this website is accurate and current, we do not warrant its completeness or accuracy, nor do we commit to ensuring the website remains available."), /*#__PURE__*/React.createElement("p", null, "All electrical installations, compliance regulations, and technical certifications are governed by our formal customer contracts and NICEIC standards, not the general content of this website."), /*#__PURE__*/React.createElement("h2", null, "5. Limitation of Liability"), /*#__PURE__*/React.createElement("p", null, "To the maximum extent permitted by UK law, Carter Electrical Contracting Ltd will not be liable for any direct, indirect, or consequential loss or damage arising under these terms or in connection with the use of our website."), /*#__PURE__*/React.createElement("h2", null, "6. Governing Law"), /*#__PURE__*/React.createElement("p", null, "These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales."))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
window.AboutPage = AboutPage;
window.ServicesPage = ServicesPage;
window.AreasPage = AreasPage;
window.PrivacyPolicyPage = PrivacyPolicyPage;
window.TermsOfUsePage = TermsOfUsePage;