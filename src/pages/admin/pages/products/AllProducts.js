import React from 'react'
import '../../style.css';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
import { useDeleteProductMutation, useGetProductQuery } from '../../../../redux/sliceApi/productSliceApi';
import Footer from '../../../../Footer';


const AllProducts = () => {
  const {data: products = []} = useGetProductQuery();
  const [deleteProduct] = useDeleteProductMutation();


  return (
  <div>
    <Navigation />
    <div className='mt-5'>
      <div className='d-flex justify-content-between mx-5'>
          
            <p >Published({products.length})</p>
          
          <Link to='/add-product'>
          <button>Add product</button> 
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
                      <th>Product Price</th>
                      <th>Product Category</th>
                      
                      
                      <td>Actions</td>
                  </tr>
              </thead>
              
             
                {
                  products?.map(product => (
                    <tbody key={product._id}>
                    <tr>
                      <th>{product.id}</th>
                      <th>{product.productName}</th>
                      <th>{product.productQuantity}</th>
                      <th>{product.productPrice}</th>
                      <th>{product.productCategory?.map(i=> i.categoryName)}</th>
                    <td>
                      <Link to={`/edit-product/${product._id}`} >
                      <button>Edit</button>
                      </Link>
                      <button className='m-1' onClick={() => deleteProduct(product._id)}>Delete</button>
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

export default AllProducts
