// Contact page with multi-step form + validation

const { Header, Footer, TrustBar, TweaksPanel, useScrollReveal, MobileStickyCTA } = window;


function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({
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
  const [errors, setErrors] = useState({});

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
        setSubmitted(true);
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

  if (submitted) {
    return (
      <div className="form-shell">
        <div className="form-success">
          <div className="tick-big" dangerouslySetInnerHTML={{ __html: CARTER.svg.check.replace('width=\"16\"', '') }} />
          <h3>Thanks, {data.name.split(' ')[0]}. Your enquiry is in.</h3>
          <p>You'll hear from one of the team within 48 hours on <strong>{data.email}</strong> or <strong>{data.phone}</strong>.</p>
          <div className="ref">Reference · {refNum}</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
            <a href={CARTER.company.phoneHref} className="btn btn-primary">Call {CARTER.company.phone}</a>
            <a href="index.html" className="btn btn-ghost-dark">Back to home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
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
  );
}

function ContactPage() {
  useScrollReveal();
  return (
    <>
      <Header current="contact" theme="dark"/>
      <PageHero
        section="Contact Us"
        sectionNum="05 / Contact"
        title="Tell us"
        titleAccent="about your project."
        subtext="Whether it’s a planned job or something more urgent, share a few details and our team will be in touch."
      />

      <section className="section-y light">
        <div className="wrap">
          <div className="contact-wrap">
            <ContactForm/>
            <div className="contact-aside">
              <div className="contact-card">
                <h3>Carter Electrical Contracting</h3>
                <div className="contact-row"><span className="k">Address</span><span className="v" style={{ textAlign: 'right', fontSize: 13 }}>{CARTER.company.address.join(', ')}</span></div>
                <div className="contact-row"><span className="k">Phone</span><span className="v"><a href={CARTER.company.phoneHref}>{CARTER.company.phone}</a></span></div>
                <div className="contact-row"><span className="k">Email</span><span className="v" style={{ fontSize: 13 }}><a href={`mailto:${CARTER.company.email}`}>{CARTER.company.email}</a></span></div>
                <div className="contact-row"><span className="k">NICEIC</span><span className="v">Approved Contractor</span></div>
                <div className="contact-row"><span className="k">OZEV</span><span className="v">EV Installer</span></div>
              </div>
              <div className="static-map" style={{ overflow: 'hidden', position: 'relative' }}>
                <iframe
                  title="Carter Electrical Contracting — White Lane Depot, Christleton, Chester CH3 6AH"
                  src="https://www.google.com/maps?q=Unit%205%20White%20Lane%20Depot%2C%20White%20Lane%2C%20Christleton%2C%20Chester%20CH3%206AH&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div style={{ position: 'absolute', bottom: 14, left: 14, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.8)', background: 'rgba(0,0,0,0.55)', padding: '6px 10px', pointerEvents: 'none' }}>CHRISTLETON · CHESTER · 53°11′N · 02°50′W</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <MobileStickyCTA />
      <TweaksPanel/>
    </>
  );
}



ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage/>);
