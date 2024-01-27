import { CDN_URL } from '../utils/constants';

function RestaurantCard({ restaurant }) {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } = restaurant?.info;
  return (
    <div className="res-card">
      <div className="res-image">
        <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} Rating</h4>
        <h4>{sla?.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
