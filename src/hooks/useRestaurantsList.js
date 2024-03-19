import { useEffect, useState } from 'react';

const useRestaurantsList = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(process.env.REACT_APP_BASE_URL);

    if (response?.ok) {
      const data = await response.json();
      setResList(
        data?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilterList(
        data?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } else {
      setErrorStatus(response?.status);
    }
  }

  return { resList, filterList, setFilterList, errorStatus };
};

export default useRestaurantsList;
