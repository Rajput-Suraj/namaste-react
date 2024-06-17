import { useState } from 'react';
import { Link } from 'react-router-dom';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import MaintainanceIcon from '../assets/images/maintainance.png';
import useRestaurantsList from '../hooks/useRestaurantsList';

function Body() {
  const [searchTerm, setSearchTerm] = useState('');
  const { resList, filterList, setFilterList, errorStatus } = useRestaurantsList();

  const handleSearch = () => {
    if (searchTerm) {
      const filteredData = resList?.filter((res) =>
        res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterList(filteredData);
    }
  };

  if (errorStatus) {
    return (
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[45px] font-normal">Something went wrong</h1>
        <h2 className="text-3xl font-normal">Try, Again later!!</h2>
        <img src={MaintainanceIcon} alt="Maintainance-Icon" style={{ height: '350px' }} />
      </div>
    );
  }

  return resList.length === 0 ? (
    <>
      <div className="rounded-md p-4 max-w-sm w-64 mx-auto">
        <div className="animate-pulse flex space-x-4"></div>
        <div className="flex py-1 items-center gap-3">
          <div className="rounded-md bg-slate-300 h-10 w-full"></div>
          {/* <div className="h-10 bg-slate-300 rounded w-[80px]"></div> */}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
        {Array.from({ length: 10 }, (_, i) => (
          <Shimmer key={`index-${i}`} />
        ))}
      </div>
    </>
  ) : (
    <div className="container mx-auto mb-10">
      {filterList.length === 0 ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>No result found</h1>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-5 text-center">
            Restaurants with online food delivery
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {filterList?.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={`/restaurant-menu/${restaurant?.info?.id}`}
                className="hover:scale-[.85] duration-100"
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
