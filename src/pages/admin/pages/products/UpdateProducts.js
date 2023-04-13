import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useUpdateProductMutation } from '../../../../redux/sliceApi/productSliceApi';
import { useGetCategoryQuery } from '../../../../redux/sliceApi/categoryApi';

const UpdateProducts = () => {
  const {id} = useParams()
  const [updateProduct] = useUpdateProductMutation(id);
  const {data: categories = []} = useGetCategoryQuery();
  const navigate = useNavigate()
  const [productName, setProductName] =useState('');
  const [productId, setProductId] =useState('');
  const [productQuantity, setProductQuantity] =useState('');
  const [productPrice, setProductPrice] =useState('');
  const [productImage, setProductImage] = useState('')
  const [productCategory, setProductCategory] = useState('')

  const apiKey = '837d05f4d0c9787e5980a5a7fe323afd';

  const submitForm =async( e )=> {
    e.preventDefault();

    const url = "https://api.imgbb.com/1/upload";
    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("key", apiKey);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      }}
      const imgbbResponse = await axios.post(url, formData, config);
      const imageUrl = imgbbResponse.data.data.url;
    const data = {
      'productName': productName,
      'id': productId,
      'productQuantity': productQuantity,
      'productPrice': productPrice,
      'productImage': imageUrl,
      'productCategory': productCategory,
      "_id": id

    }
    updateProduct(data)
    setProductName('');
    setProductId('');
    setProductQuantity('');
    setProductPrice('');
    setProductImage('');
    setProductCategory('')
    navigate('/products')
  }
  const handleImage = (e) => {
    setProductImage(e.target.files[0]);
  };
  return (
  <div>
    <Navigation />
    <div>
      <div className="container mt-5">
      <h3 style={{textAlign: 'center'}}>Update Product</h3>
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
                  <label htmlFor="product_id">Product ID:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="product_id"
                    placeholder=""
                    required
                    onChange={e => setProductId(e.target.value)}
                  />
                </div><br/>
                
                <div className="form-group">
                  <label htmlFor="product_name">Product Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product_name"
                    placeholder=""
                    required
                    onChange={e => setProductName(e.target.value)}
                  />
                </div><br/>
                <div className="form-group ">
                  <label htmlFor="qty">Product Quantity:</label>&nbsp;
                  <input
                    type="number"
                    className="form-control"
                    name="qty"
                    placeholder=""
                    required
                    onChange={e => setProductQuantity(e.target.value)}
                  />
                </div><br/>

                <div className="form-group ">
                  <label htmlFor="price">Product Price:</label>
                  <input
                  type="number" 
                  id="price" 
                  name="price" 
                  step="0.01" 
                  required
                  className="form-control"
                  onChange={e => setProductPrice(e.target.value)}
                  />
                </div><br/>

                <div className="form-group">
                  <label htmlFor="bed">Product Category:</label>
                  <select id="category" name="category" required className="form-control" onChange={e => setProductCategory(e.target.value)}>
                   
                    <option className="form-control">Select Category </option>
                              {
                              categories?.map(c => (
                                <>
                                
                                 <option value={c._id} key={c._id} >
                     
                                    {c.categoryName}
                                 </option>
                                </>
                              ))
                             }
                  </select>
                </div><br/>

                <div className="form-group"> 
                  <label htmlFor="price">Upload Product Image:</label> <br />
                  <input 
                  type="file" 
                  id="product_image" 
                  name="product_image" 
                  required 
                  onChange={handleImage}
                  />
                </div>

                <button
                  type="submit"
                  className="btn  btn-warning button w-100"
                  name="submit"
                  value="Add New Product"
                  onClick={submitForm}
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
  </div>
  )
}

export default UpdateProducts
