import { useState } from 'react';

import RestaurantCard from './RestaurantCard';
import { restaurantsList } from '../utils/mockData';

function Body() {
  const [searchTerm, setSearchTerm] = useState('');
  const [resList, setResList] = useState(restaurantsList);

  const handleSearch = () => {
    if (searchTerm) {
      const filteredData = resList?.filter((res) => res.info.name.includes(searchTerm));
      setResList(filteredData);
    }
  };

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
