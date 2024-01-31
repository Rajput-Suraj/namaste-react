import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {
  const { id } = useParams();
  return (
    <div className="padding-container">
      <h1>Menu</h1>
    </div>
  );
}

export default RestaurantMenu;
