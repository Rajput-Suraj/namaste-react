import React from 'react';
import { useParams } from 'react-router-dom';

import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

function RestaurantMenu() {
  const { id } = useParams();
  const { loading, restaurantDetails } = useRestaurantMenu(id);

  let menuList = {};
  let restaurantData = {};

  if (restaurantDetails.length > 0) {
    menuList = restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    restaurantData = restaurantDetails[0]?.card?.card?.info;
  }

  console.log(restaurantDetails);

  if (loading) {
    return <h1 className="padding-container">Loading...</h1>;
  }

  return (
    <div className="mx-56 my-4">
      <div className="details">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold mb-1 text-neutral-700">{restaurantData?.name}</h1>
            <div className="mb-4">
              <div className="text-sm text-neutral-500">{restaurantData?.cuisines?.join(', ')}</div>
              <div className="text-sm text-neutral-500">{restaurantData?.areaName}</div>
            </div>
          </div>
          <div className="rating-box flex flex-col border-solid border-[1px] rounded-md p-3 items-center bg-white">
            <div className="mb-1">
              <span className="text-green-500 font-bold">⭐ {restaurantData?.avgRatingString}</span>
            </div>
            <div>
              <div className="border-b" />
              <span className="text-neutral-500 font-semibold">
                {restaurantData?.totalRatingsString}
              </span>
            </div>
          </div>
        </div>
        <div className="border-b" />
        <div className="my-3 flex items-center">
          <span className="font-bold text-neutral-600 text-md">
            {restaurantData?.costForTwoMessage}
          </span>
        </div>
        <div className="border-t-[1px] border-solid" />
        <div className="my-4">
          <h2 className="font-bold text-neutral-900 text-xl mb-3">
            {menuList?.title} ({menuList?.itemCards?.length})
          </h2>
          {menuList?.itemCards?.map((menu) => {
            const { id, name, price, imageId } = menu?.card?.info;

            return (
              <div
                key={id}
                className="flex items-start justify-between my-16 border-solid border-b-[1px] pb-[30px]"
              >
                <div>
                  <div className="text-lg text-neutral-600 font-medium">{name}</div>
                  <div className="text-neutral-600 font-normal mb-16">₹ {price / 100}</div>
                </div>
                <div>
                  <img
                    className="w-[120px] h-[120px] rounded-md bg-white"
                    src={CDN_URL + imageId}
                    alt="img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
