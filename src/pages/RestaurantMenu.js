import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

function RestaurantMenu() {
  const { id } = useParams();
  const restaurantDetails = useRestaurantMenu(id);

  const { name, cuisines, areaName } = restaurantDetails[0]?.card?.card?.info;
  const menuList =
    restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  if (restaurantDetails?.length === 0) {
    return <h1 className="padding-container">Loading...</h1>;
  }

  return (
    <div className="mx-56 my-4">
      <div className="details">
        <h1 className="text-2xl font-semibold mb-1">{name}</h1>
        <div className="mb-4">
          <div className="text-sm text-neutral-500">{cuisines.join(', ')}</div>
          <div className="text-sm text-neutral-500">{areaName}</div>
        </div>
        <div className="border-b" />

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
