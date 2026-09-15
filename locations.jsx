// Location pages for targeted areas - long-form, unique per-city content to avoid
// thin/duplicate-content penalties on service+location pages.

const { Header, Footer, TrustBar, CarterPlaceholder, TweaksPanel, useScrollReveal, PageHero } = window;

function LocationPage({ locationName }) {
  useScrollReveal();

  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleContactClick = (e) => {
      const a = e.target.closest('a');
      if (a && a.getAttribute('href') === 'contact.html') {
        e.preventDefault();
        setIsContactModalOpen(true);
      }
    };
    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);


  const area = CARTER.areas.find(a => a.name === locationName) || {
    name: locationName, slug: locationName.toLowerCase().replace(/\s+/g, '-'),
    cases: 0, postcodes: [], neighbourhoods: [],
    intro: 'NICEIC-approved electrical services across ' + locationName + '.',
    commercialAngle: '', domesticAngle: '', featuredProject: '',
    landmarks: [], distance: '', county: ''
  };

  const slug = area.slug;
  const isArchetypeB = slug === 'tarporley' || slug === 'frodsham';
  const isArchetypeC = slug === 'deeside' || slug === 'ellesmere-port';
  const isArchetypeA = !isArchetypeB && !isArchetypeC; // mold, wrexham, northwich, wirral

  const faqs = (CARTER.locationFaqs ? CARTER.locationFaqs(area) : []);
  const relatedCases = CARTER.cases.filter(c =>
    (c.location || '').toLowerCase().indexOf(locationName.toLowerCase()) !== -1 ||
    (locationName === 'Ellesmere Port' && c.id === 'prenton-wirral')
  );
  const displayCases = relatedCases.length > 0
    ? relatedCases
    : CARTER.cases.filter(c => c.id === 'old-dukes' || c.id === 'bryn-rhiw');
  const chesterArea = CARTER.areas.find(a => a.slug === 'chester');
  const adjacentList = area.adjacentSilos && area.adjacentSilos.length
    ? area.adjacentSilos.map(s => CARTER.areas.find(a => a.slug === s)).filter(Boolean)
    : CARTER.areas.filter(a => a.name !== locationName).slice(0, 6);
  const otherAreas = [chesterArea, ...adjacentList].filter(a => a && a.name !== locationName);

  // Common Reusable Components
  const IntroSection = (
    <section key="intro" className="section-y light reveal">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'stretch' }}>
          <div className="section-head" style={{ marginBottom: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <div className="eyebrow">Local Electrical Contractor</div>
              <h2 className="h-1">NICEIC-approved electrical contractor serving {locationName}<span className="accent">.</span></h2>
            </div>
            <div style={{ marginTop: 24 }}>
              {(area.intro || '').split('\n\n').map((para, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 ? "lede" : ""} 
                  style={{ 
                    marginTop: idx === 0 ? 0 : 14, 
                    marginBottom: 0,
                    color: idx === 0 ? 'var(--dark)' : 'var(--muted-1)',
                    lineHeight: 1.6
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
          
          <div className="area-image" style={{ height: '100%', width: '100%', position: 'relative', minHeight: '300px' }}>
            <img 
              src={`electricians-${area.slug}.jpg`} 
              alt={`Electricians in ${locationName}`} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} 
            />
          </div>
        </div>

        {/* Local facts strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginTop: 40 }}>
          {[
            { k: 'Coverage', v: area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : locationName },
            { k: 'Accreditation', v: 'NICEIC Approved' },
            { k: 'Insurance', v: '£5M Public Liability' },
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

  const ServicesSection = (
    <section key="services" className="section-y reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Service Scope</div>
            <h2 className="h-1">Our electrical services<span className="accent">.</span></h2>
          </div>
          <p className="lede">
            In-house NICEIC engineers providing planned electrical installations, testing and safety upgrades.
          </p>
        </div>

        <div className="locations-services-grid">
          {CARTER.services.map((s) => {
            const href = s.slug === 'commercial' || s.slug === 'industrial' || s.slug === 'domestic' 
              ? `${s.slug}.html` 
              : `services.html#${s.slug}`;
            return (
              <a 
                key={s.slug} 
                href={href}
                className="service-card-link"
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  background: 'var(--white)', 
                  border: '1px solid var(--rule)', 
                  overflow: 'hidden',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {(() => {
                  let localImgSrc = s.imgSrc;
                  let localAlt = `${s.title} in ${locationName}`;
                  if (s.slug === 'commercial') {
                    localImgSrc = `uploads/commercial-electrical-services-${area.slug}.jpg`;
                    localAlt = `Commercial electrical services in ${locationName}`;
                  } else if (s.slug === 'industrial') {
                    localImgSrc = `uploads/industrial-electrical-services-${area.slug}.jpg`;
                    localAlt = `Industrial electrical services in ${locationName}`;
                  } else if (s.slug === 'domestic') {
                    localImgSrc = `uploads/domestic-electrical-services-${area.slug}.jpg`;
                    localAlt = `Domestic electrical services in ${locationName}`;
                  } else if (s.slug === 'testing') {
                    localImgSrc = `uploads/electrical-testing-inspection-${area.slug}.jpg`;
                    localAlt = `Electrical testing and inspection in ${locationName}`;
                  } else if (s.slug === 'renewables') {
                    localImgSrc = `uploads/ev-charger-installation-${area.slug}.jpg`;
                    localAlt = `EV charger installation in ${locationName}`;
                  }
                  return localImgSrc ? (
                    <div style={{ width: '100%', position: 'relative', padding: '16px 16px 0 16px' }}>
                      <img src={localImgSrc} alt={localAlt} style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} />
                    </div>
                  ) : null;
                })()}
                <div style={{ padding: '32px', paddingTop: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 20 }}>
                      <div className="sc-glyph" style={{ width: 40, height: 40, color: 'var(--accent)', flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: CARTER.svg[s.icon] }}/>
                      <h3 className="h-3" style={{ margin: 0 }}>{s.title === 'Commercial' || s.title === 'Industrial' || s.title === 'Domestic' ? `${s.title} Electrical` : s.title}</h3>
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
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                    <span>View {s.title} Services</span>
                    <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );

  const CommercialDomesticDeep = (area.commercialAngle || area.domesticAngle) && (
    <section key="deep-angles" className="section-y light reveal">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, alignItems: 'stretch' }}>
          {area.commercialAngle && (
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--rule)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(122, 193, 67, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0
                  }} dangerouslySetInnerHTML={{ __html: CARTER.svg.building }} />
                  <div>
                    <div className="eyebrow" style={{ fontSize: '11px', letterSpacing: '0.14em', marginBottom: 2 }}>Commercial Focus</div>
                    <h3 className="h-2" style={{ margin: 0, fontSize: '1.45rem', lineHeight: 1.25 }}>Commercial Electrical Services<span className="accent">.</span></h3>
                  </div>
                </div>
                <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, fontSize: '0.98rem', margin: '20px 0 0 0' }}>
                  {area.commercialAngle}
                </p>
              </div>

              <div style={{
                marginTop: 28,
                padding: '20px',
                background: 'var(--bg-light)',
                borderRadius: '14px',
                border: '1px solid var(--rule)'
              }}>
                <strong style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)', marginBottom: 10 }}>
                  Scopes We Routinely Quote:
                </strong>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {[
                    'Full distribution board upgrades & sub-mains',
                    'Emergency lighting installation to BS 5266 standards',
                    'Retail & office fit-outs with data containment',
                    'Landlord EICR safety inspection reports & remedials'
                  ].map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: 10, marginBottom: idx < 3 ? 8 : 0, fontSize: '0.88rem', color: 'var(--muted-1)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)' }} dangerouslySetInnerHTML={{ __html: CARTER.svg.check }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {area.domesticAngle && (
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--rule)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(122, 193, 67, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0
                  }} dangerouslySetInnerHTML={{ __html: CARTER.svg.home }} />
                  <div>
                    <div className="eyebrow" style={{ fontSize: '11px', letterSpacing: '0.14em', marginBottom: 2 }}>Domestic Focus</div>
                    <h3 className="h-2" style={{ margin: 0, fontSize: '1.45rem', lineHeight: 1.25 }}>Domestic Electrical Upgrades<span className="accent">.</span></h3>
                  </div>
                </div>
                <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, fontSize: '0.98rem', margin: '20px 0 0 0' }}>
                  {area.domesticAngle}
                </p>
              </div>

              <div style={{
                marginTop: 28,
                padding: '20px',
                background: 'var(--bg-light)',
                borderRadius: '14px',
                border: '1px solid var(--rule)'
              }}>
                <strong style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)', marginBottom: 10 }}>
                  Common Domestic Projects:
                </strong>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {[
                    'Consumer unit replacements (fuse box upgrades)',
                    'Full and partial house rewires with Part P certification',
                    'OZEV-approved EV charger installs with load management',
                    'Smart home lighting, heating controls & outbuilding power'
                  ].map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: 10, marginBottom: idx < 3 ? 8 : 0, fontSize: '0.88rem', color: 'var(--muted-1)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)' }} dangerouslySetInnerHTML={{ __html: CARTER.svg.check }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  const ProcessSectionB = (
    <section key="process-b" className="section-y light reveal">
      <div className="wrap">
        <div style={{ maxWidth: '800px', marginBottom: 32 }}>
          <div className="eyebrow">How We Work</div>
          <h2 className="h-2" style={{ marginTop: 10 }}>Our 3-Step Project Process<span className="accent">.</span></h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Transparent, professional electrical installations delivered on agreed schedules.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {[
            { step: '01', title: 'Site Survey & Scoping', desc: 'We inspect your electrical installation and review your project requirements in detail.' },
            { step: '02', title: 'Itemised Fixed Quote', desc: 'You receive a clear, written specification detailing all materials, labor, and NICEIC certification.' },
            { step: '03', title: 'Scheduled Work', desc: 'Our qualified engineers carry out the work to regulation standards with minimal disruption.' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--white)', border: '1px solid var(--rule)', padding: 32, borderRadius: 16 }}>
              <div className="mono" style={{ fontSize: 28, color: 'var(--accent)', fontWeight: 700 }}>{item.step}</div>
              <h3 className="h-3" style={{ marginTop: 16 }}>{item.title}</h3>
              <p style={{ color: 'var(--muted-2)', marginTop: 12, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ComplianceSectionC = (
    <section key="compliance-c" className="section-y light reveal">
      <div className="wrap">
        <div style={{ maxWidth: '800px', marginBottom: 32 }}>
          <div className="eyebrow">Health &amp; Safety Compliance</div>
          <h2 className="h-2" style={{ marginTop: 10 }}>Commercial Standards &amp; Safety First<span className="accent">.</span></h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Full RAMS documentation, £5M Public Liability Insurance, and strict adherence to BS 7671 standards for industrial and commercial environments.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {[
            { title: 'NICEIC Approved', detail: 'Full contractor approval for commercial & industrial power.' },
            { title: 'RAMS Compliant', detail: 'Site-specific Risk Assessments and Method Statements issued prior to work.' },
            { title: 'Minimal Disruption', detail: 'Out-of-hours and planned shutdown scheduling to protect operational continuity.' },
            { title: 'Digital Certification', detail: 'NICEIC compliance certificates delivered within 48 hours of completion.' }
          ].map((c, i) => (
            <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--rule)', padding: 24, borderRadius: 12 }}>
              <strong style={{ display: 'block', fontSize: 16, color: 'var(--ink)' }}>{c.title}</strong>
              <span style={{ display: 'block', fontSize: 14, color: 'var(--muted-2)', marginTop: 8, lineHeight: 1.5 }}>{c.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const NeighbourhoodsSection = area.neighbourhoods && area.neighbourhoods.length > 0 && (
    <section key="neighbourhoods" className="section-y reveal">
      <div className="wrap">
        <div style={{ maxWidth: '800px' }}>
          <div className="eyebrow">Coverage Areas</div>
          <h2 className="h-2" style={{ marginTop: 10 }}>Sub-areas &amp; postcodes covered<span className="accent">.</span></h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Covering {area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : locationName} and surrounding localities:
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
      </div>
    </section>
  );

  const MapSection = (
    <section key="map" className="section-y light reveal" id="map">
      <div className="wrap">
        <div style={{ maxWidth: '800px', marginBottom: 28 }}>
          <div className="eyebrow">Local Area Map</div>
          <h2 className="h-2" style={{ marginTop: 10 }}>Where We Serve<span className="accent">.</span></h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Our qualified engineers provide scheduled coverage across {locationName} and neighbouring postcodes.
          </p>
        </div>
        <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid var(--rule)' }}>
          <iframe
            title={`Map of coverage area in ${locationName}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${encodeURIComponent(locationName + ', UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
          />
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = area.testimonials && area.testimonials.length > 0 && (
    <section key="testimonials" className="section-y reveal" id="testimonials">
      <div className="wrap">
        <div style={{ maxWidth: '800px', marginBottom: 32 }}>
          <div className="eyebrow">Client Feedback</div>
          <h2 className="h-2" style={{ marginTop: 10 }}>Testimonials<span className="accent">.</span></h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Feedback from commercial and domestic clients across {locationName}.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {area.testimonials.map((t, idx) => (
            <div key={idx} style={{ background: 'var(--white)', border: '1px solid var(--rule)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div>
                <div style={{ color: 'var(--accent)', fontSize: '20px', marginBottom: 12 }}>★★★★★</div>
                <p style={{ color: 'var(--ink)', fontSize: '1.05rem', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>"{t.quote}"</p>
              </div>
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ display: 'block', color: 'var(--ink)', fontSize: '15px' }}>{t.author}</strong>
                  <small style={{ color: 'var(--muted)', fontSize: '13px' }}>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FAQsSection = faqs.length > 0 && (
    <section key="faqs" className="section-y reveal">
      <div className="wrap">
        <div style={{ maxWidth: '800px' }}>
          <div className="eyebrow">Common Questions</div>
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
  );

  const NearbySection = otherAreas.length > 0 && (
    <section key="nearby" className="section-y light reveal">
      <div className="wrap">
        <div style={{ maxWidth: '800px' }}>
          <div className="eyebrow">Also covering</div>
          <h2 className="h-2" style={{ marginTop: 10 }}>Nearby coverage<span className="accent">.</span></h2>
          <p className="lede" style={{ marginTop: 16 }}>
            We cover the wider {area.county || 'North West'} region from our Chester base:
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
  );

  // Construct page layout based on Archetype
  let contentBlocks = [];
  if (isArchetypeB) {
    // Archetype B (Residential & Villages: Tarporley, Frodsham)
    contentBlocks = [
      IntroSection,
      CommercialDomesticDeep,
      ServicesSection,
      NeighbourhoodsSection,
      TestimonialsSection,
      MapSection,
      FAQsSection,
      NearbySection
    ];
  } else if (isArchetypeC) {
    // Archetype C (Commercial & Industrial Hubs: Deeside, Ellesmere Port)
    contentBlocks = [
      IntroSection,
      ComplianceSectionC,
      CommercialDomesticDeep,
      ServicesSection,
      MapSection,
      NeighbourhoodsSection,
      TestimonialsSection,
      FAQsSection,
      NearbySection
    ];
  } else {
    // Archetype A (Regional Hubs: Mold, Wrexham, Northwich, Wirral)
    contentBlocks = [
      IntroSection,
      TestimonialsSection,
      ServicesSection,
      CommercialDomesticDeep,
      MapSection,
      NeighbourhoodsSection,
      FAQsSection,
      NearbySection
    ];
  }

  return (
    <>
      <Header current="areas" theme="dark" />

      <PageHero
        title={`Electricians in ${locationName}`}
        titleAccent=" - NICEIC-approved."
        subtext={area.heroSubtext || `NICEIC-approved commercial, industrial and domestic electrical contractor serving ${locationName}.`}
        ctas={
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
        }
      />

      {contentBlocks}

      {/* CTA */}
      <section className="cta-band reveal">
        <div className="wrap">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2 style={{ marginTop: 20 }}>Need an electrician in {locationName}?<br/>Get in touch today<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Brief your project requirements. Our team will follow up promptly with a written quote.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big">
              <span className="accent">·</span> {CARTER.company.phone}
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Get Your Free Quote <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted-2)', textAlign: 'left' }}>
                100% Secure. No obligation. Your data is strictly protected.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}

function ContactModal({ isOpen, onClose }) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [data, setData] = React.useState({
    service: '',
    sector: '',
    scope: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    postcode: '',
    timing: '',
    details: '',
  });
  const [errors, setErrors] = React.useState({});

  // Reset form when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setStep(0);
      setSubmitted(false);
      setIsSubmitting(false);
      setData({
        service: '',
        sector: '',
        scope: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        postcode: '',
        timing: '',
        details: '',
      });
      setErrors({});
    }
  }, [isOpen]);

  const update = (patch) => setData(d => ({ ...d, ...patch }));
  const setErr = (key, msg) => setErrors(e => ({ ...e, [key]: msg }));
  const clearErr = (key) => setErrors(e => { const n = { ...e }; delete n[key]; return n; });

  const services = ['Commercial', 'Industrial', 'Domestic', 'Renewables / EV', 'Testing / EICR', 'Maintenance'];
  const sectors = ['Office', 'Retail', 'Hospitality', 'Healthcare', 'Warehouse', 'Residential', 'Other'];
  const timings = ['Within a month', '1–3 months', '3+ months / scoping'];

  const validateStep = () => {
    const errs = {};
    if (step === 0) {
      if (!data.service) errs.service = 'Pick a service area';
    }
    if (step === 1) {
      if (!data.scope) errs.scope = 'Tell us briefly what you need';
      if (!data.timing) errs.timing = 'Pick a timeframe';
    }
    if (step === 2) {
      if (!data.name) errs.name = 'Your name, please';
      if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = 'A valid email address';
      if (!data.phone || data.phone.replace(/\D/g, '').length < 9) errs.phone = 'A reachable UK number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => { if (validateStep()) setStep(s => s + 1); };
  const back = () => setStep(s => Math.max(0, s - 1));
  const submit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        window.location.href = 'thank-you.html';
      } else {
        alert('There was a problem submitting your enquiry. Please try again or call us directly.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again or call us directly.');
    }
    setIsSubmitting(false);
  };

  const refNum = 'CEC-' + Math.floor(1000 + Math.random() * 9000) + '-' + new Date().getFullYear();

  // Close when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`contact-modal-overlay ${isOpen ? 'is-open' : ''}`} onClick={onClose}>
      <div className="contact-modal-container" onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close form">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>
        
        <div className="form-shell">
          <div className="form-stepper">
            {['Service', 'Project', 'Details'].map((s, i) => (
              <div key={i} className={`form-step ${step === i ? 'active' : step > i ? 'done' : ''}`}>
                <span className="num">{step > i ? '✓' : i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div>
              <div className="label-mono" style={{ marginBottom: 12 }}>Step 1 of 3</div>
              <h3 className="h-2" style={{ margin: '0 0 24px' }}>What can we help with?</h3>
              <div className="field">
                <label>Service area <span className="req">*</span></label>
                <div className="chip-group">
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      className={`chip ${data.service === s ? 'selected' : ''}`}
                      onClick={() => { update({ service: s }); clearErr('service'); }}
                    >
                      {data.service === s && <span className="tick" dangerouslySetInnerHTML={{ __html: CARTER.svg.check }} />}
                      {s}
                    </button>
                  ))}
                </div>
                {errors.service && <span className="err-msg">{errors.service}</span>}
              </div>
              <div className="field">
                <label>Sector (optional)</label>
                <div className="chip-group">
                  {sectors.map(s => (
                    <button
                      key={s}
                      type="button"
                      className={`chip ${data.sector === s ? 'selected' : ''}`}
                      onClick={() => update({ sector: data.sector === s ? '' : s })}
                    >{s}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="label-mono" style={{ marginBottom: 12 }}>Step 2 of 3</div>
              <h3 className="h-2" style={{ margin: '0 0 24px' }}>Tell us about the project.</h3>
              <div className={`field ${errors.scope ? 'error' : ''}`}>
                <label>Scope in a couple of sentences <span className="req">*</span></label>
                <textarea
                  value={data.scope}
                  onChange={(e) => { update({ scope: e.target.value }); if (errors.scope) clearErr('scope'); }}
                  placeholder="e.g. Office fit-out, ~1,200 sq ft, new distribution, LED lighting, fire alarm integration."
                />
                {errors.scope && <span className="err-msg">{errors.scope}</span>}
              </div>
              <div className="field">
                <label>When do you need it done? <span className="req">*</span></label>
                <div className="chip-group">
                  {timings.map(t => (
                    <button key={t} type="button" className={`chip ${data.timing === t ? 'selected' : ''}`} onClick={() => { update({ timing: t }); clearErr('timing'); }}>{t}</button>
                  ))}
                </div>
                {errors.timing && <span className="err-msg">{errors.timing}</span>}
              </div>
              <div className="field">
                <label>Site postcode (optional)</label>
                <input type="text" value={data.postcode} onChange={e => update({ postcode: e.target.value.toUpperCase() })} placeholder="e.g. CH1 2AB"/>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="label-mono" style={{ marginBottom: 12 }}>Step 3 of 3</div>
              <h3 className="h-2" style={{ margin: '0 0 24px' }}>How do we reach you?</h3>
              <div className="field-row">
                <div className={`field ${errors.name ? 'error' : ''}`}>
                  <label>Your name <span className="req">*</span></label>
                  <input type="text" value={data.name} onChange={e => { update({ name: e.target.value }); if (errors.name) clearErr('name'); }}/>
                  {errors.name && <span className="err-msg">{errors.name}</span>}
                </div>
                <div className="field">
                  <label>Company (optional)</label>
                  <input type="text" value={data.company} onChange={e => update({ company: e.target.value })}/>
                </div>
              </div>
              <div className="field-row">
                <div className={`field ${errors.email ? 'error' : ''}`}>
                  <label>Email <span className="req">*</span></label>
                  <input type="email" value={data.email} onChange={e => { update({ email: e.target.value }); if (errors.email) clearErr('email'); }}/>
                  {errors.email && <span className="err-msg">{errors.email}</span>}
                </div>
                <div className={`field ${errors.phone ? 'error' : ''}`}>
                  <label>Phone <span className="req">*</span></label>
                  <input type="tel" value={data.phone} onChange={e => { update({ phone: e.target.value }); if (errors.phone) clearErr('phone'); }}/>
                  {errors.phone && <span className="err-msg">{errors.phone}</span>}
                </div>
              </div>
              <div className="field">
                <label>Anything else we should know?</label>
                <textarea value={data.details} onChange={e => update({ details: e.target.value })} placeholder="Access, timings, existing documentation, other contractors on site…"/>
              </div>
            </div>
          )}

          <div className="form-actions">
            {step > 0
              ? <button type="button" className="back-link" onClick={back} disabled={isSubmitting}>← Back</button>
              : <span />}
            {step < 2
              ? <button type="button" className="btn btn-primary" onClick={next}>Continue <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></button>
              : <button type="button" className="btn btn-primary" onClick={submit} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send enquiry'} 
                  {!isSubmitting && <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/>}
                </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

window.LocationPage = LocationPage;

