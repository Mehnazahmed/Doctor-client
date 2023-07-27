import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card  shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-lg font-bold text-cyan-400 text-center">{name}</h2>
        <p >
          {slots.length > 0 ? slots[0] : "try another day "}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>

        <div className="card-actions justify-center">
          {/* <button
            className="btn btn-primary text-white"
            onClick={() => {
              window.open_modal.showModal();
              setTreatment(appointmentOption);
            }}
          >
            Book Appointment
          </button> */}

          <label onClick={()=>setTreatment(appointmentOption)} htmlFor="open_modal" className="btn btn-primary text-white">
          Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
