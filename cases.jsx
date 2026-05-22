// Case studies index + Old Dukes detail + other pages

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, PageHero, MobileStickyCTA } = window;

// ----- Case Studies Index -----
function CaseIndex() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Commercial', 'Hospitality', 'Domestic', 'Industrial'];
  const visible = CARTER.cases.filter(c => {
    if (filter === 'All') return true;
    if (filter === 'Hospitality') return c.subsector === 'Hospitality';
    return c.sector === filter;
  });
  return (
    <>
      <Header current="cases" theme="dark" />
      <PageHero
        section="Case Studies"
        sectionNum="06 / Work"
        title="Real projects."
        titleAccent="Properly delivered."
        subtext="A proven track record across commercial, hospitality, domestic and industrial work — completed, signed off and documented."
      />
      <section className="cases">
        <div className="wrap">
          <div className="case-filter" role="tablist">
            {filters.map(f => (
              <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="cases-grid">
            {visible.map(c => (
              <a key={c.id} href={`case-${c.id}.html`} className={`case-card ${c.size || ''}`}>
                <div className="case-visual">
                  <CarterPlaceholder imgSrc={c.imgSrc} metaTag={`${c.sector} · ${c.subsector}`} titleCaption={`${c.title} — ${c.location}`} year={c.year} hue={c.hue}/>
                </div>
                <div className="case-body">
                  <div className="case-tags">
                    <span className="case-tag primary">{c.sector}</span>
                    {c.scope.slice(0,3).map(s => <span key={s} className="case-tag">{s}</span>)}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                  <span className="link">View project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

// ----- Old Dukes Detail -----
function OldDukes() {
  const c = CARTER.cases.find(x => x.id === 'old-dukes');
  return (
    <>
      <Header current="cases" theme="dark" />
      <section className="cs-hero">
        <div className="wrap">
          <div className="breadcrumbs" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
            <a href="index.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a> · <a href="case-studies.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Case Studies</a> · <span style={{ color: 'var(--accent)' }}>{c.title}</span>
          </div>
          <div className="cs-title-row">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>Commercial · Hospitality</div>
              <h1 className="h-display" style={{ marginTop: 18, fontSize: 'clamp(42px, 5.4vw, 78px)' }}>{c.title}</h1>
              <p className="hero-sub" style={{ marginTop: 22, maxWidth: '48ch' }}>{c.blurb}</p>
            </div>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <MetaTile k="Year" v={c.year} />
              <MetaTile k="Location" v={c.location} />
              <MetaTile k="Sector" v="Hospitality" />
            </div>
          </div>
          <div className="cs-visual" style={{ marginTop: 32 }}>
            <CarterPlaceholder imgSrc="uploads/dukes-1.jpg" metaTag="Commercial · Hospitality · Fit-out" titleCaption={`Old Dukes — ${c.location}`} year={c.year} hue={c.hue}/>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap cs-body-grid">
          <aside className="cs-meta">
            <dl>
              <dt>Client</dt><dd>Old Dukes Sports Bar</dd>
              <dt>Project type</dt><dd>Fit-out / conversion</dd>
              <dt>Duration</dt><dd>9 weeks on site</dd>
              <dt>Team</dt><dd>3 electricians + 1 PM</dd>
            </dl>
            <hr className="cs-meta-divider" />
            <div>
              <div className="label-mono" style={{ marginBottom: 10 }}>Scope delivered</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                {c.scope.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
                    <span style={{ width: 6, height: 6, background: 'var(--accent)' }}/>{s}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="cs-meta-divider" />
            <a href="contact.html" className="btn btn-ghost-dark">Discuss similar work <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
          </aside>
          <div className="cs-prose">
            <h3>The brief</h3>
            <p>An old city-centre tea rooms, converted across two floors into a sports bar. The client needed a single electrical contractor to coordinate distribution, lighting design, AV power, fire and emergency lighting — with a fixed opening date that didn&rsquo;t move.</p>
            <h3>What we did</h3>
            <p>We scoped the full package during stripping-out week, then phased the installation by floor: first-fix upstairs while the ground floor was still being opened up, then reversed for second-fix. A purpose-built distribution layout accommodated the bar, kitchen, AV walls and a new plant room without an incoming supply upgrade.</p>
            <p>Lighting was specified for sports-viewing and late-evening service — zoned, dimmable, with feature pendants on emergency battery backup. Fire alarm and emergency lighting were designed to BS 5839 / BS 5266 and commissioned alongside final electrical testing.</p>
            <h3>Outcome</h3>
            <p>Handed over one working day ahead of schedule. Full certification pack — NICEIC EIC, emergency lighting, fire alarm — delivered at sign-off. Client has since retained us on a PPM schedule covering annual testing and six-monthly emergency lighting checks.</p>

            <div className="cs-gallery">
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/dukes-2.jpg" metaTag="Bar area · ground floor" titleCaption="Feature pendants, zoned dimming" year={c.year} hue={c.hue}/></div>
              <div className="tile tall"><CarterPlaceholder imgSrc="uploads/dukes-3.jpg" metaTag="Distribution" titleCaption="New sub-board install" year={c.year} hue={c.hue - 8}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/wiring-2.jpeg" metaTag="Containment" titleCaption="Concealed tray run" year={c.year} hue={c.hue + 6}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/lights.jpeg" metaTag="Emergency lighting" titleCaption="Commissioning tests" year={c.year} hue={c.hue - 14}/></div>
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/dukes-3-1.jpg" metaTag="Upper floor · sports viewing" titleCaption="Dimmable scene lighting" year={c.year} hue={c.hue + 14}/></div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <div>
            <div className="eyebrow">Next project</div>
            <h2 style={{ marginTop: 20 }}>Running a fit-out?<br/>Bring us in at scoping.</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Earlier we&rsquo;re involved, fewer surprises on site. We&rsquo;ll tell you candidly whether we&rsquo;re the right fit for your project.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big"><span className="accent">·</span> {CARTER.company.phone}</a>
            <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Discuss Your Project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

function MetaTile({ k, v }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{k}</div>
      <div className="display" style={{ fontSize: 18, fontWeight: 500 }}>{v}</div>
    </div>
  );
}

// ----- Prenton, Wirral Detail -----
function PrentonWirral() {
  const c = CARTER.cases.find(x => x.id === 'prenton-wirral');
  return (
    <>
      <Header current="cases" theme="dark" />
      <section className="cs-hero">
        <div className="wrap">
          <div className="breadcrumbs" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
            <a href="index.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a> · <a href="case-studies.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Case Studies</a> · <span style={{ color: 'var(--accent)' }}>{c.title}</span>
          </div>
          <div className="cs-title-row">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>Commercial · Distribution</div>
              <h1 className="h-display" style={{ marginTop: 18, fontSize: 'clamp(42px, 5.4vw, 78px)' }}>{c.title}</h1>
              <p className="hero-sub" style={{ marginTop: 22, maxWidth: '48ch' }}>{c.blurb}</p>
            </div>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <MetaTile k="Year" v={c.year} />
              <MetaTile k="Location" v={c.location} />
              <MetaTile k="Sector" v="Commercial" />
            </div>
          </div>
          <div className="cs-visual" style={{ marginTop: 32 }}>
            <CarterPlaceholder imgSrc={c.imgSrc} metaTag="Commercial · Distribution · Mains Upgrade" titleCaption={`Prenton, Wirral — ${c.location}`} year={c.year} hue={c.hue}/>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap cs-body-grid">
          <aside className="cs-meta">
            <dl>
              <dt>Client</dt><dd>Commercial facility</dd>
              <dt>Project type</dt><dd>Mains distribution upgrade</dd>
              <dt>Duration</dt><dd>3 weeks on site</dd>
              <dt>Team</dt><dd>2 electricians</dd>
            </dl>
            <hr className="cs-meta-divider" />
            <div>
              <div className="label-mono" style={{ marginBottom: 10 }}>Scope delivered</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                {c.scope.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
                    <span style={{ width: 6, height: 6, background: 'var(--accent)' }}/>{s}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="cs-meta-divider" />
            <a href="contact.html" className="btn btn-ghost-dark">Discuss similar work <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
          </aside>
          <div className="cs-prose">
            <h3>The brief</h3>
            <p>An electrical inspection at a busy commercial and production facility in Wirral revealed critical compliance issues and distribution limitations. The client required urgent remedial action and a modern mains upgrade, but could not afford any daytime operational downtime.</p>
            <h3>What we did</h3>
            <p>We designed a phased out-of-hours programme. We installed a new three-phase distribution board and condensed multiple legacy consumer units into it. The existing distribution boards were relocated and centralized, and all cabling was rerouted through a new galvanised steel trunking containment system. All work was performed overnight and at weekends.</p>
            <h3>Outcome</h3>
            <p>Completed on schedule with zero interruption to the client's daytime operations. Handed over with a complete NICEIC installation certificate and full circuit labelling for their facility maintenance team.</p>

            <div className="cs-gallery">
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/prenton-wirral-3-BFD7531A489E49ECAE4289ECA3DEFB8E.jpg" metaTag="Mains distribution" titleCaption="New three phase board routing" year={c.year} hue={c.hue}/></div>
              <div className="tile tall"><CarterPlaceholder imgSrc="uploads/prenton-wirral-5-9444F481438447568EF2B0DD85F1BF43.jpg" metaTag="Containment" titleCaption="Galvanised steel trunking" year={c.year} hue={c.hue - 8}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/prenton-wirral-6-7847AFCA3CFA433DBA0DC74D5E2DB7EF.jpg" metaTag="Cabling routing" titleCaption="Clean secondary distribution" year={c.year} hue={c.hue + 6}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/prenton-wirral-7-502D171AF1D04214AC07350E3A7DE303.jpg" metaTag="Distribution board" titleCaption="Circuit consolidation" year={c.year} hue={c.hue - 14}/></div>
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/prenton-wirral-10-3B6D7267EA554A8DBC4631E5DF33D762.jpg" metaTag="Completed install" titleCaption="Phased out-of-hours handover" year={c.year} hue={c.hue + 14}/></div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <div>
            <div className="eyebrow">Next project</div>
            <h2 style={{ marginTop: 20 }}>Running a fit-out?<br/>Bring us in at scoping.</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Earlier we&rsquo;re involved, fewer surprises on site. We&rsquo;ll tell you candidly whether we&rsquo;re the right fit for your project.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big"><span className="accent">·</span> {CARTER.company.phone}</a>
            <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Discuss Your Project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

// ----- Carbonara @ No. 49 Detail -----
function CarbonaraNo49() {
  const c = CARTER.cases.find(x => x.id === 'carbonara-no-49');
  return (
    <>
      <Header current="cases" theme="dark" />
      <section className="cs-hero">
        <div className="wrap">
          <div className="breadcrumbs" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
            <a href="index.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a> · <a href="case-studies.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Case Studies</a> · <span style={{ color: 'var(--accent)' }}>{c.title}</span>
          </div>
          <div className="cs-title-row">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>Commercial · Restaurant</div>
              <h1 className="h-display" style={{ marginTop: 18, fontSize: 'clamp(42px, 5.4vw, 78px)' }}>{c.title}</h1>
              <p className="hero-sub" style={{ marginTop: 22, maxWidth: '48ch' }}>{c.blurb}</p>
            </div>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <MetaTile k="Year" v={c.year} />
              <MetaTile k="Location" v={c.location} />
              <MetaTile k="Sector" v="Commercial" />
            </div>
          </div>
          <div className="cs-visual" style={{ marginTop: 32 }}>
            <CarterPlaceholder imgSrc={c.imgSrc} metaTag="Commercial · Restaurant · Fit-out" titleCaption={`Carbonara @ no 49 — ${c.location}`} year={c.year} hue={c.hue}/>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap cs-body-grid">
          <aside className="cs-meta">
            <dl>
              <dt>Client</dt><dd>Carbonara No.49</dd>
              <dt>Project type</dt><dd>Restaurant fit-out</dd>
              <dt>Duration</dt><dd>4 weeks on site</dd>
              <dt>Team</dt><dd>2 electricians + 1 PM</dd>
            </dl>
            <hr className="cs-meta-divider" />
            <div>
              <div className="label-mono" style={{ marginBottom: 10 }}>Scope delivered</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                {c.scope.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
                    <span style={{ width: 6, height: 6, background: 'var(--accent)' }}/>{s}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="cs-meta-divider" />
            <a href="contact.html" className="btn btn-ghost-dark">Discuss similar work <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
          </aside>
          <div className="cs-prose">
            <h3>The brief</h3>
            <p>An empty commercial retail unit on Chester&rsquo;s historic Rows was to be converted into an authentic, fine-dining Italian restaurant. The client required a complete design-and-build electrical package including high-performance kitchen power, a decorative dimmable lighting scheme, and integrated audio systems — under a tight opening deadline.</p>
            <h3>What we did</h3>
            <p>We installed a new three-phase fuse board to handle the heavy cooking appliances and commercial kitchen load. The entire kitchen space was re-wired with stainless steel containment for easy cleaning. We then designed and installed the front-of-house lighting scheme, incorporating dimmable zoning, ambient pendants, and external signage illumination, and integrated a multi-zone sound system.</p>
            <h3>Outcome</h3>
            <p>The restaurant opened on the planned launch date with all compliance paperwork (NICEIC EIC, emergency lighting certification) signed off. The dimmable lighting system successfully created the intimate Roman-style atmosphere the client envisioned.</p>

            <div className="cs-gallery">
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/carbonara-3-scaled.jpg" metaTag="Dining area" titleCaption="Decorative dimmable lighting layout" year={c.year} hue={c.hue}/></div>
              <div className="tile tall"><CarterPlaceholder imgSrc="uploads/carbonara-2-1-scaled.jpg" metaTag="Front of house" titleCaption="Signage power and window display" year={c.year} hue={c.hue - 8}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/carbonara-2.jpg" metaTag="Kitchen fit-out" titleCaption="Stainless steel containment run" year={c.year} hue={c.hue + 6}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/wiring-2.jpeg" metaTag="Second-fix cabling" titleCaption="NICEIC-compliant wiring checks" year={c.year} hue={c.hue - 14}/></div>
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/carbonara-4-scaled.jpg" metaTag="Completed restaurant" titleCaption="Atmospheric dining lighting scene" year={c.year} hue={c.hue + 14}/></div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <div>
            <div className="eyebrow">Next project</div>
            <h2 style={{ marginTop: 20 }}>Running a fit-out?<br/>Bring us in at scoping.</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Earlier we&rsquo;re involved, fewer surprises on site. We&rsquo;ll tell you candidly whether we&rsquo;re the right fit for your project.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big"><span className="accent">·</span> {CARTER.company.phone}</a>
            <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Discuss Your Project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

// ----- Bryn Rhiw Detail -----
function BrynRhiw() {
  const c = CARTER.cases.find(x => x.id === 'bryn-rhiw');
  return (
    <>
      <Header current="cases" theme="dark" />
      <section className="cs-hero">
        <div className="wrap">
          <div className="breadcrumbs" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
            <a href="index.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</a> · <a href="case-studies.html" style={{ color: 'rgba(255,255,255,0.6)' }}>Case Studies</a> · <span style={{ color: 'var(--accent)' }}>{c.title}</span>
          </div>
          <div className="cs-title-row">
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)' }}>Domestic · Residential</div>
              <h1 className="h-display" style={{ marginTop: 18, fontSize: 'clamp(42px, 5.4vw, 78px)' }}>{c.title}</h1>
              <p className="hero-sub" style={{ marginTop: 22, maxWidth: '48ch' }}>{c.blurb}</p>
            </div>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <MetaTile k="Year" v={c.year} />
              <MetaTile k="Location" v={c.location} />
              <MetaTile k="Sector" v="Domestic" />
            </div>
          </div>
          <div className="cs-visual" style={{ marginTop: 32 }}>
            <CarterPlaceholder imgSrc={c.imgSrc} metaTag="Domestic · Residential · Rewire" titleCaption={`Bryn Rhiw — ${c.location}`} year={c.year} hue={c.hue}/>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap cs-body-grid">
          <aside className="cs-meta">
            <dl>
              <dt>Client</dt><dd>Residential Client</dd>
              <dt>Project type</dt><dd>Farmhouse restoration & rewire</dd>
              <dt>Duration</dt><dd>8 weeks on site</dd>
              <dt>Team</dt><dd>3 electricians</dd>
            </dl>
            <hr className="cs-meta-divider" />
            <div>
              <div className="label-mono" style={{ marginBottom: 10 }}>Scope delivered</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                {c.scope.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
                    <span style={{ width: 6, height: 6, background: 'var(--accent)' }}/>{s}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="cs-meta-divider" />
            <a href="contact.html" className="btn btn-ghost-dark">Discuss similar work <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
          </aside>
          <div className="cs-prose">
            <h3>The brief</h3>
            <p>A historic, derelict farmhouse in Lixwm was undergoing a comprehensive restoration. The project demanded a complete, modern electrical infrastructure while preserving original architectural features. The specification included a full rewire, high-efficiency external lighting, power supplies to multiple outbuildings, and integration of an Air Source Heat Pump (ASHP).</p>
            <h3>What we did</h3>
            <p>We executed a full rewire of the property, discreetly routing cables through historic fabric. We ran sub-main supplies to outbuildings for utility and workshop spaces, installed the electrical connection and control wiring for the ASHP heating system, and designed a low-impact external and garden lighting system to highlight the home&rsquo;s character.</p>
            <h3>Outcome</h3>
            <p>Delivered a fully certified, high-performance domestic electrical system that meets modern luxury and efficiency standards. All NICEIC certificates were supplied at sign-off, with the client enjoying modern smart heating integration and external lighting.</p>

            <div className="cs-gallery">
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/bryn-2.jpg" metaTag="Property exterior" titleCaption="Restored farmhouse and external uplighting" year={c.year} hue={c.hue}/></div>
              <div className="tile tall"><CarterPlaceholder imgSrc="uploads/bryn-3.jpg" metaTag="Interior lighting" titleCaption="Traditional exposed-beam wiring integration" year={c.year} hue={c.hue - 8}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/bryn-4.jpg" metaTag="Renewables" titleCaption="ASHP supply & control panel wiring" year={c.year} hue={c.hue + 6}/></div>
              <div className="tile sq"><CarterPlaceholder imgSrc="uploads/bryn-5.jpg" metaTag="Outbuilding supply" titleCaption="Sub-main distribution run" year={c.year} hue={c.hue - 14}/></div>
              <div className="tile wide"><CarterPlaceholder imgSrc="uploads/bryn-1.jpg" metaTag="Completed project" titleCaption="Restored farmhouse facade" year={c.year} hue={c.hue + 14}/></div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <div>
            <div className="eyebrow">Next project</div>
            <h2 style={{ marginTop: 20 }}>Running a fit-out?<br/>Bring us in at scoping.</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Earlier we&rsquo;re involved, fewer surprises on site. We&rsquo;ll tell you candidly whether we&rsquo;re the right fit for your project.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big"><span className="accent">·</span> {CARTER.company.phone}</a>
            <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Discuss Your Project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

window.CaseIndex = CaseIndex;
window.OldDukes = OldDukes;
window.PrentonWirral = PrentonWirral;
window.CarbonaraNo49 = CarbonaraNo49;
window.BrynRhiw = BrynRhiw;
