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

function PrivacyPolicyPage() {
  useScrollReveal();
  return (
    <>
      <Header current="" theme="dark"/>
      <PageHero
        section="Compliance & Security"
        sectionNum="05.1 / Policy"
        title="Privacy Policy"
        titleAccent={<>your data protection guaranteed<span className="dot-white">.</span></>}
        subtext="This policy explains how Carter Electrical Contracting Ltd collects, uses, and safeguards your personal data when you interact with our website."
      />

      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="prose">
              <h2>1. Introduction</h2>
              <p>
                Carter Electrical Contracting Ltd ("we", "us", or "our") is committed to protecting and respecting your privacy. We are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p>
                Our registered address is Unit 5, White Lane Depot, White Lane, Christleton, Chester, CH3 6AH. For any data protection enquiries, you can contact us at <a href="mailto:ian@carterelec.co.uk">ian@carterelec.co.uk</a>.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We only collect personal information that you voluntarily provide to us when submitting an enquiry through our contact form. This includes:
              </p>
              <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Details of your electrical enquiry and project address</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We process your personal data for the following purposes:
              </p>
              <ul>
                <li>To respond to your project enquiries and provide scoping calls or fixed quotes.</li>
                <li>To manage our customer relationships and provide NICEIC-certified electrical services.</li>
                <li>To comply with legal, regulatory, and tax obligations under UK law.</li>
              </ul>
              <p>
                We will never sell or rent your personal data to third parties for marketing purposes.
              </p>

              <h2>4. How We Secure Your Data</h2>
              <p>
                We implement industry-standard technical and organizational security measures to protect your data from unauthorized access, loss, or alteration. All lead submissions are encrypted in transit and securely processed through our central CRM system.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                Under UK data protection laws, you have the following rights regarding your personal information:
              </p>
              <ul>
                <li>The right to request access to the personal data we hold about you.</li>
                <li>The right to request that we correct any inaccurate or incomplete data.</li>
                <li>The right to request the deletion of your personal data ("the right to be forgotten").</li>
                <li>The right to withdraw your consent to data processing at any time.</li>
              </ul>
              <p>
                If you wish to exercise any of these rights, please email us directly at <a href="mailto:ian@carterelec.co.uk">ian@carterelec.co.uk</a>.
              </p>

              <h2>6. Cookies</h2>
              <p>
                We use cookies to optimise website performance and remember your preferences. You can choose to accept or decline cookies using our consent banner. Declining cookies will not prevent you from using the main features of our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <TweaksPanel/>
    </>
  );
}

function TermsOfUsePage() {
  useScrollReveal();
  return (
    <>
      <Header current="" theme="dark"/>
      <PageHero
        section="Compliance & Security"
        sectionNum="05.2 / Terms"
        title="Terms of Use"
        titleAccent={<>website usage guidelines<span className="dot-white">.</span></>}
        subtext="These terms govern your access to and use of the Carter Electrical Contracting website. By browsing this site, you accept these terms in full."
      />

      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="prose">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and browsing the website <a href="index.html">carterelec.co.uk</a>, you agree to comply with and be bound by these Terms of Use, along with our Privacy Policy. If you disagree with any part of these terms, please do not use our website.
              </p>

              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, Carter Electrical Contracting Ltd owns the intellectual property rights for all material on this website, including all photography, design layouts, graphics, logos, and written copy. All intellectual property rights are reserved.
              </p>
              <p>
                You must not republish, sell, rent, sub-license, duplicate, or redistribute any content from this website without our prior written consent.
              </p>

              <h2>3. Acceptable Use</h2>
              <p>
                You must use our website in a lawful manner that does not damage, disrupt, or impair the accessibility of the site, or interfere with other users' enjoyment. You must not use this website to distribute malware, spyware, viruses, or any other harmful software.
              </p>

              <h2>4. Disclaimer of Warranties</h2>
              <p>
                The information provided on this website is for general guidance and informational purposes only. While we endeavour to ensure that all information on this website is accurate and current, we do not warrant its completeness or accuracy, nor do we commit to ensuring the website remains available.
              </p>
              <p>
                All electrical installations, compliance regulations, and technical certifications are governed by our formal customer contracts and NICEIC standards, not the general content of this website.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by UK law, Carter Electrical Contracting Ltd will not be liable for any direct, indirect, or consequential loss or damage arising under these terms or in connection with the use of our website.
              </p>

              <h2>6. Governing Law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <TweaksPanel/>
    </>
  );
}

function SitemapPage() {
  useScrollReveal();
  return (
    <>
      <Header current="" theme="dark"/>
      <PageHero
        section="Navigation"
        sectionNum="06 / Sitemap"
        title="HTML Sitemap"
        titleAccent={<>explore all pages on our site<span className="dot-white">.</span></>}
        subtext="Find your way around our website to learn more about our commercial, industrial, domestic, and renewables electrical services."
      />

      <section className="section-y light reveal">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>
            
            <div>
              <h3 className="h-3" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '8px', marginBottom: '20px' }}>Main Pages</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="index.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Home</a></li>
                <li><a href="about.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>About Us</a></li>
                <li><a href="services.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Our Services</a></li>
                <li><a href="commercial.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Commercial Services</a></li>
                <li><a href="case-studies.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Case Studies</a></li>
                <li><a href="areas.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Areas We Cover</a></li>
                <li><a href="contact.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="h-3" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '8px', marginBottom: '20px' }}>Locations</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="electricians-wirral.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Wirral Electricians</a></li>
                <li><a href="electricians-wrexham.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Wrexham Electricians</a></li>
                <li><a href="electricians-ellesmere-port.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Ellesmere Port Electricians</a></li>
                <li><a href="electricians-deeside.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Deeside Electricians</a></li>
                <li><a href="electricians-mold.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Mold Electricians</a></li>
                <li><a href="electricians-northwich.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Northwich Electricians</a></li>
                <li><a href="electricians-frodsham.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Frodsham Electricians</a></li>
                <li><a href="electricians-tarporley.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Tarporley Electricians</a></li>
              </ul>
            </div>

            <div>
              <h3 className="h-3" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '8px', marginBottom: '20px' }}>Case Studies</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="case-old-dukes.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Old Dukes, Chester</a></li>
                <li><a href="case-bryn-rhiw.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Bryn Rhiw, North Wales</a></li>
                <li><a href="case-prenton-wirral.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Prenton, Wirral</a></li>
                <li><a href="case-carbonara-no-49.html" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>Carbonara No. 49, Chester</a></li>
              </ul>
            </div>

            <div>
              <h3 className="h-3" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '8px', marginBottom: '20px' }}>Blog &amp; Advice</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="blog/the-importance-of-eicr-testing/" style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>The Importance of EICR Testing</a></li>
              </ul>
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
window.PrivacyPolicyPage = PrivacyPolicyPage;
window.TermsOfUsePage = TermsOfUsePage;
window.SitemapPage = SitemapPage;
