import { useState } from 'react';
import { Link } from 'react-router-dom';

const photos = {
  hero: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85',
  planting: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=85',
  student: 'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=600&q=85',
  mentor: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=600&q=85',
  plant: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=85',
};

const focuses = [
  ['fa-book-open', 'Education', 'Promoting quality education and lifelong learning opportunities.'],
  ['fa-people-group', 'Empowerment', 'Enabling individuals with skills, resources and confidence.'],
  ['fa-heart-pulse', 'Health & Wellbeing', 'Supporting healthier communities through awareness and care.'],
  ['fa-leaf', 'Environment', 'Protecting our planet through sustainable practices and green initiatives.'],
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const subscribe = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:5000/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    } catch { /* keep the form usable without the local API */ }
    setSent(true); setEmail('');
  };

  return <main className="avam-home">
    <section className="avam-hero">
      <div className="avam-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Together, we can</p>
          <h1>Empower.<br />Educate.<br /><em>Elevate.</em></h1>
          <p className="hero-text">AVAM Foundation is committed to building a stronger, brighter future for communities through empowerment, education, and equal opportunities.</p>
          <div className="hero-actions"><a href="#focus" className="avam-button">Explore Our Initiatives <i className="fas fa-arrow-right" /></a><button className="watch-button">Watch Video <i className="far fa-play-circle" /></button></div>
        </div>
        <div className="hero-visual">
          <div className="hero-arch"><img src={photos.hero} alt="Child raising a paper plane" /></div>
          <div className="hero-leaf leaf-one" /><div className="hero-leaf leaf-two" />
          <div className="change-card"><i className="far fa-heart" /><span>Be the Change<small>Make a Difference</small></span><b>→</b></div>
        </div>
      </div>
      <div className="impact-strip avam-shell">
        {[['fa-people-group', '15,000+', 'Lives Impacted'], ['fa-people-carry-box', '120+', 'Projects Completed'], ['fa-map-location-dot', '75+', 'Communities Reached'], ['fa-handshake', '50+', 'Dedicated Partners']].map(([icon, value, label], index) => <div className="impact-stat" key={label}><i className={`fas ${icon} stat-${index}`} /><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>

    <section className="about-feature avam-shell">
      <div className="about-photo"><div className="photo-block" /><img src={photos.planting} alt="Children planting a sapling" /></div>
      <div className="about-copy"><p className="eyebrow">About AVAM Foundation</p><h2>Building a Better<br />Tomorrow, Today</h2><p>We believe in the power of people and communities. Through sustainable initiatives in education, skill development, health, and environment, we strive to create lasting change.</p><ul><li>Community-Centered Approach</li><li>Transparent & Accountable</li><li>Sustainable Long-Term Impact</li></ul><Link to="/about" className="avam-button">More About Us <i className="fas fa-arrow-right" /></Link></div>
    </section>

    <section className="focus-section" id="focus"><div className="avam-shell"><div className="center-title"><p className="eyebrow">Our focus areas</p><h2>Where We Make an Impact</h2><span /></div><div className="focus-grid">{focuses.map(([icon, title, description], index) => <article className="focus-card" key={title}><i className={`fas ${icon} focus-icon f${index}`} /><h3>{title}</h3><p>{description}</p><a href="#stories">Learn More <i className="fas fa-arrow-right" /></a></article>)}</div></div></section>

    <section className="stories-section" id="stories"><div className="avam-shell stories-layout"><div className="stories-intro"><p className="eyebrow">Our impact</p><h2>Real Stories.<br />Real Change.</h2><span className="mini-line" /><p>Every number represents a life touched, a dream nurtured, and a community moved forward.</p><a className="avam-button" href="#join">View All Stories <i className="fas fa-arrow-right" /></a></div><div className="story-cards">{[[photos.student, 'Education', 'From Dropping Out to Dreaming Big', 'Supporting education helped Priya return to school and aim for a bright future.'], [photos.mentor, 'Empowerment', 'A New Skill, A New Life', 'Ramesh gained vocational skills and now supports his family with pride.'], [photos.plant, 'Environment', 'Small Steps, Big Impact', 'Our tree plantations are creating a greener tomorrow.']].map(([image, category, title, text]) => <article className="story-card" key={title}><img src={image} alt="Community impact story" /><span>{category}</span><h3>{title}</h3><p>{text}</p><a href="#join">Read Story <i className="fas fa-arrow-right" /></a></article>)}</div></div></section>

    <section className="join-section" id="join"><div className="avam-shell join-layout"><div><p className="eyebrow">Get involved</p><h2>Be a Part of the Change</h2><p>Whether you donate, volunteer, or spread the word, you can help build a better tomorrow.</p></div><Link to="/donate" className="join-tile donate-tile"><i className="far fa-heart" /><b>Donate Now</b><span>Support our initiatives and create impact.</span><em>→</em></Link><Link to="/contact" className="join-tile"><i className="fas fa-people-group" /><b>Volunteer With Us</b><span>Join hands and help transform lives.</span><em>→</em></Link></div></section>

    <section className="subscribe-section"><div className="avam-shell subscribe-layout"><div className="mail-icon"><i className="far fa-envelope" /></div><div><h3>Stay Updated</h3><p>Subscribe to our newsletter and stay informed about our latest stories and updates.</p></div><form onSubmit={subscribe}><input type="email" required placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} /><button type="submit">{sent ? 'Subscribed!' : 'Subscribe'}</button></form></div></section>
  </main>;
}
