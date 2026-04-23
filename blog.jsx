// Blog Index Page

const { Header, Footer, TweaksPanel, useScrollReveal, PageHero, MobileStickyCTA } = window;

const { useState, useEffect } = React;

function BlogHero() {
  return (
    <PageHero
      section="Insights & Advice"
      sectionNum="04.1 / Blog"
      title="Industry news &"
      titleAccent="safety advice."
      subtext="Expert insights on commercial and domestic electrical safety, compliance updates, and energy efficiency."
      ctas={
        <>
          <a href="/contact.html" className="btn btn-primary">
            Speak to an Expert
            <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }} />
          </a>
        </>
      }
    />
  );
}

function BlogList() {
  // window.BLOG_POSTS is injected by build-blog.js
  const posts = window.BLOG_POSTS || [];

  return (
    <section className="section-y light reveal">
      <div className="wrap">
        <div className="cases-grid">
          {posts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}/`} className="case-card">
              <div className="case-visual">
                <img 
                  src={post.image || '/uploads/blog-placeholder.png'} 
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="case-body">
                <div className="case-tags">
                  <span className="case-tag primary">{post.category || 'News'}</span>
                  <span className="case-tag">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <h3 style={{ fontSize: 24 }}>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="link">Read article <span dangerouslySetInnerHTML={{ __html: CARTER.svg.arrow }}/></span>
              </div>
            </a>
          ))}
        </div>
        {posts.length === 0 && (
          <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--muted)' }}>
            <p>No articles published yet. Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogIndex() {
  useScrollReveal();
  return (
    <>
      <Header current="blog" theme="dark" />
      <BlogHero />
      <BlogList />
      <Footer />
      <MobileStickyCTA />
      <TweaksPanel />
    </>
  );
}

window.BlogIndex = BlogIndex;
