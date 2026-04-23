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
    title: "Real installations.",
    titleAccent: "Real sign-offs.",
    subtext: "A record of work across commercial, hospitality, domestic and industrial \u2014 photographed and documented at handover."
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
    href: c.id === 'old-dukes' ? 'case-old-dukes.html' : '#',
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
window.CaseIndex = CaseIndex;
window.OldDukes = OldDukes;