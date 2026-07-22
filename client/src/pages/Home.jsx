import { useState } from 'react';
import { Link } from 'react-router-dom';

const images = {
  hero: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85',
  education: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
  women: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=85',
  health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
  livelihood: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
  disaster: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85',
  grassroots: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=85',
};

const programmes = [
  ['Education', 'Education, nutrition and holistic development for children.', images.education],
  ['Women Empowerment', 'Helping women and adolescent girls shape independent futures.', images.women],
  ['Healthcare', 'Taking essential healthcare closer to hard-to-reach communities.', images.health],
  ['Livelihood', 'Skills, training and opportunity for under-served young people.', images.livelihood],
  ['Disaster Response', 'Timely relief and recovery support for affected families.', images.disaster],
  ['Empowering Grassroots', 'Strengthening community-led organisations and solutions.', images.grassroots],
];

const causes = [
  ['Education For Every Child', 'Help children stay in school with learning resources, nutrition, and support.', 'fa-book-open'],
  ['Health Cannot Wait', 'Support vital preventive care and health services for communities.', 'fa-heart-pulse'],
  ['She Can Rise', 'Help girls and women gain the skills and opportunity to thrive.', 'fa-venus'],
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const subscribe = async (event) => { event.preventDefault(); try { await fetch('http://localhost:5000/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }); } catch {} setSent(true); setEmail(''); };

  return <main className="avam-home avam-foundation-home">
    <section className="foundation-hero">
      <img src={images.hero} alt="Children learning together" />
      <div className="foundation-hero-shade" />
      <div className="avam-shell foundation-hero-copy"><p>AVAM FOUNDATION</p><h1>Creating opportunity.<br /><em>Changing lives.</em></h1><span>We work with communities to make education, wellbeing, and opportunity accessible to every person.</span><Link to="/our-work" className="foundation-link">Explore our work <i className="fas fa-arrow-right" /></Link></div>
    </section>

    <section className="foundation-intro avam-shell"><div className="intro-title"><p className="eyebrow">About AVAM</p><h2>Building brighter futures<br />with communities.</h2></div><div><p>AVAM Foundation believes lasting progress begins when people have the tools, support, and opportunity to lead change in their own lives.</p><p>Through community-led programmes in education, health, livelihood, and women’s empowerment, we work to create meaningful impact that lasts.</p><Link to="/about" className="foundation-link dark-link">Discover AVAM <i className="fas fa-arrow-right" /></Link></div></section>

    <section className="foundation-impact"><div className="avam-shell"><p className="eyebrow">Our impact</p><h2>Change that reaches further.</h2><div className="foundation-stat-grid">{[['15,000+','Lives impacted'],['75+','Communities reached'],['120+','Projects completed'],['50+','Partners in change']].map(([number,label])=><div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></div></section>

    <section className="foundation-programmes avam-shell"><div className="foundation-heading"><div><p className="eyebrow">Our programmes</p><h2>Where we create impact.</h2></div><Link to="/our-work" className="foundation-link dark-link">View all programmes <i className="fas fa-arrow-right" /></Link></div><div className="programme-photo-grid">{programmes.map(([title,text,image])=><Link className="programme-photo-card" to="/our-work" key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>{text}</p><span>Know more <i className="fas fa-arrow-right" /></span></div></Link>)}</div></section>

    <section className="foundation-sdg"><div className="avam-shell sdg-layout"><div><p className="eyebrow">Our commitment</p><h2>Towards a more<br />sustainable future.</h2><p>Our work contributes to the Sustainable Development Goals through practical, community-first action.</p></div><div className="sdg-list">{[['04','Quality Education'],['03','Good Health'],['05','Gender Equality'],['08','Decent Work'],['13','Climate Action'],['17','Partnerships']].map(([n,label])=><div key={n}><b>{n}</b><span>{label}</span></div>)}</div></div></section>

    <section className="foundation-stories avam-shell"><div className="foundation-heading"><div><p className="eyebrow">Stories in motion</p><h2>Every story is a step forward.</h2></div><button className="play-all"><i className="fas fa-play" /> Watch stories</button></div><div className="motion-grid">{[images.education,images.health,images.women].map((image,index)=><article key={image}><img src={image} alt="AVAM community programme" /><button aria-label="Play story"><i className="fas fa-play" /></button><span>{['Learning without limits','Care at the doorstep','Women leading change'][index]}</span></article>)}</div></section>

    <section className="foundation-causes"><div className="avam-shell"><div className="center-title"><p className="eyebrow">Support a cause</p><h2>Be part of the change.</h2><span /></div><div className="cause-grid">{causes.map(([title,text,icon])=><article key={title}><i className={`fas ${icon}`} /><h3>{title}</h3><p>{text}</p><Link to="/donate">Support this cause <i className="fas fa-arrow-right" /></Link></article>)}</div></div></section>

    <section className="foundation-partners avam-shell"><p className="eyebrow">Partners in change</p><h2>Progress happens together.</h2><div>{['Community First','Impact Collective','Future Makers','Change Network','Hope Alliance'].map(name=><span key={name}>{name}</span>)}</div></section>

    <section className="subscribe-section"><div className="avam-shell subscribe-layout"><div className="mail-icon"><i className="far fa-envelope" /></div><div><h3>Stay Updated</h3><p>Subscribe for programme news, community stories, and updates from AVAM.</p></div><form onSubmit={subscribe}><input type="email" required placeholder="Enter your email address" value={email} onChange={e=>setEmail(e.target.value)} /><button type="submit">{sent?'Subscribed!':'Subscribe'}</button></form></div></section>
  </main>;
}
