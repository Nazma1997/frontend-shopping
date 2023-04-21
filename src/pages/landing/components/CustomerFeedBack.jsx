import React from 'react'

const CustomerFeedBack = () => {
  return (
    <div>
       <section class="client_section layout_padding">
         <div class="container">
            <div class="heading_container heading_center">
               <h2>
                  Customer's Feedbacks
               </h2>
            </div>
            <div id="carouselExample3Controls" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="box col-lg-10 mx-auto">
                        <div class="img_container">
                           <div class="img-box">
                              <div class="img_box-inner">
                                 <img src="https://i.pinimg.com/564x/0c/ae/09/0cae0917c0f79e6aeecb7bd7e50c08ab.jpg" alt=""/>
                              </div>
                           </div>
                        </div>
                        <div class="detail-box">
                           <h5>
                              Jesmin Jessy
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              I recently shopped for clothes with this store and I must say, I was thoroughly impressed with my experience. The website was user-friendly and easy to navigate, making my shopping experience a breeze. I highly recommend this store for their exceptional collection, great prices, and fantastic service.   </p>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="box col-lg-10 mx-auto">
                        <div class="img_container">
                           <div class="img-box">
                              <div class="img_box-inner">
                                 <img src="https://i.pinimg.com/736x/4f/ed/bd/4fedbd646fd874cb157dfc0cf13acd37.jpg" alt=""/>
                              </div>
                           </div>
                        </div>
                        <div class="detail-box">
                           <h5>
                              Samantha Travis
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              I recently purchased some clothes from this store and I am beyond satisfied with my experience. The quality of the clothing is top-notch and the styles are on-trend and unique. The website was easy to navigate, and the ordering process was quick and hassle-free. I appreciated the detailed sizing information provided, which made it easy to find the perfect fit. 
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="box col-lg-10 mx-auto">
                        <div class="img_container">
                           <div class="img-box">
                              <div class="img_box-inner">
                                 <img src="https://img.freepik.com/free-photo/charming-girl-stands-street_8353-5373.jpg" alt=""/>
                              </div>
                           </div>
                        </div>
                        <div class="detail-box">
                           <h5>
                              Sophia Lauren
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              I appreciated the detailed sizing information provided, which made it easy to find the perfect fit. Shipping was fast, and the clothes arrived in perfect condition. Overall, I am extremely happy with my purchase and will definitely be shopping here again!
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel_btn_box">
                  <a class="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
                  <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                  <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  <span class="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default CustomerFeedBack
