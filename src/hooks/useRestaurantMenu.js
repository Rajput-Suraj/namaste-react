import { useEffect, useState } from 'react';

const useRestaurantMenu = (id) => {
  const [loading, setLoading] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_MENU_URL}${id}`);

    const data = await response.json();
    setLoading(false);
    setRestaurantDetails(data?.data?.cards);
  };

  return { loading, restaurantDetails };
};

export default useRestaurantMenu;
