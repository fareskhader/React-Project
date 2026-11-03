import * as yup from 'yup'

export const registerSchema=yup.object({
    fullName:yup.string().required("Full Name Is Required")
    .min(3,"full name must be at least 3 charecter"),
    userName:yup.string().required("user name is required")
    .min(3,"user name must be at least 3 charecter"),
    email:yup.string().required("email is required").email('Invalid Email Format'),
    password:yup.string().required("password is required").min(6,"password must be at least 6 char")
    .matches(/[A-Z]/,'password must contain an uppercase letter')
    .matches(/[a-z]/,'password must contain an lowercase letter')
    .matches(/[0-9]/,'password must contain a number'),
    phoneNumber:yup.string().required("phone number Is Required")
    .matches(/^05\d{8}$/,"phone number must start with 05 and be 10 digits")
})

export const loginschema=yup.object({
    email:yup.string().required("email is required").email('Invalid Email Format'),
    password:yup.string().required("password is required").min(6,"password must be at least 6 char")
    .matches(/[A-Z]/,'password must contain an uppercase letter')
    .matches(/[a-z]/,'password must contain an lowercase letter')
    .matches(/[0-9]/,'password must contain a number'),
   
})

export const ResetPasswordschema=yup.object({
    email:yup.string().required("email is required").email('Invalid Email Format'),
 
   
})

export const setNewPasswordSchema = yup.object({
  code: yup
    .string()
    .required("Verification code is required")
    .matches(/^[0-9]{4}$/, "Code must be exactly 4 digits"),

  newPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number"),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf(
      [yup.ref("newPassword")],
      "Passwords do not match"
    ),
});
