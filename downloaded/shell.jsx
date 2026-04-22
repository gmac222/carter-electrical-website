// Shared UI: Header, Footer, Logo, trust bar — used by every page.

const { useState, useEffect, useRef } = React;

window.Logo = function Logo({ light = true }) {
  const white = light ? '#ffffff' : '#111111';
  return (
    <a href="index.html" className="logo" aria-label="Carter Electrical home">
      <span dangerouslySetInnerHTML={{ __html: CARTER.logoMark('#7AC143', white) }} />
      <span className="logo-word">
        <span className="logo-name" style={{ color: white }}>CARTER</span>
        <span className="logo-sub">Electrical Contracting</span>
      </span>
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
    { id: 'commercial', label: 'Commercial', href: 'commercial.html' },
    { id: 'services', label: 'Services', href: 'services.html' },
    { id: 'cases', label: 'Case Studies', href: 'case-studies.html' },
    { id: 'areas', label: 'Areas', href: 'areas.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  return (
    <header className={`site-header ${condensed ? 'is-condensed' : ''} ${theme === 'light' ? 'is-light' : ''}`}>
      <div className="wrap">
        <div className="header-inner">
          <Logo light={theme === 'dark'} />
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {links.map(l => (
              <a key={l.id} href={l.href} className={current === l.id ? 'active' : ''}>{l.label}</a>
            ))}
          </nav>
          <div className="header-cta">
            <div className="header-phone" aria-label="24/7 call-out">
              <span className="dot" />
              <span>24/7 · {CARTER.company.phone}</span>
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

window.TrustBar = function TrustBar() {
  const items = [
    { glyph: CARTER.svg.niceic, top: 'NICEIC', bottom: 'Approved Contractor' },
    { glyph: CARTER.svg.clock,  top: '24 / 7', bottom: 'Emergency Call-out' },
    { glyph: CARTER.svg.pin,    top: 'Chester · CH3', bottom: 'Local & On-Call' },
    { glyph: CARTER.svg.bolt,   top: 'OZEV Registered', bottom: 'EV Charger Install' },
    { glyph: CARTER.svg.shield, top: '18th Edition', bottom: 'BS 7671 Compliant' },
  ];
  return (
    <div className="trust-bar">
      <div className="wrap">
        <div className="trust-row">
          {items.map((it, i) => (
            <div className="trust-item" key={i}>
              <span className="glyph" dangerouslySetInnerHTML={{ __html: it.glyph }} />
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
              NICEIC-approved electrical contractors. Commercial, industrial, domestic and renewables across Chester, North Wales, Wirral and Merseyside.
            </p>
            <div className="circuit-rule" style={{ margin: '28px 0 20px', color: 'rgba(255,255,255,0.4)' }} />
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              NICEIC · 24/7 · Est. {CARTER.company.founded}
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="commercial.html">Commercial</a></li>
              <li><a href="services.html#industrial">Industrial</a></li>
              <li><a href="services.html#domestic">Domestic</a></li>
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
          <div>carterelec.co.uk</div>
        </div>
      </div>
    </footer>
  );
};

// Scroll-reveal helper — adds `.in` to `.reveal` on entry
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
