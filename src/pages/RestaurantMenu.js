import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    async function getRestaurantMenu() {
      const response = await fetch(`${process.env.REACT_APP_MENU_URL}${id}`);

      const data = await response.json();
      setRestaurantDetails(data?.data?.cards);
    }

    getRestaurantMenu();
  }, []);

  const menuList =
    restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

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
