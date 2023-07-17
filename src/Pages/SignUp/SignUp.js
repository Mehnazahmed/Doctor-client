import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {createUser}=useContext(AuthContext);
  
    const handleSignUp =(data)=>{
       console.log(data)
      createUser(data.email, data.password)
      .then(result=>{
        const user = result.user;
        console.log(user)
      })
      .catch(error=>console.log(error))
    }
    return (
        <div className="h-[600px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-xl  text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name",{required:"Name is required"})}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
                />
                {errors.name && <p className="text-red-600" >{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email",{required:"Email is required"})}
                type="email"
                placeholder="Email"
                className="input input-bordered w-full "
                />
                {errors.email && <p className="text-red-600" >{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Paasword</span>
              </label>
              <input
                {...register("password",{
                  required:"password is required",
                  minLength:{value:6, message:"password must be 6 charaters or more"},
                  pattern:{value:/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/, message:"password must be strong"}
  
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full "
              />
              {errors.password && <p className="text-red-600" >{errors.password?.message}</p>}
              <label className="label">
                <span className="label-text-alt">Forget Password?</span>
                
              </label>
            </div>
  
            <input className="btn btn-accent w-full mt-3" value="Sign In" type="submit" />
            <p className="text-sm text-center mt-2"> Already Registered? <Link to='/login' className="text-primary">Log In</Link></p>
          </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full ">CONTINUE WITH GOOGLE</button>
  
        </div>
      </div>
    );
};

export default SignUp;