import { PersonAddAlt1 } from "@mui/icons-material";
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
import { registerSchema } from "../../../validations/authSchema";
import { useState } from "react";
import axios from "axios";
export default function Register() {

  const [serverError,setserverError]=useState(null)
  const [success,setsuccess]=useState(null)

 const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
  } =  useForm({
    resolver: yupResolver(registerSchema),mode:'onBlur'
  })

  const navigate =useNavigate();

  const onSubmit = async  (data)=>{
    console.log(data)

    try {
      const response=await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register',data)
      setsuccess(true);
      navigate('/login')}
      
catch (error) {
  console.log(error.response?.data)
  setserverError(error.response?.data?.message || "registration failed")
}
  }


  return (
    <Container maxWidth="sm" >
      <Box
        sx={{ p: "40px", boxShadow: 2, borderRadius: 2 }}
      >
        <Box
          sx={{
            textAlign: "center",
            mp: 2,
            marginBottom: "32px",
          }}
        >
          <PersonAddAlt1
            sx={{ p: 2, backgroundColor: "PastelMintGreen.main", borderRadius: 2 }}
          />
          <Typography
            component={"h1"}
            variant="h4"
            sx={{ textAlign: "center" ,fontWeight:'700'}}
          >
            Create An Account
          </Typography>
          <Typography sx={{ textAlign: "center", color:'text.primary' }}>
            Join MUIShop today
          </Typography>
        </Box>
   
             {serverError?<Alert>{serverError}</Alert>:null}

        <Box sx={{bgcolor:"Background.Paper"}} component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="filled-basic"
            sx={{ borderRadius: 4 }}
            fullWidth
            label="Full Name"
            margin="normal"
            variant="filled"
            {...register('fullName')}
            error={errors.fullName}
            helperText={errors.fullName?.message}
          />
          <TextField
            id="filled-basic"
            fullWidth
            label="User Name"
            margin="normal"
            variant="filled"
           {...register('userName')}
           error={errors.userName}
            helperText={errors.userName?.message}

          />
          <TextField
            id="filled-basic"
            fullWidth
            label="Email"
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

          />
          <TextField
            id="filled-basic"
            fullWidth
            label="Phone Number"
            margin="normal"
            variant="filled"
           {...register('phoneNumber')}
           error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}

          />
          <Button
            type="submit"
            variant="contained"
            margin="normal"
            sx={{ mt: 3 ,bgcolor: 'primary.main'}}
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting?"loading...":'Register'}
          </Button>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            py: 4,
          }}
        >
          <Divider sx={{color:'text.primary'}}>OR</Divider>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
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
          <Typography>Already Have An Account ?</Typography>
          <Box sx={{color:'primary.main',}} > <Link to="/login"   style={{ textDecoration: "none", color: "#005E53" }}
>Login</Link></Box>
         
        </Box>
      </Box>
    </Container>
  );
}
