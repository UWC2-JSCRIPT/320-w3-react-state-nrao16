import React from 'react'
import { Toolbar, Typography } from '@mui/material';

const CartHeaderBar = () => {
    return (
        <Toolbar sx={{ bgcolor: "inherit" }}>
            <Typography variant="h5">Vacation Cart</Typography>
        </Toolbar>
    )
}

export default CartHeaderBar