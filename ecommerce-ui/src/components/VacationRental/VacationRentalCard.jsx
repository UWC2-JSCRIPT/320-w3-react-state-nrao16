import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const VacationRentalCard = ({rental,
rental: {image, title, location, payment},
addToCart}) => {
  return (
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <CardHeader
        title={location.city}
        subheader={title}
      />
      <CardContent >
      {/* <Typography title variant="h5" component="header">
        {location.city}
      </Typography>
      <Typography> */}
        {/* {location}
        {payment} */}
      {/* </Typography> */}
    </CardContent>
    <CardMedia
      component="img"
      height="50%"
      
      // sx={{
      //   // 16:9
      //   pt: '56.25%',
      // }}
      image={image}
      alt="random"
    />
    <CardContent >
      <Typography variant="h5" component="h2">
        ${payment.cost}
      </Typography>
      <Typography>
        {/* {location}
        {payment} */}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" onClick={(event)=>addToCart(rental)}>
        Add to Cart</Button>
    </CardActions>
  </Card>
  )
}

export default VacationRentalCard