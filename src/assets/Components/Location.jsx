import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div id="admissions" className="location">
        <div className="toplocation">
            <h1>OUR LOCATION</h1>
        </div>
        <div className="bottomlocation">
         <div className="leftlocation">
            <iframe
              title="Our Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.1536594893844!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df961b00000001%3A0x1234567890!2sIslamabad%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
         </div>
         <div className="rightlocation">
            <div className="findus">
              <h2>FIND US</h2>
              
              <div className="find-item">
                <span className="icon">📍</span>
                <div className="find-content">
                  <h4>Address</h4>
                  <p>Murree Road, Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="find-item">
                <span className="icon">📞</span>
                <div className="find-content">
                  <h4>Phone</h4>
                  <p><a href="tel:051-9232004">(051) 9232004</a></p>
                </div>
              </div>

              <div className="find-item">
                <span className="icon">✉️</span>
                <div className="find-content">
                  <h4>Email</h4>
                  <p><a href="mailto:principal.amc.health@punjab.gov.pk">principal.amc.health@punjab.gov.pk</a></p>
                </div>
              </div>
            </div>

            <div className="openinghours">
              <h2>OPENING HOURS</h2>
              
              <div className="hours-item">
                <span className="day">Monday - Friday:</span>
                <span className="time">9:00 AM - 4:00 PM</span>
              </div>

              <div className="hours-item">
                <span className="day">Saturday - Sunday:</span>
                <span className="time closed">Closed</span>
              </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Location