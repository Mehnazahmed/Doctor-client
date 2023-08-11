import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const ServiceModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots,price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    // [3,4,5].map((value,i)=>console.log(value))

    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
      price
    };
    //send data to server from client side

    fetch("https://y-ten-iota.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        }
        else{
          toast.error(data.message)
        }
      });

    console.log(booking);
  };

  return (
    <div>
      <input type="checkbox" id="open_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full mt-4 "
            />
            <select name="slot" className="select select-bordered w-full mt-4">
              {slots?.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              type="Name"
              disabled
              placeholder="Your Name"
              className="input input-bordered w-full mt-4 "
            />

            <input
              name="email"
              type="Email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full mt-4 "
            />
            <input
              name="phone"
              type="Phone"
              placeholder="Phone"
              className="input input-bordered w-full mt-4 "
            />

            <input
              type="submit"
              placeholder="Type here"
              className="input input-bordered w-full mt-4 btn-accent "
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor="open_modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
