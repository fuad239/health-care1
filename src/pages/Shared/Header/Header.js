import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='pb-0 pt-0 '>
            <Navbar bg="dark" sticky="top" variant="dark" expand='sm'>
                <Container>
                    <Navbar.Brand href="#home" >

                        <div className='navbar p-0'>
                            <div className='mb-0' style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }} >
                                <img
                                    alt=""
                                    src="https://i.ibb.co/0BW4Tv1/stethoscope-icon-2316460-1280.png"
                                    width="40"
                                    height="40"

                                    className="d-inline-block align-top"
                                />{' '}
                                <span style={{ fontWeight: 'bold' }} className='pb-0 '>Health Care</span>
                            </div>
                            <div className='header-nav'>
                                <Nav className="" >
                                    <Nav.Link as={NavHashLink} to="/home">Home</Nav.Link>
                                    <Nav.Link as={NavHashLink} to="/home#services">Services</Nav.Link>
                                    <Nav.Link as={NavHashLink} to="/home#doctors">Doctors</Nav.Link>
                                    {user.email &&
                                        <div className='text-warning mx-1'>{' '}Log in as {user.email} </div>}
                                    {
                                        user.email ?

                                            <button onClick={logOut} className='btn btn-danger'>Log out</button>


                                            :
                                            <div style={{ display: 'flex' }}>
                                                <Nav.Link as={NavHashLink} to="/login">Login</Nav.Link>
                                                <Nav.Link as={NavHashLink} to="/signup">Register</Nav.Link>
                                            </div>


                                    }

                                </Nav>

                            </div>

                        </div>


                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;