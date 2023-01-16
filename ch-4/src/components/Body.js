import React from 'react';

import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../assets/data/Data';
import '../App.css';
const Body = () => {
  return (
    <div className="card-container">
      {restaurantList.map((restaurant) => (
        <React.Fragment key={restaurant.id}>
          <RestaurantCard {...restaurant} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Body;
