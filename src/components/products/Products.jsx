import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import ReactDOM from 'react-dom/client'

import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Alert,
  Chip
} from "@mui/material";
import UseProducts from '../../hooks/UseProducts'
import PrductItem from './PrductItem'
import { useTranslation } from 'react-i18next';
export default function Products() {

    const {data,isPending,isError}=UseProducts();
    const {t} = useTranslation();
    
      if(isPending) return <CircularProgress/>
      if(isError) return <Alert severity="error">{t('home.loadproductserror')}</Alert>
      console.log(data)
  return (
    <Box>
            <Typography variant='h5' component={'h2'} sx={{mb:2}}>{t('home.products')}</Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{
                xs:'repeat(1,1fr)',
                sm:'repeat(2,1fr)',
                md:'repeat(4,1fr)'
            },gap:2}}>
    
            {data.map((product)=>(
                <PrductItem product={product} />
            ))}
                        </Box>
    
        </Box>
  )
}
