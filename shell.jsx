// Shared UI: Header, Footer, Logo, trust bar - used by every page.

const { useState, useEffect, useRef } = React;

// Inject favicon + Apple touch icon + theme colour into every page's <head>.
// Done at runtime so linter-driven head rewrites (preload dumps etc.) don't
// strip them. Runs once per page load and is idempotent.
(function injectHeadAssets() {
  if (typeof document === 'undefined' || document.head.dataset.carterHeadInjected) return;
  document.head.dataset.carterHeadInjected = '1';
  const links = [
    { rel: 'icon',             type: 'image/png', sizes: '32x32', href: 'uploads/favicon-32x32-1.png' },
    { rel: 'shortcut icon',    type: 'image/png',                 href: 'uploads/favicon-32x32-1.png' },
    { rel: 'apple-touch-icon',                                    href: 'uploads/favicon-32x32-1.png' },
  ];
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

window.Logo = function Logo({ light = true }) {
  return (
    <a href="index.html" className="logo" aria-label="Carter Electrical home">
      <img src="uploads/logo-original.png" alt="Carter Electrical Contracting" style={{ height: '54px', width: 'auto' }} />
    </a>
  );
};

window.Header = function Header({ current = 'home', theme = 'dark' }) {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home', href: 'index.html' },
    {
      id: 'services',
      label: 'Services',
      href: 'services.html',
      children: [
        { id: 'commercial', label: 'Commercial Electrical', href: 'commercial.html' },
        { id: 'industrial', label: 'Industrial Electrical', href: 'industrial.html' },
        { id: 'domestic', label: 'Domestic Electrical', href: 'domestic.html' },
        { id: 'all-services', label: 'All Services', href: 'services.html' }
      ]
    },
    { id: 'cases', label: 'Case Studies', href: 'case-studies.html' },
    { id: 'areas', label: 'Areas We Cover', href: 'areas.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  return (
    <header className={`site-header ${condensed ? 'is-condensed' : ''} ${theme === 'light' ? 'is-light' : ''}`}>
      <div className="wrap">
        <div className="header-inner">
          <Logo light={theme === 'dark'} />
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {links.map(l => {
              if (l.children) {
                const isActive = current === l.id || l.children.some(c => current === c.id);
                return (
                  <div key={l.id} className="nav-dropdown-wrapper">
                    <a href={l.href} className={`nav-dropdown-trigger ${isActive ? 'active' : ''}`}>
                      {l.label}
                      <svg className="chevron-down" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: '4px', verticalAlign: 'middle', transition: 'transform 0.2s' }}>
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </a>
                    <div className="nav-dropdown">
                      {l.children.map(c => (
                        <a key={c.id} href={c.href} className={current === c.id ? 'active' : ''}>{c.label}</a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a key={l.id} href={l.href} className={current === l.id ? 'active' : ''}>{l.label}</a>
              );
            })}
          </nav>
          <div className="header-cta">
            <div className="header-phone" aria-label="Call Carter Electrical">
              <span className="dot" />
              <span>{CARTER.company.phone}</span>
            </div>
            <a href="contact.html" className="btn btn-primary btn-sm">
              Discuss Project
              <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
            </a>
            <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
                {menuOpen
                  ? <><path d="M5 5l12 12M17 5L5 17"/></>
                  : <><path d="M3 7h16M3 15h16"/></>}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

window.TrustBar = function TrustBar({ area }) {
  const pinText = area 
    ? `${area.name} · ${area.postcodes && area.postcodes.length ? area.postcodes[0] : 'CH3'}`
    : 'Chester · CH3';
  const items = [
    { img: 'uploads/nic.png',       alt: 'NICEIC Approved Contractor logo', top: 'NICEIC',          bottom: 'Approved Contractor' },
    { glyph: CARTER.svg.check,                                             top: 'Fully Insured',   bottom: 'Guaranteed Work' },
    { glyph: CARTER.svg.pin,                                               top: pinText,           bottom: 'Local & On-Call' },
    { img: 'uploads/ozev-logo.jpg', alt: 'OZEV-approved EV charger installer logo', top: 'OZEV Registered', bottom: 'EV Charger Install' },
    { glyph: CARTER.svg.shield,                                            top: '18th Edition',    bottom: 'BS 7671 Compliant' },
  ];
  return (
    <div className="trust-bar">
      <div className="wrap">
        <div className="trust-row">
          {items.map((it, i) => (
            <div className="trust-item" key={i}>
              {it.img
                ? <img className="glyph" src={it.img} alt={it.alt} loading="lazy" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                : <span className="glyph" dangerouslySetInnerHTML={{ __html: it.glyph }} />}
              <span>
                <strong>{it.top}</strong>
                <small>{it.bottom}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.Footer = function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo light={true} />
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 20, maxWidth: '36ch', fontSize: 14.5, lineHeight: 1.55 }}>
              NICEIC-approved electrical contractors. Commercial, industrial, domestic and renewables across the North West and North Wales.
            </p>
            <div className="circuit-rule" style={{ margin: '28px 0 20px', color: 'rgba(255,255,255,0.4)' }} />
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              NICEIC · Est. {CARTER.company.founded}
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="commercial.html">Commercial</a></li>
              <li><a href="industrial.html">Industrial</a></li>
              <li><a href="domestic.html">Domestic</a></li>
              <li><a href="services.html#renewables">Renewables & EV</a></li>
              <li><a href="services.html#testing">Inspection & Testing</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="case-studies.html">Case Studies</a></li>
              <li><a href="areas.html">Areas We Cover</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href={CARTER.company.socialFb}>Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul style={{ gap: '8px' }}>
              <li style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.78)', display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <span>Mon - Fri</span>
                <span>07:30 - 17:30</span>
              </li>
              <li style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.78)', display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <span>Saturday</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Closed</span>
              </li>
              <li style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.78)', display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <span>Sunday</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <address className="footer-address">
              {CARTER.company.address.map((l, i) => <div key={i}>{l}</div>)}
              <div style={{ marginTop: 14 }}>
                <a href={CARTER.company.phoneHref}>{CARTER.company.phone}</a>
              </div>
              <div><a href={`mailto:${CARTER.company.email}`}>{CARTER.company.email}</a></div>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Carter Electrical Contracting Ltd</div>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="sitemap.html" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .15s ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>Sitemap</a>
            <a href="privacy-policy.html" rel="nofollow" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .15s ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>Privacy Policy</a>
            <a href="terms.html" rel="nofollow" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .15s ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>Terms of Use</a>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>carterelec.co.uk</span>
          </div>
        </div>
      </div>
      <CookieBanner />
    </footer>
  );
};

function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-content">
        <p style={{ margin: 0, fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
          We use cookies to optimise your experience on our website. Read our <a href="privacy-policy.html" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</a> to learn more.
        </p>
        <div className="cookie-banner-actions" style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          <button onClick={handleAccept} className="btn btn-primary btn-sm" style={{ padding: '6px 12px', fontSize: '12px', minHeight: '32px' }}>Accept</button>
          <button onClick={handleDecline} className="btn btn-ghost-light btn-sm" style={{ padding: '6px 12px', fontSize: '12px', minHeight: '32px', borderColor: 'rgba(255,255,255,0.2)' }}>Decline</button>
        </div>
      </div>
    </div>
  );
}

// Scroll-reveal helper - adds `.in` to `.reveal` on entry
window.useScrollReveal = function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
};

window.PageHero = function PageHero({ section, sectionNum, title, titleAccent, subtext, ctas, children }) {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      {window.HeroCanvas ? <window.HeroCanvas /> : null}
      <div className="wrap hero-inner">
        <div className="hero-meta">
          <span><span className="dot-green" /> {section}</span>
          <span>{sectionNum}</span>
          <span>Ref · carterelec.co.uk</span>
        </div>
        <h1 className="h-display">
          {title}
          {titleAccent && <><br /><span className="accent">{titleAccent}</span></>}
        </h1>
        <p className="hero-sub">{subtext}</p>
        {ctas && (
          <div className="hero-ctas">
            {ctas}
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

// Mobile sticky CTA bar - visible only on mobile, hides near footer
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

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={`mobile-sticky-cta ${visible ? 'is-visible' : ''} ${hidden ? 'is-hidden' : ''}`} role="navigation" aria-label="Quick contact">
      <a href="contact.html" className="mobile-sticky-cta__quote">
        Get a Free Quote
        <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
      </a>
      <a href={CARTER.company.phoneHref} className="mobile-sticky-cta__call">
        <span dangerouslySetInnerHTML={{ __html: CARTER.svg.phone }} />
        Call Us
      </a>
    </div>
  );
};

// Animated stat counter
window.StatNumber = function StatNumber({ target, unit = '', suffix = '', duration = 1400 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(target * eased));
          if (p < 1) requestAnimationFrame(step);
          else setN(target);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return <span ref={ref} className="n">{n}{suffix}<span className="unit">{unit}</span></span>;
};
