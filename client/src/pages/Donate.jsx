import { useState } from 'react';

const api = 'http://localhost:5000/api';
const amounts = [500, 1000, 2500, 5000, 10000, 25000];

export default function Donate() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', amount: 2500, cause: 'general' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${api}/donate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.message || data.error);
      if (data.success) setForm({ name: '', email: '', phone: '', amount: 2500, cause: 'general' });
    } catch { alert('Server error. Please try again.'); }
    setLoading(false);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container"><h1>Make a Donation</h1><p>Your generosity can transform lives.</p></div>
      </section>

      <section className="donate-content">
        <div className="container">
          <div className="donate-grid">
            <div className="donate-form">
              <h3>Choose Your Donation Amount</h3>
              <div className="donation-options">
                {amounts.map(a => (
                  <button key={a} className={`amount-btn ${form.amount === a ? 'active' : ''}`} onClick={() => setForm({...form, amount: a})}>&#8377;{a.toLocaleString()}</button>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group"><label>Full Name</label><input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name" required /></div>
                <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Enter your email" required /></div>
                <div className="form-group"><label>Phone</label><input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Phone number" /></div>
                <div className="form-group"><label>Custom Amount (&#8377;)</label><input type="number" value={form.amount} onChange={e => setForm({...form, amount: Number(e.target.value)})} min="100" /></div>
                <div className="form-group"><label>Donate For</label>
                  <select value={form.cause} onChange={e => setForm({...form, cause: e.target.value})}>
                    <option value="general">General Fund</option>
                    <option value="education">Education Programs</option>
                    <option value="healthcare">Healthcare Initiatives</option>
                    <option value="women">Women Empowerment</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-large" style={{width:'100%'}} disabled={loading}>{loading ? 'Processing...' : 'Donate Now'}</button>
              </form>
            </div>
            <div className="donate-info">
              <h3>Why Your Donation Matters</h3>
              <p>When you donate to Avam Foundation, you're investing in a better future for thousands.</p>
              <ul style={{margin:'15px 0 15px 20px',color:'var(--gray)'}}>
                <li style={{marginBottom:8}}><strong>&#8377;500</strong> - School supplies for 5 children</li>
                <li style={{marginBottom:8}}><strong>&#8377;1,000</strong> - Health camp for 20 people</li>
                <li style={{marginBottom:8}}><strong>&#8377;2,500</strong> - Education for 3 students/month</li>
                <li style={{marginBottom:8}}><strong>&#8377;5,000</strong> - Vocational training for 2 women</li>
                <li style={{marginBottom:8}}><strong>&#8377;10,000</strong> - Classroom equipment</li>
                <li style={{marginBottom:8}}><strong>&#8377;25,000</strong> - Clean water source for a village</li>
              </ul>
              <div className="trust-badges">
                {[{i:'fa-shield-halved',t:'100% Secure',d:'SSL encrypted'},{i:'fa-file-invoice',t:'Tax Exempt',d:'80G benefits'},{i:'fa-chart-line',t:'Transparent',d:'Impact reports'},{i:'fa-award',t:'Verified',d:'Registered NGO'}].map((b,i) => (
                  <div key={i} className="trust-badge"><i className={`fas ${b.i}`}></i><div><h4>{b.t}</h4><p>{b.d}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
