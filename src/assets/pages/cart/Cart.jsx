import React from 'react'
import UseCart from '../../../hooks/UseCart'
import { useAuthStore } from '../../../store/useAuthStore';
import { Alert, Box,Button,Card,CircularProgress,Typography } from '@mui/material';
import { Link } from 'react-router';
import CartItem from './CartItem';
import CartSummary from '../../../components/cart/CartSummary';

export default function Cart() {
    const token=useAuthStore((state)=>state.token);
    const {isPending,data,isError}= UseCart();

    if(isPending){
        return <CircularProgress/>
    }
     if(isError){
        return <Alert severity='error'>failed to load cart items</Alert>
    }


    if(!token){
        return(
            <Box sx={{textAlign:'center',py:10}}>
                <Typography variant='h2'>
            Please login to view your Cart
                </Typography>
                <Button component={Link} to="/login" >Login</Button>
            </Box>
        )
    }

    if(data.items.length==0){
        return (
            <Box>
                <Typography>
                    your Cart Is Empty . 
                </Typography>
            </Box>
        )
    }
    console.log("Items Length:", data.items.length);

  return (
    <Box sx={{
        display:'grid',
        gridTemplateColumns:{xs:'1fr',md:'2fr 1fr'},
        gap:4
    }}>
       { console.log(data)}
       <Box sx={{color:'black'}}>{data.items.map((item)=>(
        <CartItem item={item}/>
        ))}</Box>
       <Box sx={{bgcolor:'green'}}>
        <CartSummary total={data.cartTotal}/>
       </Box>
       
    </Box>
  )
}
