import React, { useState } from 'react'
import '../../style.css';
import Navigation from '../../components/Navigation';
import { useCreateCategoryMutation } from '../../../../redux/sliceApi/categoryApi';
import { useNavigate } from 'react-router-dom';


const AddCategory = () => {

  const navigate = useNavigate()
  const [createCategory] = useCreateCategoryMutation();
  const [categoryName, setCategoryName] =useState('');


  // console.log('category name : ', categoryName)
  const submitForm = e => {
    e.preventDefault();
    const formData = {
      'categoryName': categoryName,
    }
    createCategory(formData)
    setCategoryName('');
    navigate('/categories')
  }

  return (
   <div>
    <Navigation />
    <div className="container mt-5">
      <h3 style={{textAlign: 'center'}}>Add New Category</h3>
      <br/>
      <div>
      <div className="card shadow " >
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
                    placeholder=""
                    required
                    onChange={e => setCategoryName(e.target.value)}
                  />
                </div>
             

                <button
                  type="submit"
                  className="btn  btn-warning button w-100"
                  name="submit"
                  value="Add New Category"
                  onClick={submitForm}
                >
                <strong>Add New Category</strong>
                </button>
              </div>
            </div>
          </div>
        </form>

        
      </div>
      </div>
    </div>
   </div>
  )
}

export default AddCategory
