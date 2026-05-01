// Location pages for targeted areas — long-form, unique per-city content to avoid
// thin/duplicate-content penalties on service+location pages.

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, PageHero } = window;

function LocationPage({ locationName }) {
  useScrollReveal();

  const area = CARTER.areas.find(a => a.name === locationName) || {
    name: locationName, slug: locationName.toLowerCase().replace(/\s+/g, '-'),
    cases: 0, postcodes: [], neighbourhoods: [],
    intro: 'NICEIC-approved electrical services across ' + locationName + '.',
    commercialAngle: '', domesticAngle: '', featuredProject: '',
    landmarks: [], responseTime: 'within 48 hours', distance: '', county: ''
  };

  const faqs = (CARTER.locationFaqs ? CARTER.locationFaqs(area) : []);
  const relatedCases = CARTER.cases.filter(c =>
    (c.location || '').toLowerCase().indexOf(locationName.toLowerCase()) !== -1
  );
  const otherAreas = CARTER.areas.filter(a => a.name !== locationName).slice(0, 6);

  return (
    <>
      <Header current="areas" theme="dark" />

      <PageHero
        section={`Electricians in ${locationName}`}
        sectionNum="03.1 / Location"
        title={`Local electricians covering ${locationName}`}
        titleAccent={`— response within ${area.responseTime || '48 hours'}.`}
        subtext={`NICEIC-approved commercial, industrial, domestic and renewables electricians serving ${locationName}${area.postcodes && area.postcodes.length ? ' (' + area.postcodes.join(', ') + ')' : ''} and the surrounding ${area.county || 'area'}. EICR testing, EV chargers, full rewires and commercial fit-outs — delivered by our in-house team from our Christleton base, ${area.distance || 'a short drive from'} ${locationName}.`}
        ctas={
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
        }
      >
        <div className="hero-strip wrap" style={{ maxWidth: '100%', padding: 0 }}>
          <div className="wrap" style={{ display: 'contents' }}>
            <div className="hero-strip" style={{ gridColumn: '1 / -1' }}>
              <div className="cell">
                <span className="k">Coverage</span>
                <span className="v">{locationName} &amp; {area.county || 'Surrounds'}</span>
              </div>
              <div className="cell">
                <span className="k">Response Time</span>
                <span className="v"><span className="accent">{area.responseTime || 'Same-day'}</span> on-site</span>
              </div>
              <div className="cell">
                <span className="k">Accreditation</span>
                <span className="v">NICEIC <span className="accent">Approved</span></span>
              </div>
              <div className="cell">
                <span className="k">Sectors</span>
                <span className="v">Commercial · Domestic · Industrial</span>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Intro / local context — unique per city */}
      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'stretch' }}>
            <div className="section-head" style={{ marginBottom: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div>
                <div className="eyebrow">Local Electricians in {locationName}</div>
                <h2 className="h-1">Electrical work in {locationName}, done properly the first time<span className="accent">.</span></h2>
              </div>
              <p className="lede" style={{ marginTop: 'auto' }}>{area.intro}</p>
            </div>
            
            <div className="area-image" style={{ height: '100%', width: '100%', position: 'relative', minHeight: '300px' }}>
              <img 
                src={`Carter Electrical Contractors man with clipboard.jpg`} 
                alt={`${locationName} - Carter Electrical Contractors man with clipboard`} 
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} 
              />
            </div>
          </div>

          {/* Local facts strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginTop: 40 }}>
            {[
              { k: 'Coverage', v: area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : locationName },
              { k: 'Response time', v: area.responseTime || 'Within 48 hours' },
              { k: 'Distance from HQ', v: area.distance || '—' },
              { k: 'Accreditation', v: 'NICEIC + OZEV' },
              { k: 'Documented projects', v: (area.cases || 0) + ' in ' + locationName },
            ].map((r, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: '24px 22px' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)', textTransform: 'uppercase' }}>{r.k}</div>
                <div className="display" style={{ fontSize: 16, fontWeight: 500, marginTop: 6 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services localised to this city */}
      <section className="section-y reveal">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Services</div>
              <h2 className="h-1">The full electrical scope for {locationName}<span className="accent">.</span></h2>
            </div>
            <p className="lede">
              Five service lines, one in-house team. Here's how each applies to the {locationName} market — and what our {locationName} clients most often call us about.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: 40 }}>
            {CARTER.services.map((s, i) => (
              <div key={s.slug} style={{ background: 'var(--white)', border: '1px solid var(--rule)', overflow: 'hidden' }}>
                {s.imgSrc && (
                  <div style={{ width: '100%', position: 'relative', padding: '16px 16px 0 16px' }}>
                    <img src={s.imgSrc} alt={`${s.title} in ${locationName}`} style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} />
                  </div>
                )}
                <div style={{ padding: '32px', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 20 }}>
                    <div className="sc-glyph" style={{ width: 40, height: 40, color: 'var(--accent)', flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: CARTER.svg[s.icon] }}/>
                    <h3 className="h-3" style={{ margin: 0 }}>{s.title} electricians in {locationName}</h3>
                  </div>
                  <p style={{ color: 'var(--muted-2)', lineHeight: 1.6, marginBottom: 16 }}>{s.lede}</p>
                  <ul className="bullets" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {s.bullets && s.bullets.slice(0, 4).map((bullet, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: '0.9rem', color: 'var(--muted-1)' }}>
                        <span style={{ color: 'var(--accent)' }} dangerouslySetInnerHTML={{ __html: CARTER.svg.check }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial + domestic deep paragraphs — unique per area */}
      {(area.commercialAngle || area.domesticAngle) && (
      <section className="section-y light reveal">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40 }}>
          {area.commercialAngle && (
            <div>
              <div className="eyebrow">Commercial in {locationName}</div>
              <h3 className="h-2" style={{ marginTop: 10 }}>Commercial electricians in {locationName}<span className="accent">.</span></h3>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 16 }}>{area.commercialAngle}</p>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 14 }}>
                Typical scopes we quote for in {locationName}: full distribution and sub-mains replacements, emergency-lighting upgrades to BS 5266, BS 5839-1 fire detection, retail and restaurant fit-outs, data containment and structured cabling, EICR remedials following a failed report, and scheduled shutdowns timed around the business's trading hours.
              </p>
            </div>
          )}
          {area.domesticAngle && (
            <div>
              <div className="eyebrow">Domestic in {locationName}</div>
              <h3 className="h-2" style={{ marginTop: 10 }}>Domestic electricians in {locationName}<span className="accent">.</span></h3>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 16 }}>{area.domesticAngle}</p>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 14 }}>
                Common domestic jobs across {locationName}: full and partial rewires, consumer-unit (fuseboard) upgrades, OZEV-approved EV charger installs with load management, smart-lighting and smart-heating retrofits, extensions, loft conversions and garage conversions, external lighting and outbuilding supplies, and fault finding when a main breaker keeps tripping.
              </p>
            </div>
          )}
        </div>
      </section>
      )}

      {/* Areas within the city / neighbourhoods */}
      {area.neighbourhoods && area.neighbourhoods.length > 0 && (
      <section className="section-y reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow">Neighbourhoods served</div>
            <h2 className="h-2" style={{ marginTop: 10 }}>Areas of {locationName} we cover<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Our electricians work across every part of {locationName}{area.postcodes && area.postcodes.length ? ' — covering ' + area.postcodes.join(', ') : ''}. If your address is inside any of the following neighbourhoods, you're well inside our core coverage zone:
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginTop: 30 }}>
            {area.neighbourhoods.map((n, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--accent)' }} dangerouslySetInnerHTML={{ __html: CARTER.svg.pin }} />
                <span className="display" style={{ fontSize: 15, fontWeight: 500 }}>{n}</span>
              </div>
            ))}
          </div>
          {area.landmarks && area.landmarks.length > 0 && (
            <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 28, maxWidth: '70ch' }}>
              We also work around key {locationName} locations including {area.landmarks.join(', ')}. If you're scoping electrical work at one of these or on a nearby site, we've likely been on-site in the area recently — ask us for a reference.
            </p>
          )}
        </div>
      </section>
      )}

      {/* Featured project for this area */}
      {area.featuredProject && (
      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow">Recent work in {locationName}</div>
            <h2 className="h-2" style={{ marginTop: 10 }}>A {locationName} project we delivered<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>{area.featuredProject}</p>
            {area.cases > 0 && (
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 16 }}>
                We've completed {area.cases} documented electrical installations or compliance programmes in and around {locationName}. Our work is built on reliability, transparent pricing (the number on the quote is the number on the invoice), and rigorous NICEIC-standard safety.
              </p>
            )}
            {relatedCases.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <a href="case-studies.html" className="btn btn-ghost-dark">See related case studies <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {/* FAQ — genuinely local answers */}
      {faqs.length > 0 && (
      <section className="section-y reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow">Questions we get from {locationName}</div>
            <h2 className="h-2" style={{ marginTop: 10 }}>Frequently asked questions<span className="accent">.</span></h2>
          </div>
          <div style={{ marginTop: 30, display: 'grid', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ background: 'var(--white)', padding: '22px 24px' }}>
                <summary className="display" style={{ fontSize: 17, fontWeight: 500, cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
                <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 14 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Related nearby areas — internal linking */}
      {otherAreas.length > 0 && (
      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow">Also covering</div>
            <h2 className="h-2" style={{ marginTop: 10 }}>Other areas near {locationName}<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>
              We cover the wider {area.county || 'North West'} region from our Chester base. If you're scoping work outside {locationName} proper, the following are also in our core patch:
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginTop: 24 }}>
            {otherAreas.map(a => (
              <a key={a.name} href={a.slug === 'chester' ? '/' : `electricians-${a.slug}.html`} style={{ background: 'var(--white)', border: '1px solid var(--rule)', padding: '18px 20px', textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="display" style={{ fontWeight: 500, fontSize: 15 }}>Electricians in {a.name}</span>
                <span style={{ color: 'var(--accent)' }} dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
              </a>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA */}
      <section className="cta-band reveal">
        <div className="wrap">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2 style={{ marginTop: 20 }}>Need an electrician in {locationName}?<br/>Let's scope it properly<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Brief the scope in three steps. We'll be in touch within 48 hours.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big">
              <span className="accent">·</span> {CARTER.company.phone}
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Get Your Free Quote <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted-2)', textAlign: 'center' }}>
                <span dangerouslySetInnerHTML={{ __html: CARTER.svg.lock || '&#128274;' }} style={{ display: 'inline-block', width: 12, marginRight: 6, verticalAlign: 'middle' }} />
                100% Secure. No obligation. Your data is strictly protected.
              </div>
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

window.LocationPage = LocationPage;
