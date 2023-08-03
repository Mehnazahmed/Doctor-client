import React from "react";
import { useForm } from "react-hook-form";

const AddADoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };
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
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select a specialty
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
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

export default AddADoctor;
