import React from 'react'
import { useParams } from 'react-router';
import UseProductDetails from '../../../hooks/UseProductDetails';
import CircularProgress from '@mui/material/CircularProgress';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { CardActionArea,CardMedia } from '@mui/material';
import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Alert,
  Chip,
  Rating
} from "@mui/material";
import MainLayout from '../../../layouts/MainLayout';
import ReviewItem from '../../../components/ReviewItem'; 
import UseAddToCart from '../../../hooks/UseAddToCart';
import { useAuthStore } from '../../../store/useAuthStore';
import { useNavigate } from 'react-router'
import { toast, Slide } from 'react-toastify';export default function ProductDetails() {
    const token = useAuthStore((state)=>state.token)
    const {id} =useParams();
    const {mutate:addToCart,isPending:addToCartPending} = UseAddToCart()
    const {data,isPending,isError} = UseProductDetails(id)
    

            const navigate = useNavigate();


      if(isPending) return <CircularProgress/>
      if(isError) return <Alert severity="error">faliled to load product</Alert>

            const inStock = data.quantity > 0;

    const handleAddToCart = ()=>{
        if(!token){
            navigate('/login');
            return;
        }
        addToCart(data.id,{
           onSuccess:()=>{
toast.success('Added Successfully !', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
theme: "light",
transition: Slide,
});           } ,
           onError:()=>{
            console.log("error happened while adding")
           }
        })
    }

  return (
    <>
    <Box sx={{display:'grid',gap:4,
        gridTemplateColumns:{
            xs:'1fr',
            md:'1fr 1fr'
        }
    }}
    >
        
            <Card>
               <CardMedia 
               sx={{width:200}}
               component={'img'}
               image={data.image}
               />
               <CardContent>
                <Typography>
                    {data.name}
                </Typography>
               </CardContent>
            </Card>
            <Box>
              
                <Typography variant='h4' color='primary'>
                    ${data.price}
                </Typography>

                <Chip
                label = {inStock ? "In Stock" : "Out Of Stock"}
                color={inStock > 0? "primary" : "error"}
                >
                    
                </Chip>
                <Typography>
                    {data.description}
                </Typography>
                  <Rating value={data.rate} readOnly sx={{display:'flex'}}>
                </Rating>
                <Button variant="contained" disabled={!inStock || addToCartPending} onClick={handleAddToCart}>Add To Cart</Button>
          <Divider sx={{color:'primary.main',my:3,borderBottomWidth:2,borderColor:'primary.main'}}></Divider>

            </Box>
    </Box>
    <Box>
        {data.reviews.map((review)=>{
           return <ReviewItem review={review}/>
        })}
    
    </Box>
    </>
  )
}
