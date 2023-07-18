import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] =useState('');
  const { signIn } = useContext(AuthContext);
  const handleLogin = (data) => {
    console.log(data);
    setLoginError('')
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast('Logged In Successfully')
        console.log(user);
      })
      .catch((error) => {
        setLoginError(error.message)
        console.log(error.message)
      });
  };
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl  text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Paasword</span>
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 charaters or more",
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text-alt">Forget Password?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full mt-3"
            value="Log In"
            type="submit"
          />
          <p className="text-sm text-center mt-2">
            {" "}
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-primary">
              Create New Account
            </Link>
          </p>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
