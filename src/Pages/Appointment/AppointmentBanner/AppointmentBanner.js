import React from "react";
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  return (
    <header
    className="my-6"
    style={{
        background:`url(${bg})`
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="mr-6">
           <DayPicker 
           mode="single"
           selected={selectedDate}
           onSelect={setSelectedDate}

           />;
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
