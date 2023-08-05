import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken/useToken';

const SignUp = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {createUser,updateUser, googleSignIn}=useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail,setCreatedUserEmail] = useState('');
    const [token]=useToken(createdUserEmail);

    const navigate = useNavigate();
  

  

  if(token){
     navigate('/');
  }
  
    const handleSignUp =(data)=>{
       console.log(data)
       setSignUpError('');
      createUser(data.email, data.password)
      .then(result=>{
        const user = result.user;
        console.log(user)
        toast('user created successfully')
        const userInfo={
          displayName: data.name
        }
        updateUser(userInfo)
        .then(()=>{
          saveUser(data.name,data.email)
          // navigate('/')
        })
        .catch(err=>console.log(err))
        
      })
      .catch(error=>{
        console.log(error.message)
        setSignUpError(error.message)
      
      })
    }
    //send user info to server
    const saveUser =(name,email)=>{
      const userInfo = {name,email};
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      .then(res=>res.json())
      .then(data=>{
          setCreatedUserEmail(email)
        // getUserTaken(email);
        
      })

    }

    //get user token from server

    // const getUserTaken = email =>{
    //   fetch(`http://localhost:5000/jwt?email=${email}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //     //set the access token to the local storage
    //     if(data.accessToken){
    //       localStorage.setItem('accessToken',data.accessToken);
    //     }
    //   })
    // }

    const handleGoogleSignIn =()=>{
      googleSignIn()
      .then(()=>{})
      .catch(err=>console.log(err))
  
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
            <div>{
                 signUpError && <p className='text-red-600'>{signUpError}</p>
              }</div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full ">CONTINUE WITH GOOGLE</button>
  
        </div>
      </div>
    );
};

export default SignUp;