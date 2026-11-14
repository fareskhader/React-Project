import React from 'react'
import { RouterProvider } from 'react-router'
import { CssBaseline } from '@mui/material'
import router from './Router'
  import { ToastContainer,toast } from 'react-toastify';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function App() {
  return (
<>
    <QueryClientProvider client={queryClient}>

  <CssBaseline />
  
<RouterProvider router={router}/>
        <ToastContainer />



</QueryClientProvider>
</>  )
}
