// Homepage — Carter Electrical Contracting

const { Header, Footer, TrustBar, Logo, useScrollReveal, StatNumber, TweaksPanel } = window;

const HERO_HEADLINES = {
  outcome: {
    eyebrow: 'NICEIC · Chester · 24/7',
    h1: 'Electricians in Chester.',
    strapline: (
      <>
        Electrical services <span className="accent">you can trust.</span>
      </>
    ),
    sub: 'Commercial, industrial and domestic electrical services across Cheshire West, North Wales, Wirral and Merseyside. Local electricians covering the full electrics scope from first fix to sign-off.',
  },
  credential: {
    eyebrow: 'NICEIC Approved · Est. 2008',
    h1: 'NICEIC-approved electricians in Chester.',
    strapline: (
      <>
        Built to <span className="accent">last.</span>
      </>
    ),
    sub: 'Design and install of distribution, lighting, fire, emergency and renewable systems. Fully certified, documented, and handed over on schedule.',
  },
  regional: {
    eyebrow: 'Christleton · CH3 6AH',
    h1: 'Chester&rsquo;s electricians.',
    strapline: (
      <>
        Commercial-grade. <span className="accent">Local accountability.</span>
      </>
    ),
    sub: 'Based in Christleton. On-call across Chester, Wrexham, Wirral, Merseyside and North Wales. The same team, owning the work from first fix to sign-off.',
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
              Takes 60 seconds • Receive a proposal within 24 hours
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
              <span className="v">Chester · Wirral · North Wales</span>
            </div>
            <div className="cell">
              <span className="k">Response</span>
              <span className="v">24/7 · <span className="accent">emergency call-out</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro reveal" style={{ padding: '80px 0 40px' }}>
      <div className="wrap" style={{ maxWidth: '900px' }}>
        <div className="eyebrow" style={{ marginBottom: '24px' }}>Electrician in Chester</div>
        <h2 className="h-1" style={{ marginBottom: '28px' }}>
          NICEIC approved electrical contractor<br/>
          serving Cheshire West.
        </h2>
        <p className="lede" style={{ marginBottom: '20px' }}>
          Carter Electrical is an NICEIC approved electrical contractor serving Cheshire West and the wider Cheshire area. Our electrical services cover domestic, commercial and industrial electrical work across the local area. An electrician in Chester who is Part P qualified delivers every job to current building regulations and BS 7671.
        </p>
        <p className="lede" style={{ marginBottom: '20px' }}>
          Typical projects include a full rewire, consumer unit replacement, socket and light fitting installation, and electrical repairs. We handle single sockets, a full commercial electrical fit-out, or a fault repair with the same certified standard. Every job must comply with current regulations and is tested and signed off.
        </p>
        <p className="lede">
          Our team also covers portable appliance testing, EICR inspections, fuse board upgrades and emergency call-outs. Proper qualification and electrical wiring compliance on every installation.
        </p>
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
            <h2 className="h-1">One contractor.<br/>The full electrical scope.</h2>
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
            return (
            <a href={s.slug === 'commercial' ? 'commercial.html' : `services.html#${s.slug}`} key={s.slug} className="service-card" style={{ padding: 0 }}>
              <div className="sc-visual" style={{ height: '220px', position: 'relative', width: '100%' }}>
                <CarterPlaceholder imgSrc={s.imgSrc} hue={210} />
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
            <h2 className="h-1">Years of on-site<br/>accountability.</h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            A regional firm, built up one referral at a time. Indicative figures
            below; exact current totals kept on request for tender packs.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat">
            <StatNumber target={17} unit="+" />
            <span className="l">Years in business</span>
          </div>
          <div className="stat">
            <StatNumber target={640} suffix="" />
            <span className="l">Projects delivered across the region</span>
          </div>
          <div className="stat">
            <StatNumber target={24} unit="/7" />
            <span className="l">Emergency response for clients on contract</span>
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
            <h2 className="h-1">Real projects.<br/>Real sign-offs.</h2>
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
              href={c.id === 'old-dukes' ? 'case-old-dukes.html' : 'case-studies.html'}
              className="case-card"
            >
              <div className="case-visual">
                <CarterPlaceholder
                  imgSrc={c.imgSrc}
                  metaTag={`${c.sector} · ${c.subsector}`}
                  titleCaption={`${c.title} — ${c.location}`}
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
            <h2 className="h-1">Clients who came<br/>back for the next one.</h2>
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
            <h2 className="h-1">Local enough<br/>to be on-site by lunch.</h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Unit 5, White Lane Depot in Christleton. Main coverage within 25 miles,
            further afield for contract clients.
          </p>
        </div>

        <div className="areas-grid">
          <div className="area-map">
            <div className="map-grid" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
              {/* Abstracted region outline (not geographic — suggestive) */}
              <path d="M5,35 Q15,20 30,18 L45,10 Q60,12 70,22 Q82,28 88,42 Q92,58 84,72 Q74,84 60,86 Q42,90 28,82 Q14,74 8,58 Q2,48 5,35Z"
                    fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.25"/>
              <path d="M20,45 L80,45 M50,15 L50,80" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" strokeDasharray="1 1"/>
            </svg>
            <div className="map-crosshair">53°11′N · 02°50′W</div>
            {map.map((p) => (
              <div
                key={p.name}
                className={`pin ${p.hq ? 'hq' : ''} ${active === p.name ? 'active' : ''}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                onMouseEnter={() => setActive(p.name)}
                onClick={() => setActive(p.name)}
              >
                <span className="dot" />
                <span className="pin-label">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="area-detail">
            <div>
              <div className="label-mono" style={{ color: 'var(--accent)' }}>Current selection</div>
              <h3 className="h-2" style={{ margin: '10px 0 10px' }}>{active}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '42ch' }}>
                {active === 'Chester'
                  ? 'Our base. Domestic work, commercial maintenance contracts, hospitality fit-outs across the city.'
                  : `NICEIC electrical services in ${active}. Commercial, domestic and industrial installations, maintenance and emergency response.`}
              </p>
            </div>
            <div className="area-list">
              {map.map((p) => (
                <button
                  key={p.name}
                  className={active === p.name ? 'active' : ''}
                  onClick={() => setActive(p.name)}
                >
                  <span>{p.name}</span>
                  <span className="distance">{p.distance}</span>
                </button>
              ))}
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
            Get Your Free Quote.<br/>Quick, transparent, zero obligation.
          </h2>
          <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
            Share the scope, the site and the timescale. You&rsquo;ll hear back within
            one working day with the next sensible step — a site visit, a scoping
            call, or a straight proposal.
          </p>
        </div>
        <div className="cta-aside">
          <div className="label-mono">Speak to the team</div>
          <a href={CARTER.company.phoneHref} className="phone-big">
            <span className="accent">·</span> {CARTER.company.phone}
          </a>
          <div className="label-mono" style={{ color: 'var(--muted-2)' }}>Mon–Fri 07:30–17:30 · 24/7 emergency</div>
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
      <Intro />
      <Services />
      <Stats />
      <Cases />
      <Testimonials />
      <Areas />
      <CTABand />
      <Footer />
      <TweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
