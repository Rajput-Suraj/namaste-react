import React, { useState } from 'react';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

import { filterList } from '../Utils/helper';
import { useRestaurantListing } from '../hooks/useRestaurantListing';

import '../App.css';

const Body = () => {
  const [open] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const { error, allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantListing();
  return (
    <>
      <div className="w-[100%] mb-8">
        <div
          className="p-3 bg-red-50"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            value={searchTerm}
            placeholder="Search..."
            className="h-10 mr-2 rounded-md outline-none p-1 w-100"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="h-10 p-2 bg-[tomato] hover:bg-[#d39d94] text-white rounded-md"
            onClick={() => {
              const data = filterList(searchTerm, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap flex-row">
        {error ? (
          <>{error}</>
        ) : filteredRestaurants.length === 0 ? (
          Array(10)
            .fill('')
            .map((item, i) => <Shimmer key={i} />)
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant} key={restaurant.data.id} />
          ))
        )}
      </div>
      {/* {error && <Snackbar open={open} autoHideDuration={5000} message={error} />} */}
    </>
  );
};

export default Body;
