import React from 'react'
import { RouterProvider } from 'react-router'
import { CssBaseline } from '@mui/material'
import router from './Router'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


export default function App() {
  return (
<>
    <QueryClientProvider client={queryClient}>

  <CssBaseline />
<RouterProvider router={router}/>
</QueryClientProvider>
</>  )
}
