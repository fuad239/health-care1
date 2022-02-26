import React from 'react';
import './Ambulance.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const Ambulance = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className='ambulance-service'>
                <div>
                    <img src="https://i.ibb.co/d6ckm2Q/emergency-ambulance-concept-23-2148543899.jpg" alt="" />

                </div>
                <div className='w-90 mx-5 my-3 ' >
                    <form className="ambulance-form" >
                        <h4 className='text-danger mb-0'>Ambulance data</h4>
                        <hr className='mt-0' />
                        <div className="mb-3 ">
                            <label for="exampleInputEmail1" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="Name" aria-describedby="name" defaultValue={user.displayName} placeholder='input your name' />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='input your email' defaultValue={user.email} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label" >Contact Number</label>
                            <input type="text" className="form-control" defaultValue={'01'} />
                        </div>

                        <Link to='/quickcall'>
                            <button type="submit" className="btn btn-danger m-2" >Quick Ambulance</button>
                        </Link>
                        <br />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ambulance;