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
        title="Real installations."
        titleAccent="Real sign-offs."
        subtext="A record of work across commercial, hospitality, domestic and industrial — photographed and documented at handover."
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
              <a key={c.id} href={c.id === 'old-dukes' ? 'case-old-dukes.html' : '#'} className={`case-card ${c.size || ''}`}>
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

window.CaseIndex = CaseIndex;
window.OldDukes = OldDukes;
