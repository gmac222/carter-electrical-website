const {
  Header,
  Footer,
  TrustBar,
  useScrollReveal
} = window;
function ThankYouPage() {
  useScrollReveal();
  useEffect(() => {
    // Send GA4 event on page mount
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'generate_lead', {
        'lead_type': 'form',
        'value': 1.0,
        'currency': 'GBP'
      });
      window.gtag('event', 'form_lead', {
        'value': 1.0,
        'currency': 'GBP'
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "contact",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("section", {
    className: "hero",
    style: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-glow"
  }), window.HeroCanvas ? /*#__PURE__*/React.createElement(window.HeroCanvas, null) : null, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner",
    style: {
      textAlign: 'center',
      padding: '80px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-success",
    style: {
      maxWidth: '600px',
      margin: '0 auto',
      background: 'transparent',
      border: 'none',
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick-big",
    style: {
      margin: '0 auto 24px'
    },
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.check.replace('width="16"', 'width="36" height="36"')
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: '3.5rem',
      marginBottom: '16px'
    }
  }, "Thank You", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      fontSize: '1.25rem',
      color: 'rgba(255,255,255,0.7)',
      maxWidth: '45ch',
      margin: '0 auto 32px'
    }
  }, "Your enquiry has been received successfully. A member of our team will review the details and get back to you within 48 hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.phoneHref,
    className: "btn btn-primary"
  }, "Call ", CARTER.company.phone), /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "btn btn-ghost-light"
  }, "Back to Home"))))), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.hydrateRoot(document.getElementById('root'), /*#__PURE__*/React.createElement(ThankYouPage, null));