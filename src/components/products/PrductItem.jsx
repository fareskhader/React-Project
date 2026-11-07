import React from 'react'
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router";
import {
 
  Typography,
  Rating,
  CardMedia
 
} from "@mui/material";
function PrductItem({product}) {
  return (
    <>
    <Card>
        <CardActionArea component={Link} to={`/productDetails/${product.id}`}>
            <CardMedia
            component={'img'}
            image={product.image}
            alt='product.name'
            />
            <CardContent>
                <Typography>
                    {product.name}
                </Typography>
                <Rating value={product.Rating} readOnly >
                
                </Rating>
                 <Typography variant='h6' >
                 ${product.price}
                    </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </>
  )
}

export default PrductItem