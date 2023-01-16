import React from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { IMG_CDN_URL } from '../Contants';

const RestaurantCard = (restaurant) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = restaurant.data;
  return (
    <>
      <Card sx={{ width: 345, marginBottom: '30px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`${IMG_CDN_URL}${cloudinaryImageId}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="wrap-it ">
            {cuisines.join(',')}
          </Typography>
          <Rating name={name} value={Number(avgRating)} />
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RestaurantCard;
