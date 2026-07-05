import React from "react" 
import './courses.css'

const Courses = () =>{
  return(

   <div id="programs" className="coursesmain">
     <div className="topc">
        <h3>EXCELLENCE IN EDUCATION</h3>
        <h1>LEARNING OUTCOMES<br/>
        <span>FOR ALSHIFA MEDICAL COLLEGE</span></h1>

     </div>
     <div className="bottomc">
        <div className="card">
                 <div className="icon">
                 <i className="ri-first-aid-kit-line"></i>
                 </div>
                 <h1>1 <span>Knowledge & competence</span></h1>
                 <p>
                    Demonstrate medical knowledge to diagnose, manage, and prevent common health problems.
                 </p>
        </div>
        <div className="card">
                 <div className="icon">
                 <i className="ri-hospital-line"></i>
                 </div>
                 <h1>2 <span>Clinical Skills</span></h1>
                 <p>
                    Perform essential clinical skills safely and effectively, guided by evidence-based practice.</p>
        </div>
        <div className="card">
                 <div className="icon">
                 <i className="ri-team-fill"></i>
                 </div>
                 <h1>3 <span>Community<br/> Orientation</span></h1>
                 <p>
                   Deliver community-focused, equitable, and preventive healthcare.</p>
        </div>
        <div className="card">
                 <div className="icon">
                 <i className="ri-lightbulb-line"></i>
                 </div>
                 <h1>4 <span>Life-Long Learning</span></h1>
                 <p>
                   Adopt habits of reflection, critical thinking, and self-directed learning. </p>
        </div>
        <div className="card">
                 <div className="icon">
                 <i className="ri-microscope-line"></i>
                 </div>
                 <h1>5 <span>Research &<br/> Innovation</span></h1>
                 <p>
                    Apply basic research skills and contribute to evidence-based medicine.</p>
        </div>
        <div className="card">
                 <div className="icon">
                 <i className="ri-xing-line"></i>
                 </div>
                 <h1>6 <span>Professionalism & <br/>Ethics</span></h1>
                 <p>
                    Uphold integrity, compassion, and ethical responsibility.  </p>
        </div>
        <div className="card">
                 <div className="icon">
                 <i className="ri-shake-hands-line"></i>
                 </div>
                 <h1>7 <span>Communication & Teamwork</span></h1>
                 <p>
                    Communicate effectively and work collaboratively in healthcare teams.</p>
        </div>
     </div>
   </div>

  )

}

export default Courses