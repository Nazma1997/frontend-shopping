import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../../../Footer'

const UpdateReview = () => {
  return (
  <div>
    <Navigation />
    <div>
      <div class="container mt-5">
      <h3 style={{textAlign: 'center'}}>Update Review</h3>
      <br/>
      <div class="card shadow">
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
                  <label for="qty">Product Quantity:</label>&nbsp;
                  <input
                    type="number"
                    class="form-control"
                    name="qty"
                    placeholder=""
                    required
                  />
                </div><br/>

                <div class="form-group ">
                  <label for="price">Product Price:</label>&nbsp;
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
                  <label for="bed">Product Category:</label>
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
                <strong>Update Product</strong>
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

export default UpdateReview
