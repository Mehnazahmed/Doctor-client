import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCard from "./ReviewCard/ReviewCard";

const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name:'Winson Herry',
      address:'California',
      img:people1
    },
    {
      id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name:'Winson Herry',
      address:'California',
      img:people2
    },
    {
      id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name:'Winson Herry',
      address:'California',
      img:people3
    },
  ];
  return (
    <section className="mx-5 my-16">
      <div className="flex justify-between ">
        <div>
          <h3 className="text-sm font-bold text-cyan-400		">Testimonial</h3>
          <h1 className="text-3xl	">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-48 " src={quote} alt="" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            reviewData.map((reviews)=>(<ReviewCard
            key={reviews.id}
            reviews={reviews}
            ></ReviewCard>))
        }
      </div>
    </section>
  );
};

export default Testimonial;
