import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-secondary p-3' >
            <div style={{ display: 'flex' }}>
                <div className='text text-start text-white mt-3 ms-2'>
                    <p>Health Care</p>
                    <p>Central office in Dhaka</p>
                    <p>Visit our clinic</p>
                    <p>contact us: 01533385306</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/th2DKm1/Mobile-Payments-1.png" style={{ height: '150px', marginLeft: '45rem', borderRadius: '5px' }} alt="" />
                </div>
            </div>
            <p>Copyright© All Rights reserved health care</p>
        </div>
    );
};

export default Footer;