import React from 'react'
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia, Typography, Box, Avatar } from '@mui/material';

const VacRentalCartCard = ({ rental,
  rental: { image, title, location, payment },
  removeFromCart }
) => {
  return (
    <Box>
      <Card variant=''
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
         <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row'}}>
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

export default VacRentalCartCard