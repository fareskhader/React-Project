import { createTheme } from "@mui/material";


const theme=createTheme({
  palette: {
    primary: { main: '#005E53' },
    text: { primary: '#3E4946' },
    background: { paper: '#FFFFFF' },
    surface: { main: '#F6F3F2' },   
      PastelMintGreen: { main: '#ACEDDA' },   

  },
  components:
  {
    MuiButton:  {
        styleOverrides:{
            root:{textTransform:'none',borderRadius:8,backgroundColor:'primary.main'}
        }
    },
    MuiTextField: {
      defaultProps: { variant: 'filled', fullWidth: true, margin: 'normal',color:'text.primary' },
    },
    MuiFilledInput:
    {
        styleOverrides:{
            root:{
                backgroundColor: '#F6F3F2',
          borderRadius: 8,
          '&:before, &:after': { display: 'none' },
          '&:hover, &.Mui-focused': { backgroundColor: '#F6F3F2' },
            }
        }
    },
     MuiLink: {
    defaultProps: {
      underline: 'none',
    },
  }}
})

 export default theme