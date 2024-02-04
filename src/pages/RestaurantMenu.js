import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

function RestaurantMenu() {
  const { id } = useParams();
  const restaurantDetails = useRestaurantMenu(id);

  const menuList =
    restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  if (restaurantDetails?.length === 0) {
    return <h1 className="padding-container">Loading...</h1>;
  }

  return (
    <div className="padding-container">
      <div className="details">
        <h1>{restaurantDetails[0]?.card?.card?.info?.name}</h1>
        <h2>Menu</h2>
        <ul>
          {menuList?.map((menu) => {
            return (
              <li key={menu?.card?.info?.id}>
                {menu?.card?.info?.name} - Rs.{menu?.card?.info?.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
