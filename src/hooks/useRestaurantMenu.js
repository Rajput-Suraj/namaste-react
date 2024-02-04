import { useEffect, useState } from 'react';

const useRestaurantMenu = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const response = await fetch(`${process.env.REACT_APP_MENU_URL}${id}`);

    const data = await response.json();
    setRestaurantDetails(data?.data?.cards);
  };

  return restaurantDetails;
};

export default useRestaurantMenu;
