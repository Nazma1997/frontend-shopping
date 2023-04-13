import React from 'react'
// import '../../style.css';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';


const AllOrders = () => {
  return (
  <div>
    <Navigation />
    <div className='mt-5'>
      <div className='justify-content-start mx-5'>
          
            <p >Published()</p>
        
      </div>
      <div>
      <section id="orders " className='mx-5'>
          <h2>All Orders</h2>
          <table className='table table-hover  align-items-center'>
              <thead>
                  <tr>
                      
                       <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Product Quantity</th>
                      <th>Product  Price</th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      
                      <td>John Doe</td>
                      <td>Product 1</td>
                      <td>2</td>
                      <td>$50.00</td>
                     
                  </tr>
                
                 
                  
              </tbody>
          </table>
      </section>
      </div>
    </div>
  </div>
  )
}

export default AllOrders
