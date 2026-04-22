// Carter Electrical - shared data + SVG pieces
(function(){
var h = React.createElement;

window.CARTER = {
  company: {
    name: 'Carter Electrical Contracting',
    phone: '01244 738493',
    phoneHref: 'tel:+441244738493',
    email: 'info@carterelectricalcontracting.co.uk',
    address: ['Unit 5, White Lane Depot', 'White Lane, Christleton', 'Chester, CH3 6AH'],
    socialFb: 'https://facebook.com/carter.electrical.chester',
    founded: 2008
  },

  cases: [
    { id: 'old-dukes', title: 'Old Dukes', sector: 'Commercial', subsector: 'Hospitality', location: 'Chester City Centre',
      blurb: 'Full electrical design and install for a two-floor conversion of a Chester tea rooms into a city-centre sports bar. Delivered ahead of opening week.',
      scope: ['Distribution', 'Lighting design', 'AV power', 'Emergency lighting', 'Fire alarm'],
      year: '2024', hue: 28, size: 'big' },
    { id: 'carbonara-no-49', title: 'Carbonara No.49', sector: 'Commercial', subsector: 'Restaurant', location: 'Chester',
      blurb: 'Restaurant fit-out. Kitchen power, dimmable lighting scheme, signage circuits.',
      scope: ['Kitchen distribution', 'Dimmable lighting', 'Signage power'], year: '2023', hue: 12, size: 'med' },
    { id: 'quayside-office', title: 'Quayside Office Refurb', sector: 'Commercial', subsector: 'Office', location: 'Ellesmere Port',
      blurb: 'Category-2 LED lighting, fresh sub-mains and a data cabinet rebuild across two floors of office space, phased so the client stayed trading.',
      scope: ['Cat-2 lighting', 'Sub-mains', 'Containment', 'Data infra'], year: '2024', hue: 210, size: 'med' },
    { id: 'heronbridge-farm', title: 'Heronbridge Farm', sector: 'Industrial', subsector: 'Agricultural', location: 'Pulford',
      blurb: 'Three-phase supply upgrade and new outbuilding distribution for a working dairy farm. IP-rated throughout.',
      scope: ['3-phase upgrade', 'Outbuilding DBs', 'IP-rated install'], year: '2023', hue: 90, size: 'sm' },
    { id: 'willow-barn', title: 'Willow Barn (Listed)', sector: 'Domestic', subsector: 'Listed building', location: 'Tarvin',
      blurb: 'Full rewire of a Grade II listed barn conversion. Careful chase routes to preserve fabric, heritage-style accessories.',
      scope: ['Heritage rewire', 'Underfloor heating wiring', 'EV charger'], year: '2024', hue: 30, size: 'sm' },
    { id: 'chester-ev-hub', title: 'Chester EV Hub', sector: 'Renewables', subsector: 'EV infrastructure', location: 'Chester',
      blurb: 'Six 22kW commercial chargers with load-balanced distribution board and back-office integration.',
      scope: ['6x 22kW chargers', 'Load balancing', 'Back-office setup'], year: '2024', hue: 150, size: 'sm' }
  ],

  testimonials: [
    { quote: 'They handled the entire Old Dukes fit out under a tight programme and kept us informed every step. Genuinely the smoothest trades experience we have had in a Chester job.', author: 'M. Bradshaw', role: 'Director, Old Dukes' },
    { quote: 'Turned up when they said they would, left the site cleaner than they found it, and the price on the quote was the price on the invoice. Can\u2019t ask for more.', author: 'J. Pritchard', role: 'Operations, Quayside' },
    { quote: 'We had a power fault on a Saturday night. Carter\u2019s had someone here within the hour and the kitchen was back on for Sunday service.', author: 'A. Colley', role: 'Owner, Carbonara No.49' }
  ],

  areas: [
    { name: 'Chester', cases: 14, featured: true },
    { name: 'Ellesmere Port', cases: 6 },
    { name: 'Wrexham', cases: 5 },
    { name: 'Northwich', cases: 4 },
    { name: 'Frodsham', cases: 3 },
    { name: 'Tarporley', cases: 3 },
    { name: 'Mold', cases: 2 },
    { name: 'Deeside', cases: 4 }
  ],

  services: [
    { title: 'Commercial', lede: 'Design and install for offices, hospitality, retail and light commercial.',
      bullets: ['Full distribution & sub-mains', 'Lighting design & controls', 'Emergency lighting & fire alarm', 'Data & containment', 'Planned shutdowns'],
      icon: 'building', slug: 'commercial' },
    { title: 'Industrial', lede: 'Three-phase power, machinery wiring and maintenance contracts.',
      bullets: ['Three-phase & motor control', 'Machinery install & relocation', 'Preventative maintenance', 'Thermal imaging surveys', 'Factory shutdown work'],
      icon: 'factory', slug: 'industrial' },
    { title: 'Domestic', lede: 'Rewires, extensions and smart-home work across Chester and the North West.',
      bullets: ['Full & partial rewires', 'Consumer unit upgrades', 'Extensions & loft conversions', 'Smart lighting & heating', 'Heritage & listed buildings'],
      icon: 'home', slug: 'domestic' },
    { title: 'Testing & Inspection', lede: 'EICRs, landlord reports and PAT testing. NICEIC-approved.',
      bullets: ['EICR reports (commercial & domestic)', 'Landlord electrical safety', 'PAT testing', 'New-install certification', 'Remedial works'],
      icon: 'shield', slug: 'testing' },
    { title: 'Renewables & EV', lede: 'EV chargers, solar PV and battery storage. OZEV-approved installer.',
      bullets: ['EV chargers (domestic & commercial)', 'Solar PV & battery', 'Load management', 'Grid application support'],
      icon: 'bolt', slug: 'renewables' }
  ],

  svg: {
    arrow: '<svg class="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    check: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8.5l3 3 7-7"/></svg>',
    building: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="6" y="12" width="16" height="30"/><rect x="22" y="6" width="20" height="36"/><path d="M10 18h8M10 24h8M10 30h8M10 36h8M26 12h4M34 12h4M26 20h4M34 20h4M26 28h4M34 28h4M26 36h4M34 36h4"/></svg>',
    factory: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 42V20l10 6V20l10 6V14l10 6V14l10 6v22z"/><path d="M4 42h40"/><rect x="10" y="32" width="4" height="6"/><rect x="20" y="32" width="4" height="6"/><rect x="30" y="32" width="4" height="6"/></svg>',
    home: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 22L24 6l18 16v20H6z"/><path d="M18 42V28h12v14"/></svg>',
    bolt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M26 4L10 26h10l-4 18 20-26H26z"/></svg>',
    niceic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M8 12l3 3 5-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 5c0 9 6 15 15 15 1 0 2-1 2-2v-2l-4-2-2 2c-3-1-5-3-6-6l2-2-2-4H6c-1 0-2 1-2 2z"/></svg>'
  },

  logoMark: function(accent, white) {
    accent = accent || '#7AC143'; white = white || '#ffffff';
    return '<svg class="logo-mark" viewBox="0 0 40 40" fill="none" stroke-width="3.2" stroke-linecap="round">' +
      '<path d="M28 9a12 12 0 1 0 0 22" stroke="' + white + '"/>' +
      '<path d="M12 31a12 12 0 1 0 0-22" stroke="' + accent + '"/>' +
      '<circle cx="20" cy="20" r="2.4" fill="' + accent + '"/>' +
      '</svg>';
  }
};

window.CarterPlaceholder = function(props) {
  var hue = props.hue == null ? 35 : props.hue;
  var bg = 'linear-gradient(135deg, hsl(' + hue + ', 10%, 18%) 0%, hsl(' + hue + ', 14%, 8%) 100%)';
  var children = [
    h('div', { className: 'vignette', key: 'v' }),
    h('div', { className: 'glow', key: 'g', style: { right: '10%', top: '12%' } })
  ];
  if (props.metaTag) children.push(h('div', { className: 'meta-tag', key: 'm' }, props.metaTag));
  children.push(h('div', { className: 'caption', key: 'c' },
    h('span', { key: 't' }, props.titleCaption),
    h('span', { key: 'y' }, props.year)
  ));
  return h('div', { className: 'case-photo-placeholder ' + (props.className || ''), style: { background: bg } }, children);
};
})();
