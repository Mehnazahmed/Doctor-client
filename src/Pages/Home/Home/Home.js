import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExceptionBanner from '../ExceptionBanner/ExceptionBanner';
import Infocards from '../Infocards/Infocards';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5   '>

            <Banner></Banner>
            <Infocards></Infocards>
            <ServiceCards></ServiceCards>
            <ExceptionBanner></ExceptionBanner>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>


        </div>
    );
};

export default Home;