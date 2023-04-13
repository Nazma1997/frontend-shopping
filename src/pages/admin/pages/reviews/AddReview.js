import React from 'react'
import '../../style.css';
import Navigation from '../../components/Navigation';


const AddReview = () => {
  return (
   <div>
    <Navigation />
    <div class="container mt-5">
      <h3 style={{textAlign: 'center'}}>Add New Review</h3>
      <br/>
      <div>
      <div class="card shadow " >
        <form
          action=""
          method="post"
          name="room_category"
          enctype="multipart/form-data"
        >

          <div class="card-body" >
            <div class="row">
              <div class="col-md-6">

                <div class="form-group">
                  <label for="product_id">Product ID:</label>
                  <input
                    type="number"
                    class="form-control"
                    name="product_id"
                    placeholder=""
                    required
                    
                    
                  />
                </div><br/>

                <div class="form-group">
                  <label for="product_name">Product Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="product_name"
                    placeholder=""
                    required
                  />
                </div><br/>
                <div class="form-group ">
                  <label for="qty">Product Quantity:</label>
                  <input
                    type="number"
                    class="form-control"
                    name="qty"
                    placeholder=""
                    required
                  />
                </div><br/>

                <div class="form-group ">
                <label for="qty">Product Quantity:</label>
                  <input
                  type="number" 
                  id="price" 
                  name="price" 
                  step="0.01" 
                  required
                  class="form-control"
                  />
                </div><br/>

                <div class="form-group">
                  
                 
                  <select id="category" name="category" required class="form-control">
                    <option value="1">Mens</option>
                    <option value="2">Womens</option>
                    <option value="2">Kids</option>
                  </select>
                </div><br/>

                <div class="form-group"> 
                  <label for="price">Upload Product Image:</label> <br />
                  <input 
                  type="file" 
                  id="product_image" 
                  name="product_image" 
                  required />
                </div>

                <button
                  type="submit"
                  class="btn  btn-warning button w-100"
                  name="submit"
                  value="Add New Product"
                >
                <strong>Add New Product</strong>
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

export default AddReview
