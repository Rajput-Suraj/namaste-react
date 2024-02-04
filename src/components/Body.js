import { useState } from 'react';
import { Link } from 'react-router-dom';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import useRestaurantsList from '../hooks/useRestaurantsList';

function Body() {
  const [searchTerm, setSearchTerm] = useState('');
  const { resList, filterList } = useRestaurantsList();

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
