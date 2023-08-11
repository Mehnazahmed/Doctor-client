import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const AllUsers = () => {
  const { data: users = [] ,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://y-ten-iota.vercel.app/users");
      const data = await res.json();
      // const count = data.length;
      // console.log(count)
      return data;
    },
  });

  const handleMakeAdmin = id=>{
    fetch(`https://y-ten-iota.vercel.app/users/admin/${id}`,{
        method: 'PUT',
        //send accessToken from localstorage to server as headers
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
        
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          toast.success('admin created successfully');
          refetch();
        }
    })
  };
  return (
    <div>
      <h3 className="text-lg font-semibold ms-3">All Users: {users.length}</h3>
     
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr className="hover" key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !=='admin'&&<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                <td><button className="btn btn-xs btn-accent">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
