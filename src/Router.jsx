import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./assets/pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
            index:true,
            element:<Home/>
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
        ]
    }
])

export default router