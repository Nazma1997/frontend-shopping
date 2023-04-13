import React from 'react'
import '../../style.css';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
import { useDeleteReviewsMutation, useGetReviewsQuery } from '../../../../redux/sliceApi/reviewsApi';
import Footer from '../../../../Footer';


const AllReviews = () => {
  const {data: reviews = []} = useGetReviewsQuery();
  const [deleteReviews] = useDeleteReviewsMutation();


  return (
  <div>
    <Navigation />
    <div className='mt-5'>
      <div className=' justify-content-start mx-5'>
          
            <p >Published({reviews.length})</p>
          
         
      </div>
      <div>
      <section id="orders " className='mx-5'>
          <h2>All Products</h2>
          <table className='table table-hover  align-items-center'>
              <thead>
                  <tr>
                      
                      
                      <th>Customer Name</th>
                      <th>Customer Image</th>
                      <th>Description</th>
                      
                      
                      
                      <td>Actions</td>
                  </tr>
              </thead>
              
             
                {
                  reviews?.map(review => (
                    <tbody key={review._id}>
                    <tr>
                      <th>{review.customerName}</th>
                      <th>{<img src={review.customerImage}  alt='the customer'/>}</th>
                      <th>{review.description}</th>
                     
                    <td>
                      {/* <Link to={`/edit-review/${review._id}`} >
                      <button>Edit</button>
                      </Link> */}
                      <button className='m-1' onClick={() => deleteReviews(review._id)}>Delete</button>
                    </td>
                    </tr> 
                    </tbody>
                  ))
                }
                 
                
                 
                  
             
          </table>
      </section>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default AllReviews
