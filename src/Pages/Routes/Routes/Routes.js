import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Appointment/Appointment/Appointment";
import Home from "../../Home/Home/Home";
import Main from "../../LayOut/Main";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";


const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
]);
export default router;