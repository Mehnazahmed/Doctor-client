import React from "react";

const ReviewCard = ({ reviews }) => {
  const { name, review, address, img } = reviews;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-8">
          <div className="avatar mr-4">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img  src={img} />
            </div>
          </div>
          <div>
            <h5 className="font-semibold	">{name}</h5>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
