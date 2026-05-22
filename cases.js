// Case studies index + Old Dukes detail + other pages

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal,
  PageHero,
  MobileStickyCTA
} = window;

// ----- Case Studies Index -----
function CaseIndex() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Commercial', 'Hospitality', 'Domestic', 'Industrial'];
  const visible = CARTER.cases.filter(c => {
    if (filter === 'All') return true;
    if (filter === 'Hospitality') return c.subsector === 'Hospitality';
    return c.sector === filter;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "cases",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Case Studies",
    sectionNum: "06 / Work",
    title: "Real projects.",
    titleAccent: "Properly delivered.",
    subtext: "A proven track record across commercial, hospitality, domestic and industrial work \u2014 completed, signed off and documented."
  }), /*#__PURE__*/React.createElement("section", {
    className: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-filter",
    role: "tablist"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: filter === f ? 'active' : '',
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, visible.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: `case-${c.id}.html`,
    className: `case-card ${c.size || ''}`
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
  }, c.sector), c.scope.slice(0, 3).map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "case-tag"
  }, s))), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.blurb), /*#__PURE__*/React.createElement("span", {
    className: "link"
  }, "View project ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}

// ----- Old Dukes Detail -----
function OldDukes() {
  const c = CARTER.cases.find(x => x.id === 'old-dukes');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "cases",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("section", {
    className: "cs-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Home"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Case Studies"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    className: "cs-title-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Commercial \xB7 Hospitality"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 18,
      fontSize: 'clamp(42px, 5.4vw, 78px)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      marginTop: 22,
      maxWidth: '48ch'
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MetaTile, {
    k: "Year",
    v: c.year
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Location",
    v: c.location
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Sector",
    v: "Hospitality"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-visual",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/dukes-1.jpg",
    metaTag: "Commercial \xB7 Hospitality \xB7 Fit-out",
    titleCaption: `Old Dukes — ${c.location}`,
    year: c.year,
    hue: c.hue
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap cs-body-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "cs-meta"
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Client"), /*#__PURE__*/React.createElement("dd", null, "Old Dukes Sports Bar"), /*#__PURE__*/React.createElement("dt", null, "Project type"), /*#__PURE__*/React.createElement("dd", null, "Fit-out / conversion"), /*#__PURE__*/React.createElement("dt", null, "Duration"), /*#__PURE__*/React.createElement("dd", null, "9 weeks on site"), /*#__PURE__*/React.createElement("dt", null, "Team"), /*#__PURE__*/React.createElement("dd", null, "3 electricians + 1 PM")), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 10
    }
  }, "Scope delivered"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, c.scope.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--accent)'
    }
  }), s)))), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-ghost-dark"
  }, "Discuss similar work ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-prose"
  }, /*#__PURE__*/React.createElement("h3", null, "The brief"), /*#__PURE__*/React.createElement("p", null, "An old city-centre tea rooms, converted across two floors into a sports bar. The client needed a single electrical contractor to coordinate distribution, lighting design, AV power, fire and emergency lighting \u2014 with a fixed opening date that didn\u2019t move."), /*#__PURE__*/React.createElement("h3", null, "What we did"), /*#__PURE__*/React.createElement("p", null, "We scoped the full package during stripping-out week, then phased the installation by floor: first-fix upstairs while the ground floor was still being opened up, then reversed for second-fix. A purpose-built distribution layout accommodated the bar, kitchen, AV walls and a new plant room without an incoming supply upgrade."), /*#__PURE__*/React.createElement("p", null, "Lighting was specified for sports-viewing and late-evening service \u2014 zoned, dimmable, with feature pendants on emergency battery backup. Fire alarm and emergency lighting were designed to BS 5839 / BS 5266 and commissioned alongside final electrical testing."), /*#__PURE__*/React.createElement("h3", null, "Outcome"), /*#__PURE__*/React.createElement("p", null, "Handed over one working day ahead of schedule. Full certification pack \u2014 NICEIC EIC, emergency lighting, fire alarm \u2014 delivered at sign-off. Client has since retained us on a PPM schedule covering annual testing and six-monthly emergency lighting checks."), /*#__PURE__*/React.createElement("div", {
    className: "cs-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/dukes-2.jpg",
    metaTag: "Bar area \xB7 ground floor",
    titleCaption: "Feature pendants, zoned dimming",
    year: c.year,
    hue: c.hue
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile tall"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/dukes-3.jpg",
    metaTag: "Distribution",
    titleCaption: "New sub-board install",
    year: c.year,
    hue: c.hue - 8
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/wiring-2.jpeg",
    metaTag: "Containment",
    titleCaption: "Concealed tray run",
    year: c.year,
    hue: c.hue + 6
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/lights.jpeg",
    metaTag: "Emergency lighting",
    titleCaption: "Commissioning tests",
    year: c.year,
    hue: c.hue - 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/dukes-3-1.jpg",
    metaTag: "Upper floor \xB7 sports viewing",
    titleCaption: "Dimmable scene lighting",
    year: c.year,
    hue: c.hue + 14
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Next project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Running a fit-out?", /*#__PURE__*/React.createElement("br", null), "Bring us in at scoping."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Earlier we\u2019re involved, fewer surprises on site. We\u2019ll tell you candidly whether we\u2019re the right fit for your project.")), /*#__PURE__*/React.createElement("div", {
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
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary"
  }, "Discuss Your Project ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
function MetaTile({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 18,
      fontWeight: 500
    }
  }, v));
}

