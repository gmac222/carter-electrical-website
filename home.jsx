// Homepage - Carter Electrical Contracting

const { Header, Footer, TrustBar, Logo, useScrollReveal, StatNumber, TweaksPanel } = window;

const HERO_HEADLINES = {
  outcome: {
    eyebrow: 'NICEIC · Chester · Est. 2019',
    h1: <>Electricians in Chester<span className="accent">.</span></>,
    strapline: (
      <>
        Electrical services <span className="accent">you can trust<span style={{ color: 'var(--white)' }}>.</span></span>
      </>
    ),
    sub: 'Commercial, industrial and domestic electrical services across the North West and North Wales. Local electricians covering the full electrics scope from first fix to sign-off.',
  },
  credential: {
    eyebrow: 'NICEIC Approved · Est. 2019',
    h1: <>NICEIC-approved electricians in Chester<span className="accent">.</span></>,
    strapline: (
      <>
        Built to <span className="accent">last<span style={{ color: 'var(--white)' }}>.</span></span>
      </>
    ),
    sub: 'Design and install of distribution, lighting, fire, emergency and renewable systems. Fully certified, documented, and handed over on schedule.',
  },
  regional: {
    eyebrow: 'Christleton · CH3 6AH',
    h1: <>Chester&rsquo;s electricians<span className="accent">.</span></>,
    strapline: (
      <>
        Commercial-grade<span className="accent">.</span> <span className="accent">Local accountability<span style={{ color: 'var(--white)' }}>.</span></span>
      </>
    ),
    sub: 'Based in Christleton. On-call across the North West and North Wales. The same team, owning the work from first fix to sign-off.',
  },
};

