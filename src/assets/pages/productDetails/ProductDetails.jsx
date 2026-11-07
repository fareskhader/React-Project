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
export default function ProductDetails() {

    const {id} =useParams();
    const {data,isPending,isError} = UseProductDetails(id)
      if(isPending) return <CircularProgress/>
      if(isError) return <Alert severity="error">faliled to load product</Alert>
      console.log(data.reviews)

      const inStock = data.quantity > 0;
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
                <Button variant="contained" disabled={!inStock}>Add To Cart</Button>
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
