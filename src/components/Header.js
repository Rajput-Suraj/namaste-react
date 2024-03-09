import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { CiMenuBurger } from 'react-icons/ci';

import LOGO from '../assets/images/logo.png';

function Header() {
  return (
    <div className="flex items-center justify-between h-[80px] shadow-lg">
      <div className="m-2 ml-10">
        <a href="/">
          <img className="w-full h-[60px]" src={LOGO} alt="Logo" />
        </a>
      </div>
      <div className="max-lg:hidden">
        <ul className="flex items-center p-4">
          <li className="px-4">
            <div className="flex items-center justify-center gap-2">
              <FiSearch />
              <span>Search</span>
            </div>
          </li>
          <li className="px-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
              Home
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
              About Us
            </NavLink>
          </li>
          <li className="px-4 sm:block hidden">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
      <div className="max-lg:block max-lg:mr-5 hidden">
        <CiMenuBurger />
      </div>
    </div>
  );
}

export default Header;
