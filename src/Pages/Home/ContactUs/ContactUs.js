import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section 
        className='grid justify-items-center '
        style={{
            background:`url(${appointment})`
          }}
        >
            <div className='p-10'>
            <h5 className='text-sm font-bold text-primary text-center '>Contact Us</h5>
            <h2 className='text-3xl text-white'>Stay connected with us</h2>
            
            <div className='mt-5'>
            <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
            </div>
            
            <div className='mt-5'>
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='mt-5'>
            <input type="text" placeholder="your message" className="input input-bordered w-full h-28" />
            </div>
            <div className='grid justify-center'>
            <button className="btn btn-info mt-5">Submit</button>
            </div>
            </div>
            
            
        </section>
    );
};

export default ContactUs;