import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
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

const VacRentalCartCard = ({rental,
rental: {image, title, location, payment},
removeFromCart}
) => {
  return (
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
      <CardContent sx={{ flexGrow: 1 }}>
      <Typography title variant="h5" component="header">
        {location.city}
      </Typography>
      <Typography>
        {/* {location}
        {payment} */}
      </Typography>
    </CardContent>
    <CardMedia
      component="img"
      height="25%"
      // sx={{
      //   // 16:9
      //   pt: '56.25%',
      // }}
      image={image}
      alt="random"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography>
        {/* {location}
        {payment} */}
      </Typography>
    </CardContent>
    <CardActions>
    <Button variant="contained" onClick={(event)=>removeFromCart(rental)}>
        Remove from Cart</Button>
    </CardActions>
  </Card>
  )
}

export default VacRentalCartCard