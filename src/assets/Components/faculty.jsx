import React from 'react'
import './faculty.css'

const Faculty = ()=>{
    return(
     
        <div id="faculty" className="facultymain">
           <h1>Our Faculties</h1>
           <div className="science">
               <div className="facultycard">
                   <h1 className='heading'>Faculty of Basic Sciences</h1>
                   <p>The Faculty of Basic Sciences provides foundational knowledge in core scientific disciplines, preparing students for advanced</p>
                   <a href="http://">View Details</a>
                </div>
                <div className="facultycard2">
                    <h1 className='heading'>Faculty of Clinical Sciences</h1>
                    <p>Dedicated to advanced medical training and patient care, the Faculty of Clinical Sciences offers specialized programs and...</p>
                    <a href="http://">View Details</a>
                </div>
           </div>
           
        </div>

    )
    
}

export default Faculty