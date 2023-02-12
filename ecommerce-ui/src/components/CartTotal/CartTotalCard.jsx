import React from 'react'
import { Button, Card, Grid, CardContent, Typography, Box } from '@mui/material';

const CartTotalCard = ({ totalCost }) => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <Grid container direction='column'>
                    <Grid item xs={6} sm={6} md={6}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'aliceblue' }}>
                            <CardContent>
                                <Typography variant="h5">
                                    Total Payment Due ${Number.parseFloat(totalCost).toFixed(2)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} width={100}>
                        <Button color="inherit" variant="contained">Checkout</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CartTotalCard