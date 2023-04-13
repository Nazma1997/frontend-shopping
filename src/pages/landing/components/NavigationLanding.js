import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../landing.css';
import { BsFillCartDashFill} from "react-icons/bs";
const NavigationLanding = () => {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate()
  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  const logOut = () => {
    localStorage.clear();
    navigate('/admin-login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  position-top">
      <div className="container-lg">
        <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/tmFm2R6/logo.png" width="200" height="70"  alt="#" /></Link>
        <button className="navbar-toggler bg-gray" type="button" onClick={toggleNavigation} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-5">
            
            <li class="nav-item active">
                <Link class="nav-link mx-3" to='/' onClick={toggleNavigation}><h4>Home <span class="sr-only">(current)</span></h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/products" onClick={toggleNavigation}><h4>Products</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/about-us" onClick={toggleNavigation}><h4>About Us</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/gallery" onClick={toggleNavigation}><h4>Gallery</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/contract" onClick={toggleNavigation}><h4>Contract</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/login-register" onClick={toggleNavigation}><h4>Login/Register</h4></Link>
            </li>
            <li class="nav-item">
                           <Link class="nav-link" to='/order'>
                              <h4><BsFillCartDashFill /><span id='cart'>5</span></h4>
                           </Link>
                        </li>
            <li className="nav-item">
              <Link className="nav-link mx-3"  onClick={logOut} ><h4>Logout</h4></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
   
 
}

export default NavigationLanding
