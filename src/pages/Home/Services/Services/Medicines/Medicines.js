import React from 'react';
import { Link } from 'react-router-dom';

const Medicines = () => {
    return (
        <div>
            <div className="Info-card text-center ">
                <div className="card-header">
                    Welcome to Health Care
                </div>
                <div className="card-body">
                    <img src='https://i.ibb.co/h9Q81BW/high-angle-pill-foils-plastic-containers.jpg' style={{ borderRadius: '10px', height: '400px' }} className='mb-1' alt="" />
                    <h5 className="card-title">  Medikit shopping center is coming soon</h5>
                    <p className="card-text">Here are many medicines to give medicine service to you.If you want to buy you can buy from online.</p>

                </div>
                <div className="card-footer text-muted">
                    <Link to='/home'>
                        <button className='btn btn-primary'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Medicines;