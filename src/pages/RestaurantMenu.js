import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import Category from '../components/Category';
import RatingIcon from '../assets/images/star.png';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

function RestaurantMenu() {
  const { id } = useParams();
  const [collapse, setCollapse] = useState(0);
  const { loading, restaurantDetails } = useRestaurantMenu(id);

  let restaurantData = {};

  if (restaurantDetails.length > 0) {
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
    <div className="sm:mx-56 mx-5 my-4">
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
        <div className="border-b pt-1" />
        <div className="my-3 flex items-center">
          <span className="font-bold text-neutral-600 text-md">
            {restaurantData?.costForTwoMessage}
          </span>
        </div>
        <div className="border-t-[1px] border-solid" />
        {filteredCards?.map((card, i) => {
          return (
            <Category
              key={i}
              data={card?.card?.card}
              collapse={collapse === i ? true : false}
              handleCollapse={() => setCollapse(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
