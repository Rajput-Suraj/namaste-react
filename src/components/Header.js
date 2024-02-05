import { Link } from 'react-router-dom';

import { LOGO_URL } from '../utils/constants';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <a href="/">
          <img className="w-40" src={LOGO_URL} alt="Logo" />
        </a>
      </div>
      <>
        <ul className="flex items-center p-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </>
    </div>
  );
}

export default Header;
