import React from 'react';
import { useParams } from 'react-router-dom';

import { CDN_URL } from '../utils/constants';

import Loader from '../components/Loader';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RatingIcon from '../assets/images/star.png';

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
        <div className="my-4">
          <h2 className="font-bold text-neutral-900 text-xl mb-3">
            {menuList?.title} ({menuList?.itemCards?.length})
          </h2>
          {menuList?.itemCards?.map((menu) => {
            const { id, name, price, imageId, description } = menu?.card?.info;

            return (
              <div
                key={id}
                className="flex items-start justify-between my-16 border-solid border-b-[1px] pb-[30px]"
              >
                <div className="info w-[70%]">
                  <div className="text-lg text-neutral-600 font-medium">{name}</div>
                  <div className="text-neutral-600 font-normal mb-3">₹ {price / 100}</div>
                  <div className="text-neutral-400 text-sm">{description}</div>
                </div>
                <div className="image-container relative">
                  <img
                    className="w-[120px] h-[120px] rounded-md bg-neutral-300"
                    src={CDN_URL + imageId}
                    alt="img"
                  />
                  <button className="bg-white text-sm text-green-500 font-semibold p-2 rounded-md absolute -bottom-3 right-[10px] w-[100px]">
                    ADD
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
