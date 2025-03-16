import React from 'react';
import { Link } from 'react-router-dom';  // React Router for navigation

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src="G-4-removebg-preview.png" width="113px" height="auto" alt="Logo" />
            </div>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  <i className="fa-solid fa-house"></i> HOME
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link">
                  <i className="fa-brands fa-product-hunt"></i> PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <i className="fa-solid fa-circle-info"></i> ABOUT
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  <i className="fa-solid fa-phone"></i> CONTACT
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">
                  <i className="fa-solid fa-cart-shopping"></i> CART
                </Link>
              </li>
              <li>
                <Link to="/login" className="login-page">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
