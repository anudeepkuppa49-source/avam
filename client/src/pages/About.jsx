import { Link } from 'react-router-dom';

const team = [
  { name: 'Dr. Arjun Mehta', role: 'Founder & Chairman', desc: 'Visionary leader with 20+ years in social development.' },
  { name: 'Sunita Reddy', role: 'Executive Director', desc: 'Passionate about scalable solutions for education and healthcare.' },
  { name: 'Vikram Joshi', role: 'Head of Programs', desc: 'Expert in designing community development programs.' },
  { name: 'Meera Singh', role: 'Volunteer Coordinator', desc: 'Manages our network of 5000+ volunteers.' },
];

const values = [
  { icon: 'fa-handshake', title: 'Integrity', desc: 'Transparency and honesty in all our endeavors.' },
  { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Creative solutions for complex social challenges.' },
  { icon: 'fa-shield-heart', title: 'Compassion', desc: 'Empathy drives our work. We treat everyone with dignity.' },
  { icon: 'fa-people-group', title: 'Collaboration', desc: 'The power of working together for greater impact.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container"><h1>About Avam Foundation</h1><p>Learn about our journey, mission, and the people behind it.</p></div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image"><i className="fas fa-hands-holding-child"></i></div>
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>Avam Foundation was established with a vision to create a world where every individual has access to quality education, healthcare, and opportunities for growth.</p>
              <p>Over the years, we have worked tirelessly to bridge the gap between underprivileged communities and essential resources. Our grassroots approach ensures help reaches those who need it most.</p>
              <p>We believe in sustainable development that empowers communities to become self-reliant and prosperous.</p>
            </div>
          </div>

          <div className="section-header"><h2>Our Core Values</h2><p>The principles that guide everything we do.</p></div>
          <div className="values-grid">
            {values.map((v,i) => (
              <div key={i} className="value-card">
                <i className={`fas ${v.icon}`}></i>
                <h3>{v.title}</h3><p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header"><h2>Our Team</h2><p>The dedicated individuals driving our mission forward.</p></div>
          <div className="team-grid">
            {team.map((t,i) => (
              <div key={i} className="team-card">
                <div className="team-avatar"><i className="fas fa-user"></i></div>
                <h3>{t.name}</h3><p className="role">{t.role}</p><p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>Become a part of our growing family and help us make a difference.</p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn btn-primary btn-large">Donate Today</Link>
            <Link to="/contact" className="btn btn-outline-light btn-large">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
