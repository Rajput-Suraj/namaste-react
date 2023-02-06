import { useState, useEffect } from 'react';

import { RESTAURANT_MENU_API } from '../Contants';

export const useRestaurantMenu = (id) => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      let data = await fetch(RESTAURANT_MENU_API + id);
      let fetchJson = await data.json();
      setRestaurantDetail(fetchJson.data);
    } catch (error) {
      console.log('There was an error while fetching restaurant menu', error);
    }
  }

  return restaurantDetail;
};
