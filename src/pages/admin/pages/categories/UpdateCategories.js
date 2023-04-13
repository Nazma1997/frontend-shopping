import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { useUpdateCategoryMutation } from '../../../../redux/sliceApi/categoryApi';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../../Footer';

const UpdateCategory = () => {
  const [updateCategory] = useUpdateCategoryMutation();
  const [categoryName, setCategoryName] =useState('');
  const navigate = useNavigate()
  const {id} = useParams()
  // console.log('category name : ', categoryName)
  const submitForm = e => {
    e.preventDefault();
    const formData = {
      'categoryName': categoryName,
      '_id': id
    }
    updateCategory(formData)
    setCategoryName('');
    navigate('/categories')
  }
  return (
  <div>
    <Navigation />
    <div>
      <div className="container mt-5">
      <h3 style={{textAlign: 'center'}}>Update Category</h3>
      <br/>
      <div className="card shadow">
        <form
          action=""
          method="post"
          name="room_category"
          encType="multipart/form-data"
        >

          <div className="card-body" >
            <div className="row">
              <div className="col-md-6">

               
                
                <div className="form-group">
                  <label htmlFor="product_name">Category Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product_name"
                    value={categoryName}
                    placeholder=""
                    required
                    onChange={e => setCategoryName(e.target.value)}
                  />
                </div><br/>
               
                <button
                  type="submit"
                  className="btn  btn-warning button w-100"
                  name="submit"
                  value="Add New Category"
                  onClick={submitForm}
                >
                <strong>Update Category</strong>
                </button>
              </div>
            </div>
          </div>
        </form>

        
      </div>
    </div>
    </div>
    <Footer />
  </div>
  )
}

export default UpdateCategory
