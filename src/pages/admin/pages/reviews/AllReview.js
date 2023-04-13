import React from 'react'
import '../../style.css';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';


const AllReview = () => {
  return (
  <div>
    <Navigation />
    <div className='mt-5'>
      <div className='d-flex justify-content-between mx-5'>
          
            <p >Published()</p>
          
          <Link to='/add-review'>
          <button>Add Review</button> 
          </Link>
      </div>
      <div>
      <section id="orders " className='mx-5'>
          <h2>All Products</h2>
          <table className='table table-hover  align-items-center'>
              <thead>
                  <tr>
                      
                       <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Product Quantity</th>
                      <th>Product  Price</th>
                      <td>Actions</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      
                      <td>John Doe</td>
                      <td>Product 1</td>
                      <td>2</td>
                      <td>$50.00</td>
                      <td>
                        <Link to='/edit-review' >
                        <button>Edit</button>

                        </Link>
                        <button className='m-1'>Delete</button>
                      </td>
                  </tr>
                
                 
                  
              </tbody>
          </table>
      </section>
      </div>
    </div>
  </div>
  )
}

export default AllReview
