import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import Category from '../components/Category';
import RatingIcon from '../assets/images/star.png';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

function RestaurantMenu() {
  const { id } = useParams();
  const { loading, restaurantDetails } = useRestaurantMenu(id);

  let menuList = {};
  let restaurantData = {};

  if (restaurantDetails.length > 0) {
    menuList = restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    restaurantData = restaurantDetails[0]?.card?.card?.info;
  }

  const CARDS = restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredCards = CARDS?.filter(
    (card) =>
      card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-56 my-4">
      <div className="details">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold mb-1 text-neutral-700">{restaurantData?.name}</h1>
            <div className="mb-4">
              <div className="text-sm text-neutral-500">{restaurantData?.cuisines?.join(', ')}</div>
              <div className="text-sm text-neutral-500">{restaurantData?.areaName}</div>
            </div>
          </div>
          <div className="rating-box flex flex-col border-solid border-[1px] rounded-md p-3 items-center bg-white">
            <div className="mb-1">
              <span className="text-green-500 font-bold">
                <div className="flex items-center gap-1 my-1">
                  <img src={RatingIcon} alt="Rating" className="w-4 h-4" />
                  <span>{restaurantData?.avgRatingString}</span>
                </div>
              </span>
            </div>
            <div>
              <div className="border-b" />
              <span className="text-neutral-500 font-semibold">
                {restaurantData?.totalRatingsString}
              </span>
            </div>
          </div>
        </div>
        <div className="border-b" />
        <div className="my-3 flex items-center">
          <span className="font-bold text-neutral-600 text-md">
            {restaurantData?.costForTwoMessage}
          </span>
        </div>
        <div className="border-t-[1px] border-solid" />
        {filteredCards?.map((card) => {
          return <Category key={card?.card?.title} data={card?.card?.card} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
