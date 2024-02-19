import React from 'react';

import { CDN_URL } from '../utils/constants';

function Category({ data }) {
  return (
    <>
      <div className="my-4">
        <h2 className="font-bold text-neutral-900 text-xl mb-3">
          {data?.title} ({data?.itemCards?.length})
        </h2>
        {data?.itemCards?.map((menu) => {
          const { id, name, price, imageId, description } = menu?.card?.info;

          return (
            <div
              key={id}
              className="flex items-start justify-between my-16 border-solid border-b-[1px] pb-[30px]"
            >
              <div className="info w-[70%]">
                <div className="text-lg text-neutral-600 font-medium">{name}</div>
                <div className="text-neutral-600 font-normal mb-3">₹ {price / 100}</div>
                <div className="text-neutral-400 text-sm">{description}</div>
              </div>
              <div className="image-container relative">
                <img
                  className="w-[120px] h-[120px] rounded-md bg-neutral-300"
                  src={CDN_URL + imageId}
                  alt="img"
                />
                <button className="bg-white text-sm text-green-500 font-semibold p-2 rounded-md absolute -bottom-3 right-[10px] w-[100px]">
                  ADD
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;
