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

  const faqs = (CARTER.locationFaqs ? CARTER.locationFaqs(area) : []);
  const relatedCases = CARTER.cases.filter(c =>
    (c.location || '').toLowerCase().indexOf(locationName.toLowerCase()) !== -1 ||
    (locationName === 'Ellesmere Port' && c.id === 'prenton-wirral')
  );
  const displayCases = relatedCases.length > 0
    ? relatedCases
    : CARTER.cases.filter(c => c.id === 'old-dukes' || c.id === 'bryn-rhiw');
  const otherAreas = CARTER.areas.filter(a => a.name !== locationName).slice(0, 6);

  return (
    <>
      <Header current="areas" theme="dark" />

      <PageHero
        section="Local Coverage"
        sectionNum="03.1 / Location"
        title={`Electricians in ${locationName}`}
        titleAccent=" - NICEIC-approved."
        subtext={`NICEIC-approved commercial, industrial, domestic and renewables electricians serving ${locationName}${area.postcodes && area.postcodes.length ? ' (' + area.postcodes.join(', ') + ')' : ''} and the surrounding ${area.county || 'area'}. EICR testing, EV chargers, full rewires and commercial fit-outs.`}
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
                <span className="k">Assurance</span>
                <span className="v">Fully Insured · <span className="accent">Guaranteed</span></span>
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

      <TrustBar area={area} />

      {/* Intro / local context - unique per city */}
      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'stretch' }}>
            <div className="section-head" style={{ marginBottom: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div>
                <div className="eyebrow">Local Electricians</div>
                <h2 className="h-1">Approved electricians in {locationName}, done properly the first time<span className="accent">.</span></h2>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginTop: 40 }}>
            {[
              { k: 'Coverage', v: area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : locationName },
              { k: 'Response time', v: area.responseTime || 'Within 48 hours' },
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
              <h2 className="h-1">Our electrical services<span className="accent">.</span></h2>
            </div>
            <p className="lede">
              Five service lines, one in-house team. Here is how we support local businesses, industrial facilities and homeowners.
            </p>
          </div>

          <div className="locations-services-grid">
            {CARTER.services.map((s, i) => (
              <div key={s.slug} style={{ background: 'var(--white)', border: '1px solid var(--rule)', overflow: 'hidden' }}>
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
                <div style={{ padding: '32px', paddingTop: '16px' }}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial + domestic deep paragraphs - unique per area */}
      {(area.commercialAngle || area.domesticAngle) && (
      <section className="section-y light reveal">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40 }}>
          {area.commercialAngle && (
            <div>
              <div className="eyebrow">Commercial Services</div>
              <h3 className="h-2" style={{ marginTop: 10 }}>Commercial Electrical<span className="accent">.</span></h3>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 16 }}>{area.commercialAngle}</p>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 14 }}>
                Typical scopes we quote for: full distribution and sub-mains replacements, emergency-lighting upgrades to BS 5266, BS 5839-1 fire detection, retail and restaurant fit-outs, data containment and structured cabling, EICR remedials following a failed report, and scheduled shutdowns timed around the business's trading hours.
              </p>
            </div>
          )}
          {area.domesticAngle && (
            <div>
              <div className="eyebrow">Domestic Services</div>
              <h3 className="h-2" style={{ marginTop: 10 }}>Domestic Electrical<span className="accent">.</span></h3>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 16 }}>{area.domesticAngle}</p>
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 14 }}>
                Common domestic services we provide: full and partial rewires, replacement consumer units (fuseboards), OZEV-approved EV charger installs with load management, smart-lighting and smart-heating retrofits, extensions, loft conversions and garage conversions, external lighting and outbuilding supplies, and fault finding when a main breaker keeps tripping.
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
            <h2 className="h-2" style={{ marginTop: 10 }}>Areas we cover<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Our local engineers cover all area postcodes, including {area.postcodes && area.postcodes.length ? area.postcodes.join(', ') : ''}. If your address is inside any of the following neighbourhoods, you're well inside our core coverage zone:
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
              We also work around key local landmarks and business parks, including {area.landmarks.join(', ')}. If you're scoping electrical work at one of these or on a nearby site, we've likely been on-site in the area recently - ask us for a reference.
            </p>
          )}
        </div>
      </section>
      )}

      {/* Featured project for this area */}
      {area.featuredProject && (
      <section className="section-y light reveal" id="cases">
        <div className="wrap">
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow">Recent Work</div>
            <h2 className="h-2" style={{ marginTop: 10 }}>Featured project &amp; local work<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>{area.featuredProject}</p>
            {area.cases > 0 && (
              <p style={{ color: 'var(--muted-2)', lineHeight: 1.7, marginTop: 16 }}>
                We have completed {area.cases} documented local projects. Below is a selection illustrating our standard of work:
              </p>
            )}
          </div>

          <div className="cases-grid">
            {displayCases.map((c) => (
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
      )}

      {/* FAQ - genuinely local answers */}
      {faqs.length > 0 && (
      <section className="section-y reveal">
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
      )}

      {/* Related nearby areas - internal linking */}
      {otherAreas.length > 0 && (
      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow">Also covering</div>
            <h2 className="h-2" style={{ marginTop: 10 }}>Nearby coverage<span className="accent">.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>
              We cover the wider {area.county || 'North West'} region from our Chester base. If you are scoping work outside this primary zone, the following areas are also within our core patch:
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
            <h2 style={{ marginTop: 20 }}>Need an electrician in {locationName}?<br/>Get in touch today<span className="accent">.</span></h2>
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

