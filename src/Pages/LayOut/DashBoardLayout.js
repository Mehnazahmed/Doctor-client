import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import Navbar from "../Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  const{user}=useContext(AuthContext);
   const [isAdmin]=useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
           
             {
               isAdmin &&<>
              <li> <Link to="/dashboard/allusers">All Users</Link></li>
              <li> <Link to='/dashboard/addadoctor'>Add a Doctor</Link></li>
              <li> <Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
               </>
             }
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
