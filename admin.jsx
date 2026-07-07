const { useState, useEffect, useRef } = React;

const formatDuration = (sec) => {
  if (sec == null) return '';
  const s = parseInt(sec, 10);
  if (isNaN(s)) return '';
  if (s === 0) return '0s';
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m > 0) {
    return `${m}m ${r}s`;
  }
  return `${r}s`;
};

/* ── Inline-editable field ── */
function EditableField({ value, field, leadId, onSave, type = 'text' }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');
  const ref = useRef(null);

  useEffect(() => { if (editing && ref.current) ref.current.focus(); }, [editing]);

  const save = () => {
    setEditing(false);
    if (draft !== (value || '')) onSave(leadId, { [field]: draft });
  };

  if (!editing) {
    return (
      <span className="editable-value" onClick={() => { setDraft(value || ''); setEditing(true); }} title="Click to edit">
        {value || <span className="empty-value">-</span>}
        <svg className="edit-icon" viewBox="0 0 16 16" fill="none"><path d="M11.13 1.87a1.25 1.25 0 0 1 1.77 0l1.23 1.23a1.25 1.25 0 0 1 0 1.77L5.69 13.31l-3.56.89.89-3.56 8.11-8.77Z" stroke="currentColor" strokeWidth="1.2"/></svg>
      </span>
    );
  }

  if (type === 'textarea') {
    return <textarea ref={ref} className="inline-input inline-textarea" value={draft} onChange={e => setDraft(e.target.value)} onBlur={save} onKeyDown={e => e.key === 'Escape' && setEditing(false)} />;
  }
  return <input ref={ref} className="inline-input" type={type} value={draft} onChange={e => setDraft(e.target.value)} onBlur={save} onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') setEditing(false); }} />;
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

  const statuses = ['New Lead', 'Contacted', 'Won', 'Lost', 'Spam'];

  /* ── Auth ── */
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/get-leads', { headers: { 'Authorization': `Bearer ${password}` } });
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
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${password}` },
        body: JSON.stringify({ id: leadId, ...fieldsObj })
      });
      if (res.ok) {
        setLeads(prev => prev.map(l => l.id === leadId ? { ...l, ...fieldsObj } : l));
      } else {
        alert('Failed to save changes');
      }
    } catch { alert('Error saving changes'); }
  };

  /* ── Modal Update Wrapper ── */
  const handleModalUpdate = async (leadId, fieldsObj) => {
    await updateLead(leadId, fieldsObj);
    setSelectedLead(prev => prev && prev.id === leadId ? { ...prev, ...fieldsObj } : prev);
  };

  /* ── Delete ── */
  const deleteLead = async (leadId) => {
    if (!confirm('Are you sure you want to permanently delete this lead?')) return;
    setDeleting(leadId);
    try {
      const res = await fetch('/api/delete-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${password}` },
        body: JSON.stringify({ id: leadId })
      });
      if (res.ok) {
        setLeads(prev => prev.filter(l => l.id !== leadId));
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead(null);
        }
      } else {
        alert('Failed to delete lead');
      }
    } catch { alert('Error deleting lead'); }
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
        name: d.toLocaleDateString('en-GB', { month: 'short' }),
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
    if (l.status === 'Spam') return; // Exclude spam from MoM chart trends
    const d = new Date(l.createdTime);
    if (isNaN(d.getTime())) return;
    const m = d.getMonth();
    const y = d.getFullYear();
    const isCall = l.service === 'Inbound Call';

    const target = chartData.find(c => c.monthNum === m && c.year === y);
    if (target) {
      if (isCall) target.calls++;
      else target.forms++;
    }
  });

  // KPI Metrics
  const activeMonth = chartData[5] || { name: '', calls: 0, forms: 0 };
  const prevMonth = chartData[4] || { name: '', calls: 0, forms: 0 };

  const currentMonthTotal = activeMonth.calls + activeMonth.forms;
  const prevMonthTotal = prevMonth.calls + prevMonth.forms;

  let trendText = 'No previous data';
  let trendClass = 'trend-neutral';
  if (prevMonthTotal > 0) {
    const change = ((currentMonthTotal - prevMonthTotal) / prevMonthTotal) * 100;
    const rounded = Math.round(change);
    trendText = rounded >= 0 ? `+${rounded}% from last month` : `${rounded}% from last month`;
    trendClass = rounded >= 0 ? 'trend-up' : 'trend-down';
  }

  const realLeads = leads.filter(l => l.status !== 'Spam');
  const spamLeads = leads.filter(l => l.status === 'Spam');

  const totalLeads = realLeads.length;
  const wonLeads = realLeads.filter(l => l.status === 'Won').length;
  const winRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0;
  const totalCalls = realLeads.filter(l => l.service === 'Inbound Call').length;
  const answeredCalls = realLeads.filter(l => l.service === 'Inbound Call' && !l.isMissed).length;
  const missedCalls = realLeads.filter(l => l.service === 'Inbound Call' && l.isMissed).length;
  const totalForms = totalLeads - totalCalls;

  // Pipeline Values
  const pipelineValue = realLeads
    .filter(l => l.status === 'New Lead' || l.status === 'Contacted' || !l.status)
    .reduce((acc, l) => acc + (Number(l.quote) || 0), 0);

  const wonRevenue = realLeads
    .filter(l => l.status === 'Won')
    .reduce((acc, l) => acc + (Number(l.quote) || 0), 0);

  // Sector Breakdown
  const sectorCounts = { Domestic: 0, Commercial: 0, Industrial: 0, Other: 0 };
  realLeads.forEach(l => {
    const sec = (l.sector || '').trim().toLowerCase();
    if (sec.includes('domestic')) sectorCounts.Domestic++;
    else if (sec.includes('commercial')) sectorCounts.Commercial++;
    else if (sec.includes('industrial')) sectorCounts.Industrial++;
    else sectorCounts.Other++;
  });

  // Service Breakdown
  const serviceCounts = {};
  realLeads.forEach(l => {
    const svc = l.service || 'Unknown';
    serviceCounts[svc] = (serviceCounts[svc] || 0) + 1;
  });
  const sortedServices = Object.keys(serviceCounts)
    .map(name => ({ name, count: serviceCounts[name] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  /* ── Counts per status ── */
  const counts = { All: leads.length };
  statuses.forEach(s => { counts[s] = leads.filter(l => (l.status || 'New Lead') === s).length; });

  const recentLeads = [...realLeads].slice(0, 5);

  /* ═══════ LOGIN SCREEN ═══════ */
  if (!isLoggedIn) {
    return (
      <div className="login-screen">
        <div className="login-glow" />
        <div className="login-card">
          <div className="login-logo">
            <svg viewBox="0 0 36 36" fill="none" className="login-bolt">
              <path d="M20.5 3L8 20h9l-1 13L29 16h-9.5L20.5 3z" fill="#7AC143" stroke="#5fa02f" strokeWidth="1"/>
            </svg>
          </div>
          <h2>Carter Electrical</h2>
          <p className="login-subtitle">CRM Dashboard - Authorised Access Only</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="pin-input">Access PIN</label>
              <input id="pin-input" type="password" placeholder="Enter your PIN" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="off" />
            </div>
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <><span className="spinner" /> Authenticating...</>
              ) : (
                <>Access Dashboard <span className="arrow-right">→</span></>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Chart values
  const maxVal = Math.max(...chartData.map(d => Math.max(d.calls, d.forms, 1)));
  const chartHeight = 80;

  /* ═══════ DASHBOARD ═══════ */
  return (
    <div className="crm-app">
      {/* ── Top bar ── */}
      <header className="crm-header">
        <div className="crm-header-inner">
          <div className="crm-brand">
            <svg viewBox="0 0 36 36" fill="none" className="crm-bolt">
              <path d="M20.5 3L8 20h9l-1 13L29 16h-9.5L20.5 3z" fill="#7AC143" stroke="#5fa02f" strokeWidth="1"/>
            </svg>
            <div>
              <span className="crm-brand-name">CARTER ELECTRICAL</span>
              <span className="crm-brand-sub">LEAD MANAGEMENT</span>
            </div>
          </div>
          <div className="crm-header-actions">
            <span className="crm-lead-count">{leads.length} lead{leads.length !== 1 ? 's' : ''}</span>
            <button className="crm-signout" onClick={() => setIsLoggedIn(false)}>Sign Out</button>
          </div>
        </div>
      </header>

      {/* ── Tabs Navigation ── */}
      <div className="crm-tabs">
        <button className={`crm-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
          Analytics Overview
        </button>
        <button className={`crm-tab-btn ${activeTab === 'leads' ? 'active' : ''}`} onClick={() => setActiveTab('leads')}>
          Leads Directory
        </button>
      </div>

      {/* ═══════ ANALYTICS VIEW ═══════ */}
      {activeTab === 'analytics' && (
        <>
          {/* Stats & MoM Chart */}
          <section className="crm-stats-section">
            {/* KPI Grid */}
            <div className="crm-stats-grid">
              <div className="crm-stat-card">
                <div>
                  <div className="crm-stat-label">Total Leads</div>
                  <div className="crm-stat-value">{totalLeads}</div>
                </div>
                <div className="crm-stat-trend trend-neutral">Real leads ({spamLeads.length} spam marked)</div>
              </div>
              <div className="crm-stat-card">
                <div>
                  <div className="crm-stat-label">Inbound Calls</div>
                  <div className="crm-stat-value">{totalCalls}</div>
                </div>
                <div className="crm-stat-trend trend-neutral" style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--accent-text)', fontWeight: 'bold' }}>{answeredCalls} Answered</span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{missedCalls} Missed</span>
                </div>
              </div>
              <div className="crm-stat-card">
                <div>
                  <div className="crm-stat-label">Web Enquiries</div>
                  <div className="crm-stat-value">{totalForms}</div>
                </div>
                <div className="crm-stat-trend trend-neutral">
                  {totalLeads > 0 ? `${Math.round((totalForms / totalLeads) * 100)}% of total` : '0% of total'}
                </div>
              </div>
              <div className="crm-stat-card">
                <div>
                  <div className="crm-stat-label">Pipeline Value</div>
                  <div className="crm-stat-value">£{pipelineValue.toLocaleString()}</div>
                </div>
                <div className="crm-stat-trend trend-neutral">Active unclosed quote estimates</div>
              </div>
              <div className="crm-stat-card">
                <div>
                  <div className="crm-stat-label">Revenue Won</div>
                  <div className="crm-stat-value">£{wonRevenue.toLocaleString()}</div>
                </div>
                <div className="crm-stat-trend trend-up">Contracts successfully won</div>
              </div>
              <div className="crm-stat-card">
                <div>
                  <div className="crm-stat-label">Conversion Rate</div>
                  <div className="crm-stat-value">{winRate}%</div>
                </div>
                <div className="crm-stat-trend trend-up">{wonLeads} won leads</div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="crm-chart-card">
              <div className="chart-header">
                <span className="chart-title">Month-on-Month Trends</span>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color color-calls"></div>
                    <span>Calls</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color color-forms"></div>
                    <span>Forms</span>
                  </div>
                </div>
              </div>
              <div className="chart-svg-wrap">
                <svg viewBox="0 0 400 110" className="chart-svg">
                  {/* Y-axis helper lines */}
                  {[0.25, 0.5, 0.75, 1].map((p, idx) => {
                    const y = 90 - p * chartHeight;
                    return (
                      <line key={idx} x1="20" y1={y} x2="380" y2={y} stroke="#f0ede6" strokeWidth="1" strokeDasharray="3 3" />
                    );
                  })}
                  
                  {/* Render month bars */}
                  {chartData.map((d, i) => {
                    const colWidth = 45;
                    const spacing = 14;
                    const x = 32 + i * (colWidth + spacing);
                    
                    const hCalls = (d.calls / maxVal) * chartHeight;
                    const yCalls = 90 - hCalls;
                    
                    const hForms = (d.forms / maxVal) * chartHeight;
                    const yForms = 90 - hForms;

                    return (
                      <g key={i}>
                        {/* Calls Bar */}
                        <rect x={x} y={yCalls} width={15} height={hCalls} fill="var(--accent)" rx={1.5} className="mom-bar">
                          <title>{`${d.calls} Calls`}</title>
                        </rect>
                        {/* Forms Bar */}
                        <rect x={x + 18} y={yForms} width={15} height={hForms} fill="#3b82f6" rx={1.5} className="mom-bar">
                          <title>{`${d.forms} Forms`}</title>
                        </rect>
                        {/* Month Label */}
                        <text x={x + 16} y={105} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--muted-2)">
                          {d.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </section>

          {/* Breakdown Analytics */}
          <section className="crm-breakdowns-section">
            {/* Sector Breakdown */}
            <div className="crm-breakdown-card">
              <h4 className="crm-breakdown-title">Sector Distribution</h4>
              <div className="crm-breakdown-list">
                {Object.keys(sectorCounts).map(sec => {
                  const val = sectorCounts[sec];
                  const pct = totalLeads > 0 ? Math.round((val / totalLeads) * 100) : 0;
                  return (
                    <div key={sec} className="crm-breakdown-item">
                      <div className="crm-breakdown-row">
                        <span className="crm-breakdown-label">{sec}</span>
                        <span className="crm-breakdown-count">{val} lead{val !== 1 ? 's' : ''} ({pct}%)</span>
                      </div>
                      <div className="crm-progress-bar-bg">
                        <div className="crm-progress-bar-fill fill-calls" style={{ width: `${pct}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Breakdown */}
            <div className="crm-breakdown-card">
              <h4 className="crm-breakdown-title">Top Requested Services</h4>
              <div className="crm-breakdown-list">
                {sortedServices.map(svc => {
                  const pct = totalLeads > 0 ? Math.round((svc.count / totalLeads) * 100) : 0;
                  return (
                    <div key={svc.name} className="crm-breakdown-item">
                      <div className="crm-breakdown-row">
                        <span className="crm-breakdown-label" style={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          maxWidth: '180px'
                        }} title={svc.name}>{svc.name}</span>
                        <span className="crm-breakdown-count">{svc.count} ({pct}%)</span>
                      </div>
                      <div className="crm-progress-bar-bg">
                        <div className="crm-progress-bar-fill fill-forms" style={{ width: `${pct}%` }}></div>
                      </div>
                    </div>
                  );
                })}
                {sortedServices.length === 0 && (
                  <div style={{ color: 'var(--muted)', fontSize: '12.5px', fontStyle: 'italic', padding: '10px 0' }}>No services tracked yet</div>
                )}
              </div>
            </div>

            {/* Status Breakdown */}
            <div className="crm-breakdown-card">
              <h4 className="crm-breakdown-title">Lead Pipeline Status</h4>
              <div className="crm-breakdown-list">
                {statuses.map(st => {
                  const val = counts[st] || 0;
                  const pct = totalLeads > 0 ? Math.round((val / totalLeads) * 100) : 0;
                  let colorClass = 'fill-other';
                  if (st === 'Won') colorClass = 'fill-won';
                  else if (st === 'Lost') colorClass = 'fill-lost';
                  else if (st === 'Contacted') colorClass = 'fill-neutral';
                  else if (st === 'Spam') colorClass = 'fill-spam';

                  return (
                    <div key={st} className="crm-breakdown-item">
                      <div className="crm-breakdown-row">
                        <span className="crm-breakdown-label">{st}</span>
                        <span className="crm-breakdown-count">{val} ({pct}%)</span>
                      </div>
                      <div className="crm-progress-bar-bg">
                        <div className={`crm-progress-bar-fill ${colorClass}`} style={{ width: `${pct}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Recent Activity List */}
          <section className="crm-recent-section">
            <div className="crm-recent-card">
              <div className="crm-recent-header">
                <h4 className="crm-recent-title">Recent Lead Enquiries</h4>
                <button className="crm-recent-view-all" onClick={() => setActiveTab('leads')}>
                  View Leads Directory &rarr;
                </button>
              </div>
              <div className="crm-recent-list">
                {recentLeads.length === 0 && (
                  <div style={{ background: '#fff', color: 'var(--muted)', padding: '24px', textAlign: 'center' }}>No leads tracked yet.</div>
                )}
                {recentLeads.map(lead => {
                  const isCall = lead.service === 'Inbound Call';
                  const dateStr = new Date(lead.createdTime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
                  return (
                    <div key={lead.id} className="crm-recent-row" onClick={() => setSelectedLead(lead)}>
                      <div className="crm-recent-name">{lead.name || 'Unknown Caller'}</div>
                      <div className="crm-recent-date">{dateStr}</div>
                      <div>
                        <span className={`badge ${isCall ? 'badge-call' : 'badge-form'}`} style={{
                          padding: '3px 6px',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          background: isCall ? 'rgba(122,193,67,0.12)' : 'rgba(59,130,246,0.12)',
                          color: isCall ? 'var(--accent-text)' : '#2563eb',
                          borderRadius: '2px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}>
                          {lead.service || 'Unknown'}
                        </span>
                      </div>
                      <div>
                        <span style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: '500',
                          color: lead.status === 'Won' ? 'var(--accent-text)' : lead.status === 'Lost' ? 'var(--danger)' : lead.status === 'Contacted' ? '#f59e0b' : lead.status === 'Spam' ? '#6b7280' : '#3b82f6'
                        }}>
                          {lead.status || 'New Lead'}
                        </span>
                      </div>
                      <div className="crm-recent-meta" style={{ fontFamily: 'var(--font-mono)' }}>
                        {lead.quote != null ? `£${lead.quote}` : '£0'}
                      </div>
                      <div>
                        <button className="action-btn" title="View details" onClick={(e) => { e.stopPropagation(); setSelectedLead(lead); }}>
                          <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4"/><path d="M10 7v6m-2-3h4" stroke="currentColor" strokeWidth="1.4"/></svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════ LEADS DIRECTORY VIEW ═══════ */}
      {activeTab === 'leads' && (
        <>
          {/* ── Toolbar ── */}
          <div className="crm-toolbar">
            <div className="crm-filters">
              {['All', ...statuses].map(s => (
                <button key={s} className={`crm-filter-btn ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>
                  {s} <span className="filter-count">{counts[s] || 0}</span>
                </button>
              ))}
            </div>
            <div className="crm-search-box">
              <svg className="search-icon" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="m14 14 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <input type="text" placeholder="Search leads…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>

          {/* ── Table ── */}
          <div className="crm-table-wrap">
            <table className="crm-table" style={{ minWidth: '100%' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact Details</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Quote (£)</th>
                  <th>Received</th>
                  <th className="th-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleLeads.length === 0 && (
                  <tr><td colSpan={7} className="empty-row">No leads found{filter !== 'All' || search ? ' matching your filters' : ''}.</td></tr>
                )}
                {visibleLeads.map(lead => {
                  const isCall = lead.service === 'Inbound Call';
                  return (
                    <tr key={lead.id} className={`row-interactive ${deleting === lead.id ? 'row-deleting' : ''}`} onClick={() => setSelectedLead(lead)}>
                      <td className="cell-name">{lead.name || 'Unknown'}</td>
                      <td>
                        <div style={{ fontSize: '12.5px', color: 'var(--ink)' }}>{lead.phone || 'No phone'}</div>
                        <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{lead.email || 'No email'}</div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                          <span className={`badge ${isCall ? 'badge-call' : 'badge-form'}`} style={{
                            padding: '4px 8px',
                            fontSize: '11px',
                            fontFamily: 'var(--font-mono)',
                            background: isCall ? (lead.isMissed ? 'rgba(239,68,68,0.12)' : 'rgba(122,193,67,0.12)') : 'rgba(59,130,246,0.12)',
                            color: isCall ? (lead.isMissed ? '#ef4444' : 'var(--accent-text)') : '#2563eb',
                            borderRadius: '2px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em'
                          }}>
                            {isCall ? (lead.isMissed ? 'Missed Call' : 'Inbound Call') : (lead.service || 'Unknown')}
                          </span>
                          {isCall && lead.duration != null && (
                            <span style={{ fontSize: '10.5px', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                              {formatDuration(lead.duration)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <select className="status-select" value={lead.status || 'New Lead'} onClick={e => e.stopPropagation()} onChange={e => updateLead(lead.id, { status: e.target.value })} data-status={lead.status || 'New Lead'}>
                          {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td>{lead.quote != null ? `£${lead.quote}` : '£0'}</td>
                      <td className="cell-date">{new Date(lead.createdTime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                      <td className="cell-actions" onClick={e => e.stopPropagation()}>
                        <button className="action-btn" title="View details" onClick={() => setSelectedLead(lead)} style={{ marginRight: '6px' }}>
                          <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4"/><path d="M10 7v6m-2-3h4" stroke="currentColor" strokeWidth="1.4"/></svg>
                        </button>
                        <button className="action-btn action-delete" title="Delete lead" onClick={() => deleteLead(lead.id)} disabled={deleting === lead.id}>
                          <svg viewBox="0 0 20 20" fill="none"><path d="M6 6h8M7.5 6V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6m1.5 0v9a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 15V6h8M9 9v5m2-5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Details Modal Overlay ── */}
      {selectedLead && (
        <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Lead Details</h3>
              <button className="modal-close-btn" onClick={() => setSelectedLead(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-grid">
                {/* Left Column: Metadata */}
                <div>
                  <div className="modal-col-title">Contact Information</div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Customer Name</div>
                    <EditableField value={selectedLead.name} field="name" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Phone Number</div>
                    <EditableField value={selectedLead.phone} field="phone" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Email Address</div>
                    <EditableField value={selectedLead.email} field="email" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Company</div>
                    <EditableField value={selectedLead.company} field="company" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  
                  <div className="modal-col-title" style={{ marginTop: '24px' }}>Project Information</div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Service Type</div>
                    <EditableField value={selectedLead.service} field="service" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  {selectedLead.service === 'Inbound Call' && (
                    <>
                      <div className="modal-field-group">
                        <div className="modal-field-label">Call Status</div>
                        <span className="editable-value" style={{ color: selectedLead.isMissed ? '#ef4444' : 'var(--accent-text)', fontWeight: 'bold' }}>
                          {selectedLead.isMissed ? 'Missed Call' : 'Answered'}
                        </span>
                      </div>
                      {selectedLead.duration != null && (
                        <div className="modal-field-group">
                          <div className="modal-field-label">Call Duration</div>
                          <span className="editable-value" style={{ fontFamily: 'var(--font-mono)' }}>
                            {formatDuration(selectedLead.duration)}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  <div className="modal-field-group">
                    <div className="modal-field-label">Sector</div>
                    <EditableField value={selectedLead.sector} field="sector" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Postcode</div>
                    <EditableField value={selectedLead.postcode} field="postcode" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Timing</div>
                    <EditableField value={selectedLead.timing} field="timing" leadId={selectedLead.id} onSave={handleModalUpdate} />
                  </div>
                </div>

                {/* Right Column: Status & Scope */}
                <div>
                  <div className="modal-col-title">Status & Quote</div>
                  <div className="modal-grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '12px', margin: 0 }}>
                    <div className="modal-field-group">
                      <div className="modal-field-label">Lead Status</div>
                      <select className="status-select" value={selectedLead.status || 'New Lead'} onChange={e => handleModalUpdate(selectedLead.id, { status: e.target.value })} data-status={selectedLead.status || 'New Lead'} style={{ width: '100%', height: '32px' }}>
                        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="modal-field-group">
                      <div className="modal-field-label">Quote Amount</div>
                      <EditableField value={selectedLead.quote != null ? String(selectedLead.quote) : ''} field="quote" leadId={selectedLead.id} onSave={handleModalUpdate} type="number" />
                    </div>
                  </div>

                  <div className="modal-col-title" style={{ marginTop: '24px' }}>Scope & Details</div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Project Scope</div>
                    <EditableField value={selectedLead.scope} field="scope" leadId={selectedLead.id} onSave={handleModalUpdate} type="textarea" />
                  </div>
                  <div className="modal-field-group">
                    <div className="modal-field-label">Additional Details</div>
                    <EditableField value={selectedLead.details} field="details" leadId={selectedLead.id} onSave={handleModalUpdate} type="textarea" />
                  </div>
                  
                  {/* Call Recordings / Attachments */}
                  {selectedLead.attachments && selectedLead.attachments.length > 0 && (
                    <div className="modal-field-group" style={{ marginTop: '20px' }}>
                      <div className="modal-field-label">Playable Attachments</div>
                      {selectedLead.attachments.map((att, idx) => {
                        const isAudio = att.filename && (att.filename.endsWith('.mp3') || att.filename.endsWith('.wav'));
                        if (isAudio || (att.url && att.url.includes('.mp3'))) {
                          return (
                            <div key={idx} className="audio-player-wrapper">
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Call Recording ({att.filename || 'Audio File'})</span>
                                <a href={att.url} target="_blank" rel="noreferrer" style={{ fontSize: '11.5px', color: '#3b82f6', textDecoration: 'underline' }}>Open recording in new tab &rarr;</a>
                              </div>
                              <audio controls src={att.url} style={{ width: '100%' }}></audio>
                            </div>
                          );
                        }
                        return (
                          <div key={idx} style={{ marginTop: '4px' }}>
                            <a href={att.url} target="_blank" rel="noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>{att.filename || 'View attachment'}</a>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-actions">
                <button className="modal-btn modal-btn-delete" onClick={() => {
                  deleteLead(selectedLead.id);
                }} disabled={deleting === selectedLead.id}>
                  <svg viewBox="0 0 20 20" fill="none" style={{ width: '13px', height: '13px', stroke: 'currentColor' }}><path d="M6 6h8M7.5 6V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6m1.5 0v9a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 15V6h8M9 9v5m2-5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  Delete Lead
                </button>
                <button className="modal-btn" onClick={() => setSelectedLead(null)}>Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AdminDashboard />);
