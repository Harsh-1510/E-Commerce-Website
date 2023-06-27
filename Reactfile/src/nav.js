import React from "react";
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className="navbar">
      <div className="nav">
        <Link to="/Home">
          <img src="./img/brand-logo.png" className="brand-logo" alt="" />
        </Link>
        <div className="nav-items">
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="search brand, product"
            />
            <button className="search-btn">search</button>
          </div>
          <Link to ="/user">
            <img src="./img/user.png" alt="" />
          </Link>
          <Link to ="/cart">
            <img src="./img/cart.png" alt="" />
          </Link>
        </div>
      </div>
      <ul className="links-container">
        <li className="links-item">
          <Link to="/Home" className="link">
            Home
          </Link>
        </li>
        <li className="links-item">
          <Link to="/Women" className="link">
            Women
          </Link>
        </li>
        <li className="links-item">
          <Link to="/Men" className="link">
            Men
          </Link>
        </li>
        <li className="links-item">
          <Link to="/Kids" className="link">
            Kids
          </Link>
        </li>
        <li className="links-item">
          <Link to="/Accessories" className="link">
            Accessories
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Nav;
