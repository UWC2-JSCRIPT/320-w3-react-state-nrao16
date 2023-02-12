import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Stack, Paper, createTheme, ThemeProvider, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material'
import VacationRentalGridList from '../components/VacationRental/VacationRentalGridList';
import VacRentalCartGridList from '../components/VacationRentalCart/VacRentalCartGridList';
import CartTotalCard from '../components/CartTotal/CartTotalCard';
import VacRentalAppBar from '../components/AppBar/VacRentalAppBar';


const theme = createTheme();

const ECommPage = ({ vacationRentals, cartRentals, addToCart, removeFromCart }) => {

  const cartRentalsExist = cartRentals?.length > 0;
  const gridItemBreakpoint = cartRentalsExist ? 10 : 12;

  const calculateCartTotal = () => {
    const initialCost = 0;
    const totalCost = cartRentals.reduce(
      (accumulator, currentValue) => accumulator + currentValue.payment.cost, initialCost
    );
    return totalCost;
  }

  return (
    <ThemeProvider theme={theme}>

      <Box>
        <VacRentalAppBar />
      </Box>
      <Grid container>

        <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}
        >
          <VacationRentalGridList rentalList={vacationRentals} addToCart={addToCart} />
        </Grid>

        {cartRentalsExist &&
          <Grid container item xs={2} sm={2} md={2}>
          <Box>
            <Grid container direction="column" border={1}>
              <Grid item>
              <VacRentalCartGridList cartRentals={cartRentals} removeFromCart={removeFromCart} />
            </Grid>
            <Divider></Divider>
            <Grid item>
              <Stack>
                <CartTotalCard totalCost={calculateCartTotal()} />
              </Stack>
              </Grid>
              </Grid>
            </Box>
          </Grid>
        }

      </Grid>
    </ThemeProvider>
  );
}


export default ECommPage