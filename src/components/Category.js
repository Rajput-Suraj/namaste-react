import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../appData/cart';
import { CDN_URL } from '../utils/constants';
import DownArrow from '../assets/images/down-arrow.png';

function Category({ data, collapse, handleCollapse }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log(`Category`, cart);

  const { title, itemCards } = data;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={handleCollapse}>
          <h2 className="font-bold text-neutral-900 text-xl mb-3">
            {title} ({itemCards?.length})
          </h2>
          <img src={DownArrow} alt="Arrow" className="w-4 font-bold" />
        </div>
        {collapse &&
          itemCards?.map((menu, i) => {
            const { id, name, price, imageId, description, defaultPrice } = menu?.card?.info;

            return (
              <React.Fragment key={id}>
                <div className="flex items-start justify-between my-16 pb-[5px]">
                  <div className="info w-[70%]">
                    <div className="text-lg text-neutral-600 font-medium">{name}</div>
                    <div className="text-neutral-600 font-normal mb-3">
                      ₹ {price ? price / 100 : defaultPrice / 100}
                    </div>
                    <div className="text-neutral-400 text-sm">{description}</div>
                  </div>
                  <div className="image-container relative">
                    <img
                      className="w-[120px] h-[120px] rounded-md bg-neutral-300"
                      src={CDN_URL + imageId}
                      alt="img"
                    />
                    <div className="text-center bg-white text-sm text-green-500 font-semibold p-2 rounded-md absolute -bottom-3 right-[10px] w-[100px]">
                      {cart?.length > 0 && cart[i]?.id === id ? (
                        <div className="flex justify-between items-center">
                          <button className="text-neutral-300">
                            <FiMinus />
                          </button>
                          <span>{cart?.map((item) => item?.id === id && item?.quantity)}</span>
                          <button>
                            <FiPlus />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => handleAddToCart(menu?.card?.info)}>ADD</button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-solid border-b-[1.5px]" />
              </React.Fragment>
            );
          })}
      </div>
      <div className="w-full h-3 bg-neutral-100" />
    </>
  );
}

export default Category;