function Hero() {
  const [variant, setVariant] = useState('outcome');
  useEffect(() => {
    const update = () => setVariant(document.body.dataset.heroHeadline || 'outcome');
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.body, { attributes: true, attributeFilter: ['data-hero-headline'] });
    return () => obs.disconnect();
  }, []);
  const copy = HERO_HEADLINES[variant] || HERO_HEADLINES.outcome;

  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      {window.HeroCanvas ? <window.HeroCanvas /> : null}
      <div className="wrap hero-inner">
        <div className="hero-meta">
          <span><span className="dot-green" /> {copy.eyebrow}</span>
          <span>01 / Electricians Chester</span>
          <span>Ref · carterelec.co.uk</span>
        </div>
        <h1 className="h-display">{copy.h1}</h1>
        {copy.strapline && <div className="hero-strapline">{copy.strapline}</div>}
        <p className="hero-sub">{copy.sub}</p>
        <div className="hero-ctas">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="contact.html" className="btn btn-primary">
                Get Your Free Quote
                <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
              </a>
              <a href={CARTER.company.phoneHref} className="btn btn-ghost-light">
                <span dangerouslySetInnerHTML={{ __html: CARTER.svg.phone }} style={{ width: 14, height: 14 }} />
                Call {CARTER.company.phone}
              </a>
            </div>
            <div className="label-mono" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
              Takes 60 seconds • We'll be in touch within 48 hours
            </div>
          </div>
        </div>
      </div>
      <div className="hero-strip wrap" style={{ maxWidth: '100%', padding: 0 }}>
        <div className="wrap" style={{ display: 'contents' }}>
          <div className="hero-strip" style={{ gridColumn: '1 / -1' }}>
            <div className="cell">
              <span className="k">Sectors</span>
              <span className="v">Commercial · Industrial · Domestic</span>
            </div>
            <div className="cell">
              <span className="k">Accreditation</span>
              <span className="v">NICEIC <span className="accent">Approved Contractor</span></span>
            </div>
            <div className="cell">
              <span className="k">Coverage</span>
              <span className="v">North West &amp; North Wales</span>
            </div>
            <div className="cell">
              <span className="k">Assurance</span>
              <span className="v">Fully Insured · <span className="accent">Guaranteed Work</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section-y light reveal">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'stretch' }}>

          {/* Left: heading + body text */}
          <div className="section-head" style={{ marginBottom: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <div className="eyebrow">Electrician in Chester</div>
              <h2 className="h-1" style={{ marginTop: '12px' }}>
                NICEIC approved electrical contractor serving Cheshire West<span className="accent">.</span>
              </h2>
            </div>
            <p className="lede" style={{ marginTop: '28px' }}>
              <strong>Carter Electrical</strong> is an NICEIC approved electrical contractor serving Cheshire West and the wider Cheshire area. Our electrical services cover domestic, commercial and industrial electrical work across the local area. Every job is compliant with current building regulations and BS&nbsp;7671, and signed off with full documentation.
            </p>
            <p className="lede" style={{ marginTop: '16px' }}>
              Typical projects include full rewires, replacement consumer units, socket and light fitting installation, and electrical repairs - from a single socket to a full commercial electrical fit-out or fault repair, all delivered to the same certified standard.
            </p>
          </div>

          {/* Right: image */}
          <div className="area-image" style={{ height: '100%', width: '100%', position: 'relative', minHeight: '300px' }}>
            <img
              src="electricians-chester.jpg"
              alt="Electricians in Chester"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
            />
          </div>
        </div>

        {/* Facts strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginTop: 40 }}>
          {[
            { k: 'Coverage', v: 'Chester & Cheshire West' },
            { k: 'Response time', v: 'Within 48 hours' },
            { k: 'Accreditation', v: 'NICEIC + OZEV' },
            { k: 'Est.', v: '2019 · 7+ years' },
          ].map((r, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '24px 22px' }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)', textTransform: 'uppercase' }}>{r.k}</div>
              <div className="display" style={{ fontSize: 16, fontWeight: 500, marginTop: 6 }}>{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">02 · Services</div>
            <h2 className="h-1">One contractor<span className="accent">.</span><br/>The full electrical scope<span className="accent">.</span></h2>
            <p className="lede">
              From a single board upgrade to a full commercial fit-out. Certified,
              compliant and delivered by an in-house team that owns the job end
              to end.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {CARTER.services.map((s, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            const chesterImages = {
              commercial: 'uploads/commercial-electrical-services-chester.jpg',
              industrial: 'uploads/industrial-electrical-services-chester.jpg',
              domestic: 'uploads/domestic-electrical-services-chester.jpg',
              testing: 'uploads/electrical-testing-inspection-chester.jpg',
              renewables: 'uploads/ev-charger-installation-chester.jpg'
            };
            const chesterAlts = {
              commercial: 'Commercial electrical services in Chester',
              industrial: 'Industrial electrical services in Chester',
              domestic: 'Domestic electrical services in Chester',
              testing: 'Electrical testing and inspection in Chester',
              renewables: 'EV charger installation in Chester'
            };
            const chesterImgSrc = chesterImages[s.slug] || s.imgSrc;
            const chesterAlt = chesterAlts[s.slug] || 'Carter Electrical';
            return (
            <a href={s.slug === 'commercial' || s.slug === 'industrial' || s.slug === 'domestic' ? `${s.slug}.html` : `services.html#${s.slug}`} key={s.slug} className="service-card" style={{ padding: 0 }}>
              <div className="sc-visual" style={{ height: '220px', position: 'relative', width: '100%' }}>
                <CarterPlaceholder imgSrc={chesterImgSrc} alt={chesterAlt} hue={210} />
              </div>
              <div style={{ padding: '32px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="sc-num">{num} / {String(CARTER.services.length).padStart(2,'0')}</span>
                <span className="sc-glyph" style={{ marginTop: '16px' }} dangerouslySetInnerHTML={{ __html: CARTER.svg[s.icon] }} />
                <h3>{s.title}</h3>
                <p className="sc-desc">{s.lede || s.desc}</p>
                <div className="sc-reveal">
                  <ul>
                    {(s.bullets || s.capabilities || []).slice(0, 5).map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
                <div className="sc-footer">
                  <span>Get A Quote</span>
                  <span className="arrow" dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
                </div>
              </div>
            </a>
          )})}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats reveal">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 60 }}>
          <div>
            <div className="eyebrow" style={{ color: '#8a8a85' }}>03 · By the numbers</div>
            <h2 className="h-1">Years of on-site<br/>accountability<span className="accent">.</span></h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            A regional firm, built up one referral at a time. Indicative figures
            below; exact current totals kept on request for tender packs.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat">
            <StatNumber target={7} unit="+" />
            <span className="l">Years in business</span>
          </div>
          <div className="stat">
            <StatNumber target={640} suffix="" />
            <span className="l">Projects delivered across the region</span>
          </div>
          <div className="stat">
            <StatNumber target={1} unit=" day" />
            <span className="l">Typical response on contract enquiries</span>
          </div>
          <div className="stat">
            <StatNumber target={100} unit="%" />
            <span className="l">NICEIC-certified on handover</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Commercial', 'Hospitality', 'Domestic', 'Industrial'];
  const visible = CARTER.cases.filter((c) => {
    if (filter === 'All') return true;
    if (filter === 'Hospitality') return c.subsector === 'Hospitality';
    return c.sector === filter;
  });

  return (
    <section className="cases reveal" id="cases">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">04 · Selected work</div>
            <h2 className="h-1">Real projects<span className="accent">.</span><br/>Real sign-offs<span className="accent">.</span></h2>
          </div>
          <p className="lede">
            A cross-section of recent installations. Commercial fit-outs,
            hospitality refits, period rewires and new-build renewables.
          </p>
        </div>

        <div className="case-filter" role="tablist">
          {filters.map(f => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >{f}</button>
          ))}
        </div>

        <div className="cases-grid">
          {visible.map((c, i) => (
            <a
              key={c.id}
              href={`case-${c.id}.html`}
              className="case-card"
            >
              <div className="case-visual">
                <CarterPlaceholder
                  imgSrc={c.imgSrc}
                  metaTag={`${c.sector} · ${c.subsector}`}
                  titleCaption={`${c.title} - ${c.location}`}
                  year={c.year}
                  hue={c.hue}
                />
              </div>
              <div className="case-body">
                <div className="case-tags">
                  <span className="case-tag primary">{c.sector}</span>
                  {c.scope.slice(0, 2).map(s => <span key={s} className="case-tag">{s}</span>)}
                </div>
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
                <span className="link">
                  View project
                  <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">05 · In their words</div>
            <h2 className="h-1">Client Testimonials<span className="accent">.</span></h2>
          </div>
          <p className="lede">
            Representative feedback from recent commercial and domestic clients,
            attributed to the projects shown above.
          </p>
        </div>
        <div className="testimonial-grid">
          {CARTER.testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="mark">&ldquo;</div>
              <blockquote>{t.quote}</blockquote>
              <div className="cite">
                <div className="who">
                  {t.who}
                  <small>{t.role}</small>
                </div>
                <div className="project">{t.project}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const [active, setActive] = useState('Chester');
  const map = CARTER.areas;
  return (
    <section className="areas reveal" id="areas">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 50 }}>
          <div>
            <div className="eyebrow" style={{ color: '#8a8a85' }}>06 · Areas we cover</div>
            <h2 className="h-1">Covering the<br/>North West &amp; North Wales<span className="accent">.</span></h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Based at Unit 5, White Lane Depot in Christleton. Regular coverage across a 40–50 mile radius for both planned works and urgent call-outs.
          </p>
        </div>

        <div className="areas-grid">
          <div className="area-image" style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden' }}>
            <img 
              src="niceic-approved-electrician-chester.jpg" 
              alt="NICEIC approved electrician in Chester" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
          <div className="area-detail">
            <div>
              <div className="label-mono" style={{ color: 'var(--accent)' }}>Current selection</div>
              <h3 className="h-2" style={{ margin: '10px 0 10px' }}>{active}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '42ch' }}>
                {active === 'Chester'
                  ? 'Our base. Domestic work, commercial maintenance contracts, hospitality fit-outs across the city.'
                  : `NICEIC electrical services in ${active}. Commercial, domestic and industrial installations and maintenance.`}
              </p>
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
              {map.map((p) => {
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
  );
}

function CTABand() {
  return (
    <section className="cta-band reveal">
      <div className="wrap">
        <div>
          <div className="eyebrow">07 · Start a conversation</div>
          <h2 style={{ marginTop: 20 }}>
            Get Your Free Quote<span className="accent">.</span><br/>Quick &amp; no obligation<span className="accent">.</span>
          </h2>
          <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
            Share the scope, the site and the timescale. We&rsquo;ll be in touch shortly to talk through the next sensible step - a site visit, a scoping call, or a straight proposal.
          </p>
        </div>
        <div className="cta-aside">
          <div className="label-mono">Speak to the team</div>
          <a href={CARTER.company.phoneHref} className="phone-big">
            <span className="accent">·</span> {CARTER.company.phone}
          </a>
          <div className="label-mono" style={{ color: 'var(--muted-2)' }}>Mon–Fri 07:30–17:30</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '14px' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="contact.html" className="btn btn-primary">
                Get Your Free Quote
                <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
              </a>
              <a href={`mailto:${CARTER.company.email}`} className="btn btn-ghost-dark">Email us</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted-2)', fontSize: '13px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              100% Secure. No obligation. Your data is strictly protected.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  useScrollReveal();
  return (
    <>
      <Header current="home" theme="dark" />
      <Hero />
      <TrustBar />
      <Services />
      <Intro />
      <Cases />
      <Testimonials />
      <Areas />
      <CTABand />
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
