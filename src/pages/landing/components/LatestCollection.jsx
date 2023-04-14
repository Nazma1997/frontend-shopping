import React from 'react'
import '../landing.css';
import '../../admin/style.css';
import { FaFreeCodeCamp, FaIdeal, FaShuttleVan } from 'react-icons/fa';


const LatestCollection = () => {
  return (
    <div >
      <section className="why_section layout_padding mt-5  bg-white" >
    <div className="container bg-white">
       
       <div className="row">
       <div className="col-md-6">
          <div className="box  " >
               
              
               <img src='https://i.ibb.co/ZVz4pkY/arrival-bg-removebg-preview-1.png' alt='the 'style={{height:'600px'}} className='sm:align-items-center' />
            </div>
          </div>
         
         
          <div className="col-md-6 mt-5">
          <div className="row mt-5">
                  {/* <div className="col-md-6 ml-auto"> */}
                     <div className="heading_container remove_line_bt mt-5 mx-1">
                        <h2 style={{fontSize: '3.5rem',fontWeight: 'bold'}}>
                          Latest Collections
                        </h2>
                     </div>
                     <p style={{marginTop: '20px',marginBottom: '30px'}} className='mx-1'>
                        Introducing our latest collection - fresh off the runway and ready to elevate your style! Discover the hottest trends and must-have pieces for the season ahead. From chic and sophisticated to bold and daring, our latest collection has something for every fashion-forward individual. 
                     </p>
                     <p style={{padding: '10px 45px',
    backgroundColor: '#f7444e',
    border: '1px solid #f7444e',
    color: '#ffffff', width:'50%', borderRadius:'5px'}} className='mx-3' >
                     See Latest Products
                     </p>
                  {/* </div> */}
               </div>
          </div>
       </div>
    </div>
 </section>
    </div>
  )
}

export default LatestCollection
