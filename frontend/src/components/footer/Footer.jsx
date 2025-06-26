import React from "react";
import "./footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* Logo & Info */}
        <div className="footer-brand">
          <img src={footer_logo} alt="Shopy Big Logo" className="footer-logo" />
          <p>© {new Date().getFullYear()} Shopy. Designed by Jai.</p>
        </div>

        {/* Footer Navigation */}
        <div className="footer-menus">
          <div className="footer-menu">
            <h4>Shop</h4>
            <ul>
              <li><a href="/mens">Men</a></li>
              <li><a href="/womens">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/">Sale</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            <img src={pintester_icon} alt="Pinterest" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <img src={whatsapp_icon} alt="Whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
