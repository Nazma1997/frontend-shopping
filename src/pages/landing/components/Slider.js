import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './carousel.css'
import '../landing.css'
import '../../admin/style.css'

const slides = [
  {
    backgroundImage: 'url("https://i.ibb.co/9V389t9/slider-bg.jpg")',
    text: <div className="detail-box">
      <h1>
        <span>
          Spring Sale 50%
        </span>

        On Everything
      </h1>
      <p>
        Spring has sprung and so have our deals! <br /> Don't miss out on  our amazing Spring Sale where <br />you can get huge discounts on our entire collection.
      </p>
      <div className="btn-box">
        <button type='button' className='slide-button'>
          Shop Now
        </button>
      </div>
    </div>,
  },
  {
    backgroundImage: 'url("https://i.ibb.co/KFCzWcT/arrival-bg.png")',
    text: <div className="detail-box">
      <h1>
        <span>
          Summer Begins
        </span>

        Get Ready
      </h1>
      <p>
        Get ready to soak up the sun and savings <br />with our Summer Sale! From stylish swimwear to <br />breezy summer dresses, we have everything you need <br />to make a splash this season.
      </p>
      <div className="btn-box">
        <button type='button' className='slide-button'>
          Shop Now
        </button>
      </div>
    </div>,
  },
  {
    backgroundImage: 'url("https://i.ibb.co/dJXvN46/pexels-andrea-piacquadio-972995.jpg")',
    text: <div className="detail-box">
      <h1>
        <span>
          Clearance 20%
        </span>

        Selected Items
      </h1>
      <p>
        We're excited to announce our Clearance Sale, <br />where you can save big on all of our remaining stock.<br /> From fashion to home goods, we've got something for <br /> everyone at unbeatable prices.Don't wait, because once these items <br />are gone, they're gone for good.
      </p>
      <div className="">
        <button type='button' className='slide-button'>
          Shop Now
        </button>
      </div>
    </div>,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel__slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          <div className="carousel__text">{slide.text}</div>
        </div>
      ))}
      <button className="carousel__button carousel__button--prev" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className="carousel__button carousel__button--next" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
