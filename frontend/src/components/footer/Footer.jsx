import React from "react";
import "./footer.css";
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={footer_logo} alt="Shopy Logo" className="footer-logo" />
          <h2>Shopy</h2>
          <p>© {new Date().getFullYear()} Shopy. All rights reserved.</p>
        </div>

        <div className="footer-menus">
          <div className="footer-menu">
            <h4>Shop</h4>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Help</h4>
            <ul>
          <li>Contact</li>
              <li>Support</li>
              <li>FAQs</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <img src={instagram_icon} alt="Instagram" />
          <img src={pintester_icon} alt="Pinterest" />
          <img src={whatsapp_icon} alt="Whatsapp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
