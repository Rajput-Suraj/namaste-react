import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import Logo from '../assets/images/naruto.png';
import UserContext from '../Utils/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);
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
              <div className="flex">
                <p className="font-medium text-md mx-2 text-white">{user.name}</p>
                <button
                  className="bg-[#d39d94] hover:bg-red-500 p-2 rounded-md text-white"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </button>
              </div>
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
