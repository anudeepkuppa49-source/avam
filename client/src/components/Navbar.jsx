import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <li><Link to="/#programs" className={isActive('/#programs')} onClick={() => setMenuOpen(false)}>Our Work</Link></li>
          <li><Link to="/#campaigns" className={isActive('/#campaigns')} onClick={() => setMenuOpen(false)}>Campaigns</Link></li>
          <li><Link to="/media" className={isActive('/media')} onClick={() => setMenuOpen(false)}>Media</Link></li>
          <li><Link to="/resources" className={isActive('/resources')} onClick={() => setMenuOpen(false)}>Resources</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/donate" className="nav-btn" onClick={() => setMenuOpen(false)}>Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
}
