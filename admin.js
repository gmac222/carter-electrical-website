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
  const [deleting, setDeleting] = useState(null); // id being deleted
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
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

  /* ── Counts per status ── */
  const counts = {
    All: leads.length
  };
  statuses.forEach(s => {
    counts[s] = leads.filter(l => (l.status || 'New Lead') === s).length;
  });

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
    className: "crm-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Service"), /*#__PURE__*/React.createElement("th", null, "Sector"), /*#__PURE__*/React.createElement("th", null, "Postcode"), /*#__PURE__*/React.createElement("th", null, "Timing"), /*#__PURE__*/React.createElement("th", null, "Company"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Quote (\xA3)"), /*#__PURE__*/React.createElement("th", null, "Scope"), /*#__PURE__*/React.createElement("th", null, "Add. Details"), /*#__PURE__*/React.createElement("th", null, "Received"), /*#__PURE__*/React.createElement("th", {
    className: "th-actions"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, visibleLeads.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 14,
    className: "empty-row"
  }, "No leads found", filter !== 'All' || search ? ' matching your filters' : '', ".")), visibleLeads.map(lead => /*#__PURE__*/React.createElement("tr", {
    key: lead.id,
    className: deleting === lead.id ? 'row-deleting' : ''
  }, /*#__PURE__*/React.createElement("td", {
    className: "cell-name"
  }, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.name,
    field: "name",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.phone,
    field: "phone",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.email,
    field: "email",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.service,
    field: "service",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.sector,
    field: "sector",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.postcode,
    field: "postcode",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.timing,
    field: "timing",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", {
    className: "cell-company"
  }, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.company,
    field: "company",
    leadId: lead.id,
    onSave: updateLead
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    className: "status-select",
    value: lead.status || 'New Lead',
    onChange: e => updateLead(lead.id, {
      status: e.target.value
    }),
    "data-status": lead.status || 'New Lead'
  }, statuses.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s)))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.quote != null ? String(lead.quote) : '',
    field: "quote",
    leadId: lead.id,
    onSave: updateLead,
    type: "number"
  })), /*#__PURE__*/React.createElement("td", {
    className: "cell-notes"
  }, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.scope,
    field: "scope",
    leadId: lead.id,
    onSave: updateLead,
    type: "textarea"
  })), /*#__PURE__*/React.createElement("td", {
    className: "cell-notes"
  }, /*#__PURE__*/React.createElement(EditableField, {
    value: lead.details,
    field: "details",
    leadId: lead.id,
    onSave: updateLead,
    type: "textarea"
  })), /*#__PURE__*/React.createElement("td", {
    className: "cell-date"
  }, new Date(lead.createdTime).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })), /*#__PURE__*/React.createElement("td", {
    className: "cell-actions"
  }, lead.phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${lead.phone}`,
    className: "action-btn action-call",
    title: "Call"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5a2 2 0 0 1 2-2h1.28a1 1 0 0 1 .95.68l1.02 3.06a1 1 0 0 1-.38 1.1l-1.2.8a10.05 10.05 0 0 0 4.69 4.69l.8-1.2a1 1 0 0 1 1.1-.38l3.06 1.02a1 1 0 0 1 .68.95V15a2 2 0 0 1-2 2h-1C7.4 17 3 12.6 3 7V5z",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))), lead.email && /*#__PURE__*/React.createElement("a", {
    href: `mailto:${lead.email}`,
    className: "action-btn action-email",
    title: "Email"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "16",
    height: "12",
    rx: "1.5",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 5.5l8 5 8-5",
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
  }))))))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AdminDashboard, null));