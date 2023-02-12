import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';

const VacRentalCartCard = ({ rental,
  rental: { image, title, location, payment },
  removeFromCart }
) => {
  return (
    <Box boxShadow={10}>
      <Card variant=''
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <Typography variant="h5">
            {`${location.city}, ${location.country}`}
          </Typography>
          <Typography variant="h5">
            ${Number.parseFloat(payment.cost).toFixed(2)}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={`Picture of ${title}`}
        />
        <CardActions>
          <Button size="small" variant="contained" onClick={(event) => removeFromCart(rental)}>
            Remove</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

VacRentalCartCard.propTypes = {
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
  removeFromCart: PropTypes.func
}

export default VacRentalCartCard