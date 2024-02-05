import { NavLink } from 'react-router-dom';

import { LOGO_URL } from '../utils/constants';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <a href="/">
          <img className="w-48" src={LOGO_URL} alt="Logo" />
        </a>
      </div>
      <>
        <ul className="flex items-center p-4">
          <li className="px-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'underline decoration-orange-500' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'underline decoration-orange-500' : '')}
            >
              About Us
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'underline decoration-orange-500' : '')}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </>
    </div>
  );
}

export default Header;
