import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Appointment/Appointment/Appointment";
import AllUsers from "../../DashBoard/AllUsers/AllUsers";
import MyAppointment from "../../DashBoard/MyAppointment/MyAppointment";
import Home from "../../Home/Home/Home";
import DashBoardLayout from "../../LayOut/DashBoardLayout";
import Main from "../../LayOut/Main";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  { path: "/dashboard",
   element: <PrivateRoute><DashBoardLayout></DashBoardLayout> </PrivateRoute>,
   children: [
    {
      path:'/dashboard',
      element:<MyAppointment></MyAppointment>
    },
    {
      path:'/dashboard/allusers',
      element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    }
   ]


},
]);
export default router;
