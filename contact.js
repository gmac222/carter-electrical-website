// Contact page with multi-step form + validation

const {
  Header,
  Footer,
  TrustBar,
  TweaksPanel,
  useScrollReveal,
  MobileStickyCTA
} = window;
function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const services = ['Commercial', 'Industrial', 'Domestic', 'Renewables / EV', 'Testing / EICR', 'Maintenance'];
  const sectors = ['Office', 'Retail', 'Hospitality', 'Healthcare', 'Warehouse', 'Residential', 'Other'];
  const timings = ['Within a month', '1–3 months', '3+ months / scoping'];
  const validateStep = () => {
    const errs = {};
    if (step === 0) {
      if (!data.service) errs.service = 'Pick a service area';
    }
    if (step === 1) {
      if (!data.scope) errs.scope = 'Tell us briefly what you need';
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
  const submit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        window.location.href = 'thank-you.html';
      } else {
        alert('There was a problem submitting your enquiry. Please try again or call us directly.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again or call us directly.');
    }
    setIsSubmitting(false);
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
    }), /*#__PURE__*/React.createElement("h3", null, "Thanks, ", data.name.split(' ')[0], ". Your enquiry is in."), /*#__PURE__*/React.createElement("p", null, "You'll hear from one of the team within 48 hours on ", /*#__PURE__*/React.createElement("strong", null, data.email), " or ", /*#__PURE__*/React.createElement("strong", null, data.phone), "."), /*#__PURE__*/React.createElement("div", {
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
    placeholder: "e.g. Office fit-out, ~1,200 sq ft, new distribution, LED lighting, fire alarm integration."
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
    onClick: back,
    disabled: isSubmitting
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
    onClick: submit,
    disabled: isSubmitting
  }, isSubmitting ? 'Sending...' : 'Send enquiry', !isSubmitting && /*#__PURE__*/React.createElement("span", {
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
    title: "Tell us",
    titleAccent: "about your project.",
    subtext: "Whether it\u2019s a planned job or something more urgent, share a few details and our team will be in touch."
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
    className: "static-map",
    style: {
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Carter Electrical Contracting \u2014 White Lane Depot, Christleton, Chester CH3 6AH",
    src: "https://www.google.com/maps?q=Unit%205%20White%20Lane%20Depot%2C%20White%20Lane%2C%20Christleton%2C%20Chester%20CH3%206AH&output=embed",
    width: "100%",
    height: "100%",
    style: {
      border: 0,
      position: 'absolute',
      inset: 0
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      color: 'rgba(255,255,255,0.8)',
      background: 'rgba(0,0,0,0.55)',
      padding: '6px 10px',
      pointerEvents: 'none'
    }
  }, "CHRISTLETON \xB7 CHESTER \xB7 53\xB011\u2032N \xB7 02\xB050\u2032W")))))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
ReactDOM.hydrateRoot(document.getElementById('root'), /*#__PURE__*/React.createElement(ContactPage, null));