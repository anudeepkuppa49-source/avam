import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo"><span className="logo-mark"><i className="fas fa-hands-holding-circle"></i></span><span>AVAM<small>FOUNDATION</small></span></Link>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li className={`nav-dropdown ${workOpen ? 'open' : ''}`}>
            <button type="button" className={`${isActive('/our-work')} nav-dropdown-toggle`} onClick={() => setWorkOpen(!workOpen)} aria-expanded={workOpen}>
              Our Work <i className="fas fa-chevron-down" />
            </button>
            <ul className="work-dropdown-menu">
              {['Education', 'Health', 'Livelihood', 'Women Empowerment', 'Disaster Response', 'Empowering Grassroots', 'Privileged Children'].map((item) => (
                <li key={item}><Link to="/our-work" onClick={() => { setMenuOpen(false); setWorkOpen(false); }}>{item}</Link></li>
              ))}
            </ul>
          </li>
          <li><Link to="/campaigns" className={isActive('/campaigns')} onClick={() => setMenuOpen(false)}>Campaigns</Link></li>
          <li><Link to="/get-involved" className={isActive('/get-involved')} onClick={() => setMenuOpen(false)}>Get Involved</Link></li>
          <li><Link to="/media" className={isActive('/media')} onClick={() => setMenuOpen(false)}>Media</Link></li>
          <li><Link to="/resources" className={isActive('/resources')} onClick={() => setMenuOpen(false)}>Resources</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/donate" className="nav-btn" onClick={() => setMenuOpen(false)}>Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
}
