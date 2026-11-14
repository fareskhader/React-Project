import { Box, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import UseUpdateCart from '../../../hooks/UseUpdateCartItem'
import UseUpdateCartItem from '../../../hooks/UseUpdateCartItem'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
export default function CartItem({item}) {

  const {mutate:updateCartItem , isPending}=UseUpdateCartItem();

  const handleIncrease=()=>{
    updateCartItem({productId:item.productId,count:item.count+1})
  }
  const handleDecrease=()=>{
    updateCartItem({productId:item.productId,count:item.count-1})
  } 

  return (
    <Paper sx={{
      p:2,
      mb:3,
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
    }}>
      <Box>
        <Typography>
          Name :
          {item.productName}
        </Typography>
        <Typography>
          Price :
          {item.price}
        </Typography>
      </Box>

      <Typography>Quantity : {item.count}</Typography>

      <Box sx={{display:'flex',alignItems:'center',border:1}}>
        <IconButton onClick={handleDecrease} disabled={isPending || item.count == 1}>
          <RemoveIcon fontSize='small'/>
        </IconButton>

        <Typography>{item.count}</Typography>

           <IconButton onClick={handleIncrease} disabled={isPending}>
          <AddIcon fontSize='small'/>
        </IconButton>

      </Box>
      <Typography>Total : {item.totalPrice}</Typography>
    </Paper>
  )
}
