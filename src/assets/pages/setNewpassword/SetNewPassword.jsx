

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate,useLocation  } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import {  setNewPasswordSchema} from "../../../validations/authSchema";
import { useState } from "react";
import axios from "axios";

export default function SetNewPassword() {

  const [serverError,setserverError]=useState(null)
  const [success,setsuccess]=useState(null)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
  } =  useForm({
    resolver: yupResolver(setNewPasswordSchema),mode:'onBlur'
  })

  const navigate =useNavigate();
  const location=useLocation();
  const email=location.state?.email
  const onSubmit = async  (data)=>{
    console.log(data)
        console.log(data)
        console.log("Email received:", email);
    try {
      const response=await axios.patch('https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword',{
        code:data.code,
        newPassword: data.newPassword,
        email: email
      })
      if (response.data.success) {
  navigate('/login');
} else {
  setserverError(response.data.message);
}}
      
catch (error) {
  console.log(error.response?.data)
  setserverError(error.response?.data?.message )
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
            variant={"h4"}
            sx={{ textAlign: "center" ,fontWeight:'600',
                  fontSize: { xs: "1.5rem", sm: "2.125rem" },

            }}
          >
            Set New Password
          </Typography>
          <Typography sx={{ textAlign: "center", color:'text.primary',margin:'auto',px:2,width:{md:"90%"}}}>
      Please enter the code sent to your email and your new
password.
          </Typography>
        </Box>
   
{serverError && (
  <Alert severity="error" sx={{ mb: 2 ,borderRadius:2}}>
    {serverError}
  </Alert>
)}
        <Box sx={{bgcolor:"Background.Paper",display:"flex",flexDirection:"column",gap:2}} component={"form"} onSubmit={handleSubmit(onSubmit)}>
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
    placeholder="6-DIGIT CODE"
    {...register("code")}
    error={!!errors.code}
    helperText={errors.code?.message}
 
    sx={{
    
"& .MuiFilledInput-input": { py: 2 } }}
  />
</Box>
       <Box>
  <Typography
    component="label"
    htmlFor="Newpassword"
    variant="body2"
    sx={{ display: "block", mb: 0.5, fontWeight: 500 }}
  >
New Password
  </Typography>

  <TextField
    type={showPassword ? "text" : "password"}
    id="Newpassword"
       slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start" sx={{my:2}}>
            <VpnKeyOutlinedIcon  />
          </InputAdornment>
        ),
        endAdornment:(
          <InputAdornment position='end'>
            <IconButton
                        type="button"

            onClick={()=>{
              setShowPassword(!showPassword)
            }
          }
          edge="end"
              >
                 {showPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
              </IconButton>
          </InputAdornment>
        )
      },
    }}

    margin="none"
    {...register("newPassword")}
    error={!!errors.newPassword}
    helperText={errors.newPassword?.newPassword}
    sx={{
    
"& .MuiFilledInput-input": { py: 2 } }}
  />
</Box>
        <Box>
  <Typography
    component="label"
    htmlFor="Confirmpassword"
    variant="body2"
    sx={{ display: "block", mb: 0.5, fontWeight: 500 }}
  >
Confirm Password
  </Typography>

  <TextField
    type={showConfirmPassword ? "text" : "password"}
    id="confirmPassword"
       slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start" sx={{my:2}}>
            <LockOutlinedIcon  />
          </InputAdornment>
        ),
        endAdornment:(
          <InputAdornment position='end'>
            <IconButton
            type="button"
            onClick={()=>{
              setShowConfirmPassword(!showConfirmPassword)
            }
          }
          edge="end"
              >
                 {showConfirmPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
              </IconButton>
          </InputAdornment>
        )
      },
    }}

    margin="none"
    {...register("confirmPassword")}
    error={!!errors.confirmPassword}
    helperText={errors.confirmPassword?.message}
 
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
            {isSubmitting?"loading...":<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:"8px",py:1
            }}>
              <Typography sx={{fontSize:"16px"}}>Reset Password</Typography>
                        <CheckCircleRoundedIcon sx={{fontSize:'16px'}}/>

              </Box>}
          </Button>
        </Box>
       
        
        <Box sx={{color:'primary.main',py:2}} >
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
