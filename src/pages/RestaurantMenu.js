import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

function RestaurantMenu() {
  const { id } = useParams();
  const { loading, restaurantDetails } = useRestaurantMenu(id);
  let restaurantData = {};

  if (restaurantDetails.length > 0) {
    // const menuList = restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
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
          <div className="rating-box flex flex-col border-solid border-[1px] rounded-md p-3 items-center">
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
        <div className="mt-3 flex items-center">
          <span className="font-bold text-neutral-600">{restaurantData?.costForTwoMessage}</span>
        </div>
        {/* <ul>
          {menuList?.map((menu) => {
            return (
              <li key={menu?.card?.info?.id}>
                {menu?.card?.info?.name} - Rs.{menu?.card?.info?.price / 100}
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default RestaurantMenu;
