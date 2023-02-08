import React from 'react';
import VacationRentalCard from './VacationRentalCard';
import { Grid } from '@mui/material';

const VacationRentalGridList = ( {rentalList, addToCart} ) => {
    let rentalListGrid = rentalList.map((rental) => {
        return (
            <Grid item xs={12} sm={6} md={4}>
            <VacationRentalCard 
            rental={rental}
            addToCart={addToCart}
            />
            </Grid>
        )
    });
    return rentalListGrid;
}

export default VacationRentalGridList;