import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const closeModal = () => {
    setDeleteDoctor(null);
  };
  
  const { data: doctors = [], isLoading ,refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://y-ten-iota.vercel.app/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  //delete doctor
  const handleDeleteDoctor = (doctor) => {
    fetch(`https://y-ten-iota.vercel.app/doctors/${doctor._id}`,{
        method:'DELETE',
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`)
        }
      })
    
    console.log(doctor);
  };

  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-lg font-semibold ms-3 ">
        Manage Doctors: {doctors?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr className="hover" key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={doctor.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <a
                    onClick={() => setDeleteDoctor(doctor)}
                    href="#deletemodal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal for generic purpose */}
      
      {deleteDoctor && (
        <ConfirmationModal
          title={"Are you sure you want to delete?"}
          message={`If you delete ${deleteDoctor.name}, you can not undo`}
          successAction={handleDeleteDoctor}
          actionButton='delete'
          modalData={deleteDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
