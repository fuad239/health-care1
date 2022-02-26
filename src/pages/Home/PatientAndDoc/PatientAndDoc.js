import React from 'react';
import './PatientAndDoc.css'
const PatientAndDoc = () => {
    return (
        <div>
            <div className='pateintAndDoc'>
                <div className='info'>
                    <p className='mb-0'><i>Finest Patient</i></p>
                    <h3 >Care & Amenities</h3>
                    <ul>
                        <li><i>Information</i></li>

                        <li><i>Report Delivery</i></li>

                        <li><i>Customer Care</i></li>

                        <li><i>Cash Counter</i></li>

                        <li><i>Pharmacy / Medicine</i></li>

                        <li><i>Billing</i></li>
                        <li><i>Admission Counseling</i></li>
                        <li><i>Customer Service</i></li>


                    </ul>
                </div>
                <div className='serveImage'>
                    <img src="https://i.ibb.co/BKf38FL/Finest-Patient-Care-Amenities-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PatientAndDoc;