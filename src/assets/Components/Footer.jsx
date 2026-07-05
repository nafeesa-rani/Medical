import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        
        {/* Column 1: Vision & Mission */}
        <div className="footer-column">
          <h3>🎯 OUR VISION & MISSION</h3>
          <p>
            To transform healthcare through excellence in education, research, and clinical practice. 
            We're dedicated to training compassionate professionals who will lead innovation in medical 
            science and community health.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#campus">Campus Life</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-column">
          <h3>CONTACT INFORMATION</h3>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone:</strong>
              <p><a href="tel:048-9232004">(051) 9232004</a></p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>Email:</strong>
              <p><a href="mailto:principal.smc.health@punjab.gov.pk">principal.amc.health@punjab.gov.pk</a></p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Address:</strong>
              <p>Murree Road, Islamabad, Pakistan</p>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#facebook" className="social-link">f</a>
            <a href="#instagram" className="social-link">📷</a>
            <a href="#linkedin" className="social-link">in</a>
          </div>
        </div>

        {/* Column 4: Send a Message */}
        <div className="footer-column">
          <h3>SEND A MESSAGE</h3>
          <form className="contact-form">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="form-input"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="form-input"
              required
            />
            <textarea 
              placeholder="Your Message" 
              className="form-textarea"
              rows="3"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              ✈️ Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Alshifa Medical College. Developed by <span>Nafeesa Rani</span></p>
      </div>
    </footer>
  )
}

export default Footer
