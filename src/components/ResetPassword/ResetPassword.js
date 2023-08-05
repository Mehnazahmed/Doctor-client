import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
// import app from "../../firebase/firebase.config";

const ResetPassword = () => {
    const {resetPassword}=useContext(AuthContext)
   
    const [email,setEmail] =useState('');
//     const auth = getAuth(app);

//     const handleResetPassword = () => {
//         sendPasswordResetEmail(auth, email)
//   .then(() => {
//     toast('Password reset email sent!')
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//       };

const handleResetPassword =()=>{
    resetPassword(email)
    .then(()=>{
        toast('Password reset email sent!') 
    })
    .catch(err=>console.log(err))
}
  return (
    <div>
      <input type="checkbox" id="resetPass" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <label className="label">
              <span className="label-text">Reset Your Password</span>
            </label>
          
           
            <input
              onBlur={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="form-control  input input-bordered w-full "
            />
         

          <div className="modal-action">
            
            <label onClick={handleResetPassword} htmlFor="resetPass" className="btn">Update</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
