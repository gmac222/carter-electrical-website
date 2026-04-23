// Blog Index Page

const {
  Header,
  Footer,
  TweaksPanel,
  useScrollReveal,
  PageHero,
  MobileStickyCTA
} = window;
const {
  useState,
  useEffect
} = React;
function BlogHero() {
  return /*#__PURE__*/React.createElement(PageHero, {
    section: "Insights & Advice",
    sectionNum: "04.1 / Blog",
    title: "Industry news &",
    titleAccent: "safety advice.",
    subtext: "Expert insights on commercial and domestic electrical safety, compliance updates, and energy efficiency.",
    ctas: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      href: "/contact.html",
      className: "btn btn-primary"
    }, "Speak to an Expert", /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: CARTER.svg.arrow
      }
    })))
  });
}
function BlogList() {
  // window.BLOG_POSTS is injected by build-blog.js
  const posts = window.BLOG_POSTS || [];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-y light reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, posts.map(post => /*#__PURE__*/React.createElement("a", {
    key: post.slug,
    href: `/blog/${post.slug}/`,
    className: "case-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-visual"
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image || '/uploads/blog-placeholder.png',
    alt: post.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "case-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "case-tag primary"
  }, post.category || 'News'), /*#__PURE__*/React.createElement("span", {
    className: "case-tag"
  }, new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24
    }
  }, post.title), /*#__PURE__*/React.createElement("p", null, post.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "link"
  }, "Read article ", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: CARTER.svg.arrow
    }
  })))))), posts.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center',
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "No articles published yet. Check back soon."))));
}
function BlogIndex() {
  useScrollReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "blog",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(BlogHero, null), /*#__PURE__*/React.createElement(BlogList, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileStickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null));
}
window.BlogIndex = BlogIndex;