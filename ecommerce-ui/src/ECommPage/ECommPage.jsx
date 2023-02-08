import * as React from 'react';
import { useState } from 'react';
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
import bnbs from '../bnbs.json'

import VacationRentalGridList from '../components/VacationRental/VacationRentalGridList';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar } from '@mui/material';
import VacRentalCartGridList from '../components/VacationRentalCart/VacRentalCartGridList';


  const theme = createTheme();
  
  const ECommPage = ({vacationRentals, cartRentals, addToCart, removeFromCart}) => {

    // const [vacationRentals, setVacationRentals] = useState(bnbs);
    // const [cartRentals, setCartRentals] = useState([]);

    // const addToCart = (rental) => {
    //   let newCartList = [...cartRentals];
    //   newCartList.push(rental);
    //   setCartRentals(newCartList);

    // }

    // const removeFromCart = (rental) => {
    //   let newCartList = [...cartRentals];
    //   newCartList.pop(rental);
    //   setCartRentals(newCartList);

    // }

    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>

          <Grid container component={Paper} elevation={6} square  spacing={2} item xs={10} sm={10} md={10}>
           <VacationRentalGridList rentalList={vacationRentals} addToCart={addToCart} />
           </Grid>

          <Grid container component={Paper} elevation={6} square item xs={2} sm={2} md={2}>
          <Grid container direction="column">
           <VacRentalCartGridList rentalList={cartRentals} removeFromCart={removeFromCart} />
           </Grid>

              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button> */}
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }


export default ECommPage