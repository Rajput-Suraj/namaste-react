import React, { useState } from 'react';
import { Box, Button, TextField, Snackbar } from '@mui/material';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

import { RESTAURANT_API } from '../Contants';
import { filterList } from '../Utils/helper';
import { useRestaurantListing } from '../hooks/useRestaurantListing';

import '../App.css';

const Body = () => {
  const [open] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const { error, allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantListing();
  return (
    <>
      <Box
        margin={2}
        marginLeft={6}
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={() => {
            const data = filterList(searchTerm, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </Button>
      </Box>
      <div className="card-container">
        {error ? (
          <>{error}</>
        ) : filteredRestaurants.length === 0 ? (
          Array(10)
            .fill('')
            .map((item, i) => <Shimmer key={i} />)
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant} key={restaurant.data.id} />
          ))
        )}
      </div>
      {error && <Snackbar open={open} autoHideDuration={5000} message={error} />}
    </>
  );
};

export default Body;
