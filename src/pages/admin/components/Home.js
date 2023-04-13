import Navigation from "./Navigation";
import '../style.css'
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="innerbanner" style={{textAlign: 'center'}}>
        <img src="https://www.cs.co.nz/media/wysiwyg/h/o/hollister-2020-feature-banner-fragrance-1440x400.jpg" className="img-fluid" alt="" />
      </div>
      <div className="container mt-5">
        <h3 style={{textAlign: 'center'}}>Welcome to Hollister's Admin Dashboard!</h3>
        <p style={{textAlign: 'justify'}}>Welcome to the Hollister Clothing admin dashboard! This powerful tool is designed to give you an in-depth overview of your Hollister Clothing store's performance and help you make informed decisions to drive your business forward. With an intuitive interface and comprehensive data analysis, our admin dashboard provides you with real-time insights into key metrics such as sales, inventory levels, customer engagement, and more. Keep track of your store's performance, monitor trends, and identify areas for improvement with our advanced reporting and analytics features. Easily manage product listings, pricing, promotions, and inventory levels to optimize your store's operations. <br/><br/>Stay on top of your customer data, including orders, returns, and customer feedback, to better understand your audience and tailor your offerings to their preferences. Our admin dashboard empowers you with the information and tools you need to make data-driven decisions and take your Hollister Clothing store to new heights of success. Welcome to a world of powerful retail management at your fingertips! So, whether you're a seasoned retail professional or just starting out. <br/><br/>Our admin dashboard is your go-to solution for managing your Hollister Clothing store with ease and precision. Sign in now and unlock the full potential of your business!<br/><br/></p>
      </div>
    </div>
  );
};

export default Home;