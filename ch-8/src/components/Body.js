import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Snackbar } from '@mui/material';

import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

import { RESTAURANT_API } from '../Contants';

import '../App.css';

const Body = () => {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    try {
      let response = await fetch(RESTAURANT_API);
      let data = await response.json();
      setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      setError('Failed to load restaurants');
    }
  }

  const filterList = (term, data) => {
    return data.filter((item) => item.data.name.toLowerCase().includes(term.toLowerCase()));
  };

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
