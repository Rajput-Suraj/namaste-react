import { CDN_URL } from '../utils/constants';

function RestaurantCard({ restaurant }) {
  const { name, cuisines, avgRating, cloudinaryImageId, sla, areaName } = restaurant?.info;
  return (
    <div className="w-[250px] m-3 rounded-md bg-white">
      <div className="w-full h-[200px]">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Image"
          className="h-[200px] w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 py-3">
        <h3 className="font-medium text-xl text-neutral-600 text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <h4 className="font-medium text-md text-neutral-600 mx-0">
          ⭐{avgRating} • {sla?.slaString}
        </h4>
        <h4 className="text-md text-ellipsis whitespace-nowrap overflow-hidden text-neutral-500">
          {cuisines.join(', ')}
        </h4>
        <h6 className="text-neutral-500 text-sm text-ellipsis whitespace-nowrap overflow-hidden">
          {areaName}
        </h6>
      </div>
    </div>
  );
}

export default RestaurantCard;
