import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
const Services = () => {
    return (
        <div className='service' id='services'>

            <div className="service-container">





                <div className="service-card">
                    <h3 className="title">ICU</h3>
                    <div className="bar">
                        <div className="emptybar">
                            <img className='service-img' src="https://i.ibb.co/6w5YXNz/surgeons-adjusting-oxygen-mask-patient-mouth-operation-theater-107420-64870.jpg" alt="" />
                            <Link to='/icu'><button className='btn btn-danger mt-2'>Emergency</button></Link>
                        </div>
                        <div className="filledbar"></div>
                    </div>


                </div>
                <div className="service-card">
                    <h3 className="title">Doctors</h3>
                    <div className="bar">
                        <div className="emptybar">
                            <img className='service-img' src="https://i.ibb.co/rm4HZJF/Successful-medical-team.jpg" alt="" />
                            <Link to='/appointment'><button className='btn btn-warning mt-2'>Appoinment</button></Link>
                        </div>
                        <div className="filledbar"></div>
                    </div>


                </div>
                <div className="service-card">
                    <h3 className="title">Medicines</h3>
                    <div className="bar">
                        <div className="emptybar">
                            <img className='service-img' src="https://i.ibb.co/CPYqRh8/packings-of-pills-and-capsules-of-medicines-on-white-background.jpg" alt="" />
                            <Link to='/medicine'><button className='btn btn-danger mt-2'>Take medicine</button></Link>
                        </div>
                        <div className="filledbar"></div>
                    </div>

                </div>
                <div className="service-card">
                    <h3 className="title">Covid-19</h3>
                    <div className="bar">
                        <div className="emptybar">
                            <img className='service-img' src="https://i.ibb.co/dpCJtd5/covid19-coronavirus-red-virus-cell-spread-background-concept-1017-24697.jpg" alt="" />
                            <Link to='/covid'><button className='btn btn-success mt-2'>Covid test</button></Link>
                        </div>
                        <div className="filledbar"></div>
                    </div>

                </div>
                <div className="service-card">
                    <h3 className="title">Checkup</h3>
                    <div className="bar">
                        <div className="emptybar">

                            <img className='service-img' src=" https://i.ibb.co/0jKQftV/group-medical-staff-carrying-health-related-icons-53876-43071.jpg" alt="" />
                            <Link to='/checkup'><button className='btn btn-warning mt-2'>Checkup</button></Link>
                        </div>
                        <div className="filledbar"></div>
                    </div>

                </div>
                <div className="service-card">
                    <h3 className="title">Ambulance</h3>
                    <div className="bar">
                        <div className="emptybar">

                            <img className='service-img' src="https://i.ibb.co/d6ckm2Q/emergency-ambulance-concept-23-2148543899.jpg" alt="" />
                            <Link to='/ambulance'><button className='btn btn-success mt-2'>Call us</button></Link>
                        </div>
                        <div className="filledbar"></div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Services;