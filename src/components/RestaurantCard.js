import { CDN_URL } from '../utils/constants';
import RatingIcon from '../assets/images/star.png';

function RestaurantCard({ restaurant }) {
  const { name, cuisines, avgRating, cloudinaryImageId, sla, areaName } = restaurant?.info;
  return (
    <div className="w-[250px] m-3 rounded-md bg-slate-50">
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
          <div className="flex items-center gap-1 my-1">
            <img src={RatingIcon} alt="Rating" className="w-4 h-4" />
            <span>
              {avgRating} • {sla?.slaString}
            </span>
          </div>
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
