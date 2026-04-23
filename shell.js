// Shared UI: Header, Footer, Logo, trust bar — used by every page.

const {
  useState,
  useEffect,
  useRef
} = React;

// Inject favicon + Apple touch icon + theme colour into every page's <head>.
// Done at runtime so linter-driven head rewrites (preload dumps etc.) don't
// strip them. Runs once per page load and is idempotent.
(function injectHeadAssets() {
  if (typeof document === 'undefined' || document.head.dataset.carterHeadInjected) return;
  document.head.dataset.carterHeadInjected = '1';
  const links = [{
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: 'uploads/favicon-32x32-1.png'
  }, {
    rel: 'shortcut icon',
    type: 'image/png',
    href: 'uploads/favicon-32x32-1.png'
  }, {
    rel: 'apple-touch-icon',
    href: 'uploads/favicon-32x32-1.png'
  }];
  links.forEach(attrs => {
    const el = document.createElement('link');
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  });
  const theme = document.createElement('meta');
  theme.setAttribute('name', 'theme-color');
  theme.setAttribute('content', '#111111');
  document.head.appendChild(theme);
})();
window.Logo = function Logo({
  light = true
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "logo",
    "aria-label": "Carter Electrical home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "uploads/logo-original.png",
    alt: "Carter Electrical Contracting",
    style: {
      height: '54px',
      width: 'auto'
    }
  }));
};
window.Header = function Header({
  current = 'home',
  theme = 'dark'
}) {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'commercial',
    label: 'Commercial',
    href: 'commercial.html'
  }, {
    id: 'services',
    label: 'Services',
    href: 'services.html'
  }, {
    id: 'cases',
    label: 'Case Studies',
    href: 'case-studies.html'
  }, {
    id: 'areas',
    label: 'Areas',
    href: 'areas.html'
  }, {
    id: 'about',
    label: 'About',
    href: 'about.html'
  }, {
    id: 'contact',
    label: 'Contact',
    href: 'contact.html'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: `site-header ${condensed ? 'is-condensed' : ''} ${theme === 'light' ? 'is-light' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    light: theme === 'dark'
  }), /*#__PURE__*/React.createElement("nav", {
    className: `nav ${menuOpen ? 'open' : ''}`
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href,
    className: current === l.id ? 'active' : ''
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "header-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-phone",
    "aria-label": "Call Carter Electrical"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, CARTER.company.phone)), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn btn-primary btn-sm"
  }, "Discuss Project", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "menu-toggle",
    onClick: () => setMenuOpen(o => !o),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, menuOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 5l12 12M17 5L5 17"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h16M3 15h16"
  }))))))));
};
window.TrustBar = function TrustBar() {
  const items = [{
    img: 'uploads/nic.png',
    alt: 'NICEIC Approved Contractor logo',
    top: 'NICEIC',
    bottom: 'Approved Contractor'
  }, {
    glyph: CARTER.svg.check,
    top: 'Fully Insured',
    bottom: 'Guaranteed Work'
  }, {
    glyph: CARTER.svg.pin,
    top: 'Chester · CH3',
    bottom: 'Local & On-Call'
  }, {
    img: 'uploads/ozev-logo.jpg',
    alt: 'OZEV-approved EV charger installer logo',
    top: 'OZEV Registered',
    bottom: 'EV Charger Install'
  }, {
    glyph: CARTER.svg.shield,
    top: '18th Edition',
    bottom: 'BS 7671 Compliant'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "trust-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-row"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "trust-item",
    key: i
  }, it.img ? /*#__PURE__*/React.createElement("img", {
    className: "glyph",
    src: it.img,
    alt: it.alt,
    loading: "lazy",
    style: {
      width: 28,
      height: 28,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "glyph",
    dangerouslySetInnerHTML: {
      __html: it.glyph
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, it.top), /*#__PURE__*/React.createElement("small", null, it.bottom)))))));
};
window.Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      marginTop: 20,
      maxWidth: '36ch',
      fontSize: 14.5,
      lineHeight: 1.55
    }
  }, "NICEIC-approved electrical contractors. Commercial, industrial, domestic and renewables across Chester, North Wales, Wirral and Merseyside."), /*#__PURE__*/React.createElement("div", {
    className: "circuit-rule",
    style: {
      margin: '28px 0 20px',
      color: 'rgba(255,255,255,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "NICEIC \xB7 Est. ", CARTER.company.founded)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "commercial.html"
  }, "Commercial")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html#industrial"
  }, "Industrial")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html#domestic"
  }, "Domestic")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html#renewables"
  }, "Renewables & EV")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "services.html#testing"
  }, "Inspection & Testing")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "about.html"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html"
  }, "Case Studies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "areas.html"
  }, "Areas We Cover")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.socialFb
  }, "Facebook")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("address", {
    className: "footer-address"
  }, CARTER.company.address.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.phoneHref
  }, CARTER.company.phone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CARTER.company.email}`
  }, CARTER.company.email))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " Carter Electrical Contracting Ltd"), /*#__PURE__*/React.createElement("div", null, "carterelec.co.uk"))));
};

// Scroll-reveal helper — adds `.in` to `.reveal` on entry
window.useScrollReveal = function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
};
window.PageHero = function PageHero({
  section,
  sectionNum,
  title,
  titleAccent,
  subtext,
  ctas,
  children
}) {
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
  }), " ", section), /*#__PURE__*/React.createElement("span", null, sectionNum), /*#__PURE__*/React.createElement("span", null, "Ref \xB7 carterelec.co.uk")), /*#__PURE__*/React.createElement("h1", {
    className: "h-display"
  }, title, titleAccent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, titleAccent))), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, subtext), ctas && /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, ctas)), children);
};

// Mobile sticky CTA bar — visible only on mobile, hides near footer
window.MobileStickyCTA = function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    // Show after 1.5s or on first scroll past 200px
    const showTimer = setTimeout(() => setVisible(true), 1500);
    const onScroll = () => {
      // Show on scroll
      if (window.scrollY > 200) setVisible(true);

      // Hide when footer is visible
      const footer = document.querySelector('.site-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setHidden(rect.top < window.innerHeight + 80);
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `mobile-sticky-cta ${visible ? 'is-visible' : ''} ${hidden ? 'is-hidden' : ''}`,
    role: "navigation",
    "aria-label": "Quick contact"
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "mobile-sticky-cta__quote"
  }, "Get a Free Quote", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: CARTER.company.phoneHref,
    className: "mobile-sticky-cta__call"
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.phone
    }
  }), "Call Us"));
};

// Animated stat counter
window.StatNumber = function StatNumber({
  target,
  unit = '',
  suffix = '',
  duration = 1400
}) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = t => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(target * eased));
          if (p < 1) requestAnimationFrame(step);else setN(target);
        };
        requestAnimationFrame(step);
      }
    }, {
      threshold: 0.4
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "n"
  }, n, suffix, /*#__PURE__*/React.createElement("span", {
    className: "unit"
  }, unit));
};