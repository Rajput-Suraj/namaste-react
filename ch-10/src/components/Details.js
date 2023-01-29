import React from 'react';
import { useParams } from 'react-router-dom';

import { IMG_CDN_URL } from '../Contants';
import { useRestaurantMenu } from '../hooks/useRestaurantMenu';
import Shimmer from './Shimmer';

const Details = () => {
  const { id } = useParams();

  const restaurantDetail = useRestaurantMenu(id);

  if (!restaurantDetail) {
    return <Shimmer />;
  }
  return (
    <div className="p-5">
      <p className="text-2xl font-medium">{restaurantDetail?.name}</p>
      <>
        <img
          className="shadow-2xl my-5 w-full h-[550px]"
          src={`${IMG_CDN_URL}${restaurantDetail.cloudinaryImageId}`}
          alt={restaurantDetail?.name}
        />
      </>
      <div>
        <p className="text-xl font-medium mb-8">Menu List</p>
        <ul className="flex flex-wrap">
          {Object.values(restaurantDetail?.menu?.items)
            .filter((item) => item?.cloudinaryImageId != '')
            .map((item) => {
              return (
                <div key={item.id} className="bg-gray-100 mx-8 mb-8 shadow-xl w-80 rounded-2xl">
                  <img
                    alt="green iguana"
                    src={`${IMG_CDN_URL}${item?.cloudinaryImageId}`}
                    className="w-[100%] object-cover rounded-tl-2xl rounded-tr-2xl"
                  />
                  <div className="p-3">
                    <p className="font-medium text-xl">{item?.name}</p>
                    <p className="break-words my-2 text-slate-400">{item?.category}</p>
                  </div>
                  <div className="p-3 flex space-x-2 mb-1">
                    <button className="bg-[tomato] hover:bg-[#d39d94] flex-1 rounded-sm text-white h-10">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Details;
