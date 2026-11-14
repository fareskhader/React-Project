import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./assets/pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";
import ResetPassword from "./assets/pages/resetPassword/ResetPassword";
import SetNewPassword from "./assets/pages/setNewpassword/SetNewPassword";
import ProductDetails from "./assets/pages/productDetails/ProductDetails"
import Cart from "./assets/pages/cart/Cart";
const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
            index:true,
            element:
                <Home/>
            
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails/>
            },
             {
                path:'/cart',
                element:<Cart/>
            },
    ]
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
               {
                path:'/Register',
                element:<Register/>
            },
            {
                path:'/resetPassword',
                element:<ResetPassword/>
            },
            {
                path:'/setNewPassword',
                element:<SetNewPassword/>
            },

        ]
    }
])

export default router