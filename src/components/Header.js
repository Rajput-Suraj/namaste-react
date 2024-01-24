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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
