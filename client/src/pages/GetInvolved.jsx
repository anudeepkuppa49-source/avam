import { Link } from 'react-router-dom';

const options = [
  ['fa-heart', 'Give', 'Your contribution helps fund programmes that meet urgent community needs.', '/donate', 'Donate now'],
  ['fa-people-group', 'Volunteer', 'Give your time and skills to help communities learn, grow, and thrive.', '/contact', 'Volunteer with us'],
  ['fa-building', 'Partner', 'Build an impactful partnership with AVAM Foundation and create change at scale.', '/contact', 'Partner with us'],
];

export default function GetInvolved() {
  return <main className="involved-page page-layout">
    <section className="page-hero"><div className="container"><p className="eyebrow">Get involved</p><h1>Make change possible.</h1><p>There are many ways to stand with communities and be part of a brighter tomorrow.</p></div></section>
    <section className="involved-content"><div className="avam-shell"><div className="center-title"><p className="eyebrow">Join the movement</p><h2>Choose how you want to help.</h2><span /></div><div className="involved-grid">{options.map(([icon,title,text,path,action])=><article key={title}><i className={`fas ${icon}`} /><h3>{title}</h3><p>{text}</p><Link to={path}>{action} <i className="fas fa-arrow-right" /></Link></article>)}</div></div></section>
    <section className="involved-note"><div className="avam-shell"><p className="eyebrow">Together, further</p><h2>When people come together, communities move forward.</h2></div></section>
  </main>;
}
