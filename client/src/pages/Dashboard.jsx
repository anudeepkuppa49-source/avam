import { useState, useEffect } from 'react';

const api = 'http://localhost:5000/api';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [donations, setDonations] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [activeTab, setActiveTab] = useState('stats');

  useEffect(() => {
    fetch(`${api}/stats`).then(r => r.json()).then(setStats).catch(() => {});
    fetch(`${api}/contacts`).then(r => r.json()).then(setContacts).catch(() => {});
    fetch(`${api}/donations`).then(r => r.json()).then(d => { setDonations(d.donations || []); }).catch(() => {});
    fetch(`${api}/volunteers`).then(r => r.json()).then(setVolunteers).catch(() => {});
  }, []);

  const tabs = [
    { id: 'stats', label: 'Overview', icon: 'fa-chart-bar' },
    { id: 'contacts', label: 'Messages', icon: 'fa-envelope' },
    { id: 'donations', label: 'Donations', icon: 'fa-heart' },
    { id: 'volunteers', label: 'Volunteers', icon: 'fa-users' },
  ];

  return (
    <>
      <section className="page-hero"><div className="container"><h1>Admin Dashboard</h1><p>Monitor form submissions, donations, and volunteer registrations.</p></div></section>

      <section className="about-content">
        <div className="container">
          <div className="dashboard-tabs">
            {tabs.map(t => (
              <button key={t.id} className={`dash-tab ${activeTab === t.id ? 'active' : ''}`} onClick={() => setActiveTab(t.id)}>
                <i className={`fas ${t.icon}`}></i> {t.label}
              </button>
            ))}
          </div>

          {activeTab === 'stats' && (
            <div className="stats-grid">
              <div className="stat-card"><div className="stat-icon"><i className="fas fa-envelope"></i></div><div className="stat-number">{stats?.contacts || 0}</div><div className="stat-label">Messages Received</div></div>
              <div className="stat-card"><div className="stat-icon"><i className="fas fa-heart"></i></div><div className="stat-number">{stats?.donations || 0}</div><div className="stat-label">Donations Made</div></div>
              <div className="stat-card"><div className="stat-icon"><i className="fas fa-rupee-sign"></i></div><div className="stat-number">&#8377;{(stats?.donationTotal || 0).toLocaleString()}</div><div className="stat-label">Total Raised</div></div>
              <div className="stat-card"><div className="stat-icon"><i className="fas fa-users"></i></div><div className="stat-number">{stats?.volunteers || 0}</div><div className="stat-label">Volunteers Registered</div></div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="data-table">
              <h3>All Messages ({contacts.length})</h3>
              {contacts.length === 0 ? <p className="empty">No messages yet.</p> : (
                <table>
                  <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Message</th><th>Date</th></tr></thead>
                  <tbody>{contacts.map(c => (
                    <tr key={c._id}><td>{c.name}</td><td>{c.email}</td><td>{c.subject || '-'}</td><td>{c.message.substring(0, 50)}...</td><td>{new Date(c.createdAt).toLocaleDateString()}</td></tr>
                  ))}</tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="data-table">
              <h3>All Donations ({donations.length})</h3>
              {donations.length === 0 ? <p className="empty">No donations yet.</p> : (
                <table>
                  <thead><tr><th>Name</th><th>Email</th><th>Amount</th><th>Cause</th><th>Date</th></tr></thead>
                  <tbody>{donations.map(d => (
                    <tr key={d._id}><td>{d.name}</td><td>{d.email}</td><td>&#8377;{d.amount.toLocaleString()}</td><td>{d.cause}</td><td>{new Date(d.createdAt).toLocaleDateString()}</td></tr>
                  ))}</tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'volunteers' && (
            <div className="data-table">
              <h3>All Volunteers ({volunteers.length})</h3>
              {volunteers.length === 0 ? <p className="empty">No registrations yet.</p> : (
                <table>
                  <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>City</th><th>Date</th></tr></thead>
                  <tbody>{volunteers.map(v => (
                    <tr key={v._id}><td>{v.name}</td><td>{v.email}</td><td>{v.phone || '-'}</td><td>{v.city || '-'}</td><td>{new Date(v.createdAt).toLocaleDateString()}</td></tr>
                  ))}</tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
