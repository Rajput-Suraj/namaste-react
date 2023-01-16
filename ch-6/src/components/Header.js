import React, { useState } from 'react';
import { Button } from '@mui/material';

import '../App.css';
import Logo from '../assets/images/naruto.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <a href="/">
          <div className="flex">
            <img src={Logo} alt="Logo" className="logo" />
            <h3 className="logo-text">Ichiraku Ramen</h3>
          </div>
        </a>
        <div className="flex">
          <ul className="nav-items flex">
            <li className="nav-item p-10">Home</li>
            <li className="nav-item p-10">About</li>
            <li className="nav-item p-10">Contact</li>
            <li className="nav-item p-10">Cart</li>
          </ul>
          <div>
            {isLoggedIn ? (
              <Button
                className="secondary-btn"
                variant="contained"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="secondary-btn"
                variant="contained"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
