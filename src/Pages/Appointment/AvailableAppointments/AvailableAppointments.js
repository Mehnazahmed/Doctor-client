import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ServiceModal from "../ServiceModal/ServiceModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  
  const date = format(selectedDate,"PP")
  const [treatment, setTreatment] = useState(null);
//  use an empty array[] to avoid isloading
  const {data:appointmentOptions=[],refetch,isLoading}= useQuery({
    queryKey:['appointmentOptions',date],
    queryFn:async()=>{
      const res =await fetch(`https://y-ten-iota.vercel.app/appointmentOptions?date=${date}`)
      const data= await res.json();
      return data;
    }

  });

  if(isLoading){
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch("https://y-ten-iota.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="my-16">
      <p className="text-lg font-bold text-cyan-400  text-center	">
        Available Services on {format(selectedDate, "PP")}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <ServiceModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></ServiceModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
