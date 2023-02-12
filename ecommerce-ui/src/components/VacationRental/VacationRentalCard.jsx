import React from 'react'
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box, Rating, Avatar, Tooltip } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { PropTypes } from 'prop-types';

const VacationRentalCard = ({ rental,
  rental: { title, houseType, image, location, payment, host, rating },
  addToCart }) => {

  return (
    <Box>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          title={`${location.city}, ${location.country}`}
          subheader={title}
        />
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={`Picture of ${title}`}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row'}}>
          <Typography variant="h5">
            ${Number.parseFloat(payment.cost).toFixed(2)}
          </Typography>
          <Typography variant="h5">
            {houseType}
          </Typography>
          <Typography variant="h5">
            {payment.description}
          </Typography>
        </CardContent>
        <CardContent >
          <Typography variant="h5" sx={{ display: 'flex', height:'100%', alignContent: 'left', direction: 'row' }}>
            {host.isSuperhost && 
             <Tooltip title="Super Host">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>SH</Avatar>
            </Tooltip>
            }{host.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <Button variant="contained" onClick={(event) => addToCart(rental)}>
            Add to Cart</Button>
          <Rating value={rating.stars} precision={0.5} readOnly />
          <Box sx={{ ml: 2 }}>{rating.reviews} reviews</Box>

        </CardActions>
      </Card>
    </Box>
  )
}

VacationRentalCard.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.number.isRequired,
    houseType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    payment: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      description: PropTypes.string,
    }),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isSuperhost: PropTypes.bool,
    }),
    rating: PropTypes.shape({
      stars: PropTypes.number,
      reviews: PropTypes.number,
    }),
  }),
  addToCart: PropTypes.func
}

export default VacationRentalCard