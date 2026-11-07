import React from 'react'
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import {
 
  Typography,
  
  Chip
} from "@mui/material";
export default function CategoryItem({category}) {
  return (
    <>
    <Card>
        <CardContent sx={{p:2,display:'flex',justifyContent:'center'}}>
        <Typography  component={'h1'}>{category.name}</Typography>
        </CardContent>
    </Card>
                </>
  )
}
