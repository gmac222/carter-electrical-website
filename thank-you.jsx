const { Header, Footer, TrustBar, useScrollReveal } = window;

function ThankYouPage() {
  useScrollReveal();

  useEffect(() => {
    // Send GA4 and Google Ads events on page mount
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'generate_lead', {
        'lead_type': 'form',
        'value': 1.0,
        'currency': 'GBP'
      });
      window.gtag('event', 'form_lead', {
        'value': 1.0,
        'currency': 'GBP'
      });
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18182294304/nzMqCN_skcAcEKCW_91D',
        'value': 1.0,
        'currency': 'GBP'
      });
    }
  }, []);

  return (
    <>
      <Header current="contact" theme="dark"/>
      
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        {window.HeroCanvas ? <window.HeroCanvas /> : null}
        <div className="wrap hero-inner" style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div className="form-success" style={{ maxWidth: '600px', margin: '0 auto', background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <div className="tick-big" style={{ margin: '0 auto 24px' }} dangerouslySetInnerHTML={{ __html: CARTER.svg.check.replace('width="16"', 'width="36" height="36"') }} />
            <h1 className="h-display" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>
              Thank You<span className="accent">.</span>
            </h1>
            <p className="hero-sub" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '45ch', margin: '0 auto 32px' }}>
              Your enquiry has been received successfully. A member of our team will review the details and get back to you within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <a href={CARTER.company.phoneHref} className="btn btn-primary">
                Call {CARTER.company.phone}
              </a>
              <a href="index.html" className="btn btn-ghost-light">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ThankYouPage/>);
