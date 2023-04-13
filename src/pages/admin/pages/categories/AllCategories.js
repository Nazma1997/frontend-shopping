import React from 'react'
import '../../style.css';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { useDeleteCategoryMutation, useGetCategoryQuery } from '../../../../redux/sliceApi/categoryApi';


const AllCategories = () => {

  const {data: categories = []} = useGetCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation()
  // console.log(categories)
  return (
  <div>
    <Navigation />
    <div className='mt-5'>
      <div className='d-flex justify-content-between mx-5'>
          
            <p >Published({categories.length})</p>
          
          <Link to='/add-category'>
          <button>Add Category</button> 
          </Link>
      </div>
      <div>
      <section id="orders " className='mx-5'>
          <h2>All Categories</h2>
          <table className='table table-hover  align-items-center'>
              <thead>
                  <tr>
                      
                      
                      <th>Category Name</th>
                      
                      
                      <td>Actions</td>
                  </tr>
              </thead>
              
             
                {
                  categories?.map(category => (
                    <tbody key={category._id}>
                    <tr>
                    <td>{category?.categoryName}</td>
                    <td>
                      <Link to={`/edit-category/${category._id}`} >
                      <button>Edit</button>
                      </Link>
                      <button className='m-1' onClick={() => deleteCategory(category._id)}>Delete</button>
                    </td>
                    </tr> 
                    </tbody>
                  ))
                }
                 
                
                 
                  
             
          </table>
      </section>
      </div>
    </div>
  </div>
  )
}

export default AllCategories
