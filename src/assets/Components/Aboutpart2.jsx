import React from 'react'
import './about.css'

const AboutPage2 = () => {
    return (
      
       <div className="aboutpart2">
        <div className="mainpart">
            <div className="left">
                  <h1>OUR<br/>VISION<br/>&<br/>MISSION</h1>   
            </div>
            <div className="right">
                 <div className="missionBlock">
                    <h2 className="blockTitle">MISSION STATEMENT</h2>
                    <h3 className="instituteName">Al-Shifa Medical College, Islamabad</h3>
                    <p className="blockText">
                        Al-Shifa Medical College is committed to provide competency based medical education to produce socially accountable health professionals by fostering critical thinking, effective community services and lifelong learning.
                    </p>
                 </div>

                 <div className="visionBlock">
                    <h2 className="blockTitle">VISION STATEMENT</h2>
                    <h3 className="instituteName">Al-Shifa Medical College, Islamabad</h3>
                    <p className="blockText">
                        Al-Shifa is a leading institution aiming to keep its graduates apt with the ever emerging global health challenges, evolving educational methodologies and emerging technological advancements.
                    </p>
                 </div>
            </div>
        </div>
        
       </div>
       
    )
}

export default AboutPage2