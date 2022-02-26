import React from 'react';
import { Link } from 'react-router-dom';

const Checkup = () => {
    return (
        <div>

            <div className="Info-card text-center ">
                <div className="card-header">
                    Welcome to Health Care
                </div>
                <div className="card-body">
                    <img src='https://i.ibb.co/9rz36qb/mr-bean-thumbs-up.gif' style={{ borderRadius: '10px', height: '400px' }} className='mb-1' alt="" />
                    <h5 className="card-title"> Doctor is coming wait please.</h5>
                    <p className="card-text">Here are many MBBS doctors to give best medicine service to you.If you have any health problem ask for appointment.</p>

                </div>
                <div className="card-footer text-muted">
                    <Link to='/appointment'>
                        <button className='btn btn-primary'>Need Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkup;