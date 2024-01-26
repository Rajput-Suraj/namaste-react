import { useState, useEffect } from 'react';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

function Body() {
  const [resList, setResList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://www.swiggy.com/api/seo/getListing?lat=18.621055599465002&lng=73.8306423049214'
      );

      const data = await response.json();
      setResList(
        data?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      const filteredData = resList?.filter((res) => res.info.name.includes(searchTerm));
      setResList(filteredData);
    }
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          placeholder="Search for restaurant and food"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid-container gap-30 mtb-20">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
