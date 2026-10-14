import React from 'react'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function Home() {
  return (
    <Container >
    <h1>fares</h1>
    <Typography variant='h1' component={'h2'} sx={{color:'primary.main',mt:1,backgroundColor:'black'}}>fares</Typography>
    <Grid container spacing={2} sx={{py:4}}>
  <Grid size={{xs:12,sm:6,lg:4}}>
    <Box sx={{backgroundColor:'lightblue',p:3,borderRadius:4}}>
    <Typography>size=8</Typography>
    </Box>
  </Grid>
  <Grid size={{xs:12,sm:6,lg:4}}>
    <Box sx={{backgroundColor:'lightblue',p:3,borderRadius:4}}>
    <Typography>size=8</Typography>
    </Box>
  </Grid>
  <Grid size={{xs:12,sm:6,lg:4}}>
    <Box sx={{backgroundColor:'lightblue',p:3,borderRadius:4}}>
    <Typography>size=8</Typography>
    </Box>
  </Grid>
  <Grid size={{xs:12,sm:6,lg:4}}>
    <Box sx={{backgroundColor:'lightblue',p:3,borderRadius:4}}>
    <Typography>size=8</Typography>
    </Box>
  </Grid>
  <Grid size={{xs:12,sm:6,lg:4}}>
    <Box sx={{backgroundColor:'lightblue',p:3,borderRadius:4}}>
    <Typography>size=8</Typography>
    </Box>
  </Grid>
  <Grid size={{xs:12,sm:6,lg:4}}>
    <Box sx={{backgroundColor:'lightblue',p:3,borderRadius:4}}>
    <Typography>size=8</Typography>
    </Box>
  </Grid>
  
</Grid>
    </Container>
  )
}
