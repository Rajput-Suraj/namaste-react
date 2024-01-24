import RestaurantCard from './RestaurantCard';

import { restaurantsList } from '../utils/mockData';

function Body() {
  return (
    <div className="container">
      <div className="search">
        <input type="text" className="search-input" placeholder="Search for restaurant and food" />
      </div>
      <div className="grid-container gap-30 mtb-20">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
