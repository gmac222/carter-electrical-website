// Tweaks panel - hooks into the host's edit-mode protocol.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 131,
  "accentAggression": "balanced",
  "density": 6,
  "heroHeadline": "outcome"
} /*EDITMODE-END*/;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;

// Apply tweak values to the live DOM.
window.applyTweaks = function applyTweaks(t) {
  const hue = +t.accentHue || 131;
  // Carter lime (#7AC143) ≈ oklch(0.74 0.16 131). Keep lightness/chroma constant, shift hue.
  const accent = `oklch(0.74 0.16 ${hue})`;
  const accentDeep = `oklch(0.58 0.16 ${hue})`;
  const accentInk = `oklch(0.16 0.04 ${hue})`;
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-deep', accentDeep);
  document.documentElement.style.setProperty('--accent-ink', accentInk);
  document.body.dataset.accentAgg = t.accentAggression || 'balanced';
  document.body.dataset.density = t.density || 6;
  document.body.dataset.heroHeadline = t.heroHeadline || 'outcome';
  document.documentElement.style.setProperty('--density', String(t.density || 6));
};
window.TweaksPanel = function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [t, setT] = useState(TWEAK_DEFAULTS);
  useEffect(() => {
    window.applyTweaks(t);
  }, [t]);
  useEffect(() => {
    const onMsg = e => {
      const data = e.data || {};
      if (data.type === '__activate_edit_mode') setOpen(true);
      if (data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    // Announce availability
    try {
      window.parent.postMessage({
        type: '__edit_mode_available'
      }, '*');
    } catch (e) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const update = patch => {
    const next = {
      ...t,
      ...patch
    };
    setT(next);
    try {
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: patch
      }, '*');
    } catch (e) {}
  };
  const hues = [131, 95, 60, 25, 12, 210];
  return /*#__PURE__*/React.createElement("div", {
    className: `tweaks-panel ${open ? 'open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "tweaks-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, "Tweaks"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Close",
    style: {
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tweaks-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tweak-group"
  }, /*#__PURE__*/React.createElement("label", null, "Accent hue"), /*#__PURE__*/React.createElement("div", {
    className: "tweak-swatches"
  }, hues.map(h => /*#__PURE__*/React.createElement("button", {
    key: h,
    onClick: () => update({
      accentHue: h
    }),
    className: t.accentHue === h ? 'active' : '',
    style: {
      background: `oklch(0.74 0.16 ${h})`
    },
    "aria-label": `Hue ${h}`
  }))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: 360,
    step: 1,
    value: t.accentHue,
    onChange: e => update({
      accentHue: +e.target.value
    }),
    className: "tweak-range"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-group"
  }, /*#__PURE__*/React.createElement("label", null, "Accent aggression"), /*#__PURE__*/React.createElement("div", {
    className: "tweak-seg"
  }, ['restrained', 'balanced', 'bold'].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => update({
      accentAggression: v
    }),
    className: t.accentAggression === v ? 'active' : ''
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "tweak-group"
  }, /*#__PURE__*/React.createElement("label", null, "Hero headline"), /*#__PURE__*/React.createElement("div", {
    className: "tweak-seg"
  }, [{
    k: 'outcome',
    l: 'Outcome'
  }, {
    k: 'credential',
    l: 'Credential'
  }, {
    k: 'regional',
    l: 'Regional'
  }].map(v => /*#__PURE__*/React.createElement("button", {
    key: v.k,
    onClick: () => update({
      heroHeadline: v.k
    }),
    className: t.heroHeadline === v.k ? 'active' : ''
  }, v.l)))), /*#__PURE__*/React.createElement("div", {
    className: "tweak-group"
  }, /*#__PURE__*/React.createElement("label", null, "Density \xB7 ", t.density), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 3,
    max: 9,
    step: 1,
    value: t.density,
    onChange: e => update({
      density: +e.target.value
    }),
    className: "tweak-range"
  }))));
};