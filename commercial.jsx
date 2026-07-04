// Commercial Electrical Services - dedicated landing page

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, StatNumber, PageHero, MobileStickyCTA, CarterPlaceholder } = window;

function CommercialHero() {
  return (
    <PageHero
      section="Commercial Electrical"
      sectionNum="02.1 / Services"
      title="Commercial Electricians"
      titleAccent="NICEIC Approved Contractors."
      subtext="Fit-outs, maintenance contracts, EICR compliance, and emergency lighting for offices, retail, hospitality, leisure, and multi-tenant buildings. Scoped candidly, delivered by our in-house team."
      ctas={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="contact.html" className="btn btn-primary">
              Get Your Free Quote
              <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
            </a>
            <a href="case-studies.html" className="btn btn-ghost-light">See commercial work</a>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Takes 60 seconds • We will be in touch within 48 hours.</div>
        </div>
      }
    />
  );
}

const CAPABILITIES = [
  { n: 'C01', t: 'Distribution boards', d: 'Design, install and upgrade of commercial main and sub-boards. Metered, labelled, fully documented.' },
  { n: 'C02', t: 'LED lighting upgrades', d: 'Retrofit and new-design schemes with payback modelling. DALI and emergency integration on request.' },
  { n: 'C03', t: 'Emergency lighting', d: 'Category-compliant design, install and annual monthly/six-monthly/three-yearly testing with cert pack.' },
  { n: 'C04', t: 'Fire alarm systems', d: 'L1 to L5 system design, install, commissioning and service under BS 5839-1. Integrated with nurse call where required.' },
  { n: 'C05', t: 'Containment & small power', d: 'Cable tray, basket, trunking and dado systems for offices, retail and hospitality - coordinated with other trades.' },
  { n: 'C06', t: 'Compliance testing', d: 'Fixed-wire EICR, PAT testing, thermographic surveys and remedial works to landlord and insurer standards.' },
  { n: 'C07', t: 'PPM contracts', d: 'Planned preventative maintenance agreements with SLAs, reporting and asset registers for facilities teams.' },
  { n: 'C08', t: 'Data & AV containment', d: 'Clean containment for Cat6/6A and AV power - coordinated with the data contractor or delivered as one package.' },
  { n: 'C09', t: 'Out-of-hours works', d: 'Live-environment retail, office and hospitality works scheduled around trading to avoid downtime.' },
];

