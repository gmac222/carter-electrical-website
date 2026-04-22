// Single Article Page

const { Header, Footer, TweaksPanel, useScrollReveal } = window;
const { useState, useEffect } = React;

function ArticleHeader({ post }) {
  const dateStr = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  
  return (
    <header className="section-y dark reveal" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
      <div className="wrap wrap-narrow">
        <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20 }}>
          {post.category || 'Blog'} · {dateStr}
        </div>
        <h1 className="h-1" style={{ marginBottom: 30, fontSize: 'clamp(32px, 5vw, 64px)' }}>{post.title}</h1>
        <p className="lede" style={{ color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 40, marginBottom: 40 }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
            {post.author ? post.author.charAt(0) : 'C'}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 16, color: '#fff' }}>{post.author || 'Carter Electrical Contracting'}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Author</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const prose = document.querySelector('.prose');
    if (!prose) return;
    
    const elements = Array.from(prose.querySelectorAll('h2, h3'));
    const parsedHeadings = elements.map((el, index) => {
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      return {
        id: el.id,
        text: el.innerText,
        level: el.tagName === 'H2' ? 2 : 3
      };
    });
    setHeadings(parsedHeadings);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="toc" style={{ position: 'sticky', top: '120px', paddingRight: '40px' }}>
      <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20, color: 'var(--ink-2)' }}>Table of Contents</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {headings.map(h => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? 16 : 0 }}>
            <a 
              href={`#${h.id}`} 
              style={{ color: h.level === 3 ? 'var(--ink-3)' : 'var(--ink-1)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = h.level === 3 ? 'var(--ink-3)' : 'var(--ink-1)'}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ArticleContent({ post }) {
  return (
    <article className="section-y light reveal">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2.5fr', gap: '60px', alignItems: 'start' }}>
        
        {/* Table of Contents Sidebar */}
        <aside className="article-sidebar toc-container">
           <TableOfContents />
        </aside>

        {/* Main Content */}
        <div className="article-main" style={{ maxWidth: '800px' }}>
          {post.image && (
            <div style={{ marginBottom: 60, borderRadius: 12, overflow: 'hidden' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          )}
          
          {/* Render markdown HTML */}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </article>
  );
}

function ArticlePage() {
  useScrollReveal();
  // window.CURRENT_POST is injected by build-blog.js
  const post = window.CURRENT_POST;

  if (!post) return null;

  return (
    <>
      <Header current="blog" theme="dark" />
      <main>
        <ArticleHeader post={post} />
        <ArticleContent post={post} />
      </main>
      <Footer />
      <TweaksPanel />
    </>
  );
}

window.ArticlePage = ArticlePage;
