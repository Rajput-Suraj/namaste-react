import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {
  const { id } = useParams();

  useEffect(() => {
    async function getRestaurantMenu() {
      const response = await fetch(`${process.env.REACT_APP_MENU_URL}${id}`);

      const data = await response.json();
      console.log(data?.data?.cards);
    }

    getRestaurantMenu();
  }, []);

  return (
    <div className="padding-container">
      <h1>Menu</h1>
    </div>
  );
}

export default RestaurantMenu;
