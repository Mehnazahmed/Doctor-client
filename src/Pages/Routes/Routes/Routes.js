import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Appointment/Appointment/Appointment";
import AddADoctor from "../../DashBoard/AddADoctor/AddADoctor";
import AllUsers from "../../DashBoard/AllUsers/AllUsers";
import ManageDoctors from "../../DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../DashBoard/MyAppointment/MyAppointment";
import Payment from "../../DashBoard/Payment/Payment";
import Home from "../../Home/Home/Home";
import DashBoardLayout from "../../LayOut/DashBoardLayout";
import Main from "../../LayOut/Main";
import Login from "../../Login/Login";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<DisplayError></DisplayError>,
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
   errorElement: <DisplayError></DisplayError>,
   children: [
    {
      path:'/dashboard',
      element:<MyAppointment></MyAppointment>
    },
    {
      path:'/dashboard/allusers',
      element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    },
    {
      path:'/dashboard/addadoctor',
      element:<AdminRoute><AddADoctor></AddADoctor></AdminRoute>
    },
    {
      path:'/dashboard/managedoctors',
      element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
    },
    
    {
      path:'/dashboard/payment/:id',
      element:<AdminRoute><Payment></Payment></AdminRoute>,
      loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
    }
    
   ]


},
]);
export default router;
