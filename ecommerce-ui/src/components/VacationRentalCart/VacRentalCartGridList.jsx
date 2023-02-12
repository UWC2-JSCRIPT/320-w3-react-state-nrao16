import React from 'react';
import VacRentalCartCard from './VacRentalCartCard';
import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

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

VacRentalCartGridList.propTypes = {
    cartRentals: PropTypes.array,
    removeFromCart: PropTypes.func
}

export default VacRentalCartGridList;