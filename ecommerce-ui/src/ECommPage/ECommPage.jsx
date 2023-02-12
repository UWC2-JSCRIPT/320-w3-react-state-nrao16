import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Stack, Paper, createTheme, ThemeProvider } from '@mui/material';
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
            <Grid container item direction="column">
              <VacRentalCartGridList rentalList={cartRentals} removeFromCart={removeFromCart} />
            </Grid>
            <Box>
              <Stack>
                <CartTotalCard totalCost={calculateCartTotal()} />
              </Stack>
            </Box>
          </Grid>
        }

      </Grid>
    </ThemeProvider>
  );
}


export default ECommPage