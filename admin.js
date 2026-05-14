const {
  useState,
  useEffect
} = React;
function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
        setError('Invalid password or server error');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };
  const updateLeadStatus = async (leadId, newStatus) => {
    try {
      const res = await fetch('/api/update-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({
          id: leadId,
          status: newStatus
        })
      });
      if (res.ok) {
        // Optimistic UI update
        setLeads(leads.map(l => l.id === leadId ? {
          ...l,
          status: newStatus
        } : l));
      } else {
        alert('Failed to update lead');
      }
    } catch (err) {
      alert('Error updating lead');
    }
  };
  if (!isLoggedIn) {
    return /*#__PURE__*/React.createElement("div", {
      className: "login-box"
    }, /*#__PURE__*/React.createElement("h2", null, "Admin Gateway"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#64748b',
        marginBottom: 24
      }
    }, "Enter your PIN to view leads."), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleLogin
    }, /*#__PURE__*/React.createElement("input", {
      type: "password",
      placeholder: "PIN / Password",
      value: password,
      onChange: e => setPassword(e.target.value),
      required: true
    }), error && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'red',
        fontSize: 14,
        margin: '0 0 12px'
      }
    }, error), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: loading
    }, loading ? 'Authenticating...' : 'Access Dashboard')));
  }

  // Filter leads into columns
  const statuses = ['New Lead', 'Contacted', 'Won', 'Lost'];
  const leadsByStatus = {};
  statuses.forEach(s => leadsByStatus[s] = []);

  // Also handle any unexpected statuses or put them in New Lead
  leads.forEach(lead => {
    const s = statuses.includes(lead.status) ? lead.status : 'New Lead';
    leadsByStatus[s].push(lead);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "admin-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "admin-header"
  }, /*#__PURE__*/React.createElement("h1", null, "Carter Electrical CRM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => setIsLoggedIn(false)
  }, "Sign Out"))), /*#__PURE__*/React.createElement("div", {
    className: "kanban-board"
  }, statuses.map(status => /*#__PURE__*/React.createElement("div", {
    key: status,
    className: "kanban-column"
  }, /*#__PURE__*/React.createElement("h3", null, status, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5,
      marginLeft: 8
    }
  }, leadsByStatus[status].length)), leadsByStatus[status].map(lead => /*#__PURE__*/React.createElement("div", {
    key: lead.id,
    className: "lead-card"
  }, /*#__PURE__*/React.createElement("h4", null, lead.name), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Service:"), " ", lead.service), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Phone:"), " ", /*#__PURE__*/React.createElement("a", {
    href: `tel:${lead.phone}`
  }, lead.phone)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${lead.email}`
  }, lead.email)), lead.notes && /*#__PURE__*/React.createElement("details", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: 'pointer',
      color: '#3b82f6',
      fontSize: 13
    }
  }, "View Notes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      marginTop: 4,
      whiteSpace: 'pre-wrap'
    }
  }, lead.notes)), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "Rec'd: ", new Date(lead.createdTime).toLocaleString('en-GB')), /*#__PURE__*/React.createElement("div", {
    className: "lead-actions"
  }, /*#__PURE__*/React.createElement("select", {
    value: lead.status,
    onChange: e => updateLeadStatus(lead.id, e.target.value)
  }, statuses.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s))))))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AdminDashboard, null));