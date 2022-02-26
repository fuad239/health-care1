import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import useAuth from '../../../hooks/useAuth'
import Home from '../../Home/Home/Home';
const Register = () => {
    const { user, handleEmailChange, handlePasswordChange, handleRegistration, errorMessage } = useAuth()
    return (
        // --------------Registration------------
        <div className='login-style'>
            {
                user.email ? <div>
                    <Home></Home>
                </div>
                    :
                    <div className='w-70 mx-5 my-3 ' >
                        <h5>Register</h5>

                        <form className="form-design" onSubmit={handleRegistration} >
                            <div className="mb-3 w-80">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onBlur={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <p className='text text-danger'>{errorMessage}</p>
                            <button type="submit" className="btn btn-primary m-2">Register</button>
                            <br />
                            <Link to='/login'>Already have an Account?</Link>
                        </form>
                    </div>
            }
        </div>
    );
};

export default Register;