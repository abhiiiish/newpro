import React from 'react';
import './footer.module.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your App. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </nav>  
      </div>
    </footer>
  );  
}

export default Footer;
