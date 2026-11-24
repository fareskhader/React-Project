import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
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
import CategoryItem from './CategoryItem';
import UseCategories from '../../hooks/UseCategories';
import { useTranslation } from 'react-i18next';
export default function Categories() {
    
    const {data,isLoading,isError}=UseCategories()
    const {t} = useTranslation();

  if(isLoading) return <CircularProgress/>
  if(isError) return <Alert severity="error">{t('home.loadcategorieserror')}</Alert>
    return (
    <Box>
        <Typography variant='h5' component={'h2'} sx={{mb:2}}>{t('home.categories')}</Typography>
        <Box sx={{display:'grid',gridTemplateColumns:{
            xs:'repeat(1,1fr)',
            sm:'repeat(2,1fr)',
            md:'repeat(4,1fr)'
        },gap:2}}>

        {data.map((category)=>(
            <CategoryItem category={category} />
        ))}
                    </Box>

    </Box>
  )
}
