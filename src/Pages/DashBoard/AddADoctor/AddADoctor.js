import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';

const AddADoctor = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const navigate =useNavigate();

  const imageHostKey =process.env.REACT_App_imgbb_key;
  // console.log(imageHostKey)

  const {data: specialties=[],isLoading}= useQuery({
    queryKey:['specialty'],
    queryFn: async ()=>{
      const res = await fetch('https://y-ten-iota.vercel.app/doctorsspecialty')
      const data =res.json();
      return data;
    }
  })

  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url,{
      method: "POST",
      body: formData
    })
    .then(res=>res.json())
    .then(imgdata=>{
     if(imgdata.success){
      console.log(imgdata.data.url);
      const doctor ={
        name: data.name,
        email: data.email,
        specialty:data.specialty,
        image:imgdata.data.url
      }
      fetch('https://y-ten-iota.vercel.app/doctors',{
        method:'POST',
        headers:{
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem('accessToken')}`

        },
        body: JSON.stringify(doctor)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result.acknowledged){
          toast.success(`${data.name} is added successfully`);
          navigate('/dashboard/managedoctors')
        }
        else{
          toast.error(result.message)
        }
      })
     }
    })
  };
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h3 className="text-lg font-semibold ms-3 ">Add A New Doctor</h3>
      <div className="h-[600px]">
        <div className="w-96 p-7">
          <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>
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
                <span className="label-text">Specialty</span>
              </label>
              <select 
              {...register("specialty")}
              className="select input-bordered w-full max-w-xs">
                <option disabled selected>
                  Select a specialty
                </option>
                {
                  specialties.map(specialty=><option
                  key={specialty._id}
                  >{specialty.name}</option>)
                }
                
                
              </select>
              <div className="form-control w-full mt-4">
              
              <input
                {...register("image", { required: "Photo is required" })}
                type="file"
                placeholder="img"
                className="input input-bordered w-full "
              />
              {errors.img && (
                <p className="text-red-600">{errors.img?.message}</p>
              )}
            </div>
            </div>

            <input
              className="btn btn-accent w-full mt-3"
              value="Add"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * Three places to store images
 * 1.image hosting server
 * 2. file system of your server
 * 3.mongo(database)
 */

export default AddADoctor;
