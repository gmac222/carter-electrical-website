// Contact page with multi-step form + validation

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal
} = window;
function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
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
  const [errors, setErrors] = useState({});
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
  const services = ['Commercial', 'Industrial', 'Domestic', 'Renewables / EV', 'Testing / EICR', 'Emergency'];
  const sectors = ['Office', 'Retail', 'Hospitality', 'Healthcare', 'Warehouse', 'Residential', 'Other'];
  const timings = ['Emergency · now', 'This week', 'Within a month', '1–3 months', '3+ months / scoping'];
  const validateStep = () => {
    const errs = {};
    if (step === 0) {
      if (!data.service) errs.service = 'Pick a service area';
    }
    if (step === 1) {
      if (!data.scope || data.scope.length < 20) errs.scope = 'Give us a couple of sentences (min. 20 chars)';
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
  const submit = () => {
    if (validateStep()) setSubmitted(true);
  };
  const refNum = 'CEC-' + Math.floor(1000 + Math.random() * 9000) + '-' + new Date().getFullYear();
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      className: "form-shell"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-success"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tick-big",
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.check.replace('width=\"16\"', '')
      }
    }), /*#__PURE__*/React.createElement("h3", null, "Thanks, ", data.name.split(' ')[0], ". Your enquiry is in."), /*#__PURE__*/React.createElement("p", null, "You'll hear from one of the team within one working day on ", /*#__PURE__*/React.createElement("strong", null, data.email), " or ", /*#__PURE__*/React.createElement("strong", null, data.phone), ". For emergencies, please call us directly."), /*#__PURE__*/React.createElement("div", {
      className: "ref"
    }, "Reference \xB7 ", refNum), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: CARTER.company.phoneHref,
      className: "btn btn-primary"
    }, "Call ", CARTER.company.phone), /*#__PURE__*/React.createElement("a", {
      href: "index.html",
      className: "btn btn-ghost-dark"
    }, "Back to home"))));
  }
  return /*#__PURE__*/React.createElement("div", {
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
    placeholder: "e.g. Office fit-out, ~1,200 sq ft, new distribution, LED lighting, emergency, fire alarm integration."
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
    onClick: back
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
    onClick: submit
  }, "Send enquiry ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  }))));
}
function ContactPage() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "contact",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(PageHero, {
    section: "Contact Us",
    sectionNum: "05 / Contact",
    title: "Tell us about the project.",
    titleAccent: "We'll tell you what it takes.",
    subtext: "A three-step conversation-starter. Not a hard sell. You'll hear back within one working day with the next sensible step."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-y light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-wrap"
  }, /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement("div", {
    className: "contact-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Carter Electrical Contracting"), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Address"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      textAlign: 'right',
      fontSize: 13
    }
  }, CARTER.company.address.join(', '))), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.phoneHref
  }, CARTER.company.phone))), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CARTER.company.email}`
  }, CARTER.company.email))), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "NICEIC"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Approved Contractor")), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "OZEV"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "EV Installer"))), /*#__PURE__*/React.createElement("div", {
    className: "static-map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "static-map",
    style: {
      position: 'absolute',
      inset: 0,
      border: 0,
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '5%',
      top: '40%',
      right: '95%',
      height: 3,
      background: 'rgba(255,255,255,0.1)',
      width: '90%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '48%',
      top: '0%',
      bottom: '0%',
      width: 3,
      background: 'rgba(255,255,255,0.08)',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hq-pin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pin-core"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pin-addr"
  }, /*#__PURE__*/React.createElement("strong", null, "HQ"), "White Lane Depot \xB7 CH3 6AH")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "CHRISTLETON \xB7 CHESTER \xB7 53\xB011\u2032N \xB7 02\xB050\u2032W")))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ContactPage, null));