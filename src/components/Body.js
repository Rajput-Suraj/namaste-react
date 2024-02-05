import { useState } from 'react';
import { Link } from 'react-router-dom';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import useRestaurantsList from '../hooks/useRestaurantsList';

function Body() {
  const [searchTerm, setSearchTerm] = useState('');
  const { resList, filterList, setFilterList } = useRestaurantsList();

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
    <div className="mx-[50px]">
      <div className="flex my-4 items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mx-3 border border-solid border-gray-200 rounded-sm p-1 w-[350px] h-9 text-base"
          placeholder="Search for restaurant and food"
        />
        <button
          className="bg-orange-500 p-1 rounded-sm text-slate-100 h-9 w-14 text-base leading-[0.3rem]"
          onClick={handleSearch}
        >
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
        <div className="flex flex-wrap justify-start mx-[33px]">
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
