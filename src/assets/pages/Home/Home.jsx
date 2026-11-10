import React from 'react'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Categories from '../../../components/categories/Categories';
import Products from '../../../components/products/Products';
import {Alert} from '@mui/material';
import { useAuthStore } from '../../../store/useAuthStore';
import { useState, useEffect } from "react";
export default function Home() {
   const [showAlert, setShowAlert] = useState(true);
  const Token = useAuthStore((state)=>state.token)
   useEffect(() => {
   setTimeout(() => setShowAlert(false), 3000); 
}, []);

  return (
    < >
    {Token?showAlert && <Alert severity="success">Welcome Back !</Alert>:null}
      <Categories/>
      <Products/>

    </>
  )
}
