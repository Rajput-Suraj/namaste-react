import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import RestaurantCard from './RestaurantCard';
import { list } from '../assets/data/Data';
import '../App.css';
const Body = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurantList, setRestaurantList] = useState(list);

  const filterList = (term, data) => {
    return data.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
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
            const data = filterList(searchTerm, list);
            setRestaurantList(data);
          }}
        >
          Search
        </Button>
      </Box>
      <div className="card-container">
        {restaurantList.map((restaurant) => (
          <React.Fragment key={restaurant.id}>
            <RestaurantCard {...restaurant} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Body;
