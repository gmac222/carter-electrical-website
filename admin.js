const {
  useState,
  useEffect,
  useRef
} = React;

/* ── Inline-editable field ── */
function EditableField({
  value,
  field,
  leadId,
  onSave,
  type = 'text'
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');
  const ref = useRef(null);
  useEffect(() => {
    if (editing && ref.current) ref.current.focus();
  }, [editing]);
  const save = () => {
    setEditing(false);
    if (draft !== (value || '')) onSave(leadId, {
      [field]: draft
    });
  };
  if (!editing) {
    return /*#__PURE__*/React.createElement("span", {
      className: "editable-value",
      onClick: () => {
        setDraft(value || '');
        setEditing(true);
      },
      title: "Click to edit"
    }, value || /*#__PURE__*/React.createElement("span", {
      className: "empty-value"
    }, "-"), /*#__PURE__*/React.createElement("svg", {
      className: "edit-icon",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11.13 1.87a1.25 1.25 0 0 1 1.77 0l1.23 1.23a1.25 1.25 0 0 1 0 1.77L5.69 13.31l-3.56.89.89-3.56 8.11-8.77Z",
      stroke: "currentColor",
      strokeWidth: "1.2"
    })));
  }
  if (type === 'textarea') {
    return /*#__PURE__*/React.createElement("textarea", {
      ref: ref,
      className: "inline-input inline-textarea",
      value: draft,
      onChange: e => setDraft(e.target.value),
      onBlur: save,
      onKeyDown: e => e.key === 'Escape' && setEditing(false)
    });
  }
  return /*#__PURE__*/React.createElement("input", {
    ref: ref,
    className: "inline-input",
    type: type,
    value: draft,
    onChange: e => setDraft(e.target.value),
    onBlur: save,
    onKeyDown: e => {
      if (e.key === 'Enter') save();
      if (e.key === 'Escape') setEditing(false);
    }
  });
}

