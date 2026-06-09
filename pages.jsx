// About, Services, Areas - compact pages

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, PageHero } = window;

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
      <PageHero
        section="About Carter Electrical"
        sectionNum="04 / About"
        title="Technical excellence"
        titleAccent={<>built on trust and safety<span className="dot-white">.</span></>}
        subtext="NICEIC Approved Electrical Contractors based in Christleton, Chester. We deliver commercial, industrial, and domestic installations across Cheshire, the Wirral, Merseyside, and North Wales - scoped candidly, installed by our in-house team, and fully certified at handover."
      />

      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="eyebrow">Our Story</div>
            <h2 className="h-1" style={{ margin: '18px 0 24px' }}>Serving the region since 2019.</h2>
            <p className="lede" style={{ marginBottom: 20 }}>
              Established in 2019, Carter Electrical Contracting has built a solid reputation as a reliable and professional electrical contractor in the North West.
            </p>
            <p style={{ color: 'var(--muted-2)', fontSize: 16, lineHeight: 1.6, marginBottom: 16 }}>
              Based at Unit 5, White Lane Depot in Christleton, Chester, we are perfectly positioned to serve domestic, commercial, and industrial clients across Cheshire, the Wirral, Merseyside, and North Wales.
            </p>
            <p style={{ color: 'var(--muted-2)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              From small domestic testing to large-scale industrial control installations, our master electricians carry out every job with absolute precision. We do not rely on a daisy-chain of sub-contractors; our own qualified engineers on our own vans deliver the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bright reveal">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Specialist Services</div>
              <h2 className="h-1">EV Charging & Renewables.</h2>
            </div>
            <p className="lede">Meeting the modern demands of businesses and homeowners with energy-efficient solutions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            <div style={{ background: 'var(--paper)', padding: 40, borderRadius: 2, border: '1px solid var(--rule)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent-text)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>01 / EV INSTALLATION</div>
              <h3 className="h-3" style={{ margin: '0 0 16px', fontSize: 20 }}>OZEV Registered Charger Installer</h3>
              <p style={{ color: 'var(--muted-2)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                We are government-registered for OZEV electric vehicle charging station installations. We stay up-to-date on the latest EV models and charger types to install custom domestic and commercial charging systems, including load management setups for business fleets.
              </p>
            </div>

            <div style={{ background: 'var(--paper)', padding: 40, borderRadius: 2, border: '1px solid var(--rule)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent-text)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>02 / GREEN ENERGY</div>
              <h3 className="h-3" style={{ margin: '0 0 16px', fontSize: 20 }}>Solar PV & Battery Partnerships</h3>
              <p style={{ color: 'var(--muted-2)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                We maintain a long-standing partnership with one of the region\'s leading renewables companies, installing domestic and commercial solar PV systems and battery storage. Our expertise in battery optimisation helps clients maximise their renewable energy yields and achieve energy independence.
              </p>
            </div>

            <div style={{ background: 'var(--paper)', padding: 40, borderRadius: 2, border: '1px solid var(--rule)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent-text)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>03 / SPECIALIST ENGINEERING</div>
              <h3 className="h-3" style={{ margin: '0 0 16px', fontSize: 20 }}>Wider Capability Scope</h3>
              <p style={{ color: 'var(--muted-2)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                Our engineering capabilities go far beyond standard wiring. We specialise in three-phase power distribution, motor control circuits, emergency lighting layouts, fire alarm systems (BS 5839-1), ventilation circuits, CCTV setups, and automated gates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y dark reveal">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'flex-start' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>EEAT & Accreditation</div>
              <h2 className="h-1" style={{ marginTop: 18, color: 'var(--white)' }}>Fully accredited.<br/>Documented at handover.</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.6, marginTop: 20 }}>
                Your safety and peace of mind are our priority. We are registered with the National Inspection Council for Electrical Installation Contracting (NICEIC) and adhere strictly to British Standards, ensuring that every project is certified and logged correctly.
              </p>
              
              <div style={{ display: 'flex', gap: 20, marginTop: 40, alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 18px', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="uploads/nic.png" alt="NICEIC Approved Contractor Logo" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 18px', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="uploads/ozev-logo.jpg" alt="OZEV Registered Installer Logo" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { k: 'NICEIC Approved Contractor', v: 'Full registration ensures all building regulations and H&S criteria are met.' },
                { k: 'OZEV Registered Installer', v: 'Authorised to install domestic and commercial vehicle charging units.' },
                { k: 'BS 7671 Wiring Regulations', v: 'Compliant with the current 18th Edition wiring standards and amendments.' },
                { k: 'BS 5839-1 & BS 5266', v: 'Fully trained for British Standard fire detection and emergency lighting installations.' },
                { k: '£5M Public Liability Insurance', v: 'Comprehensive coverage across all residential, commercial, and industrial sites.' },
                { k: 'Local Christleton Depot', v: 'Unit 5 White Lane Depot, Christleton, Chester, CH3 6AH.' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.1)', alignItems: 'center', gap: 20 }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', flexShrink: 0 }}>{r.k}</span>
                  <span className="display" style={{ fontSize: 15, fontWeight: 500, textAlign: 'right', color: 'rgba(255,255,255,0.95)' }}>{r.v}</span>
                </div>
              ))}
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
            <p className="lede">Four things we do not compromise on, however big or small the project.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {values.map(v => (
              <div key={v.n} style={{ background: 'var(--white)', padding: '40px 36px' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)' }}>{v.n}</div>
                <h3 className="h-3" style={{ margin: '18px 0 12px' }}>{v.t}</h3>
                <p style={{ color: 'var(--muted-2)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{v.d}</p>
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
      <PageHero
        section="Services"
        sectionNum="02 / Services"
        title={<>One contractor<span className="dot-green">.</span></>}
        titleAccent={<>The full electrical scope<span className="dot-white">.</span></>}
        subtext="From replacing a faulty socket to a full commercial fit-out, we deliver work that looks right and tests perfectly. Every time."
      />

      {CARTER.services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`section-y reveal ${i % 2 === 0 ? 'light' : 'bright'}`}>
          <div className="wrap">
            {/* Full-width section header - keeps both columns below aligned at the same Y */}
            <div style={{ marginBottom: 40 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)' }}>0{i + 1} / 05</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 18 }}>
                <div className="sc-glyph" style={{ width: 50, height: 50, color: 'var(--accent)', flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: CARTER.svg[s.icon] }}/>
                <h2 className="h-1" style={{ margin: 0 }}>{s.title}</h2>
              </div>
            </div>

            {/* Image (left) and body content (right) - same top baseline, stretched so bottoms meet */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'stretch' }}>
              <div>
                {s.imgSrc && (
                  <div style={{ height: '100%', minHeight: '320px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--white)', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                    <img src={s.imgSrc} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '16px' }} />
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="lede" style={{ color: 'var(--ink-2)', marginTop: 0 }}>{s.lede}</p>
                <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
                  {s.bullets.map((c, j) => (
                    <div key={j} style={{ background: 'var(--white)', padding: '22px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 8, height: 8, background: 'var(--accent)', flexShrink: 0 }}/>
                      <span className="display" style={{ fontWeight: 500, fontSize: 15 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 28 }}>
                  {s.slug === 'commercial'
                    ? <a href="commercial.html" className="btn btn-ghost-dark">Commercial deep-dive <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
                    : <a href="contact.html" className="btn btn-ghost-dark">Get your free quote <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>}
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
            <h2 style={{ marginTop: 20 }}>Not sure which service<br/>you need?</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>Get in touch and tell us a bit about your project and we&rsquo;ll guide you on the best approach.</p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big"><span className="accent">·</span> {CARTER.company.phone}</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary" style={{ marginTop: 0 }}>Get Your Free Quote <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted-2)', textAlign: 'center' }}>
                <span dangerouslySetInnerHTML={{ __html: CARTER.svg.lock || '&#128274;' }} style={{ display: 'inline-block', width: 12, marginRight: 6, verticalAlign: 'middle' }} />
                100% Secure. No obligation. Your data is strictly protected.
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

// ----- Areas -----
function AreasPage() {
  useScrollReveal();
  const [active, setActive] = useState('Chester');
  return (
    <>
      <Header current="areas" theme="dark"/>
      <PageHero
        section="Locations"
        sectionNum="03 / Locations"
        title="Regional coverage"
        titleAccent={<>you can rely on<span className="dot-white">.</span></>}
        subtext="Operating across the North West and North Wales, we provide dependable on-site support for both planned works and urgent requirements within a 50-mile radius of our Christleton base."
      />

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
                {(() => {
                  const a = CARTER.areas.find(x => x.name === active);
                  if (!a || !a.slug) return null;
                  return (
                    <div style={{ marginTop: 24 }}>
                      <a href={active === 'Chester' ? '/' : `electricians-${a.slug}.html`} className="btn btn-ghost-light" style={{ padding: '14px 24px', fontSize: 14 }}>
                        View {active} services <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/>
                      </a>
                    </div>
                  );
                })()}
              </div>
              <div className="area-list">
                {CARTER.areas.map(p => {
                  const isLink = !!p.slug;
                  const href = p.name === 'Chester' ? '/' : `electricians-${p.slug}.html`;
                  if (isLink) {
                    return (
                      <div
                        key={p.name}
                        className={`area-item ${active === p.name ? 'active' : ''}`}
                        onClick={() => setActive(p.name)}
                      >
                        <span>
                          <a
                            href={href}
                          >
                            {p.name}
                          </a>
                        </span>
                        <span className="distance">{p.distance}</span>
                      </div>
                    );
                  } else {
                    return (
                      <button
                        key={p.name}
                        type="button"
                        className={active === p.name ? 'active' : ''}
                        onClick={() => setActive(p.name)}
                      >
                        <span>{p.name}</span>
                        <span className="distance">{p.distance}</span>
                      </button>
                    );
                  }
                })}
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
