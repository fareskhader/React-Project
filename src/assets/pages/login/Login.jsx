import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import googleLogo from "../../Icons/SVG.png";
import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router";
import AppleIcon from "@mui/icons-material/Apple";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginschema, registerSchema } from "../../../validations/authSchema";
import { useState } from "react";
import axios from "axios";
export default function Login() {

  const [serverError,setserverError]=useState(null)
  const [success,setsuccess]=useState(null)

 const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
  } =  useForm({
    resolver: yupResolver(loginschema),mode:'onBlur'
  })

  const navigate =useNavigate();

  const onSubmit = async  (data)=>{
    console.log(data)

    try {
      const response=await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login',data)
      setsuccess(true);
      navigate('/')}
      
catch (error) {
  console.log(error.response?.data)
  setserverError(error.response?.data?.message || "registration failed")
}
  }


  return (
    <Container maxWidth="sm" >
      <Box
        sx={{p: { xs: 2, sm: 5} , boxShadow: 2, borderRadius: 2 }}
      >
        <Box
          sx={{
            textAlign: "center",
            mp: 2,
            marginBottom: "32px",
          }}
        >
          <ShoppingBagIcon
            sx={{ p: 2, bgcolor: "primary.main", borderRadius: 2,color:'background.paper' }}
          />
          <Typography
            component={"h1"}
            variant="h4"
            sx={{ textAlign: "center" ,fontWeight:'700',}}
          >
            Sign In
          </Typography>
          <Typography sx={{ textAlign: "center", color:'text.primary' }}>
            Welcome back to FaresShop
          </Typography>
        </Box>
   
             {serverError?<Alert>{serverError}</Alert>:null}

        <Box sx={{bgcolor:"Background.Paper"}} component={"form"} onSubmit={handleSubmit(onSubmit)}>
     
          <TextField
            id="filled-basic"
            fullWidth
            label="Email Address"
            margin="normal"
            variant="filled"
           {...register('email')}
           error={errors.email}
            helperText={errors.email?.message}

          />
          <TextField
            id="filled-basic"
            fullWidth
            label="Password"
            margin="normal"
            variant="filled"
             {...register('password')}
             error={errors.password}
            helperText={errors.password?.message}
            type='password'
          />
         <Box sx={{color:'primary.main',display:'flex',justifyContent:'end'}} > <Link to="/resetPassword"   style={{ textDecoration: "none", color: "#005E53" }}
>Forgot password?</Link></Box>
       
          <Button
            type="submit"
            variant="contained"
            margin="normal"
            sx={{ mt: {xs:1,md:3} ,bgcolor: 'primary.main'}}
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting?"loading...":'Login'}
          </Button>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            py: {xs:2,md:4},
          }}
        >
          <Divider sx={{color:'text.primary'}}>OR</Divider>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            py:{xs:1,md:3},
          }}
        >
          <Button
            fullWidth
            sx={{ color: "black" ,py:2 , bgcolor:'surface.main'}}
            startIcon={
              <Box
                component="img"
                src={googleLogo}
                alt="google icon"
                sx={{ width: 20, height: 20 }}
              />
            }
          >
            Continue with Google
          </Button>

          <Button
            fullWidth
            sx={{ color: "black" ,py:2,bgcolor:'surface.main'}}
            startIcon={<AppleIcon sx={{ fontSize: 20 }} />}
          >
            Continue with Apple
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row",color:'text.primary',justifyContent: "center",gap:1,alignItems:'center'
}}>
          <Typography sx={{fontSize:{xs:14,md:16}}}>Don't have an account? </Typography>
          <Box sx={{color:'primary.main',}} > <Link to="/register"   style={{ textDecoration: "none", color: "#005E53" }}
>Register</Link></Box>
         
        </Box>
      </Box>
    </Container>
  );
}