function Capabilities() {
  return (
    <section className="section-y light reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="h-1">Commercial electrical services<br/> you can trust.</h2>
          </div>
          <p className="lede">
            A coordinated electrical package, not a spread of sub-sub-contractors.
          </p>
        </div>
        <div className="capability-grid">
          {CAPABILITIES.map(c => (
            <div key={c.n} className="capability">
              <span className="n">{c.n}</span>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="section-y bright reveal">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <img 
              src="uploads/commercial-electricians-chester.jpg" 
              alt="Commercial Electricians in Chester" 
              style={{ width: '100%', height: 'auto', borderRadius: '2px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'block', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="eyebrow">Accredited Delivery</div>
            <h2 className="h-1" style={{ margin: '18px 0' }}>Minimising downtime. Maximising safety.</h2>
            <p className="lede" style={{ marginBottom: '20px' }}>
              We deliver complete commercial electrical packages, designed to coordinate with other on-site trades.
            </p>
            <p style={{ color: 'var(--muted-2)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
              Our commercial electricians are NICEIC Approved, bringing extensive experience to retail fit-outs, corporate office refurbishments, and hospitality conversions. We understand that your business operations cannot halt for electrical works; that is why we offer flexible out-of-hours scheduling.
            </p>
            <p style={{ color: 'var(--muted-2)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              From initial containment and cabling runs to high-end LED lighting schematics and BS 5839-1 compliant fire systems, we scoping every detail upfront. Handover is clean, complete with NICEIC certifications, emergency lighting logs, and full asset registers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', t: 'Scoping call', d: 'A call to understand the project, the site, and the timescale. We tell you candidly whether we\'re the right contractor for it.' },
    { n: '02', t: 'Site visit', d: 'A site visit to assess the work to be carried out by one of our trained professionals.' },
    { n: '03', t: 'Proposal', d: 'Itemised quotation broken down by area and phase. Clear about what\'s in, what\'s provisional, and what\'s out.' },
    { n: '04', t: 'Delivery', d: 'One point of contact from first fix to completion.' },
    { n: '05', t: 'Handover', d: 'Full sign off with customer complete with full certification provided when needed.' },
  ];
  return (
    <section className="section-y dark reveal">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>How we work</div>
            <h2 className="h-1">A five-step process<br/>you can brief your board on.</h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            No surprises. No sub-contracting daisy-chains. One team, one number to call, full documentation at handover.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }}
             className="process-grid">
          {steps.map((s, i) => (
            <div key={s.n} style={{ background: 'var(--ink)', padding: '28px 24px 28px' }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--accent)' }}>{s.n}</div>
              <h4 className="display" style={{ fontSize: 20, margin: '18px 0 10px', fontWeight: 600 }}>{s.t}</h4>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 1000px) {
            .process-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 560px) {
            .process-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function CommercialCases() {
  const cases = CARTER.cases.filter(c => c.sector === 'Commercial');
  return (
    <section className="cases reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Commercial case studies</div>
            <h2 className="h-1">Recent<br/>commercial work.</h2>
          </div>
          <p className="lede">
            Hospitality, retail and office projects across Chester. More detail in the full case-study index.
          </p>
        </div>
        <div className="cases-grid">
          {cases.map(c => (
            <a key={c.id} href={c.id === 'old-dukes' ? 'case-old-dukes.html' : 'case-studies.html'} className="case-card big">
              <div className="case-visual">
                <CarterPlaceholder imgSrc={c.imgSrc} metaTag={`${c.sector} · ${c.subsector}`} titleCaption={`${c.title} - ${c.location}`} year={c.year} hue={c.hue}/>
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
  );
}

function FAQBand() {
  const faqs = [
    { q: 'What is classed as commercial electrical work?', a: 'Commercial electrical work involves installations, maintenance, and compliance inspections within business environments. This includes offices, retail spaces, restaurants, public buildings, and large multi-tenant residential complexes. Common works include distribution board installation, LED lighting designs, emergency lighting setups, and fire alarm installations.' },
    { q: "What's the difference between a commercial and industrial electrician?", a: 'Commercial electricians focus on retail, hospitality, and office spaces with standard low-to-medium voltage parameters. Industrial electricians work in factories, chemical plants, and production hubs where they handle high-voltage feeds, complex machinery connections, automation systems, and PLCs under advanced safety constraints.' },
    { q: 'Are your commercial electricians NICEIC approved?', a: 'Yes. Carter Electrical is a fully NICEIC Approved Contractor. All of our commercial electricians are directly employed, insured, and certified to carry out installations, testing, and full safety handovers compliant with BS 7671 Wiring Regulations.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section-y bright reveal">
      <div className="wrap wrap-narrow">
        <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
        <h2 className="h-1" style={{ marginBottom: 40 }}>Common commercial questions.</h2>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--rule)' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: '100%', textAlign: 'left', padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}
              >
                <span className="display" style={{ fontSize: 20, fontWeight: 600 }}>{f.q}</span>
                <span style={{ color: 'var(--accent)', fontSize: 22, fontFamily: 'var(--font-mono)' }}>{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <p style={{ margin: '0 0 24px', color: 'var(--muted-2)', fontSize: 16, lineHeight: 1.6, maxWidth: '58ch' }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commercial() {
  useScrollReveal();
  return (
    <>
      <Header current="commercial" theme="dark" />
      <CommercialHero />
      <TrustBar />
      <Capabilities />
      <EditorialSection />
      <Process />
      <CommercialCases />
      <FAQBand />
      <section className="cta-band reveal">
        <div className="wrap">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2 style={{ marginTop: 20 }}>Got a commercial project<br/>to deliver?</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Send us the scope, location and timeframe and we&rsquo;ll be in touch with how we can support.
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

ReactDOM.createRoot(document.getElementById('root')).render(<Commercial />);