/* ── Main Dashboard ── */
function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeTab, setActiveTab] = useState('analytics');
  const statuses = ['New Lead', 'Contacted', 'Won', 'Lost'];

  /* ── Auth ── */
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/get-leads', {
        headers: {
          'Authorization': `Bearer ${password}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setIsLoggedIn(true);
      } else {
        setError('Invalid PIN or server error');
      }
    } catch (err) {
      setError('Network error - please try again');
    }
    setLoading(false);
  };

  /* ── Update any field ── */
  const updateLead = async (leadId, fieldsObj) => {
    try {
      const res = await fetch('/api/update-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({
          id: leadId,
          ...fieldsObj
        })
      });
      if (res.ok) {
        setLeads(prev => prev.map(l => l.id === leadId ? {
          ...l,
          ...fieldsObj
        } : l));
      } else {
        alert('Failed to save changes');
      }
    } catch {
      alert('Error saving changes');
    }
  };

  /* ── Modal Update Wrapper ── */
  const handleModalUpdate = async (leadId, fieldsObj) => {
    await updateLead(leadId, fieldsObj);
    setSelectedLead(prev => prev && prev.id === leadId ? {
      ...prev,
      ...fieldsObj
    } : prev);
  };

  /* ── Delete ── */
  const deleteLead = async leadId => {
    if (!confirm('Are you sure you want to permanently delete this lead?')) return;
    setDeleting(leadId);
    try {
      const res = await fetch('/api/delete-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({
          id: leadId
        })
      });
      if (res.ok) {
        setLeads(prev => prev.filter(l => l.id !== leadId));
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead(null);
        }
      } else {
        alert('Failed to delete lead');
      }
    } catch {
      alert('Error deleting lead');
    }
    setDeleting(null);
  };

  /* ── Filtered + searched leads ── */
  const visibleLeads = leads.filter(l => {
    if (filter !== 'All' && (l.status || 'New Lead') !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return [l.name, l.email, l.phone, l.service, l.sector, l.postcode, l.timing, l.company, l.scope, l.details, l.notes].some(v => (v || '').toLowerCase().includes(q));
    }
    return true;
  });

  /* ── Statistics Calculations ── */
  const getLast6Months = () => {
    const months = [];
    const now = new Date();
    let anchor = now;
    if (leads.length > 0) {
      const dates = leads.map(l => new Date(l.createdTime)).filter(d => !isNaN(d.getTime()));
      if (dates.length > 0) {
        anchor = new Date(Math.max(...dates));
      }
    }
    for (let i = 5; i >= 0; i--) {
      const d = new Date(anchor.getFullYear(), anchor.getMonth() - i, 1);
      months.push({
        name: d.toLocaleDateString('en-GB', {
          month: 'short'
        }),
        year: d.getFullYear(),
        monthNum: d.getMonth(),
        calls: 0,
        forms: 0
      });
    }
    return months;
  };
  const chartData = getLast6Months();
  leads.forEach(l => {
    const d = new Date(l.createdTime);
    if (isNaN(d.getTime())) return;
    const m = d.getMonth();
    const y = d.getFullYear();
    const isCall = l.service === 'Inbound Call';
    const target = chartData.find(c => c.monthNum === m && c.year === y);
    if (target) {
      if (isCall) target.calls++;else target.forms++;
    }
  });

  // KPI Metrics
  const activeMonth = chartData[5] || {
    name: '',
    calls: 0,
    forms: 0
  };
  const prevMonth = chartData[4] || {
    name: '',
    calls: 0,
    forms: 0
  };
  const currentMonthTotal = activeMonth.calls + activeMonth.forms;
  const prevMonthTotal = prevMonth.calls + prevMonth.forms;
  let trendText = 'No previous data';
  let trendClass = 'trend-neutral';
  if (prevMonthTotal > 0) {
    const change = (currentMonthTotal - prevMonthTotal) / prevMonthTotal * 100;
    const rounded = Math.round(change);
    trendText = rounded >= 0 ? `+${rounded}% from last month` : `${rounded}% from last month`;
    trendClass = rounded >= 0 ? 'trend-up' : 'trend-down';
  }
  const totalLeads = leads.length;
  const wonLeads = leads.filter(l => l.status === 'Won').length;
  const winRate = totalLeads > 0 ? Math.round(wonLeads / totalLeads * 100) : 0;
  const totalCalls = leads.filter(l => l.service === 'Inbound Call').length;
  const totalForms = totalLeads - totalCalls;

  // Pipeline Values
  const pipelineValue = leads.filter(l => l.status === 'New Lead' || l.status === 'Contacted' || !l.status).reduce((acc, l) => acc + (Number(l.quote) || 0), 0);
  const wonRevenue = leads.filter(l => l.status === 'Won').reduce((acc, l) => acc + (Number(l.quote) || 0), 0);

  // Sector Breakdown
  const sectorCounts = {
    Domestic: 0,
    Commercial: 0,
    Industrial: 0,
    Other: 0
  };
  leads.forEach(l => {
    const sec = (l.sector || '').trim().toLowerCase();
    if (sec.includes('domestic')) sectorCounts.Domestic++;else if (sec.includes('commercial')) sectorCounts.Commercial++;else if (sec.includes('industrial')) sectorCounts.Industrial++;else sectorCounts.Other++;
  });

  // Service Breakdown
  const serviceCounts = {};
  leads.forEach(l => {
    const svc = l.service || 'Unknown';
    serviceCounts[svc] = (serviceCounts[svc] || 0) + 1;
  });
  const sortedServices = Object.keys(serviceCounts).map(name => ({
    name,
    count: serviceCounts[name]
  })).sort((a, b) => b.count - a.count).slice(0, 5);

  /* ── Counts per status ── */
  const counts = {
    All: leads.length
  };
  statuses.forEach(s => {
    counts[s] = leads.filter(l => (l.status || 'New Lead') === s).length;
  });
  const recentLeads = [...leads].slice(0, 5);

  /* ═══════ LOGIN SCREEN ═══════ */
  if (!isLoggedIn) {
    return /*#__PURE__*/React.createElement("div", {
      className: "login-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-glow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "login-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-logo"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 36 36",
      fill: "none",
      className: "login-bolt"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20.5 3L8 20h9l-1 13L29 16h-9.5L20.5 3z",
      fill: "#7AC143",
      stroke: "#5fa02f",
      strokeWidth: "1"
    }))), /*#__PURE__*/React.createElement("h2", null, "Carter Electrical"), /*#__PURE__*/React.createElement("p", {
      className: "login-subtitle"
    }, "CRM Dashboard - Authorised Access Only"), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleLogin
    }, /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "pin-input"
    }, "Access PIN"), /*#__PURE__*/React.createElement("input", {
      id: "pin-input",
      type: "password",
      placeholder: "Enter your PIN",
      value: password,
      onChange: e => setPassword(e.target.value),
      required: true,
      autoComplete: "off"
    })), error && /*#__PURE__*/React.createElement("p", {
      className: "login-error"
    }, error), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "login-btn",
      disabled: loading
    }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "spinner"
    }), " Authenticating...") : /*#__PURE__*/React.createElement(React.Fragment, null, "Access Dashboard ", /*#__PURE__*/React.createElement("span", {
      className: "arrow-right"
    }, "\u2192"))))));
  }

  // Chart values
  const maxVal = Math.max(...chartData.map(d => Math.max(d.calls, d.forms, 1)));
  const chartHeight = 80;

  /* ═══════ DASHBOARD ═══════ */
  return /*#__PURE__*/React.createElement("div", {
    className: "crm-app"
  }, /*#__PURE__*/React.createElement("header", {
    className: "crm-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-header-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-brand"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 36 36",
    fill: "none",
    className: "crm-bolt"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3L8 20h9l-1 13L29 16h-9.5L20.5 3z",
    fill: "#7AC143",
    stroke: "#5fa02f",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "crm-brand-name"
  }, "CARTER ELECTRICAL"), /*#__PURE__*/React.createElement("span", {
    className: "crm-brand-sub"
  }, "LEAD MANAGEMENT"))), /*#__PURE__*/React.createElement("div", {
    className: "crm-header-actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "crm-lead-count"
  }, leads.length, " lead", leads.length !== 1 ? 's' : ''), /*#__PURE__*/React.createElement("button", {
    className: "crm-signout",
    onClick: () => setIsLoggedIn(false)
  }, "Sign Out")))), /*#__PURE__*/React.createElement("div", {
    className: "crm-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: `crm-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`,
    onClick: () => setActiveTab('analytics')
  }, "Analytics Overview"), /*#__PURE__*/React.createElement("button", {
    className: `crm-tab-btn ${activeTab === 'leads' ? 'active' : ''}`,
    onClick: () => setActiveTab('leads')
  }, "Leads Directory")), activeTab === 'analytics' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "crm-stats-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-stats-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-label"
  }, "Total Leads"), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-value"
  }, totalLeads)), /*#__PURE__*/React.createElement("div", {
    className: `crm-stat-trend ${trendClass}`
  }, trendText)), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-label"
  }, "Inbound Calls"), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-value"
  }, totalCalls)), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-trend trend-neutral"
  }, totalLeads > 0 ? `${Math.round(totalCalls / totalLeads * 100)}% of total` : '0% of total')), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-label"
  }, "Web Enquiries"), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-value"
  }, totalForms)), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-trend trend-neutral"
  }, totalLeads > 0 ? `${Math.round(totalForms / totalLeads * 100)}% of total` : '0% of total')), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-label"
  }, "Pipeline Value"), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-value"
  }, "\xA3", pipelineValue.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-trend trend-neutral"
  }, "Active unclosed quote estimates")), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-label"
  }, "Revenue Won"), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-value"
  }, "\xA3", wonRevenue.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-trend trend-up"
  }, "Contracts successfully won")), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-label"
  }, "Conversion Rate"), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-value"
  }, winRate, "%")), /*#__PURE__*/React.createElement("div", {
    className: "crm-stat-trend trend-up"
  }, wonLeads, " won leads"))), /*#__PURE__*/React.createElement("div", {
    className: "crm-chart-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chart-title"
  }, "Month-on-Month Trends"), /*#__PURE__*/React.createElement("div", {
    className: "chart-legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legend-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legend-color color-calls"
  }), /*#__PURE__*/React.createElement("span", null, "Calls")), /*#__PURE__*/React.createElement("div", {
    className: "legend-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legend-color color-forms"
  }), /*#__PURE__*/React.createElement("span", null, "Forms")))), /*#__PURE__*/React.createElement("div", {
    className: "chart-svg-wrap"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 110",
    className: "chart-svg"
  }, [0.25, 0.5, 0.75, 1].map((p, idx) => {
    const y = 90 - p * chartHeight;
    return /*#__PURE__*/React.createElement("line", {
      key: idx,
      x1: "20",
      y1: y,
      x2: "380",
      y2: y,
      stroke: "#f0ede6",
      strokeWidth: "1",
      strokeDasharray: "3 3"
    });
  }), chartData.map((d, i) => {
    const colWidth = 45;
    const spacing = 14;
    const x = 32 + i * (colWidth + spacing);
    const hCalls = d.calls / maxVal * chartHeight;
    const yCalls = 90 - hCalls;
    const hForms = d.forms / maxVal * chartHeight;
    const yForms = 90 - hForms;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: yCalls,
      width: 15,
      height: hCalls,
      fill: "var(--accent)",
      rx: 1.5,
      className: "mom-bar"
    }, /*#__PURE__*/React.createElement("title", null, `${d.calls} Calls`)), /*#__PURE__*/React.createElement("rect", {
      x: x + 18,
      y: yForms,
      width: 15,
      height: hForms,
      fill: "#3b82f6",
      rx: 1.5,
      className: "mom-bar"
    }, /*#__PURE__*/React.createElement("title", null, `${d.forms} Forms`)), /*#__PURE__*/React.createElement("text", {
      x: x + 16,
      y: 105,
      textAnchor: "middle",
      fontSize: "8",
      fontFamily: "var(--font-mono)",
      fill: "var(--muted-2)"
    }, d.name));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "crm-breakdowns-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-breakdown-card"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "crm-breakdown-title"
  }, "Sector Distribution"), /*#__PURE__*/React.createElement("div", {
    className: "crm-breakdown-list"
  }, Object.keys(sectorCounts).map(sec => {
    const val = sectorCounts[sec];
    const pct = totalLeads > 0 ? Math.round(val / totalLeads * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: sec,
      className: "crm-breakdown-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crm-breakdown-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "crm-breakdown-label"
    }, sec), /*#__PURE__*/React.createElement("span", {
      className: "crm-breakdown-count"
    }, val, " lead", val !== 1 ? 's' : '', " (", pct, "%)")), /*#__PURE__*/React.createElement("div", {
      className: "crm-progress-bar-bg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crm-progress-bar-fill fill-calls",
      style: {
        width: `${pct}%`
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "crm-breakdown-card"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "crm-breakdown-title"
  }, "Top Requested Services"), /*#__PURE__*/React.createElement("div", {
    className: "crm-breakdown-list"
  }, sortedServices.map(svc => {
    const pct = totalLeads > 0 ? Math.round(svc.count / totalLeads * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: svc.name,
      className: "crm-breakdown-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crm-breakdown-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "crm-breakdown-label",
      style: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: '180px'
      },
      title: svc.name
    }, svc.name), /*#__PURE__*/React.createElement("span", {
      className: "crm-breakdown-count"
    }, svc.count, " (", pct, "%)")), /*#__PURE__*/React.createElement("div", {
      className: "crm-progress-bar-bg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crm-progress-bar-fill fill-forms",
      style: {
        width: `${pct}%`
      }
    })));
  }), sortedServices.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted)',
      fontSize: '12.5px',
      fontStyle: 'italic',
      padding: '10px 0'
    }
  }, "No services tracked yet"))), /*#__PURE__*/React.createElement("div", {
    className: "crm-breakdown-card"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "crm-breakdown-title"
  }, "Lead Pipeline Status"), /*#__PURE__*/React.createElement("div", {
    className: "crm-breakdown-list"
  }, statuses.map(st => {
    const val = counts[st] || 0;
    const pct = totalLeads > 0 ? Math.round(val / totalLeads * 100) : 0;
    let colorClass = 'fill-other';
    if (st === 'Won') colorClass = 'fill-won';else if (st === 'Lost') colorClass = 'fill-lost';else if (st === 'Contacted') colorClass = 'fill-neutral';
    return /*#__PURE__*/React.createElement("div", {
      key: st,
      className: "crm-breakdown-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crm-breakdown-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "crm-breakdown-label"
    }, st), /*#__PURE__*/React.createElement("span", {
      className: "crm-breakdown-count"
    }, val, " (", pct, "%)")), /*#__PURE__*/React.createElement("div", {
      className: "crm-progress-bar-bg"
    }, /*#__PURE__*/React.createElement("div", {
      className: `crm-progress-bar-fill ${colorClass}`,
      style: {
        width: `${pct}%`
      }
    })));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "crm-recent-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-recent-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-recent-header"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "crm-recent-title"
  }, "Recent Lead Enquiries"), /*#__PURE__*/React.createElement("button", {
    className: "crm-recent-view-all",
    onClick: () => setActiveTab('leads')
  }, "View Leads Directory \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "crm-recent-list"
  }, recentLeads.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: 'var(--muted)',
      padding: '24px',
      textAlign: 'center'
    }
  }, "No leads tracked yet."), recentLeads.map(lead => {
    const isCall = lead.service === 'Inbound Call';
    const dateStr = new Date(lead.createdTime).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    return /*#__PURE__*/React.createElement("div", {
      key: lead.id,
      className: "crm-recent-row",
      onClick: () => setSelectedLead(lead)
    }, /*#__PURE__*/React.createElement("div", {
      className: "crm-recent-name"
    }, lead.name || 'Unknown Caller'), /*#__PURE__*/React.createElement("div", {
      className: "crm-recent-date"
    }, dateStr), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: `badge ${isCall ? 'badge-call' : 'badge-form'}`,
      style: {
        padding: '3px 6px',
        fontSize: '10px',
        fontFamily: 'var(--font-mono)',
        background: isCall ? 'rgba(122,193,67,0.12)' : 'rgba(59,130,246,0.12)',
        color: isCall ? 'var(--accent-text)' : '#2563eb',
        borderRadius: '2px',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, lead.service || 'Unknown')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontFamily: 'var(--font-mono)',
        fontWeight: '500',
        color: lead.status === 'Won' ? 'var(--accent-text)' : lead.status === 'Lost' ? 'var(--danger)' : lead.status === 'Contacted' ? '#f59e0b' : '#3b82f6'
      }
    }, lead.status || 'New Lead')), /*#__PURE__*/React.createElement("div", {
      className: "crm-recent-meta",
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, lead.quote != null ? `£${lead.quote}` : '£0'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "action-btn",
      title: "View details",
      onClick: e => {
        e.stopPropagation();
        setSelectedLead(lead);
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 20 20",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "7",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 7v6m-2-3h4",
      stroke: "currentColor",
      strokeWidth: "1.4"
    })))));
  }))))), activeTab === 'leads' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "crm-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-filters"
  }, ['All', ...statuses].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: `crm-filter-btn ${filter === s ? 'active' : ''}`,
    onClick: () => setFilter(s)
  }, s, " ", /*#__PURE__*/React.createElement("span", {
    className: "filter-count"
  }, counts[s] || 0)))), /*#__PURE__*/React.createElement("div", {
    className: "crm-search-box"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "search-icon",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "6",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14 14 4 4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search leads\u2026",
    value: search,
    onChange: e => setSearch(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "crm-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "crm-table",
    style: {
      minWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Contact Details"), /*#__PURE__*/React.createElement("th", null, "Service"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Quote (\xA3)"), /*#__PURE__*/React.createElement("th", null, "Received"), /*#__PURE__*/React.createElement("th", {
    className: "th-actions"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, visibleLeads.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    className: "empty-row"
  }, "No leads found", filter !== 'All' || search ? ' matching your filters' : '', ".")), visibleLeads.map(lead => {
    const isCall = lead.service === 'Inbound Call';
    return /*#__PURE__*/React.createElement("tr", {
      key: lead.id,
      className: `row-interactive ${deleting === lead.id ? 'row-deleting' : ''}`,
      onClick: () => setSelectedLead(lead)
    }, /*#__PURE__*/React.createElement("td", {
      className: "cell-name"
    }, lead.name || 'Unknown'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12.5px',
        color: 'var(--ink)'
      }
    }, lead.phone || 'No phone'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--muted)'
      }
    }, lead.email || 'No email')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: `badge ${isCall ? 'badge-call' : 'badge-form'}`,
      style: {
        padding: '4px 8px',
        fontSize: '11px',
        fontFamily: 'var(--font-mono)',
        background: isCall ? 'rgba(122,193,67,0.12)' : 'rgba(59,130,246,0.12)',
        color: isCall ? 'var(--accent-text)' : '#2563eb',
        borderRadius: '2px',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, lead.service || 'Unknown')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
      className: "status-select",
      value: lead.status || 'New Lead',
      onClick: e => e.stopPropagation(),
      onChange: e => updateLead(lead.id, {
        status: e.target.value
      }),
      "data-status": lead.status || 'New Lead'
    }, statuses.map(s => /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s)))), /*#__PURE__*/React.createElement("td", null, lead.quote != null ? `£${lead.quote}` : '£0'), /*#__PURE__*/React.createElement("td", {
      className: "cell-date"
    }, new Date(lead.createdTime).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })), /*#__PURE__*/React.createElement("td", {
      className: "cell-actions",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("button", {
      className: "action-btn",
      title: "View details",
      onClick: () => setSelectedLead(lead),
      style: {
        marginRight: '6px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 20 20",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "7",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 7v6m-2-3h4",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "action-btn action-delete",
      title: "Delete lead",
      onClick: () => deleteLead(lead.id),
      disabled: deleting === lead.id
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 20 20",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 6h8M7.5 6V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6m1.5 0v9a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 15V6h8M9 9v5m2-5v5",
      stroke: "currentColor",
      strokeWidth: "1.2",
      strokeLinecap: "round"
    })))));
  }))))), selectedLead && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: () => setSelectedLead(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Lead Details"), /*#__PURE__*/React.createElement("button", {
    className: "modal-close-btn",
    onClick: () => setSelectedLead(null)
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-col-title"
  }, "Contact Information"), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Customer Name"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.name,
    field: "name",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Phone Number"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.phone,
    field: "phone",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Email Address"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.email,
    field: "email",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Company"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.company,
    field: "company",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-col-title",
    style: {
      marginTop: '24px'
    }
  }, "Project Information"), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Service Type"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.service,
    field: "service",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Sector"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.sector,
    field: "sector",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Postcode"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.postcode,
    field: "postcode",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Timing"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.timing,
    field: "timing",
    leadId: selectedLead.id,
    onSave: handleModalUpdate
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal-col-title"
  }, "Status & Quote"), /*#__PURE__*/React.createElement("div", {
    className: "modal-grid",
    style: {
      gridTemplateColumns: '1.2fr 1fr',
      gap: '12px',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Lead Status"), /*#__PURE__*/React.createElement("select", {
    className: "status-select",
    value: selectedLead.status || 'New Lead',
    onChange: e => handleModalUpdate(selectedLead.id, {
      status: e.target.value
    }),
    "data-status": selectedLead.status || 'New Lead',
    style: {
      width: '100%',
      height: '32px'
    }
  }, statuses.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Quote Amount"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.quote != null ? String(selectedLead.quote) : '',
    field: "quote",
    leadId: selectedLead.id,
    onSave: handleModalUpdate,
    type: "number"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-col-title",
    style: {
      marginTop: '24px'
    }
  }, "Scope & Details"), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Project Scope"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.scope,
    field: "scope",
    leadId: selectedLead.id,
    onSave: handleModalUpdate,
    type: "textarea"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Additional Details"), /*#__PURE__*/React.createElement(EditableField, {
    value: selectedLead.details,
    field: "details",
    leadId: selectedLead.id,
    onSave: handleModalUpdate,
    type: "textarea"
  })), selectedLead.attachments && selectedLead.attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "modal-field-group",
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-field-label"
  }, "Playable Attachments"), selectedLead.attachments.map((att, idx) => {
    const isAudio = att.filename && (att.filename.endsWith('.mp3') || att.filename.endsWith('.wav'));
    if (isAudio || att.url && att.url.includes('.mp3')) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "audio-player-wrapper"
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '11px',
          fontWeight: 'bold'
        }
      }, "Call Recording (", att.filename || 'Audio File', ")"), /*#__PURE__*/React.createElement("audio", {
        controls: true,
        src: att.url,
        style: {
          marginTop: '4px'
        }
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        marginTop: '4px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: att.url,
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: '#3b82f6',
        textDecoration: 'underline'
      }
    }, att.filename || 'View attachment'));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-btn modal-btn-delete",
    onClick: () => {
      deleteLead(selectedLead.id);
    },
    disabled: deleting === selectedLead.id
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      width: '13px',
      height: '13px',
      stroke: 'currentColor'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6h8M7.5 6V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6m1.5 0v9a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 15V6h8M9 9v5m2-5v5",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  })), "Delete Lead"), /*#__PURE__*/React.createElement("button", {
    className: "modal-btn",
    onClick: () => setSelectedLead(null)
  }, "Close Details"))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AdminDashboard, null));