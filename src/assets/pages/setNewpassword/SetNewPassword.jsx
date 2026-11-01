
import LockResetIcon from '@mui/icons-material/LockReset'
import googleLogo from "../../Icons/SVG.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Alert,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { ResetPasswordschema} from "../../../validations/authSchema";
import { useState } from "react";
import axios from "axios";
import GreenIcon from '../../../components/GreenIcon';

export default function SetNewPassword() {

  const [serverError,setserverError]=useState(null)
  const [success,setsuccess]=useState(null)

 const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
  } =  useForm({
    resolver: yupResolver(ResetPasswordschema),mode:'onBlur'
  })

  const navigate =useNavigate();

  const onSubmit = async  (data)=>{
    console.log(data)

    try {
      const response=await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/SendCode',data)
      setsuccess(true);
      navigate('/setNewPassword')}
      
catch (error) {
  console.log(error.response?.data)
  setserverError(error.response?.data?.message || "Check Your Email Box")
}
  }


  return (
    <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",      
  }}
>
    <Container maxWidth="sm" sx={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",
    }} >
      <Box
        sx={{p: { xs: 2, sm: 5} , boxShadow: 2, borderRadius: 2,bgcolor: "background.paper"  }}
      >
        <Box
          sx={{
            textAlign: "center",
            mp: 2,
            marginBottom: "32px",
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            gap:1
          }}
        >
         
          <Typography
            component={"h1"}
            variant="h4"
            sx={{ textAlign: "center" ,fontWeight:'600'}}
          >
            Set New Password
          </Typography>
          <Typography sx={{ textAlign: "center", color:'text.primary',margin:'auto',px:2,width:{md:"90%"}}}>
      Please enter the code sent to your email and your new
password.
          </Typography>
        </Box>
   
             {serverError?<Alert>{serverError}</Alert>:null}

        <Box sx={{bgcolor:"Background.Paper"}} component={"form"} onSubmit={handleSubmit(onSubmit)}>
         <Box>
  <Typography
    component="label"
    htmlFor="code"
    variant="body2"
    sx={{ display: "block", mb: 0.5, fontWeight: 500 }}
  >
Verification Code
  </Typography>

  <TextField
    type='password'
    id="code"
       slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start" sx={{my:2}}>
            <EmailOutlinedIcon />
          </InputAdornment>
        ),
      },
    }}
    margin="none"
    type="email"
    placeholder="6-DIGIT CODE"
    {...register("email")}
    error={!!errors.email}
    helperText={errors.email?.message}
 
    sx={{
    
"& .MuiFilledInput-input": { py: 2 } }}
  />
</Box>

         
       
          <Button
            type="submit"
            variant="contained"
            margin="normal"
            sx={{ mt: {xs:1,md:3} ,bgcolor: 'primary.main'}}
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting?"loading...":<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:"4px",py:1
            }}>
              <Typography sx={{fontSize:"16px"}}>SEND CODE</Typography>
                        <ArrowForwardIcon sx={{fontSize:'16px'}}/>

              </Box>}
          </Button>
        </Box>
       
        
        <Box sx={{color:'primary.main',py:4}} >
         <Typography
  component={Link}
  to="/login"
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    color: "primary.main",
    fontWeight: 600,
    textDecoration: "none",
    py: 4,
  }}
>
  <ArrowBackIcon sx={{ fontSize: 20 }} />
  Back To Login
</Typography>
         
        </Box>
      </Box>
    </Container>
    </Box>
  );
}
