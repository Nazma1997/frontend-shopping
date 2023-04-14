import React from 'react'
import '../landing.css';
import '../../admin/style.css';
import { FaFreeCodeCamp, FaIdeal, FaShuttleVan } from 'react-icons/fa';

const WhySection = () => {
  return (
    <div>
       <section className="why_section layout_padding mt-5 text-center" >
         <div className="container bg-light">
            <div className="heading_container heading_center">
               <h3 style={{fontWeight:'bold', fontSize:'2.5rem', marginBottom:'100px'}}>
                  WHY TO SHOP AT HOLLISTER?
               </h3>
            </div>
            <div className="row">
            <div className="col-md-4">
               <div className="box  " style={{backgroundColor:'#d60c17', padding:'50px', borderRadius:'10px', margin:'10px'}}>
                    
                    <FaShuttleVan style={{fontWeight:'bold', fontSize:'2.5rem', color:"white"}}/>
                  
                    <div className="detail-box">
                       <h5 style={{fontSize: '21px',fontWeight: 700, color:'white', marginTop:'8px'}}>
                          Free Delivery
                       </h5>
                    </div>
                 </div>
               </div>
               <div className="col-md-4">
               <div className="box  " style={{backgroundColor:'#d60c17', padding:'50px', borderRadius:'10px', margin:'10px'}}>
                    
                    <FaFreeCodeCamp style={{fontWeight:'bold', fontSize:'2.5rem', color:"white"}}/>
                  
                    <div className="detail-box">
                       <h5 style={{fontSize: '21px',fontWeight: 700, color:'white', marginTop:'8px'}}>
                          Free Shopping
                       </h5>
                    </div>
                 </div>
               </div>
               <div className="col-md-4">
               <div className="box  " style={{backgroundColor:'#d60c17', padding:'50px', borderRadius:'10px', margin:'10px'}}>
                    
                    <FaIdeal style={{fontWeight:'bold', fontSize:'2.5rem', color:"white"}}/>
                  
                    <div className="detail-box">
                       <h5 style={{fontSize: '21px',fontWeight: 700, color:'white', marginTop:'8px'}}>
                          Best Deal
                       </h5>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default WhySection
