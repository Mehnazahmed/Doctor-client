import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Banner = () => {
  return (
    <section
    style={{
      background:`url(${bg})`
    }}
    >
      <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>get started</PrimaryButton>
        </div>
      </div>
    </div>
    </section>

  );
};

export default Banner;