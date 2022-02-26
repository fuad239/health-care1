import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NeedAppointment = () => {
    const serial = Math.floor((Math.random() * 10) + 1);
    return (
        <div className='mx-3'>
            <h3>Your Serial Number is {serial}</h3>
            <div className='mt-2'>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
            </div>
            <img className='w-100' src="https://i.ibb.co/H4znqnS/2565760.jpg" className='my-2' style={{ height: '600px' }} alt="" />

            <Link to='/home' style={{ display: 'inline' }}>
                <button className='btn btn-primary mx-5'>Visit Home</button>
            </Link>

        </div>
    );
};

export default NeedAppointment;