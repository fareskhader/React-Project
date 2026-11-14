import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartSummary({total}) {
  return (
    <Paper sx={{p:3}}>
        <Typography sx={{p:2}} variant='h4'>
            Order Summary
        </Typography>

        <Divider/>
        <Box>

 <Typography sx={{p:2}} variant='p'>
           Total Price : ${total.toFixed(2)}
        </Typography>

        </Box>
        <Button variant='contained' fullWidth>
            checkout
        </Button>
    </Paper>
  )
}
