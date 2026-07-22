import { useState } from 'react';

const api = 'http://localhost:5000/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${api}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.message || data.error);
      if (data.success) setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch { alert('Server error. Please try again.'); }
    setLoading(false);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <section className="page-hero">
        <div className="container"><h1>Contact Us</h1><p>We'd love to hear from you.</p></div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2 style={{marginBottom:25,color:'var(--dark)'}}>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group"><label>Full Name</label><input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required /></div>
                <div className="form-group"><label>Email Address</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required /></div>
                <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone" /></div>
                <div className="form-group"><label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Related</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." required></textarea></div>
                <button type="submit" className="btn btn-primary" style={{width:'100%'}} disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
              </form>
            </div>

            <div className="contact-info-cards">
              {[{icon:'fa-map-marker-alt',t:'Our Office',p:'123 Foundation Street, New Delhi - 110001'},{icon:'fa-phone',t:'Phone',p:'+91 98765 43210'},{icon:'fa-envelope',t:'Email',p:'info@avamfoundation.org'},{icon:'fa-clock',t:'Working Hours',p:'Mon-Sat: 9AM - 6PM'}].map((c,i) => (
                <div key={i} className="info-card">
                  <div className="info-card-icon"><i className={`fas ${c.icon}`}></i></div>
                  <div><h4>{c.t}</h4><p>{c.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
