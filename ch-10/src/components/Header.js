import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import Logo from '../assets/images/naruto.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="flex p-3 px-10 bg-[tomato]">
        <a href="/">
          <div className="flex">
            <img src={Logo} alt="Logo" className="logo" />
            <h3 className="logo-text">Ichiraku Ramen</h3>
          </div>
        </a>
        <div className="flex">
          <ul className="nav-items flex">
            <Link to="/">
              <li className="nav-item p-10">Home</li>
            </Link>
            <Link to="/about">
              <li className="nav-item p-10">About</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item p-10">Contact</li>
            </Link>
            <Link to="/insta-mart">
              <li className="nav-item p-10">InstaMart</li>
            </Link>
            <li className="nav-item p-10">Cart</li>
          </ul>
          <div>
            {isLoggedIn ? (
              <button
                className="bg-[#d39d94] hover:bg-red-500 p-2 rounded-md text-white"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-[#d39d94] hover:bg-red-500 p-2 rounded-md text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
