import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import { useGetProductQuery } from '../../../redux/sliceApi/productSliceApi';
// import { AiOutlineLeft,  AiOutlineRight } from "react-icons/ai";

// function SampleNextArrow( {onClick} ) {
  
//   return (
//    <div className="arrows arrow-right cursor-pointer my-auto" onClick={onClick}>
//     <AiOutlineRight className="mt-2 ml-auto mr-auto"></AiOutlineRight>

//    </div>
//   );
// }

// function SamplePrevArrow({onClick}) {
 
//   return (
//     <div className="arrows arrow-left cursor-pointer my-auto" onClick={onClick}>
//       <AiOutlineLeft className="mt-2 ml-auto mr-auto"></AiOutlineLeft>

//     </div>
//   );
// }



const Catalog = () => {

    const { data: products = [] } = useGetProductQuery();

    // console.log('products', products)

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //   };

    return (


        <div>
            <h1 className='text-center m-5 font-weight-bold'><strong>Holister</strong> <strong className='text-danger'>Catelog</strong></h1>
            <div className="container">
                <div className="row">
                    {
                        products?.map(product => (
                                 
                            // <Slider {...settings}>
                                <div className="col-md-3 m-2 p-3 ">
                                    <div className="card mx-3" style={{ width: '18rem' }}>
                                        <img src={product?.productImage} className="card-img-top" alt="the" height="{200}" width="{300}" />
                                        <div className="card-body mx-5">
                                            <h3>{product?.productName}</h3>
                                            <p>Price: $ {product?.productPrice}</p>
                                            <button type="button" className="rounded bg-danger border-0 px-2 text-white">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
// </Slider>

                        ))
                    }
                </div>

            {/* <button type="button" className="rounded bg-danger border-0 px-5 py-3 text-white">View All Products</button> */}

         
        </div>
</div >
  )
}

export default Catalog
