// Domestic Electrical Services - dedicated landing page

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, StatNumber, PageHero, MobileStickyCTA, CarterPlaceholder } = window;

function DomesticHero() {
  return (
    <PageHero
      section="Domestic Electrical"
      sectionNum="02.3 / Services"
      title="Domestic Electricians"
      titleAccent="Chester homeowners trust."
      subtext="From full house rewires and consumer unit upgrades to OZEV-approved EV home chargers and smart lighting systems. Safe, certified, and fully insured works delivered by our polite in-house team."
      ctas={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="contact.html" className="btn btn-primary">
              Get Your Free Quote
              <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
            </a>
            <a href="case-studies.html" className="btn btn-ghost-light">See domestic work</a>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Takes 60 seconds • NICEIC certified handover.</div>
        </div>
      }
    />
  );
}

const CAPABILITIES = [
  { n: 'D01', t: 'Full & partial rewires', d: 'Safe, complete replacement of outdated cables, sockets, and switches with minimal disruption to your home.' },
  { n: 'D02', t: 'Consumer unit upgrades', d: 'Replacement of old fuse boxes with modern, compliant consumer units featuring RCD and surge protection.' },
  { n: 'D03', t: 'EV home chargers', d: 'OZEV approved home EV charging station installation, including smart charger setup and load balancing.' },
  { n: 'D04', t: 'Smart home lighting', d: 'Design and installation of smart lighting systems (Lutron, Philips Hue) and heating integration.' },
  { n: 'D05', t: 'Fault finding & repairs', d: 'Rapid diagnostic tracing of tripping circuits, faulty outlets, and domestic power failures.' },
  { n: 'D06', t: 'Smoke & heat alarms', d: 'Installation of mains-powered, interlinked smoke, heat, and carbon monoxide detectors to current regulations.' },
  { n: 'D07', t: 'Outdoor & garden power', d: 'Weatherproof external sockets, security lighting, and power runs to garden rooms and outbuildings.' },
  { n: 'D08', t: 'EICR home inspections', d: 'Electrical Installation Condition Reports for homebuyers, landlords, and safety certification.' },
  { n: 'D09', t: 'NICEIC Part P certification', d: 'All works notified to local building control, with official compliance certs delivered promptly.' }
];

function Capabilities() {
  return (
    <section className="section-y light reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Household scope</div>
            <h2 className="h-1">Domestic electrical services<br/> Chester families rely on.</h2>
          </div>
          <p className="lede">
            Whether upgrading a single socket or completely rewiring a period property, we guarantee clean and safe delivery.
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
              src="uploads/domestic-electricians-chester.jpg" 
              alt="Domestic Electricians in Chester" 
              style={{ width: '100%', height: 'auto', borderRadius: '2px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'block', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="eyebrow">Home compliance</div>
            <h2 className="h-1" style={{ margin: '18px 0' }}>Safe wiring. Clean homes.</h2>
            <p className="lede" style={{ marginBottom: '20px' }}>
              Your home is your sanctuary, and we treat it with absolute respect.
            </p>
            <p style={{ color: 'var(--muted-2)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
              Our domestic electricians are fully qualified, insured, and DBS-checked. We use dust-extraction systems on all chasing tools and clean up thoroughly at the end of every working day. We do not rely on sub-contractors; our own in-house engineers carry out the work.
            </p>
            <p style={{ color: 'var(--muted-2)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              All major residential work requires notification under Part P of the Building Regulations. As an NICEIC Approved Contractor, we notify Building Control on your behalf, providing you with both the NICEIC installation certificate and the Building Regulations compliance certificate at completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', t: 'First contact', d: 'We listen to your domestic requirements, outline potential options, and provide a clear timeline for scoping.' },
    { n: '02', t: 'Home visit', d: 'A clean, punctual site visit to assess your wiring, check consumer unit capacity, and measure runs.' },
    { n: '03', t: 'Fixed quotation', d: 'A detailed proposal via email, outlining exact costs with zero provisional estimates or surprises.' },
    { n: '04', t: 'Neat delivery', d: 'Safe installation by our polite team, using protective floor coverings and dust-minimising tools.' },
    { n: '05', t: 'Handover certs', d: 'Final testing and delivery of your NICEIC safety and Part P building compliance certificates.' },
  ];
  return (
    <section className="section-y dark reveal">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>Our Method</div>
            <h2 className="h-1">Our household delivery process.</h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Transparent pricing, neat execution, and official building regulations sign-off.
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

function DomesticCases() {
  const cases = CARTER.cases.filter(c => c.sector === 'Domestic' || c.sector === 'Residential');
  const displayCases = cases.length > 0 ? cases : CARTER.cases.slice(2, 4);
  
  return (
    <section className="cases reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Projects</div>
            <h2 className="h-1">Residential installations.</h2>
          </div>
          <p className="lede">
            A selection of recent domestic electrical projects delivered across Chester, Wirral, and Merseyside.
          </p>
        </div>
        <div className="cases-grid">
          {displayCases.map(c => (
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
    { q: 'Is it illegal to do electrical work in your home in the UK?', a: 'In the UK, it is not illegal to perform simple electrical work yourself, such as replacing light switches or sockets on a like-for-like basis. However, major works—such as installing a new circuit, rewiring a property, or adding circuits in kitchens and bathrooms—fall under Part P of the Building Regulations and must legally be certified by a registered competent person or notified to Building Control.' },
    { q: 'How to find a trusted domestic electrician?', a: 'Always check that the electrician is registered with a government-approved scheme such as the NICEIC. This guarantees they undergo regular audits, carry sufficient public liability insurance, and are authorised to self-certify their work under Part P. Additionally, look for direct employment rather than sub-contractors.' },
    { q: 'What is NICEIC Part P certification and why do I need it?', a: 'Part P is the section of the Building Regulations in England and Wales that covers electrical safety in dwellings. A Part P certificate proves that your electrical installation is compliant and safe. You will require this certificate when selling or leasing your home, or when resolving insurance claims.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section-y bright reveal">
      <div className="wrap wrap-narrow">
        <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
        <h2 className="h-1" style={{ marginBottom: 40 }}>Common domestic questions.</h2>
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

function Domestic() {
  useScrollReveal();
  return (
    <>
      <Header current="domestic" theme="dark" />
      <DomesticHero />
      <TrustBar />
      <Capabilities />
      <EditorialSection />
      <Process />
      <DomesticCases />
      <FAQBand />
      <section className="cta-band reveal">
        <div className="wrap">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2>Need a trusted domestic electrician?</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Send us details of your home project and we will provide a comprehensive, transparent quotation.
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

ReactDOM.createRoot(document.getElementById('root')).render(<Domestic />);
