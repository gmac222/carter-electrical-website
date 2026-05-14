const { useState, useEffect } = React;

function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/get-leads', {
        headers: { 'Authorization': `Bearer ${password}` }
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
        body: JSON.stringify({ id: leadId, status: newStatus })
      });
      if (res.ok) {
        // Optimistic UI update
        setLeads(leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
      } else {
        alert('Failed to update lead');
      }
    } catch (err) {
      alert('Error updating lead');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-box">
        <h2>Admin Gateway</h2>
        <p style={{ color: '#64748b', marginBottom: 24 }}>Enter your PIN to view leads.</p>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="PIN / Password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
          {error && <p style={{ color: 'red', fontSize: 14, margin: '0 0 12px' }}>{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    );
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

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Carter Electrical CRM</h1>
        <div>
          <button className="btn btn-ghost" onClick={() => setIsLoggedIn(false)}>Sign Out</button>
        </div>
      </div>

      <div className="kanban-board">
        {statuses.map(status => (
          <div key={status} className="kanban-column">
            <h3>{status} <span style={{ opacity: 0.5, marginLeft: 8 }}>{leadsByStatus[status].length}</span></h3>
            {leadsByStatus[status].map(lead => (
              <div key={lead.id} className="lead-card">
                <h4>{lead.name}</h4>
                <p><strong>Service:</strong> {lead.service}</p>
                <p><strong>Phone:</strong> <a href={`tel:${lead.phone}`}>{lead.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${lead.email}`}>{lead.email}</a></p>
                
                {lead.notes && (
                  <details style={{ marginTop: 8 }}>
                    <summary style={{ cursor: 'pointer', color: '#3b82f6', fontSize: 13 }}>View Notes</summary>
                    <p style={{ fontSize: 13, marginTop: 4, whiteSpace: 'pre-wrap' }}>{lead.notes}</p>
                  </details>
                )}
                
                <div className="meta">
                  Rec'd: {new Date(lead.createdTime).toLocaleString('en-GB')}
                </div>
                
                <div className="lead-actions">
                  <select 
                    value={lead.status} 
                    onChange={e => updateLeadStatus(lead.id, e.target.value)}
                  >
                    {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AdminDashboard />);
