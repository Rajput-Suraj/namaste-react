import { useEffect, useState } from 'react';

const useRestaurantsList = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(process.env.REACT_APP_BASE_URL);

    const data = await response.json();
    setResList(
      data?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      data?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return { resList, filterList };
};

export default useRestaurantsList;
