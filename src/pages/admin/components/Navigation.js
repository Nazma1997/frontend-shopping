import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../style.css'
const Navigation = () => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary position-top">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">Hollister - Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavigation} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={toggleNavigation}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories" onClick={toggleNavigation}>Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews" onClick={toggleNavigation}>Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders" onClick={toggleNavigation}>View Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout" onClick={toggleNavigation}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
   
 
}

export default Navigation
