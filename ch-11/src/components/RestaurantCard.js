import React from 'react';
import { Link } from 'react-router-dom';

import { IMG_CDN_URL } from '../Contants';

const RestaurantCard = (restaurant) => {
  const { name, cloudinaryImageId, cuisines, avgRating, id } = restaurant.data;
  return (
    <>
      <div className="bg-gray-100 mx-8 mb-8 shadow-xl w-80 rounded-2xl h-[390px]">
        <Link to={`/restaurant-details/${id}`}>
          <img
            alt="green iguana"
            src={`${IMG_CDN_URL}${cloudinaryImageId}`}
            className="w-[100%] object-cover rounded-tl-2xl rounded-tr-2xl"
          />
        </Link>
        <div className="p-3">
          <p className="font-medium text-xl">{name}</p>
          <p className="break-words my-2 text-slate-400">{cuisines.join(', ')}</p>
        </div>
        <div className="p-3 flex space-x-2 mb-1">
          <button className="bg-[tomato] hover:bg-[#d39d94] flex-1 rounded-sm text-white h-10">
            Add to Cart
          </button>
          <button className="bg-[tomato] hover:bg-[#d39d94] flex-1 rounded-sm text-white h-10">
            <Link to={`/restaurant-details/${id}`}>Learn More</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
