import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_App_STRIPE_PK);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  //useNavigation is used when using loader
  const navigation = useNavigation();
if( navigation.state === "loading"){
  return <Loading></Loading>
}

  return (
    <div className="ms-5">
      <h3 className="text-3xl">Payment for {booking.treatment}</h3>
      <p>
        Please pay <strong>${booking.price}</strong> for your appointment on{" "}
        {booking.appointmentDate} at {booking.slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
          booking={booking}

          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
