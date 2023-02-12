import React from 'react'
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia, Typography, Box, Rating, Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

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
          height="500"
          image={image}
          alt={`Picture of ${title}`}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
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
            {host.isSuperhost && <Avatar sx={{ bgcolor: deepOrange[500] }}>SH</Avatar>}{host.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <Button variant="contained" onClick={(event) => addToCart(rental)}>
            Add to Cart</Button>
          <Rating value={rating.stars} precision={0.5} readOnly />
        </CardActions>
      </Card>
    </Box>
  )
}

export default VacationRentalCard