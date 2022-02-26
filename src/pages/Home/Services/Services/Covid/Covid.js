import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const Covid = () => {
    const { user } = useAuth()

    return (
        <div>
            <div className='Covid Service' style={{ display: 'flex' }}>
                <div>
                    <img style={{ borderRadius: '10px' }} className='my-1 ms-1' src="https://i.ibb.co/dpCJtd5/covid19-coronavirus-red-virus-cell-spread-background-concept-1017-24697.jpg" alt="" />

                </div>

                <div className='w-90 mx-5 my-3 ' >
                    <form className="ambulance-form" >
                        <h4 className='text-danger mb-0'>Patient data</h4>
                        <hr className='mt-0' />
                        <div className="mb-3 ">
                            <label for="exampleInputEmail1" className="form-label">Patient Name</label>
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

                        <Link to='/vaccine'>
                            <button type="submit" className="btn btn-danger m-2" >Vaccine</button>
                        </Link>
                        <br />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Covid;