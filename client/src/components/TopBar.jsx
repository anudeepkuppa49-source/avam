import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <a href="tel:+919876543210"><i className="fas fa-phone"></i> +91 98765 43210</a>
          <a href="mailto:info@avamfoundation.org"><i className="fas fa-envelope"></i> info@avamfoundation.org</a>
        </div>
        <div className="top-bar-right">
          <div className="social-mini">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
