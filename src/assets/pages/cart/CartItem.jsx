import { Box, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import UseUpdateCart from '../../../hooks/UseUpdateCartItem'
import UseUpdateCartItem from '../../../hooks/UseUpdateCartItem'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import UseRemoveItemCart from '../../../hooks/UseRemoveItemCart';
import { toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function CartItem({item}) {

  const {mutate:removeItemCart,isPending:removeItemCartPending}=UseRemoveItemCart();

  const {mutate:updateCartItem , isPending:updateCartItemPending}=UseUpdateCartItem();

  const handleIncrease=()=>{
    updateCartItem({productId:item.productId,count:item.count+1})
  }
  const handleDecrease=()=>{
    updateCartItem({productId:item.productId,count:item.count-1})
  } 

  const handleRemoveItem=()=>{
    removeItemCart(item.productId),{
    onsuccess:()=>{
      toast.success('Item removed from cart')
    },
  onerror:()=>{
    toast.error('Failed to remove item from cart')
  }
}
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
        <IconButton onClick={handleDecrease} disabled={updateCartItemPending  || item.count == 1}>
          <RemoveIcon fontSize='small'/>
        </IconButton>

        <Typography>{item.count}</Typography>

           <IconButton onClick={handleIncrease} disabled={updateCartItemPending}>
          <AddIcon fontSize='small'/>
        </IconButton>

      </Box>
      <Typography>Total : {item.totalPrice}</Typography>
      <IconButton>
        <DeleteForeverIcon onClick={handleRemoveItem} disabled={removeItemCartPending}/>
      </IconButton>
    </Paper>
  )
}
