import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
    const {logOut}=useContext(AuthContext);
  const error = useRouteError();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
    toast.success("successfully signed out");
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>
      <p><i>{error.statusText || error.message}</i></p>

      <h4>
        Please <button className="btn" onClick={handleLogOut}>Sign out</button> & Sign back in!!
      </h4>
    </div>
  );
};

export default DisplayError;
