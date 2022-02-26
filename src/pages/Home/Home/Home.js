import React from 'react';
import Doctor from '../../Shared/Doctors/Doctor';
import Doctors from '../../Shared/Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Labratory from '../Labratory/Labratory';
import PatientAndDoc from '../PatientAndDoc/PatientAndDoc';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PatientAndDoc></PatientAndDoc>
            <Labratory></Labratory>

            <Doctors></Doctors>


        </div>
    );
};

export default Home;