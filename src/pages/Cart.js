import React from 'react';
import { useSelector } from 'react-redux';

import VegIcon from '../assets/images/veg.png';
import NonVegIcon from '../assets/images/non-veg.png';

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="flex justify-between">
      <div className="m-3 p-3 bg-slate-200 w-3/4"></div>
      <div className="m-3 p-3 bg-slate-200 w-2/6">
        {cart?.map((item) => (
          <div key={item?.id} className="text-sm flex justify-between items-center pb-2">
            <div className="flex items-center justify-start gap-2">
              <img src={item?.isVeg ? VegIcon : NonVegIcon} className="h-5" alt="Icon" />
              <span className="text-ellipsis whitespace-wrap overflow-hidden">{item?.name}</span>
              <div>
                x <span className="font-medium">{item?.quantity}</span>
              </div>
            </div>
            <span>
              ₹ {item?.price ? item?.price / 100 : (item?.defaultPrice / 100) * item?.quantity}
            </span>
          </div>
        ))}
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
      </div>
    </div>
  );
}

export default Cart;
