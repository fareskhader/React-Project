import React from 'react'
import { RouterProvider } from 'react-router'
import { CssBaseline } from '@mui/material'
import router from './router'

export default function App() {
  return (
<>
  <CssBaseline />
<RouterProvider router={router}/>
</>  )
}
