// Commercial Electrical Services — dedicated landing page

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, StatNumber } = window;

function CommercialHero() {
  return (
    <section className="page-hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="wrap">
        <div className="breadcrumbs">
          <a href="index.html">Home</a> · <a href="index.html#services">Services</a> · <span>Commercial</span>
        </div>
        <div className="page-hero-inner">
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>Commercial Electrical</div>
            <h1 className="h-1" style={{ marginTop: 18 }}>
              Commercial electricians<br/>
              <span style={{ color: 'var(--accent)' }}>Chester businesses trust.</span>
            </h1>
            <p className="hero-sub" style={{ marginTop: 22 }}>
              Fit-outs, maintenance contracts and compliance for offices, retail,
              hospitality, leisure and multi-tenant buildings. One contractor
              owning distribution, lighting, fire, emergency and data containment
              from first fix to sign-off.
            </p>
            <div className="hero-ctas">
              <a href="contact.html" className="btn btn-primary">
                Discuss Your Project
                <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
              </a>
              <a href="case-studies.html" className="btn btn-ghost-light">See commercial work</a>
            </div>
          </div>
          <div>
            <div className="circuit-rule" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 22 }} />
            <dl style={{ display: 'grid', gap: 14, margin: 0 }}>
              <Row k="Accreditation" v="NICEIC Approved Contractor" />
              <Row k="Coverage" v="Chester · Wirral · N. Wales · Merseyside" />
              <Row k="Insurance" v="£5M Public Liability" />
              <Row k="Compliance" v="BS 7671 · 18th Edition" />
              <Row k="Response" v={<span><span style={{ color: 'var(--accent)' }}>24/7</span> emergency call-out</span>} />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{k}</span>
      <span className="display" style={{ fontSize: 14, fontWeight: 500 }}>{v}</span>
    </div>
  );
}

const CAPABILITIES = [
  { n: 'C01', t: 'Distribution boards', d: 'Design, install and upgrade of commercial main and sub-boards. Metered, labelled, fully documented.' },
  { n: 'C02', t: 'LED lighting upgrades', d: 'Retrofit and new-design schemes with payback modelling. DALI and emergency integration on request.' },
  { n: 'C03', t: 'Emergency lighting', d: 'Category-compliant design, install and annual monthly/six-monthly/three-yearly testing with cert pack.' },
  { n: 'C04', t: 'Fire alarm systems', d: 'L1 to L5 system design, install, commissioning and service under BS 5839-1. Integrated with nurse call where required.' },
  { n: 'C05', t: 'Containment & small power', d: 'Cable tray, basket, trunking and dado systems for offices, retail and hospitality — coordinated with other trades.' },
  { n: 'C06', t: 'Compliance testing', d: 'Fixed-wire EICR, PAT testing, thermographic surveys and remedial works to landlord and insurer standards.' },
  { n: 'C07', t: 'PPM contracts', d: 'Planned preventative maintenance agreements with SLAs, reporting and asset registers for facilities teams.' },
  { n: 'C08', t: 'Data & AV containment', d: 'Clean containment for Cat6/6A and AV power — coordinated with the data contractor or delivered as one package.' },
  { n: 'C09', t: 'Out-of-hours works', d: 'Live-environment retail, office and hospitality works scheduled around trading to avoid downtime.' },
];

function Capabilities() {
  return (
    <section className="section-y light reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="h-1">The commercial scope,<br/>under one roof.</h2>
          </div>
          <p className="lede">
            A coordinated electrical package, not a spread of sub-sub-contractors.
            Design assistance on request — bring us in early and we&rsquo;ll flag
            the compliance gotchas before they cost you.
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

function Process() {
  const steps = [
    { n: '01', t: 'Scoping call', d: 'Fifteen minutes to understand the project, the site, and the timescale. We tell you candidly whether we\'re the right contractor for it.' },
    { n: '02', t: 'Site visit', d: 'We measure, photograph and check existing infrastructure. You get a written scope with design assumptions and compliance notes.' },
    { n: '03', t: 'Proposal', d: 'Itemised quotation broken down by area and phase. Clear about what\'s in, what\'s provisional, and what\'s out.' },
    { n: '04', t: 'Delivery', d: 'One point of contact from first fix to commissioning. Weekly progress, photographs and a clean RAMS pack before works start.' },
    { n: '05', t: 'Handover', d: 'Full certification — EIC, emergency lighting, fire alarm — plus as-builts and a maintenance schedule.' },
  ];
  return (
    <section className="section-y dark reveal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)' }}>How we work</div>
            <h2 className="h-1">A five-step process<br/>you can brief your board on.</h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            No surprises. No sub-contracting daisy-chains. One team, one
            number to call, full documentation at handover.
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
            Hospitality, retail and office projects across Chester. More detail
            in the full case-study index.
          </p>
        </div>
        <div className="cases-grid">
          {cases.map(c => (
            <a key={c.id} href={c.id === 'old-dukes' ? 'case-old-dukes.html' : 'case-studies.html'} className="case-card big">
              <div className="case-visual">
                <CarterPlaceholder metaTag={`${c.sector} · ${c.subsector}`} titleCaption={`${c.title} — ${c.location}`} year={c.year} hue={c.hue}/>
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
    { q: 'Can you work around our trading hours?', a: 'Yes. We routinely phase works around retail, office and hospitality opening. Night and weekend shifts are priced transparently upfront.' },
    { q: 'Do you handle design or just install?', a: 'Both. Bring us in at design stage and we\'ll produce layouts and compliance notes. Happy to tender against an existing spec too.' },
    { q: 'What about sub-contracting?', a: 'Installation is delivered by our in-house team. Specialist items (fire alarm commissioning, data cabling) are managed by us, not handed off.' },
    { q: 'Will we get proper paperwork at handover?', a: 'Yes — NICEIC Electrical Installation Certificate, emergency lighting certification, fire alarm commissioning cert, as-built drawings and a service schedule.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section-y bright reveal">
      <div className="wrap wrap-narrow">
        <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
        <h2 className="h-1" style={{ marginBottom: 40 }}>Questions facilities<br/>managers actually ask.</h2>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--rule)' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: '100%', textAlign: 'left', padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}
              >
                <span className="display" style={{ fontSize: 20, fontWeight: 600 }}>{f.q}</span>
                <span style={{ color: 'var(--accent)', fontSize: 22, fontFamily: 'var(--font-mono)' }}>{open === i ? '–' : '+'}</span>
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
      <Process />
      <CommercialCases />
      <FAQBand />
      <section className="cta-band reveal">
        <div className="wrap">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2 style={{ marginTop: 20 }}>Planning a commercial project?<br/>Let&rsquo;s scope it properly.</h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: '54ch' }}>
              Share the scope, the site and the timescale. You&rsquo;ll hear back
              within one working day with the next sensible step.
            </p>
          </div>
          <div className="cta-aside">
            <div className="label-mono">Direct line</div>
            <a href={CARTER.company.phoneHref} className="phone-big">
              <span className="accent">·</span> {CARTER.company.phone}
            </a>
            <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
              <a href="contact.html" className="btn btn-primary">Discuss Your Project <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <TweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Commercial />);
