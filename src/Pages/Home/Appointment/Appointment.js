import React from "react";
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Appointment = () => {
  return (
    <section className="mt-32 lg:h-[488px]"
      style={{
        background:`url(${appointment})`
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden md:block lg:w-1/2 rounded-lg -mt-32 h-[600px]"
            
          />
          <div className="">
            <h4 className="text-sm font-bold text-cyan-400	">Appointment</h4>
            <h1 className="text-3xl font-bold text-white	">Make an appointment Today</h1>
            <p className=" text-white py-6	">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
