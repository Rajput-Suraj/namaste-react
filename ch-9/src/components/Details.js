import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';

import { IMG_CDN_URL } from '../Contants';
import { useRestaurantMenu } from '../hooks/useRestaurantMenu';
import Shimmer from './Shimmer';

const Details = () => {
  const { id } = useParams();

  const restaurantDetail = useRestaurantMenu(id);

  if (!restaurantDetail) {
    return <Shimmer />;
  }
  return (
    <Box m={3}>
      <Typography variant="h5">{restaurantDetail?.name}</Typography>
      <Card sx={{ marginTop: '20px', display: 'flex' }}>
        <div>
          <img
            style={{
              margin: '20px',
              boxShadow: '4px 4px 4px #000',
            }}
            src={`${IMG_CDN_URL}${restaurantDetail.cloudinaryImageId}`}
            alt={restaurantDetail?.name}
          />
        </div>
        <div>
          <p>Menu List</p>
          <ul>
            {Object.values(restaurantDetail?.menu?.items).map((item, i) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </Card>
    </Box>
  );
};

export default Details;
