import React from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RestaurantCard = ({ name, image }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: '10px' }}>
        <CardMedia sx={{ height: 140 }} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </Typography>
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
