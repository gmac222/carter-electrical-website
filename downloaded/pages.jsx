// About, Services, Areas — compact pages

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal } = window;

// ----- About -----
function AboutPage() {
  useScrollReveal();
  const values = [
    { n: '01', t: 'Candid scoping', d: 'If we\'re not right for the job, we\'ll say so in the first call. Saves everyone time.' },
    { n: '02', t: 'In-house delivery', d: 'Our electricians, on our vans. No sub-contracting daisy-chain on installation works.' },
    { n: '03', t: 'Documentation discipline', d: 'Certificates, as-builts, RAMS and asset registers. Every time, not on request.' },
    { n: '04', t: 'Long-term relationships', d: 'Most of our work is repeat or referred. We\'d rather earn the next project than hard-sell this one.' },
  ];
  return (
    <>
      <Header current="about" theme="dark"/>
      <section className="page-hero">
        <div className="hero-grid-bg"/>
        <div className="hero-glow"/>
        <div className="wrap">
          <div className="breadcrumbs"><a href="index.html">Home</a> · <span>About</span></div>
          <div className="page-hero-inner">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>About Carter Electrical</div>
              <h1 className="h-1" style={{ marginTop: 18 }}>A regional firm<br/><span style={{ color: 'var(--accent)' }}>that punches above its weight.</span></h1>
              <p className="hero-sub" style={{ marginTop: 22 }}>NICEIC-approved electrical contractors based in Christleton, Chester. We deliver commercial, industrial and domestic installations across the North West — scoped candidly, installed by our own team, documented at handover.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y light reveal">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our principles</div>
              <h2 className="h-1">How we run jobs.</h2>
            </div>
            <p className="lede">Four things we don't compromise on, however big or small the project.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {values.map(v => (
              <div key={v.n} style={{ background: 'var(--white)', padding: '40px 36px' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)' }}>{v.n}</div>
                <h3 className="h-3" style={{ margin: '18px 0 12px' }}>{v.t}</h3>
                <p style={{ color: 'var(--muted-2)', fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: '40ch' }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y dark reveal">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>Accreditation</div>
            <h2 className="h-1" style={{ marginTop: 18 }}>NICEIC-approved.<br/>Documented at handover.</h2>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {[
              { k: 'NICEIC', v: 'Approved Contractor' },
              { k: 'OZEV', v: 'EV charge-point installer' },
              { k: 'BS 7671', v: '18th Edition (incl. amendments)' },
              { k: 'BS 5839-1', v: 'Fire detection & alarm systems' },
              { k: 'BS 5266', v: 'Emergency lighting' },
              { k: 'PLI', v: '£5M Public Liability' },
            ].map((r,i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{r.k}</span>
                <span className="display" style={{ fontSize: 16, fontWeight: 500 }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
      <TweaksPanel/>
    </>
  );
}

// ----- Services stub page -----
function ServicesPage() {
  useScrollReveal();
  return (
    <>
      <Header current="services" theme="dark"/>
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="hero-grid-bg"/>
        <div className="hero-glow"/>
        <div className="wrap">
          <div className="breadcrumbs"><a href="index.html">Home</a> · <span>Services</span></div>
          <div className="page-hero-inner">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>Services</div>
              <h1 className="h-1" style={{ marginTop: 18 }}>One contractor.<br/><span style={{ color: 'var(--accent)' }}>The full electrical scope.</span></h1>
              <p className="hero-sub" style={{ marginTop: 22 }}>Four service lines, one in-house team. Deep-dive pages below — each with scope, compliance and recent work.</p>
            </div>
          </div>
        </div>
      </section>

      {CARTER.services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`section-y reveal ${i % 2 === 0 ? 'light' : 'bright'}`}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
              <div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)' }}>{s.num} / 04</div>
                <h2 className="h-1" style={{ marginTop: 18 }}>{s.title}</h2>
                <div className="sc-glyph" style={{ width: 60, height: 60, color: 'var(--accent)', marginTop: 28 }} dangerouslySetInnerHTML={{ __html: CARTER.svg[s.icon] }}/>
              </div>
              <div>
                <p className="lede" style={{ color: 'var(--ink-2)' }}>{s.desc}</p>
                <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
                  {s.capabilities.map((c, j) => (
                    <div key={j} style={{ background: 'var(--white)', padding: '22px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 8, height: 8, background: 'var(--accent)' }}/>
                      <span className="display" style={{ fontWeight: 500, fontSize: 15 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 28 }}>
                  {s.slug === 'commercial'
                    ? <a href="commercial.html" className="btn btn-ghost-dark">Commercial deep-dive <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
                    : <a href="contact.html" className="btn btn-ghost-dark">Discuss {s.title.toLowerCase()} <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-band">
        <div className="wrap">
          <div>
            <div className="eyebrow">Next step</div>
            <h2 style={{ marginTop: 20 }}>Not sure which service fits?<br/>Start a conversation.</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>Brief the scope in three steps. We'll come back with the next sensible action.</p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big"><span className="accent">·</span> {CARTER.company.phone}</a>
            <a href="contact.html" className="btn btn-primary" style={{ marginTop: 14 }}>Discuss Your Project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
          </div>
        </div>
      </section>
      <Footer/>
      <TweaksPanel/>
    </>
  );
}

// ----- Areas -----
function AreasPage() {
  useScrollReveal();
  const [active, setActive] = useState('Chester');
  return (
    <>
      <Header current="areas" theme="dark"/>
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="hero-grid-bg"/>
        <div className="hero-glow"/>
        <div className="wrap">
          <div className="breadcrumbs"><a href="index.html">Home</a> · <span>Areas We Cover</span></div>
          <div className="page-hero-inner">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>Coverage</div>
              <h1 className="h-1" style={{ marginTop: 18 }}>Local enough<br/><span style={{ color: 'var(--accent)' }}>to be on-site by lunch.</span></h1>
              <p className="hero-sub" style={{ marginTop: 22 }}>Based in Christleton, with primary coverage within 25 miles and further afield for contract clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="areas" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="areas-grid">
            <div className="area-map">
              <div className="map-grid"/>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
                <path d="M5,35 Q15,20 30,18 L45,10 Q60,12 70,22 Q82,28 88,42 Q92,58 84,72 Q74,84 60,86 Q42,90 28,82 Q14,74 8,58 Q2,48 5,35Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25"/>
              </svg>
              <div className="map-crosshair">53°11′N · 02°50′W</div>
              {CARTER.areas.map(p => (
                <div key={p.name} className={`pin ${p.hq ? 'hq' : ''} ${active === p.name ? 'active' : ''}`} style={{ left: `${p.x}%`, top: `${p.y}%` }} onMouseEnter={() => setActive(p.name)} onClick={() => setActive(p.name)}>
                  <span className="dot"/><span className="pin-label">{p.name}</span>
                </div>
              ))}
            </div>
            <div className="area-detail">
              <div>
                <div className="label-mono" style={{ color: 'var(--accent)' }}>Selected area</div>
                <h3 className="h-2" style={{ margin: '10px 0 10px' }}>{active}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '42ch' }}>NICEIC electrical services in {active}. Commercial fit-outs, domestic rewires, EV chargers and compliance testing.</p>
              </div>
              <div className="area-list">
                {CARTER.areas.map(p => (
                  <button key={p.name} className={active === p.name ? 'active' : ''} onClick={() => setActive(p.name)}>
                    <span>{p.name}</span><span className="distance">{p.distance}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <TweaksPanel/>
    </>
  );
}

window.AboutPage = AboutPage;
window.ServicesPage = ServicesPage;
window.AreasPage = AreasPage;
