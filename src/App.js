import Main from "./pages/admin/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from "./pages/admin/pages/products/AllProducts";
import AddProducts from "./pages/admin/pages/products/AddProducts";
import UpdateProducts from "./pages/admin/pages/products/UpdateProducts";
import AllCategories from "./pages/admin/pages/categories/AllCategories";
import AddCategory from "./pages/admin/pages/categories/AddCategories";
import AllReview from "./pages/admin/pages/reviews/AllReview";
import AddReview from "./pages/admin/pages/reviews/AddReview";
import UpdateReview from "./pages/admin/pages/reviews/UpdateReview";
import AllOrders from "./pages/admin/pages/AllOrders";
import AdminLogin from "./pages/admin/components/Login";
import UpdateCategory from "./pages/admin/pages/categories/UpdateCategories";
import AllReviews from "./pages/admin/pages/reviews/AllReview";




function App() {

  const retrievedUserName = localStorage.getItem('userName');
const retrievedPassword = localStorage.getItem('password');

  return (
  <div>
      <BrowserRouter>
     <Routes >
        
   <>
   {
      retrievedUserName  && retrievedPassword && (
        <>
          <Route path='/dashboard' element={<Main />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/add-product' element={<AddProducts />} />
            <Route path='/edit-product/:id' element={<UpdateProducts />}  />
            <Route path='/categories' element={<AllCategories />}  />
            <Route path='/edit-category/:id' element={<UpdateCategory />}  />
            <Route path='/add-category' element={<AddCategory />}  />
            <Route path='/reviews' element={<AllReviews/>}  />
            <Route path='/add-review' element={<AddReview />}  />
            <Route path='/edit-review/:id' element={<UpdateReview />}  />
            <Route path='/orders' element={<AllOrders />}  />
          
        </>
      )
    }
          
      <Route path='/admin-login' element={<AdminLogin />}  />
   </>
     </Routes >
  </BrowserRouter>


  </div>
  );

  




}

export default App;
