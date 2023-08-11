import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `https://y-ten-iota.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        //send accessToken from localstorage to server as headers
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });

  return (
    <div>
      <h3 className="text-lg font-semibold ms-3 ">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr className="hover" key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patientName}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
