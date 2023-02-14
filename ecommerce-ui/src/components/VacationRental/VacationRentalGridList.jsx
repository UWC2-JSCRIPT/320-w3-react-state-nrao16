import React from 'react';
import VacationRentalCard from './VacationRentalCard';
import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

const VacationRentalGridList = ({ rentalList, addToCart, cartRentals }) => {
    let rentalListGrid = rentalList.map((rental) => {
        return (
            <Grid item xs={12} sm={6} md={4} key={rental.id}>
                <VacationRentalCard
                    rental={rental}
                    addToCart={addToCart}
                    cartRentals={cartRentals}
                />
            </Grid>
        )
    });
    return rentalListGrid;
}

VacationRentalGridList.propTypes = {
    rentalList: PropTypes.array,
    addToCart: PropTypes.func,
    cartRentals: PropTypes.array
};

export default VacationRentalGridList;