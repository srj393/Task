import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import './footer.css'

const Footers = () => {
  return (
    <>
    <footer>
      
      <div className="footer-container">
        <div className="footer-section">
          <h3> Corano</h3>
          <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
         
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
        
          <ul className="contact-details">
            <li>
              <FaHome />
              123 Main Street, Anytown USA
            </li>
            <li>
              <FaEnvelope />
              contact@example.com
            </li>
            <li>
              <FaPhone />
              (555) 555-5555
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul className="information-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
         
          <div className="social-media-buttons">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaTwitterSquare />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
          
        </div>

       
      </div>
      <div className="newsletter-section">
      <h3>Sign Up To Newsletter</h3>
      <form className="newsletter-form">
        <input type="email" placeholder="Email" />
        <button type="submit">Subscribe</button>
      </form>
      <div className="copyright">
    Copyright © RoadThemes. All Rights Reserved.
  </div>
    
    </div>

    

     
      
    </footer>
    
    </>
  );
};

export default Footers;
