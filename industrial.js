// Industrial Electrical Services - dedicated landing page

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal,
  StatNumber,
  PageHero,
  MobileStickyCTA,
  CarterPlaceholder
} = window;
function IndustrialHero() {
  return /*#__PURE__*/React.createElement(PageHero, {
    section: "Industrial Electrical",
    sectionNum: "02.2 / Services",
    title: "Industrial Electricians",
    titleAccent: "Power & Automation Engineering.",
    subtext: "High-voltage distribution, machinery wiring, control panels, plant maintenance, and compliance for factories, warehouses, agriculture, and logistics hubs. Scoped candidly, delivered by our directly employed team.",
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
    }, "See industrial work")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.7)'
      }
    }, "Detailed proposal \u2022 Direct engineer access."))
  });
}
const CAPABILITIES = [{
  n: 'I01',
  t: '3-Phase distribution',
  d: 'Design and installation of 415V power distribution networks, busbar chambers, and heavy-duty cabling containment.'
}, {
  n: 'I02',
  t: 'PLC & automation wiring',
  d: 'Control circuit wiring, sensor calibration, and PLC panel integrations for automated production lines.'
}, {
  n: 'I03',
  t: 'Machinery installation',
  d: 'Power connections and control wiring for heavy industrial machinery, motors, conveyors, and plant equipment.'
}, {
  n: 'I04',
  t: 'Control panel design',
  d: 'Bespoke design, building, and installation of electrical control panels compliant with BS EN 61439.'
}, {
  n: 'I05',
  t: 'High-voltage containment',
  d: 'Galvanised cable tray, ladder rack, and trunking systems designed for harsh industrial environments.'
}, {
  n: 'I06',
  t: 'Industrial EICR testing',
  d: 'Periodic inspection and testing of complex plant wiring to ensure compliance with the Electricity at Work Regulations 1989.'
}, {
  n: 'I07',
  t: 'PPM & plant maintenance',
  d: 'Planned preventative maintenance to minimise production downtime, including thermal imaging surveys.'
}, {
  n: 'I08',
  t: 'Emergency lighting',
  d: 'BS 5266 compliant emergency and escape route lighting layouts for warehouses and factories.'
}, {
  n: 'I09',
  t: 'Hazardous area scoping',
  d: 'Scoping and installation works for safety-critical zones, including dust extraction and chemical containment.'
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
  }, "Expertise Scope"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Industrial electrical services", /*#__PURE__*/React.createElement("br", null), " plant managers trust.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Specialised high-voltage and automation systems delivered to strict BS 7671 wiring standards.")), /*#__PURE__*/React.createElement("div", {
    className: "capability-grid"
  }, CAPABILITIES.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    className: "capability"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, c.n), /*#__PURE__*/React.createElement("h4", null, c.t), /*#__PURE__*/React.createElement("p", null, c.d))))));
}
function EditorialSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-y bright reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '60px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "uploads/industrial-electricians-chester.jpg",
    alt: "Industrial Electricians in Chester",
    style: {
      width: '100%',
      height: 'auto',
      borderRadius: '2px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      display: 'block',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Engineering discipline"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1",
    style: {
      margin: '18px 0'
    }
  }, "Built for continuous operation."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: '20px'
    }
  }, "We understand that in industrial environments, a single hour of production downtime can cost thousands of pounds."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: '15px',
      lineHeight: '1.6',
      marginBottom: '16px'
    }
  }, "Our directly employed industrial engineers are fully trained in modern factory environments. We phase our installations and planned maintenance visits to match your shift patterns, ensuring that major shut-downs or switchgear installations are performed out of hours."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: '15px',
      lineHeight: '1.6',
      margin: 0
    }
  }, "From heavy cable tray installations in logistics hubs to delicate 24V control logic in processing plants, we follow a rigorous process from scoping to handover. You receive complete as-built diagrams, test certifications, and NICEIC documentation at completion.")))));
}
function Process() {
  const steps = [{
    n: '01',
    t: 'Technical review',
    d: 'We review your site drawings, load requirements, and machinery specifications to assess the electrical scope.'
  }, {
    n: '02',
    t: 'On-site survey',
    d: 'Our senior engineer performs a physical site assessment of your distribution capacity and containment paths.'
  }, {
    n: '03',
    t: 'Fixed proposal',
    d: 'An itemised breakdown of all containment, cabling, switchgear, and labour costs, with zero hidden extras.'
  }, {
    n: '04',
    t: 'Engineered delivery',
    d: 'Safe installation using directly employed electricians following RAMS and strict lockout/tagout protocols.'
  }, {
    n: '05',
    t: 'Handover packet',
    d: 'Delivery of full NICEIC certification, load logs, and updated circuit drawings.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-y dark reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)'
    }
  }, "Safety First"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Our industrial delivery process.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Methodical execution, clear project management, and complete technical handover documentation.")), /*#__PURE__*/React.createElement("div", {
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
function IndustrialCases() {
  const cases = CARTER.cases.filter(c => c.sector === 'Industrial' || c.subsector === 'Industrial');
  // Fallback to Bryn Rhiw (which has domestic/industrial elements) if empty, or show domestic/commercial cases
  const displayCases = cases.length > 0 ? cases : CARTER.cases.slice(0, 2);
  return /*#__PURE__*/React.createElement("section", {
    className: "cases reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Projects"), /*#__PURE__*/React.createElement("h2", {
    className: "h-1"
  }, "Industrial installations.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A selection of recent industrial electrical installations delivered in Cheshire and North Wales.")), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, displayCases.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: `case-${c.id}.html`,
    className: "case-card big"
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
    q: 'What does an industrial electrician do?',
    a: 'Industrial electricians install, maintain, and troubleshoot electrical systems in high-voltage, high-demand settings like factories, chemical plants, and logistics hubs. This includes heavy machinery wiring, PLC automation circuitry, control panel building, and substantial containment structures.'
  }, {
    q: 'How is an industrial electrician different from other electricians?',
    a: 'While commercial electricians focus on offices, retail, and public spaces, industrial electricians deal with high-voltage inputs, complex automated control panels, three-phase power distribution, and plant machinery. The environments require advanced safety certifications, lockout/tagout protocols, and arc flash awareness.'
  }, {
    q: 'How often should industrial electrical systems be inspected?',
    a: 'Under UK safety regulations and guidelines, industrial installations should typically undergo an Electrical Installation Condition Report (EICR) at least once every three years (or annually for high-risk environments). Regular thermal imaging and diagnostic maintenance checks are also recommended to proactively identify faults.'
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
  }, "Common industrial questions."), /*#__PURE__*/React.createElement("div", {
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
  }, open === i ? '-' : '+')), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      color: 'var(--muted-2)',
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: '58ch'
    }
  }, f.a))))));
}
function Industrial() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "industrial",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(IndustrialHero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(EditorialSection, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(IndustrialCases, null), /*#__PURE__*/React.createElement(FAQBand, null), /*#__PURE__*/React.createElement("section", {
    className: "cta-band reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Start a conversation"), /*#__PURE__*/React.createElement("h2", null, "Got an industrial electrical scope to deliver?"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      maxWidth: '54ch'
    }
  }, "Send us the details, machinery specs and timeframe and we will get back to you with a professional scoping estimate.")), /*#__PURE__*/React.createElement("div", {
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
  }), "100% Secure. No obligation. Your data is strictly protected."))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Industrial, null));