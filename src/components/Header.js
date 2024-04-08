import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CiMenuBurger } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';

import LOGO from '../assets/images/logo.png';
import VegIcon from '../assets/images/veg.png';
import NonVegIcon from '../assets/images/non-veg.png';

function Header() {
  const [openCartModal, setOpenCartModal] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const cartItems = cart?.reduce((acc, item) => acc + item?.quantity, 0);
  return (
    <div className="flex items-center justify-between h-[80px] shadow-lg relative">
      <div className="m-2 ml-10">
        <Link to="/">
          <img className="w-full h-[60px]" src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className="max-lg:hidden">
        <ul className="flex items-center p-4">
          <li className="px-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
              Home
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
              About
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
          <li className="px-4 cursor-pointer" onClick={() => setOpenCartModal(!openCartModal)}>
            <div className="relative">
              <FiShoppingCart />
              <span className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full h-5 w-5 text-center leading-normal text-sm">
                {cartItems}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="max-lg:block max-lg:mr-5 hidden cursor-pointer">
        <div className="relative">
          <CiMenuBurger />
          <span className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full h-5 w-5 text-center leading-normal text-sm">
            {cartItems}
          </span>
        </div>
      </div>
      {openCartModal && (
        <div className="absolute right-5 top-12 bg-white shadow-md shadow-slate-500 p-6 m-3 rounded-sm w-96">
          {cart?.map((item) => (
            <div key={item?.id} className="text-sm flex justify-between items-center pb-2">
              <div className="flex items-center justify-start gap-2">
                <img src={item?.isVeg ? VegIcon : NonVegIcon} className="h-5" alt="Icon" />
                <span className="text-ellipsis whitespace-wrap overflow-hidden">
                  {item?.name?.length > 30 ? `${item?.name.slice(0, 14)}...` : item?.name}
                </span>
                <div>
                  x <span className="font-medium">{item?.quantity}</span>
                </div>
              </div>
              <span>
                ₹ {item?.price ? item?.price / 100 : (item?.defaultPrice / 100) * item?.quantity}
              </span>
            </div>
          ))}
          <p className="text-center text-neutral-300">
            ------------------------------------------------
          </p>
          <div className="text-sm flex justify-between items-center">
            <div>
              <div className="font-semibold">Sub total</div>
              <div className="font-medium text-xs text-neutral-500">Extra charges may apply</div>
            </div>
            <span className="font-semibold">
              ₹{' '}
              {Number(
                cart?.reduce(
                  (acc, item) =>
                    acc +
                    (item?.price ? item?.price / 100 : item?.defaultPrice / 100) * item?.quantity,
                  0
                )
              ).toFixed(2)}
            </span>
          </div>
          <div className="w-full text-center mt-6">
            <Link to="/cart">
              <button
                className={`font-semibold text-white w-full p-3 ${
                  cart?.length > 0 ? 'bg-orange-500' : 'bg-slate-500'
                }`}
              >
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
