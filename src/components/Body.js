import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

function Body() {
  const [resList, setResList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
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
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      const filteredData = resList?.filter((res) =>
        res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterList(filteredData);
    }
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
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
      {filterList.length === 0 ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>No result found</h1>
          </div>
        </>
      ) : (
        <div className="grid-container gap-30 mtb-20">
          {filterList?.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={`/restaurant-menu/${restaurant?.info?.id}`}>
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