// ----- Prenton, Wirral Detail -----
function PrentonWirral() {
  const c = CARTER.cases.find(x => x.id === 'prenton-wirral');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "cases",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("section", {
    className: "cs-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Home"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Case Studies"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    className: "cs-title-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Commercial \xB7 Distribution"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 18,
      fontSize: 'clamp(42px, 5.4vw, 78px)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      marginTop: 22,
      maxWidth: '48ch'
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MetaTile, {
    k: "Year",
    v: c.year
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Location",
    v: c.location
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Sector",
    v: "Commercial"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-visual",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: c.imgSrc,
    metaTag: "Commercial \xB7 Distribution \xB7 Mains Upgrade",
    titleCaption: `Prenton, Wirral — ${c.location}`,
    year: c.year,
    hue: c.hue
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap cs-body-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "cs-meta"
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Client"), /*#__PURE__*/React.createElement("dd", null, "Commercial facility"), /*#__PURE__*/React.createElement("dt", null, "Project type"), /*#__PURE__*/React.createElement("dd", null, "Mains distribution upgrade"), /*#__PURE__*/React.createElement("dt", null, "Duration"), /*#__PURE__*/React.createElement("dd", null, "3 weeks on site"), /*#__PURE__*/React.createElement("dt", null, "Team"), /*#__PURE__*/React.createElement("dd", null, "2 electricians")), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 10
    }
  }, "Scope delivered"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, c.scope.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--accent)'
    }
  }), s)))), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-ghost-dark"
  }, "Discuss similar work ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-prose"
  }, /*#__PURE__*/React.createElement("h3", null, "The brief"), /*#__PURE__*/React.createElement("p", null, "An electrical inspection at a busy commercial and production facility in Wirral revealed critical compliance issues and distribution limitations. The client required urgent remedial action and a modern mains upgrade, but could not afford any daytime operational downtime."), /*#__PURE__*/React.createElement("h3", null, "What we did"), /*#__PURE__*/React.createElement("p", null, "We designed a phased out-of-hours programme. We installed a new three-phase distribution board and condensed multiple legacy consumer units into it. The existing distribution boards were relocated and centralized, and all cabling was rerouted through a new galvanised steel trunking containment system. All work was performed overnight and at weekends."), /*#__PURE__*/React.createElement("h3", null, "Outcome"), /*#__PURE__*/React.createElement("p", null, "Completed on schedule with zero interruption to the client's daytime operations. Handed over with a complete NICEIC installation certificate and full circuit labelling for their facility maintenance team."), /*#__PURE__*/React.createElement("div", {
    className: "cs-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/prenton-wirral-3-BFD7531A489E49ECAE4289ECA3DEFB8E.jpg",
    metaTag: "Mains distribution",
    titleCaption: "New three phase board routing",
    year: c.year,
    hue: c.hue
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile tall"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/prenton-wirral-5-9444F481438447568EF2B0DD85F1BF43.jpg",
    metaTag: "Containment",
    titleCaption: "Galvanised steel trunking",
    year: c.year,
    hue: c.hue - 8
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/prenton-wirral-6-7847AFCA3CFA433DBA0DC74D5E2DB7EF.jpg",
    metaTag: "Cabling routing",
    titleCaption: "Clean secondary distribution",
    year: c.year,
    hue: c.hue + 6
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/prenton-wirral-7-502D171AF1D04214AC07350E3A7DE303.jpg",
    metaTag: "Distribution board",
    titleCaption: "Circuit consolidation",
    year: c.year,
    hue: c.hue - 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/prenton-wirral-10-3B6D7267EA554A8DBC4631E5DF33D762.jpg",
    metaTag: "Completed install",
    titleCaption: "Phased out-of-hours handover",
    year: c.year,
    hue: c.hue + 14
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Next project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Running a fit-out?", /*#__PURE__*/React.createElement("br", null), "Bring us in at scoping."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Earlier we\u2019re involved, fewer surprises on site. We\u2019ll tell you candidly whether we\u2019re the right fit for your project.")), /*#__PURE__*/React.createElement("div", {
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
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary"
  }, "Discuss Your Project ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}

// ----- Carbonara @ No. 49 Detail -----
function CarbonaraNo49() {
  const c = CARTER.cases.find(x => x.id === 'carbonara-no-49');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "cases",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("section", {
    className: "cs-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Home"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Case Studies"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    className: "cs-title-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Commercial \xB7 Restaurant"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 18,
      fontSize: 'clamp(42px, 5.4vw, 78px)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      marginTop: 22,
      maxWidth: '48ch'
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MetaTile, {
    k: "Year",
    v: c.year
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Location",
    v: c.location
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Sector",
    v: "Commercial"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-visual",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: c.imgSrc,
    metaTag: "Commercial \xB7 Restaurant \xB7 Fit-out",
    titleCaption: `Carbonara @ no 49 — ${c.location}`,
    year: c.year,
    hue: c.hue
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap cs-body-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "cs-meta"
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Client"), /*#__PURE__*/React.createElement("dd", null, "Carbonara No.49"), /*#__PURE__*/React.createElement("dt", null, "Project type"), /*#__PURE__*/React.createElement("dd", null, "Restaurant fit-out"), /*#__PURE__*/React.createElement("dt", null, "Duration"), /*#__PURE__*/React.createElement("dd", null, "4 weeks on site"), /*#__PURE__*/React.createElement("dt", null, "Team"), /*#__PURE__*/React.createElement("dd", null, "2 electricians + 1 PM")), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 10
    }
  }, "Scope delivered"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, c.scope.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--accent)'
    }
  }), s)))), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-ghost-dark"
  }, "Discuss similar work ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-prose"
  }, /*#__PURE__*/React.createElement("h3", null, "The brief"), /*#__PURE__*/React.createElement("p", null, "An empty commercial retail unit on Chester\u2019s historic Rows was to be converted into an authentic, fine-dining Italian restaurant. The client required a complete design-and-build electrical package including high-performance kitchen power, a decorative dimmable lighting scheme, and integrated audio systems \u2014 under a tight opening deadline."), /*#__PURE__*/React.createElement("h3", null, "What we did"), /*#__PURE__*/React.createElement("p", null, "We installed a new three-phase fuse board to handle the heavy cooking appliances and commercial kitchen load. The entire kitchen space was re-wired with stainless steel containment for easy cleaning. We then designed and installed the front-of-house lighting scheme, incorporating dimmable zoning, ambient pendants, and external signage illumination, and integrated a multi-zone sound system."), /*#__PURE__*/React.createElement("h3", null, "Outcome"), /*#__PURE__*/React.createElement("p", null, "The restaurant opened on the planned launch date with all compliance paperwork (NICEIC EIC, emergency lighting certification) signed off. The dimmable lighting system successfully created the intimate Roman-style atmosphere the client envisioned."), /*#__PURE__*/React.createElement("div", {
    className: "cs-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/carbonara-3-scaled.jpg",
    metaTag: "Dining area",
    titleCaption: "Decorative dimmable lighting layout",
    year: c.year,
    hue: c.hue
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile tall"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/carbonara-2-1-scaled.jpg",
    metaTag: "Front of house",
    titleCaption: "Signage power and window display",
    year: c.year,
    hue: c.hue - 8
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/carbonara-2.jpg",
    metaTag: "Kitchen fit-out",
    titleCaption: "Stainless steel containment run",
    year: c.year,
    hue: c.hue + 6
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/wiring-2.jpeg",
    metaTag: "Second-fix cabling",
    titleCaption: "NICEIC-compliant wiring checks",
    year: c.year,
    hue: c.hue - 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/carbonara-4-scaled.jpg",
    metaTag: "Completed restaurant",
    titleCaption: "Atmospheric dining lighting scene",
    year: c.year,
    hue: c.hue + 14
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Next project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Running a fit-out?", /*#__PURE__*/React.createElement("br", null), "Bring us in at scoping."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Earlier we\u2019re involved, fewer surprises on site. We\u2019ll tell you candidly whether we\u2019re the right fit for your project.")), /*#__PURE__*/React.createElement("div", {
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
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary"
  }, "Discuss Your Project ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}

// ----- Bryn Rhiw Detail -----
function BrynRhiw() {
  const c = CARTER.cases.find(x => x.id === 'bryn-rhiw');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "cases",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("section", {
    className: "cs-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Home"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html",
    style: {
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Case Studies"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    className: "cs-title-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Domestic \xB7 Residential"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 18,
      fontSize: 'clamp(42px, 5.4vw, 78px)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      marginTop: 22,
      maxWidth: '48ch'
    }
  }, c.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MetaTile, {
    k: "Year",
    v: c.year
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Location",
    v: c.location
  }), /*#__PURE__*/React.createElement(MetaTile, {
    k: "Sector",
    v: "Domestic"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-visual",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: c.imgSrc,
    metaTag: "Domestic \xB7 Residential \xB7 Rewire",
    titleCaption: `Bryn Rhiw — ${c.location}`,
    year: c.year,
    hue: c.hue
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap cs-body-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "cs-meta"
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Client"), /*#__PURE__*/React.createElement("dd", null, "Residential Client"), /*#__PURE__*/React.createElement("dt", null, "Project type"), /*#__PURE__*/React.createElement("dd", null, "Farmhouse restoration & rewire"), /*#__PURE__*/React.createElement("dt", null, "Duration"), /*#__PURE__*/React.createElement("dd", null, "8 weeks on site"), /*#__PURE__*/React.createElement("dt", null, "Team"), /*#__PURE__*/React.createElement("dd", null, "3 electricians")), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      marginBottom: 10
    }
  }, "Scope delivered"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, c.scope.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--accent)'
    }
  }), s)))), /*#__PURE__*/React.createElement("hr", {
    className: "cs-meta-divider"
  }), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-ghost-dark"
  }, "Discuss similar work ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-prose"
  }, /*#__PURE__*/React.createElement("h3", null, "The brief"), /*#__PURE__*/React.createElement("p", null, "A historic, derelict farmhouse in Lixwm was undergoing a comprehensive restoration. The project demanded a complete, modern electrical infrastructure while preserving original architectural features. The specification included a full rewire, high-efficiency external lighting, power supplies to multiple outbuildings, and integration of an Air Source Heat Pump (ASHP)."), /*#__PURE__*/React.createElement("h3", null, "What we did"), /*#__PURE__*/React.createElement("p", null, "We executed a full rewire of the property, discreetly routing cables through historic fabric. We ran sub-main supplies to outbuildings for utility and workshop spaces, installed the electrical connection and control wiring for the ASHP heating system, and designed a low-impact external and garden lighting system to highlight the home\u2019s character."), /*#__PURE__*/React.createElement("h3", null, "Outcome"), /*#__PURE__*/React.createElement("p", null, "Delivered a fully certified, high-performance domestic electrical system that meets modern luxury and efficiency standards. All NICEIC certificates were supplied at sign-off, with the client enjoying modern smart heating integration and external lighting."), /*#__PURE__*/React.createElement("div", {
    className: "cs-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/bryn-2.jpg",
    metaTag: "Property exterior",
    titleCaption: "Restored farmhouse and external uplighting",
    year: c.year,
    hue: c.hue
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile tall"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/bryn-3.jpg",
    metaTag: "Interior lighting",
    titleCaption: "Traditional exposed-beam wiring integration",
    year: c.year,
    hue: c.hue - 8
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/bryn-4.jpg",
    metaTag: "Renewables",
    titleCaption: "ASHP supply & control panel wiring",
    year: c.year,
    hue: c.hue + 6
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile sq"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/bryn-5.jpg",
    metaTag: "Outbuilding supply",
    titleCaption: "Sub-main distribution run",
    year: c.year,
    hue: c.hue - 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "tile wide"
  }, /*#__PURE__*/React.createElement(CarterPlaceholder, {
    imgSrc: "uploads/bryn-1.jpg",
    metaTag: "Completed project",
    titleCaption: "Restored farmhouse facade",
    year: c.year,
    hue: c.hue + 14
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Next project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Running a fit-out?", /*#__PURE__*/React.createElement("br", null), "Bring us in at scoping."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Earlier we\u2019re involved, fewer surprises on site. We\u2019ll tell you candidly whether we\u2019re the right fit for your project.")), /*#__PURE__*/React.createElement("div", {
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
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary"
  }, "Discuss Your Project ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
window.CaseIndex = CaseIndex;
window.OldDukes = OldDukes;
window.PrentonWirral = PrentonWirral;
window.CarbonaraNo49 = CarbonaraNo49;
window.BrynRhiw = BrynRhiw;