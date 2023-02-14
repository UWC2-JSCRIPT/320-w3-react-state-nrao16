import React from 'react'
import { AppBar, Typography } from '@mui/material'

const VacRentalAppBar = () => {
    return (
        <AppBar position='static' elevation={0}>
            <Typography variant="h3" align='center' color="palegoldenrod">
                Your home away from home...
            </Typography>
        </AppBar>
    )
}

export default VacRentalAppBar