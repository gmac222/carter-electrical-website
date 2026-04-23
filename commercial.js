// Commercial Electrical Services — dedicated landing page

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal,
  StatNumber,
  PageHero
} = window;
function CommercialHero() {
  return /*#__PURE__*/React.createElement(PageHero, {
    section: "Commercial Electrical",
    sectionNum: "02.1 / Services",
    title: "Commercial electricians",
    titleAccent: "Chester businesses trust.",
    subtext: "Fit-outs, maintenance contracts and compliance for offices, retail, hospitality, leisure and multi-tenant buildings. One contractor owning distribution, lighting, fire, emergency lighting and data containment from first fix to sign-off.",
    ctas: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "contact.html",
      className: "btn btn-primary"
    }, "Get Your Free Quote", /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.arrow
      }
    })), /*#__PURE__*/React.createElement("a", {
      href: "case-studies.html",
      className: "btn btn-ghost-light"
    }, "See commercial work")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.7)'
      }
    }, "Takes 60 seconds \u2022 Receive a proposal within 24 hours."))
  });
}
const CAPABILITIES = [{
  n: 'C01',
  t: 'Distribution boards',
  d: 'Design, install and upgrade of commercial main and sub-boards. Metered, labelled, fully documented.'
}, {
  n: 'C02',
  t: 'LED lighting upgrades',
  d: 'Retrofit and new-design schemes with payback modelling. DALI and emergency integration on request.'
}, {
  n: 'C03',
  t: 'Emergency lighting',
  d: 'Category-compliant design, install and annual monthly/six-monthly/three-yearly testing with cert pack.'
}, {
  n: 'C04',
  t: 'Fire alarm systems',
  d: 'L1 to L5 system design, install, commissioning and service under BS 5839-1. Integrated with nurse call where required.'
}, {
  n: 'C05',
  t: 'Containment & small power',
  d: 'Cable tray, basket, trunking and dado systems for offices, retail and hospitality — coordinated with other trades.'
}, {
  n: 'C06',
  t: 'Compliance testing',
  d: 'Fixed-wire EICR, PAT testing, thermographic surveys and remedial works to landlord and insurer standards.'
}, {
  n: 'C07',
  t: 'PPM contracts',
  d: 'Planned preventative maintenance agreements with SLAs, reporting and asset registers for facilities teams.'
}, {
  n: 'C08',
  t: 'Data & AV containment',
  d: 'Clean containment for Cat6/6A and AV power — coordinated with the data contractor or delivered as one package.'
}, {
  n: 'C09',
  t: 'Out-of-hours works',
  d: 'Live-environment retail, office and hospitality works scheduled around trading to avoid downtime.'
}];
function Capabilities() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "The commercial scope,", /*#__PURE__*/React.createElement("br", null), "under one roof.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A coordinated electrical package, not a spread of sub-sub-contractors. Design assistance on request \u2014 bring us in early and we\u2019ll flag the compliance gotchas before they cost you.")), /*#__PURE__*/React.createElement("div", {
    className: "capability-grid"
  }, CAPABILITIES.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    className: "capability"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, c.n), /*#__PURE__*/React.createElement("h4", null, c.t), /*#__PURE__*/React.createElement("p", null, c.d))))));
}
function Process() {
  const steps = [{
    n: '01',
    t: 'Scoping call',
    d: 'Fifteen minutes to understand the project, the site, and the timescale. We tell you candidly whether we\'re the right contractor for it.'
  }, {
    n: '02',
    t: 'Site visit',
    d: 'We measure, photograph and check existing infrastructure. You get a written scope with design assumptions and compliance notes.'
  }, {
    n: '03',
    t: 'Proposal',
    d: 'Itemised quotation broken down by area and phase. Clear about what\'s in, what\'s provisional, and what\'s out.'
  }, {
    n: '04',
    t: 'Delivery',
    d: 'One point of contact from first fix to commissioning. Weekly progress, photographs and a clean RAMS pack before works start.'
  }, {
    n: '05',
    t: 'Handover',
    d: 'Full certification — EIC, emergency lighting, fire alarm — plus as-builts and a maintenance schedule.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-y dark reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "A five-step process", /*#__PURE__*/React.createElement("br", null), "you can brief your board on.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "No surprises. No sub-contracting daisy-chains. One team, one number to call, full documentation at handover.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 1,
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.08)'
    },
    className: "process-grid"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: 'var(--ink)',
      padding: '28px 24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--accent)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h4", {
    className: "display",
    style: {
      fontSize: 20,
      margin: '18px 0 10px',
      fontWeight: 600
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: 14,
      lineHeight: 1.55,
      margin: 0
    }
  }, s.d)))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 1000px) {
            .process-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 560px) {
            .process-grid { grid-template-columns: 1fr !important; }
          }
        `)));
}
function CommercialCases() {
  const cases = CARTER.cases.filter(c => c.sector === 'Commercial');
  return /*#__PURE__*/React.createElement("section", {
    className: "cases reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Commercial case studies"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Recent", /*#__PURE__*/React.createElement("br", null), "commercial work.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Hospitality, retail and office projects across Chester. More detail in the full case-study index.")), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, cases.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: c.id === 'old-dukes' ? 'case-old-dukes.html' : 'case-studies.html',
    className: "case-card big"
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
  }))))))));
}
function FAQBand() {
  const faqs = [{
    q: 'Can you work around our trading hours?',
    a: 'Yes. We routinely phase works around retail, office and hospitality opening. Night and weekend shifts are priced transparently upfront.'
  }, {
    q: 'Do you handle design or just install?',
    a: 'Both. Bring us in at design stage and we\'ll produce layouts and compliance notes. Happy to tender against an existing spec too.'
  }, {
    q: 'What about sub-contracting?',
    a: 'Installation is delivered by our in-house team. Specialist items (fire alarm commissioning, data cabling) are managed by us, not handed off.'
  }, {
    q: 'Will we get proper paperwork at handover?',
    a: 'Yes — NICEIC Electrical Installation Certificate, emergency lighting certification, fire alarm commissioning cert, as-built drawings and a service schedule.'
  }];
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section-y bright reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 20
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      marginBottom: 40
    }
  }, "Questions facilities", /*#__PURE__*/React.createElement("br", null), "managers actually ask."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule)'
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      textAlign: 'left',
      padding: '22px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 20,
      fontWeight: 600
    }
  }, f.q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontSize: 22,
      fontFamily: 'var(--font-mono)'
    }
  }, open === i ? '–' : '+')), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      color: 'var(--muted-2)',
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: '58ch'
    }
  }, f.a))))));
}
function Commercial() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "commercial",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(CommercialHero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(CommercialCases, null), /*#__PURE__*/React.createElement(FAQBand, null), /*#__PURE__*/React.createElement("section", {
    className: "cta-band reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 20
    }
  }, "Planning a commercial project?", /*#__PURE__*/React.createElement("br", null), "Let\u2019s scope it properly."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Share the scope, the site and the timescale. You\u2019ll hear back within one working day with the next sensible step.")), /*#__PURE__*/React.createElement("div", {
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
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Commercial, null));