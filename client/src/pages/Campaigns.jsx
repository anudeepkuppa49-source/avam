import { Link } from 'react-router-dom';

const campaigns = [
  ['Learning Without Limits', 'Education', 'Helping children remain in school with learning resources, mentoring, and support.', 'fa-book-open'],
  ['Health For Every Home', 'Healthcare', 'Making preventive care, health information, and essential services more accessible.', 'fa-heart-pulse'],
  ['She Can Rise', 'Women Empowerment', 'Supporting women and girls with confidence, skills, and opportunities to lead.', 'fa-venus'],
  ['Skills For Tomorrow', 'Livelihood', 'Opening pathways to meaningful work through practical skill development.', 'fa-briefcase'],
];

export default function Campaigns() {
  return <main className="campaigns-page page-layout">
    <section className="page-hero"><div className="container"><p className="eyebrow">Campaigns</p><h1>Support a Cause</h1><p>Focused campaigns that turn collective support into meaningful community action.</p></div></section>
    <section className="campaign-content"><div className="avam-shell"><div className="center-title"><p className="eyebrow">Current campaigns</p><h2>Choose the change you want to make.</h2><span /></div><div className="campaign-feature-grid">{campaigns.map(([title,tag,text,icon])=><article key={title}><div className="campaign-symbol"><i className={`fas ${icon}`} /></div><p className="eyebrow">{tag}</p><h3>{title}</h3><p>{text}</p><Link to="/donate" className="avam-button">Support this cause <i className="fas fa-arrow-right" /></Link></article>)}</div></div></section>
    <section className="campaign-banner"><div className="avam-shell"><div><p className="eyebrow">Every contribution counts</p><h2>Small actions can create a lasting difference.</h2></div><Link to="/contact" className="foundation-link">Partner with AVAM <i className="fas fa-arrow-right" /></Link></div></section>
  </main>;
}
