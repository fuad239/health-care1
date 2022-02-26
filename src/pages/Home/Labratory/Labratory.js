import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Labratory.css'
const Labratory = () => {
    return (
        <div>
            <div className='labs'>
                <div className='lab-img'>
                    <img src="https://i.ibb.co/BBVNC7W/medical-5459650-1280.png" alt="" />
                </div>
                <div className='info' id='lab-info'>
                    <h3><i>Best Laboratory</i></h3>
                    <h3>Tests Available</h3>
                    <p>We provide best test services</p>
                    <ul>
                        <li><i>Haematological Exam</i></li>
                        <li><i> Biochemical Exam</i></li>
                        <li><i>Elisa Method Hepatitis (Panel)</i></li>
                        <li><i> HIV TEST</i></li>
                        <li><i>Hormone Test</i></li>
                        <li><i> Immunology / Serology</i></li>


                        <Nav.Link as={HashLink} to='/home#services' ><button className='btn btn-success mt-3'>Need Service</button></Nav.Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Labratory;