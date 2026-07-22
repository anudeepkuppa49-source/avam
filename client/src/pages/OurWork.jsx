import { Link } from 'react-router-dom';

const workAreas = [
  { icon: 'fa-book-open', title: 'Education', text: 'Helping children and young people access quality learning, school supplies, and the confidence to build a brighter future.' },
  { icon: 'fa-heart-pulse', title: 'Health', text: 'Bringing essential health awareness, check-ups, and care closer to communities that need it most.' },
  { icon: 'fa-briefcase', title: 'Livelihood', text: 'Creating pathways to sustainable incomes through practical skills, training, and local opportunities.' },
  { icon: 'fa-venus', title: 'Women Empowerment', text: 'Supporting women to lead independent, secure, and empowered lives in their communities.' },
  { icon: 'fa-house-flood-water', title: 'Disaster Response', text: 'Standing beside families with timely relief and recovery support when emergencies strike.' },
  { icon: 'fa-seedling', title: 'Empowering Grassroots', text: 'Strengthening local changemakers and community-led solutions that create lasting impact.' },
];

export default function OurWork() {
  return (
    <main className="our-work-page">
      <section className="work-hero">
        <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1800&q=85" alt="Community health outreach" />
        <div className="work-hero-overlay" />
        <div className="avam-shell work-hero-copy">
          <p className="eyebrow">Our work</p>
          <h1>Building stronger<br /><em>communities</em> together.</h1>
          <p>Our programmes respond to everyday needs and help people create sustainable change for themselves and their communities.</p>
          <a href="#work-areas" className="avam-button">Explore Our Work <i className="fas fa-arrow-right" /></a>
        </div>
      </section>

      <section className="work-intro avam-shell">
        <div><p className="eyebrow">What we do</p><h2>Meaningful action,<br />lasting impact.</h2></div>
        <p>We work alongside communities to create access to education, wellbeing, opportunity, and support when it is needed most.</p>
      </section>

      <section className="work-areas" id="work-areas">
        <div className="avam-shell">
          <div className="center-title"><p className="eyebrow">Our focus areas</p><h2>Work That Changes Lives</h2><span /></div>
          <div className="work-grid">
            {workAreas.map((area) => <article className="work-card" key={area.title}>
              <div className="work-icon"><i className={`fas ${area.icon}`} /></div>
              <h3>{area.title}</h3><p>{area.text}</p>
              <Link to="/contact">Learn More <i className="fas fa-arrow-right" /></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="work-callout">
        <div className="avam-shell"><div><p className="eyebrow">Make an impact</p><h2>There is a place for everyone in this work.</h2></div><Link to="/donate" className="avam-button">Support a Cause <i className="fas fa-arrow-right" /></Link></div>
      </section>
    </main>
  );
}
