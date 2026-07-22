import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'About Us', path: '/about', items: ['About AVAM', 'Our Leadership', 'Our People', 'Reach & Presence', 'Good Governance'] },
  { label: 'Our Work', path: '/our-work', items: ['Education', 'Health', 'Livelihood', 'Women Empowerment', 'Disaster Response', 'Empowering Grassroots', 'Privileged Children'] },
  { label: 'Campaigns', path: '/campaigns', items: ['Learning Without Limits', 'Health For Every Home', 'She Can Rise', 'Skills For Tomorrow', 'Disaster Response'] },
  { label: 'Get Involved', path: '/get-involved', items: ['Individual Support', 'Corporate Partnerships', 'Volunteer & Internships', 'Work With Us'] },
  { label: 'Media Centre', path: '/media', items: ['Press Releases', 'In The News', 'Workshops & Events'] },
  { label: 'Resource Center', path: '/resources', items: ['AVAM Blog', 'Newsletters', 'Annual Reports', 'Stories of Change'] },
  { label: 'Contact Us', path: '/contact', items: ['Get In Touch', 'Frequently Asked Questions'] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';
  const closeMenus = () => { setMenuOpen(false); setOpenDropdown(null); };

  return <nav className="navbar"><div className="container">
    <Link to="/" className="logo" onClick={closeMenus}><span className="logo-mark"><i className="fas fa-hands-holding-circle" /></span><span>AVAM<small>FOUNDATION</small></span></Link>
    <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} /></button>
    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
      {navigation.map((section) => <li className={`nav-dropdown ${openDropdown === section.label ? 'open' : ''}`} key={section.label}>
        <button type="button" className={`${isActive(section.path)} nav-dropdown-toggle`} onClick={() => setOpenDropdown(openDropdown === section.label ? null : section.label)} aria-expanded={openDropdown === section.label}>
          {section.label} <i className="fas fa-chevron-down" />
        </button>
        <ul className="nav-dropdown-menu">
          <li><Link className="dropdown-overview" to={section.path} onClick={closeMenus}>Overview</Link></li>
          {section.items.map((item) => <li key={item}><Link to={section.path} onClick={closeMenus}>{item}</Link></li>)}
        </ul>
      </li>)}
      <li><Link to="/donate" className="nav-btn" onClick={closeMenus}>Donate</Link></li>
    </ul>
  </div></nav>;
}
