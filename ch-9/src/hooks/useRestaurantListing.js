import { useState, useEffect } from 'react';

import { RESTAURANT_API } from '../Contants';

export const useRestaurantListing = () => {
  const [error, setError] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    try {
      let response = await fetch(RESTAURANT_API);
      let data = await response.json();
      setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      setError('Failed to load restaurants');
    }
  }

  return { error, allRestaurants, filteredRestaurants, setFilteredRestaurants };
};
