// Single Article Page

const {
  Header,
  Footer,
  TweaksPanel,
  useScrollReveal
} = window;
const {
  useState,
  useEffect
} = React;
function ArticleHeader({
  post
}) {
  const dateStr = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return /*#__PURE__*/React.createElement("header", {
    className: "section-y dark reveal",
    style: {
      paddingTop: '160px',
      paddingBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--accent)',
      marginBottom: 20
    }
  }, post.category || 'Blog', " \xB7 ", dateStr), /*#__PURE__*/React.createElement("h1", {
    className: "h-1",
    style: {
      marginBottom: 30,
      fontSize: 'clamp(32px, 5vw, 64px)'
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(255,255,255,0.7)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: 40,
      marginBottom: 40
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  }, post.author ? post.author.charAt(0) : 'C'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: '#fff'
    }
  }, post.author || 'Carter Electrical Contracting'), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 14
    }
  }, "Author")))));
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
  return /*#__PURE__*/React.createElement("nav", {
    className: "toc",
    style: {
      position: 'sticky',
      top: '120px',
      paddingRight: '40px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: 20,
      color: 'var(--ink-2)'
    }
  }, "Table of Contents"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, headings.map(h => /*#__PURE__*/React.createElement("li", {
    key: h.id,
    style: {
      paddingLeft: h.level === 3 ? 16 : 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${h.id}`,
    style: {
      color: h.level === 3 ? 'var(--ink-3)' : 'var(--ink-1)',
      textDecoration: 'none',
      fontSize: 14,
      transition: 'color 0.2s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--accent)',
    onMouseLeave: e => e.target.style.color = h.level === 3 ? 'var(--ink-3)' : 'var(--ink-1)'
  }, h.text)))));
}
function ArticleContent({
  post
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(250px, 1fr) 2.5fr',
      gap: '60px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "article-sidebar toc-container"
  }, /*#__PURE__*/React.createElement(TableOfContents, null)), /*#__PURE__*/React.createElement("div", {
    className: "article-main",
    style: {
      maxWidth: '800px'
    }
  }, post.image && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 60,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: post.title,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "prose",
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  }))));
}
function ArticlePage() {
  useScrollReveal();
  // window.CURRENT_POST is injected by build-blog.js
  const post = window.CURRENT_POST;
  if (!post) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "blog",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ArticleHeader, {
    post: post
  }), /*#__PURE__*/React.createElement(ArticleContent, {
    post: post
  })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
window.ArticlePage = ArticlePage;