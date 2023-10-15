import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LOgin/Login";
import Error from "../../Erroe/Error";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "../../AuthProvider/PrivateRoute";

const router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/Data.json')
            },
            {
               path:"/about",
               element:<Category></Category> 
            },
            {
                path:"/category",
                element:<About></About>
            },
            {
                path:"/Details/:id",
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader:()=>fetch('/Data.json')
            },
            {
                path:"/SignUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/Blog",
                element:<PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>
            }

        ]
    }
])
export default router;

