import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <i className="fas fa-hand-holding-heart"></i> Avam Foundation
            </Link>
            <p>Dedicated to creating lasting positive change through education, healthcare, and community development.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#programs">Programs</Link></li>
              <li><Link to="/#campaigns">Campaigns</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Work</h4>
            <ul>
              <li><a href="#">Education</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Livelihood</a></li>
              <li><a href="#">Women Empowerment</a></li>
              <li><a href="#">Disaster Response</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 123 Foundation Street, New Delhi, India</li>
              <li><i className="fas fa-phone"></i> +91 98765 43210</li>
              <li><i className="fas fa-envelope"></i> info@avamfoundation.org</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Avam Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
