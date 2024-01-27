import { Link } from 'react-router-dom';

import { LOGO_URL } from '../utils/constants';

function Header() {
  return (
    <div className="header flex">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
