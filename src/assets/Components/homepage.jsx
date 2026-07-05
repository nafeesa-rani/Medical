import React from 'react'
import './background.css'

const Homepage = ({ onNavigate }) => {
    return (
      
       <div id="home" className="background">
            <div className="Textsection">
                <h1>Welcome to <span>Al-Shifa</span> Medical College</h1>
                <p>We are committed for providing high-quality medical education and training to our students.<br/> Our faculty members are experienced professionals<br/> who are dedicated in helping students achieve their goals.</p>
                <a
                    href="#admissions"
                    className="btn"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate('page', 'admissions');
                    }}
                >
                    Apply Now
                </a>
            </div>
       </div>
       
    )
}

export default Homepage