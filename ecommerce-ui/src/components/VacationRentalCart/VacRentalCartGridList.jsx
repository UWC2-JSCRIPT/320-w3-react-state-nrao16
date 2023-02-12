import React from 'react';
import VacRentalCartCard from './VacRentalCartCard';
import { Grid } from '@mui/material';

const VacRentalCartGridList = ({ cartRentals, removeFromCart }) => {
    let rentalListGrid = cartRentals.map((rental) => {
        return (
            <Grid item >
                <VacRentalCartCard
                    rental={rental}
                    removeFromCart={removeFromCart}
                />
            </Grid>
        )
    });
    return rentalListGrid;
}

export default VacRentalCartGridList;